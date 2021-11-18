import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-projet-preselectionner',
  templateUrl: './projet-preselectionner.component.html',
  styleUrls: ['./projet-preselectionner.component.css']
})
export class ProjetPreselectionnerComponent implements OnInit {

  adminData: any;
  projetList: any[] = [];

  projetObject: any;

  oneProjet: any;

  noteCoach1: any;
  noteCoach2: any;

  object: any = {
    "nom_thematique": "",
    "edition": {
      "nom_edition": ""
    }
  }

  coash1: any = {
    "prenom": "",
    "nom": "",
    "genre": "",
    "email": "",
    "specialite": "",
    "note": 0
  };

  coash2: any = {
    "prenom": "",
    "nom": "",
    "genre": "",
    "email": "",
    "specialite": "",
    "note": 0
  };

  evalusationObject: any = {
    "coachs": [],
    "edition": {
      "nom_edition": ""
    },
    "nbr_vote": 0,
    "nom_equipe": "",
    "nom_thematique": ""
  };


  constructor(private networkingService: NetworkingService, private router: Router) {
    this.adminData = this.networkingService.getData("CURRENT_ADMIN");
  }

  ngOnInit(): void {
    this.networkingService.get("projets/list_peselectionner/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data: any) => {
      this.projetList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  selectionner(oneProjet: any) {
    this.oneProjet = oneProjet;
    console.log("PROJET SELECTIONNÉ : " + JSON.stringify(this.oneProjet))
  }

  savePreselection() {

    console.log("------>>>>>>> projets/preselectionner/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition + "/" + this.oneProjet.titre);

    this.evalusationObject.coachs.push(this.coash1);
    this.evalusationObject.coachs.push(this.coash2);

    this.evalusationObject.edition.nom_edition = this.adminData.nom_edition;
    this.evalusationObject.nom_equipe = this.oneProjet.equipe.nom_equipe;
    this.evalusationObject.nom_thematique = this.oneProjet.nom_thematique;

    console.log("EVALUSATION : " + JSON.stringify(this.evalusationObject));
    this.networkingService.update("projets/preselectionner/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition + "/" + this.oneProjet.titre, JSON.stringify(this.evalusationObject)).subscribe((data) => {
      alert("Projet préselectionné avec succès !!!");
    });
  }

  saveNote() {
    console.log("NOTES 1 : " + this.noteCoach1);
    console.log("NOTES 2 : " + this.noteCoach2);

    if (this.noteCoach1 > 20 || this.noteCoach1 < 1 || this.noteCoach2 > 20 || this.noteCoach2 < 1) {

      alert("Les notes doivent être comprises entre 1 et 20.");
    } else {
      this.networkingService.updateNoParam("projets/noter/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition + "/" + this.oneProjet.equipe.nom_equipe + "/" + this.noteCoach1 + "/" + this.noteCoach2).subscribe((data) => {
        alert("Notes bien enregistrées !!!");
      })
    }
  }


}

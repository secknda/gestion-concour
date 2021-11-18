import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})

export class ProjetsComponent implements OnInit {

  adminData: any;
  projetList: any[] = [];

  projetObject: any;

  oneProjet: any;

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
    this.networkingService.get("projets/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data: any) => {
      this.projetList = data;
      console.log("DATA : " + JSON.stringify(data));
      this.router.navigate(['/projet']);
    });
  }

  preselectionne(oneProjet: any) {
    this.oneProjet = oneProjet;
    console.log("PROJET A MODIFIER : " + JSON.stringify(this.oneProjet))
  }

  savePreselection() {

    console.log("------>>>>>>> projets/preselectionner/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition + "/" + this.oneProjet.projets.titre);

    this.evalusationObject.coachs.push(this.coash1);
    this.evalusationObject.coachs.push(this.coash2);

    this.evalusationObject.edition.nom_edition = this.adminData.nom_edition;
    this.evalusationObject.nom_equipe = this.oneProjet.projets.equipe.nom_equipe;
    this.evalusationObject.nom_thematique = this.oneProjet.projets.thematique.nom_thematique;

    console.log("EVALUSATION : " + JSON.stringify(this.evalusationObject));
    this.networkingService.update("projets/preselectionner/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition + "/" + this.oneProjet.projets.titre, JSON.stringify(this.evalusationObject)).subscribe((data) => {
      alert("Projet préselectionné avec succès !!!");
    });
  }


}

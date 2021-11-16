import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouterProjetComponent implements OnInit {

  adminData: any;

  projet: any = {
    "titre": "",
    "description": "",
    "ise": "",
    "objectif": "",
    "status": false,
    "equipe": {
      "nom_equipe": "",
      "email_equipe": ""
    },
    "thematique": {
      "nom_thematique": ""
    },
    "edition": {
      "nom_edition": ""
    }
  }

  onePaticipant: any = {
    "prenom": "",
    "nom": "",
    "genre": "",
    "niveau": "",
    "etablissement": "",
    "profile": "",
    "email_participant": "",
    "equipe": {
      "nom_equipe": "",
    },
    "edition": {
      "nom_edition": ""
    }
  };

  participants: any[] = [];

  thematiqueList: any[] = [];

  constructor(private networkingService: NetworkingService) {
    this.adminData = this.networkingService.getData("CURRENT_ADMIN");
    this.networkingService.get("thematiques/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data) => {
      this.thematiqueList = data;
    });
  }

  ngOnInit(): void {
  }

  addOnParticipantList() {
    this.participants.push(this.onePaticipant);
    this.onePaticipant = {
      "prenom": "",
      "nom": "",
      "genre": "",
      "niveau": "",
      "etablissement": "",
      "profile": "",
      "email_participant": "",
      "equipe": {
        "nom_equipe": "",
      },
      "edition": {
        "nom_edition": ""
      }
    };
  }

  deleteONList(index: any) {

    this.participants.splice(index);
  }

  saveInDatabase() {
    this.projet.edition.nom_edition = this.adminData.nom_edition;
    console.log("======= PROJET : " + JSON.stringify(this.projet));
    this.networkingService.add("projets/add/" + this.adminData.alias_concours, this.projet).subscribe((data) => {
      console.log("RETOURE = ");
      // Save in participant
      this.participants.forEach(participant_ => {
        participant_.equipe.nom_equipe = this.projet.equipe.nom_equipe;
        participant_.edition.nom_edition = this.adminData.nom_edition;

        this.networkingService.add("participants/add/" + this.adminData.alias_concours, participant_).subscribe((data) => {
          alert("ONE PARTICIPANT: " + JSON.stringify(data));
        });
      });
    });

  }

}

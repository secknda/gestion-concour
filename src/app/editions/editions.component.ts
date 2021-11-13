import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {

  editionsList: any[] = [];
  searchEdition = "";
  concours: any;

  object: any = {
    "nom_edition": "",
    "date_debut": "",
    "date_fin": "",
    "date_fin_vote": "",
    "concours": {
      "nom_concours": "",
      "alias_concours": ""
    }
  };

  adminObject: any = {
    "prenom": "",
    "nom": "",
    "login": "",
    "password": "",
    "edition": {
      "nom_edition": ""
    },
    "concours": {
      "nom_concours": ""
    }
  };

  constructor(private networkingService: NetworkingService) {
    this.concours = this.networkingService.getData("CONCOURS_TO_EDITION");
  }

  ngOnInit(): void {
    console.log("DATA : ");
    this.networkingService.get("editions/" + this.concours.alias_concours).subscribe((data: any) => {
      this.editionsList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }


  saveEdition() {
    this.object.concours.nom_concours = this.concours.nom_concours;
    this.object.concours.alias_concours = this.concours.alias_concours;
    console.log("OBJECT " + JSON.stringify(this.object));
    this.networkingService.add("concours/add", JSON.stringify(this.object)).subscribe((data: any) => {
      // REDIRECT
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  addAdmin() {
    this.adminObject.concours.nom_concours = this.concours.nom_concours;
    console.log("OBJECT " + JSON.stringify(this.adminObject));
    this.networkingService.add("admins/add", JSON.stringify(this.adminObject)).subscribe((data: any) => {
      // REDIRECT
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  selectEdition(edition: any) {
    this.adminObject.edition.nom_edition = edition.nom_edition;
  }

}

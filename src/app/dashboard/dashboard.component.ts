import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  adminData: any = {};

  listEquipe: any[] = [];

  statistique: any;

  nbFemme!: any;
  nbHomme!: any;

  constructor(private networkingService: NetworkingService) {
    //
    this.adminData = this.networkingService.getData("CURRENT_ADMIN");
    this.networkingService.get("evaluations/general/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data) => {
      this.listEquipe = data;
    });

    // nb genre
    this.networkingService.get("statistique_genre/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data) => {

      this.nbFemme = data[0];
      this.nbHomme = data[1];

      if (data[0].genre == 'M') {
        this.nbHomme = data[0].nombre
        this.nbFemme = data[1].nombre
      } else {
        this.nbHomme = data[1].nombre
        this.nbFemme = data[0].nombre
      }

      console.log("Homme : " + JSON.stringify(this.nbHomme));
      console.log("Femme : " + JSON.stringify(this.nbFemme));
    });

    // nb genre
    this.networkingService.get("statistique_number/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data) => {

      this.statistique = data[0];
      console.log("uuu : " + JSON.stringify(data[0]));
    });
  }

  ngOnInit(): void {

  }

}

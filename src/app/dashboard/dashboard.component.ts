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

  constructor(private networkingService: NetworkingService) {
    // console.log("DATA" + this.adminData);
    this.adminData = localStorage.getItem("CURRENT_ADMIN");
    console.log("DATA" + this.adminData);
    console.log("HHHHHH " + this.adminData.alias_concours);
    this.networkingService.get("evaluations/general/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition).subscribe((data) => {
      this.listEquipe = data;
    });
  }

  ngOnInit(): void {

  }

}

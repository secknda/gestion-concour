import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-concours',
  templateUrl: './concours.component.html',
  styleUrls: ['./concours.component.css']
})
export class ConcoursComponent implements OnInit {

  concoursList: any[] = [];
  searchConcours = "";

  constructor(private networkingService: NetworkingService, private router: Router) { }

  ngOnInit(): void {
    console.log("DATA : ");
    this.networkingService.get("concours").subscribe((data: any) => {
      this.concoursList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

  gotoEditionList(alias_concours: string) {
    console.log("ALIAS : " + alias_concours);
    this.networkingService.saveData("CONCOURS_ALIAS", alias_concours);

    this.router.navigate(["/editions"]);
  }

}

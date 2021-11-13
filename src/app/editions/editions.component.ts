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
  concoursALIAS: any;

  constructor(private networkingService: NetworkingService) {
    this.concoursALIAS = this.networkingService.getData("CONCOURS_ALIAS");
  }

  ngOnInit(): void {
    console.log("DATA : ");
    this.networkingService.get("editions/" + this.concoursALIAS).subscribe((data: any) => {
      this.editionsList = data;
      console.log("DATA : " + JSON.stringify(data));
    });
  }

}

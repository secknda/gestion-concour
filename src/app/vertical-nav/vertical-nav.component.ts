import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {

  adminData: any = {
    "nom_concours": "CHANLLENGER"
  }

  constructor(private networkingService: NetworkingService) { }

  ngOnInit(): void {
    let objet: any;
    objet = this.networkingService.getData("CURRENT_ADMIN");
    if (objet != null) {
      this.adminData = objet;
    }
  }

}

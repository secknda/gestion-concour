import { Component, OnInit } from '@angular/core';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-projet-by-thematique',
  templateUrl: './projet-by-thematique.component.html',
  styleUrls: ['./projet-by-thematique.component.css']
})
export class ProjetByThematiqueComponent implements OnInit {

  projetList: any[] = [];
  thematique: any;
  adminData: any;

  constructor(private networkingService: NetworkingService) {
    this.thematique = this.networkingService.getData("CURRENT_THEME");
    this.adminData = this.networkingService.getData("CURRENT_ADMIN");
  }

  ngOnInit(): void {
    this.networkingService.get("projets/thematique/" + this.adminData.alias_concours + "/" + this.adminData.nom_edition + "/" + this.thematique.nom_thematique).subscribe((data) => {
      this.projetList = data;
    });
  }

  preselectionne(oneProjet: any) {
    var response = confirm("Voulez vous vraiment présélectionner ce projet");
    if (response != null) {
      // this.networkingService.add()
    }
  }

}

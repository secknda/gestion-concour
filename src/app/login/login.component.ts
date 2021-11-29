import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkingService } from 'src/service/networking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminAccess: any = {
    "login": "",
    "password": ""
  };

  title = 'angularTests';
  list = ['Bienvenue sur le site du PTN', 'Entrez votre login et mot de passe pour vous connectez', "Ce site vous permet de gérer efficacement n'import quel challenge."]

  constructor(private networkingService: NetworkingService, private router: Router) { }

  ngOnInit(): void {
  }

  connection() {
    this.networkingService.add("admins/login", this.adminAccess).subscribe((data: any) => {
      this.networkingService.adminData = JSON.stringify(data[0]);
      console.log("DATA : " + JSON.stringify(data[0]));
      localStorage.setItem("CURRENT_ADMIN", JSON.stringify(data[0]));

      alert("Bienvenue " + data[0].prenom + " " + data[0].nom);
      this.router.navigate(['/accueil']);
    });
  }

}

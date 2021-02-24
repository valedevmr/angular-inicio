import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  title:string = "Valente Montero Rosales"
  Lenguajes:String[] = ["Java","JSP","PHP","JAVASCRIPT","ANGULAR","CSS","HTML"];
  TICSAPRENDER:string[]=["SPRING","MVC","LARAVEL","JPA","HIBERNATE","POSTGRESQL"];
  banderat:boolean = false;
  banderaN:boolean = false;
  obtenerTec():void{
    this.banderat = true;
    this.banderaN = false;
  }
  obtenerNew():void{
    this.banderaN = true;
    this.banderat =  false;
  }

}

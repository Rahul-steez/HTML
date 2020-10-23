import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Formulario-Project';

erDNI = '^[0-9]{8}[A-Za-z]$';
mostrarInfo = ""

EnviarDatos(nombre, dni, Mensaje){

if(nombre.value == ""){
  alert("El nombre esta vacio")
}
if(dni.match(this.erDNI)){
    this.mostrarInfo="Correct"
  }
if(Mensaje.value.lenght <= 2){
   this.mostrarInfo= "Incorrecto"
}
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  standalone: false,
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent  {
  alumnos:any[] = [];
  nombre:string = "";
  grado:string = "";
  grupo:string = "";
  nip:number = -1;
  modo:string = "crear";

  constructor(private httpClient:HttpClient){
    this.getData();
  }

  getData(){
    this.httpClient.get("http://localhost:3000/api/alumnos").subscribe((data:any)=>{
      this.alumnos = data;
      console.log(this.alumnos);
    });
  }

  save(){
    this.httpClient.post("http://localhost:3000/api/alumno", {
      nombre: this.nombre,
      grado: this.grado,
      grupo: this.grupo
    }).subscribe((res:any)=>{
      alert(`La respuesta del servidor es ${res}`);
      this.getData();
    });
  }

  delete(nip: string){
    this.httpClient.delete("http://localhost:3000/api/alumno",{
      body: {
        nip: Number(nip)
      }
    }).subscribe((res:any)=>{
      this.getData();
    });
  }

  update(alumno:any){
    this.nip = alumno.nip;
    this.nombre = alumno.nombre;
    this.grupo = alumno.grupo;
    this.grado = alumno.grado;
    this.modo = "modificar";
  }

  cancela(){
    this.nip = -1;
    this.nombre = "";
    this.grado = '';
    this.grupo= "";
    this.modo = "guardar"
  }

  put(){
    this.httpClient.put("http://localhost:3000/api/alumno", {
      nip: Number(this.nip),
      nombre: this.nombre,
      grado: this.grado,
      grupo: this.grupo
    }).subscribe((res:any)=>{
      alert(`La respuesta del servidor es ${res}`);
      this.cancela();
      this.getData();
    });
  }
}

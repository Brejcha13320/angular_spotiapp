import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get("https://restcountries.com/v2/lang/es").subscribe( (paises: any)=>{
      this.paises = paises;
    });
   }

  ngOnInit(): void {
  }

}

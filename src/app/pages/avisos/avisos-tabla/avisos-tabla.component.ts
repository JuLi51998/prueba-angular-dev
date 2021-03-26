import { AvisosService } from './../avisos.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-avisos-tabla',
  templateUrl: './avisos-tabla.component.html',
  styleUrls: ['./avisos-tabla.component.scss']
})
export class AvisosTablaComponent implements OnInit { 
  avisos$ = this.avisosSvc.aviso;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };



  constructor(private router: Router, private avisosSvc: AvisosService) { 

  }

  ngOnInit(): void {
  }

  onGoToSee(item: any): void {
    //this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

}

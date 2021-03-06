import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clases',
    templateUrl: './clases.component.html'  
})

export class ClasesComponent implements OnInit {

    alert : string = "alert-danger";

    propiedades : Object = {
        danger: false
    };

    loading : boolean = false;

    constructor() { }

    ngOnInit(): void { }
  
    ejecutar() {
        this.loading = true;
        setTimeout( () => this.loading = false, 3000);
    }
}

import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

}

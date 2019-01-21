import { Component, Input, OnInit }  from '@angular/core';

import {
  AdComponent
} from '../../dist/ngx-formentry';
import { RandomDataService } from './random-data.service';

@Component({
  template: `
    <button *ngIf="showManageRelationships" class="btn btn-primary" (click)="manageRelationships()">View relationships</button>
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent, OnInit {
  @Input() data: any;
  @Input() node: any;

  showManageRelationships = false;

  constructor(private someService: RandomDataService) {
    this.someService.init();
  }

  ngOnInit(){
    console.log('received node', this.node);

    if(this.node && 
      this.node.control) {
        this.node.control.valueChanges.subscribe((val)=>{
          console.log('value changing', val);
          if(val === 'a899e0ac-1350-11df-a1f1-0026b9348838') {
            this.showManageRelationships = true;
          } else {
            this.showManageRelationships = false;
          }
        });
      }

  }

  manageRelationships() {
    console.log('fetching relationships');
  }
  
}



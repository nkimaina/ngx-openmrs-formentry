import { Component, Input, OnInit } from '@angular/core';

import {
  AdComponent
} from '../../dist/ngx-formentry';
import { RandomDataService } from './random-data.service';


@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent, OnInit {
  @Input() data: any;
  @Input() node: any;
  
  ngOnInit(){
    console.log('received node', this.node);

    if(this.node && 
      this.node.control) {
        this.node.control.valueChanges.subscribe((val)=>{
          console.log('value changing', val);
        });
      }

  }

  manageRelationships() {
    console.log('fetching relationships');
  }
}


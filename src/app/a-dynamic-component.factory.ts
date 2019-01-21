import { Injectable, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from '../../dist/ngx-formentry';

@Injectable()
export class ADynamicComponentFactory {
   constructor(private componentFactoryResolver: ComponentFactoryResolver) {
       
   }
  getComponentFactory(componentInfo: AdItem): ComponentFactory<any> {
    return this.componentFactoryResolver.resolveComponentFactory(componentInfo.component);
  }
}

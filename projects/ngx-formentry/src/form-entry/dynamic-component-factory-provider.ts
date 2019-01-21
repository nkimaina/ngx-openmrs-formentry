import { Injectable } from '@angular/core';
import { DynamicComponentFactory } from './dynamic-component.factory';



@Injectable()
export class DynamicComponentFactoryProvider {
  private adservice: DynamicComponentFactory;
  registerAdComponentFactory(adService: DynamicComponentFactory) {
    this.adservice = adService;
  }
  getAdComponentFactory(): DynamicComponentFactory {
      return this.adservice;
  }
}

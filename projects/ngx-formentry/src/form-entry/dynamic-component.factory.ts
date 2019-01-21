import { Injectable, ComponentFactory } from '@angular/core';
import { AdItem } from './ad-item';

@Injectable()
export class DynamicComponentFactory {
  getComponentFactory(componentInfo: AdItem): ComponentFactory<any> {
    return null;
  }
}

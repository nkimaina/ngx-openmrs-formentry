import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { DynamicComponentFactoryProvider } from './dynamic-component-factory-provider';
import { NodeBase } from './form-factory/form-node';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  @Input() node: NodeBase;
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private compProvider: DynamicComponentFactoryProvider) {

   }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    this.currentAdIndex = 0;
    const adItem = this.ads[this.currentAdIndex];

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const componentFactory = this.compProvider.getAdComponentFactory().getComponentFactory(adItem);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
    (<AdComponent>componentRef.instance).node = this.node;
  }

  getAds() {
    // this.interval = setInterval(() => {
      this.loadComponent();
    // }, 3000);
  }
}

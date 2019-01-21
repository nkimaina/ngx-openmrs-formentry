import { Injectable } from '@angular/core';

import { AdService } from './ad.service';

@Injectable()
export class AdServiceProvider {
  private adservice: AdService;
  registerAdService(adService: AdService) {
    this.adservice = adService;
  }
  getAdService(): AdService {
      return this.adservice;
  }
}

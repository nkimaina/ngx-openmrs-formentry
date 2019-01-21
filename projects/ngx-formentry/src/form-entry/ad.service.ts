import { Injectable } from '@angular/core';

import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds(): Array<AdItem> {
    return [ ];
  }
}

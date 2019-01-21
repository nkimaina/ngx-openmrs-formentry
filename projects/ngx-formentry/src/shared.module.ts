import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurePipe } from './components/file-upload/secure.pipe';
import { DataSources } from './form-entry/data-sources/data-sources';
import { AdServiceProvider } from './form-entry/ad-service-provider';
import { DynamicComponentFactoryProvider } from './form-entry/dynamic-component-factory-provider';
@NgModule({
    declarations: [
        SecurePipe
    ],
    imports: [ CommonModule ],
    exports: [
        SecurePipe
    ],
    providers: [
        DataSources,
        AdServiceProvider,
        DynamicComponentFactoryProvider
    ],
})
export class SharedModule {}

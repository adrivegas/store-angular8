import { NgModule } from '@angular/core';
import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [HomeRoutingModule],
  providers: [],
  bootstrap: []
})
export class HomeModule {}

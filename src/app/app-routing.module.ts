import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './userapps/home/home.component';
import { AboutComponent } from './userapps/about/about.component';
import { HelpComponent } from './userapps/help/help.component';
import { E404Component } from './userapps/e404/e404.component';

const routes: Routes = [
          {path: '', redirectTo: "", pathMatch: "full"},

          {path: "about/:name", component: AboutComponent},
          {path: "help/:id", component: HelpComponent},
          {path: "home", component: HomeComponent},

          {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

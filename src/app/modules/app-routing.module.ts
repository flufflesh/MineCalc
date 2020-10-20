import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('../components/home/home.module').then(m => m.HomeModule) }, { path: 'calc', loadChildren: () => import('../components/calculator/calculator.module').then(m => m.CalculatorModule) }, { path: 'about', loadChildren: () => import('../components/about/about.module').then(m => m.AboutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

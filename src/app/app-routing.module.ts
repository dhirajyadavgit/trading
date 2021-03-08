import { PrintComponent } from './modules/settings/print/print.component';
import { TransactionComponent } from './modules/settings/transaction/transaction.component';
import { GeneralComponent } from './modules/settings/general/general.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/settings/dashboard/dashboard.component';
import { ItemComponent } from './modules/settings/item/item.component';
import { PartyComponent } from './modules/settings/party/party.component';
import { TaxesAndGstComponent } from './modules/settings/taxes-and-gst/taxes-and-gst.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path:'',
    component: DashboardComponent
  },
{
  path:'general',
  component:GeneralComponent
},{
  path:'transaction',
  component:TransactionComponent
},
{
  path:'party',
  component:PartyComponent
},{
  path:'item',
  component:ItemComponent
},{
  path:'taxes-and-gst',
  component:TaxesAndGstComponent,
},{
  path:'print',
  component:PrintComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

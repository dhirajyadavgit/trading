import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';

import { TrsdialogComponent } from './../../modules/settings/print/features/trsdialog/trsdialog.component';
import { ThrprtdialogComponent } from './../../modules/settings/print/features/thrprtdialog/thrprtdialog.component';
import { PrintdialogComponent } from './../../modules/settings/print/features/printdialog/printdialog.component';
import { DashboardComponent } from 'src/app/modules/settings/dashboard/dashboard.component';
import { GeneralComponent } from 'src/app/modules/settings/general/general.component';
import { PasscodeComponent } from 'src/app/modules/settings/general/features/passcode/passcode.component';
import { PartyComponent } from './../../modules/settings/party/party.component';
import { TaxesAndGstComponent } from './../../modules/settings/taxes-and-gst/taxes-and-gst.component';
import { ItemComponent } from './../../modules/settings/item/item.component';
import { AdditionalFieldsComponent } from './../../modules/settings/transaction/features/additional-fields/additional-fields.component';
import { SetPaymentTermsComponent } from './../../modules/settings/transaction/features/set-payment-terms/set-payment-terms.component';
import { AddFirmsComponent } from 'src/app/modules/settings/general/features/add-firms/add-firms.component';
import { PrintComponent } from './../../modules/settings/print/print.component';
import { TransactionComponent } from './../../modules/settings/transaction/transaction.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    GeneralComponent,
    PasscodeComponent,
    AddFirmsComponent,
    PartyComponent,
    ItemComponent,
    TaxesAndGstComponent,
    TransactionComponent,
    SetPaymentTermsComponent,
    AdditionalFieldsComponent,
    PrintComponent,
    PrintdialogComponent,
    ThrprtdialogComponent,
    TrsdialogComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatTooltipModule,
    MatDialogModule,
    BarcodeScannerLivestreamModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxPrintModule,
  ]
})
export class DefaultModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ContentStripNewMultipleComponent } from './content-strip-new-multiple.component'
import { HorizontalScrollerModule } from '@sunbird-cb/utils'
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
} from '@angular/material'
import { WidgetResolverModule } from '@sunbird-cb/resolver'

@NgModule({
  declarations: [ContentStripNewMultipleComponent],
  imports: [
    CommonModule,
    RouterModule,
    HorizontalScrollerModule,
    WidgetResolverModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
  ],
  entryComponents: [ContentStripNewMultipleComponent],
})
export class ContentStripNewMultipleModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ContentStripSingleComponent } from './content-strip-single.component'
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
  declarations: [ContentStripSingleComponent],
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
  entryComponents: [ContentStripSingleComponent],
})
export class ContentStripSingleModule { }

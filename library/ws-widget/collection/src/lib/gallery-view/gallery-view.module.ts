import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GalleryViewComponent } from './gallery-view.component'
import { WidgetResolverModule } from '@sunbird-cb/resolver/public-api'
import { MatIconModule, MatCardModule } from '@angular/material'
import { HorizontalScrollerModule } from '@sunbird-cb/utils'

@NgModule({
  declarations: [GalleryViewComponent],
  imports: [CommonModule, WidgetResolverModule, HorizontalScrollerModule, MatIconModule, MatCardModule],
  exports: [GalleryViewComponent],
  entryComponents: [GalleryViewComponent],
})
export class GalleryViewModule { }

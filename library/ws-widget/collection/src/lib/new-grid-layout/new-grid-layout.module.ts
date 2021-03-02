import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NewGridLayoutComponent } from './new-grid-layout.component'
import { WidgetResolverModule } from '@sunbird-cb/resolver'

@NgModule({
  declarations: [NewGridLayoutComponent],
  imports: [CommonModule, WidgetResolverModule],
  exports: [NewGridLayoutComponent],
  entryComponents: [NewGridLayoutComponent],
})
export class NewGridLayoutModule { }

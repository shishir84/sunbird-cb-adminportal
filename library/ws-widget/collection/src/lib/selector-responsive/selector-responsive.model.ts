import { NsWidgetResolver } from '@sunbird-cb/resolver/public-api'
export interface ISelectorResponsive {
  selectFrom: ISelectorResponsiveUnit[]
  type?: string
  subType?: string
}

export interface ISelectorResponsiveUnit {
  minWidth: number
  maxWidth: number
  widget: NsWidgetResolver.IRenderConfigWithAnyData
}

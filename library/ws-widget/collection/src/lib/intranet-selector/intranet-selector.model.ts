import { NsWidgetResolver } from '@sunbird-cb/resolver/public-api'
export interface IIntranetSelector {
  url?: string
  isIntranet?: IIntranetSelectorUnit
  isNotIntranet?: IIntranetSelectorUnit
}

export interface IIntranetSelectorUnit {
  widget: NsWidgetResolver.IRenderConfigWithAnyData
}

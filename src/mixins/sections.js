import lazyLoadComponent from '@/utils/lazyLoadComponent'

import BannerLogoLoading from '@/components/Sections/BannerLogo/BannerLogoLoading'
import DescriptionImageLoading from '@/components/Sections/DescriptionImage/DescriptionImageLoading'
import DescriptionSpoilersLoading from '@/components/Sections/DescriptionSpoilers/DescriptionSpoilersLoading'
import HashtagLogoLoading from '@/components/Sections/HashtagLogo/HashtagLogoLoading'
import NeededLoading from '@/components/Sections/Needed/NeededLoading'
import OfferLoading from '@/components/Sections/Offer/OfferLoading'
import OrderLoading from '@/components/Sections/Order/OrderLoading'
import OtherLoading from '@/components/Sections/Other/OtherLoading'
import OrderAnotherLoading from '@/components/Sections/OrderAnother/OrderAnotherLoading'
import ServiceLoading from '@/components/Sections/Service/ServiceLoading'
import StagesLoading from '@/components/Sections/Stages/StagesLoading'
import OurPortfolioLoading from '@/components/Sections/OurPortfolio/OurPortfolioLoading'
import WordLoading from '@/components/Sections/Word/WordLoading'

export default {
  components: {
    HashtagLogo: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/HashtagLogo'),
      loading: HashtagLogoLoading
    }),
    DescriptionImage: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/DescriptionImage'),
      loading: DescriptionImageLoading
    }),
    DescriptionSpoilers: lazyLoadComponent({
      componentFactory: () =>
        import('@/components/Sections/DescriptionSpoilers'),
      loading: DescriptionSpoilersLoading
    }),
    BannerLogo: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/BannerLogo'),
      loading: BannerLogoLoading
    }),
    Needed: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Needed'),
      loading: NeededLoading
    }),
    Offer: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Offer'),
      loading: OfferLoading
    }),
    Order: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Order'),
      loading: OrderLoading
    }),
    OrderAnother: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/OrderAnother'),
      loading: OrderAnotherLoading
    }),
    Other: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Other'),
      loading: OtherLoading
    }),
    OurPortfolio: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/OurPortfolio'),
      loading: OurPortfolioLoading
    }),
    Service: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Service'),
      loading: ServiceLoading
    }),
    Stages: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Stages'),
      loading: StagesLoading
    }),
    Word: lazyLoadComponent({
      componentFactory: () => import('@/components/Sections/Word'),
      loading: WordLoading
    })
  },
  props: {
    components: Array
  }
}

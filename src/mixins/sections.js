// import lazyLoadComponent from '@/utils/lazyLoadComponent'

// import BannerLogoLoading from '@/components/Sections/BannerLogo/BannerLogoLoading'
// import DescriptionImageLoading from '@/components/Sections/DescriptionImage/DescriptionImageLoading'
// import DescriptionSpoilersLoading from '@/components/Sections/DescriptionSpoilers/DescriptionSpoilersLoading'
// import HashtagLogoLoading from '@/components/Sections/HashtagLogo/HashtagLogoLoading'
// import NeededLoading from '@/components/Sections/Needed/NeededLoading'
// import OfferLoading from '@/components/Sections/Offer/OfferLoading'
// import OrderLoading from '@/components/Sections/Order/OrderLoading'
// import OtherLoading from '@/components/Sections/Other/OtherLoading'
// import OrderAnotherLoading from '@/components/Sections/OrderAnother/OrderAnotherLoading'
// import ServiceLoading from '@/components/Sections/Service/ServiceLoading'
// import StagesLoading from '@/components/Sections/Stages/StagesLoading'
// import OurPortfolioLoading from '@/components/Sections/OurPortfolio/OurPortfolioLoading'
// import WordLoading from '@/components/Sections/Word/WordLoading'

export default {
  components: {
    HashtagLogo: () => import('@/components/Sections/HashtagLogo'),
    DescriptionImage: () => import('@/components/Sections/DescriptionImage'),
    DescriptionSpoilers: () =>
      import('@/components/Sections/DescriptionSpoilers'),
    BannerLogo: () => import('@/components/Sections/BannerLogo'),
    Needed: () => import('@/components/Sections/Needed'),
    Offer: () => import('@/components/Sections/Offer'),
    Order: () => import('@/components/Sections/Order'),
    OrderAnother: () => import('@/components/Sections/OrderAnother'),
    Other: () => import('@/components/Sections/Other'),
    OurPortfolio: () => import('@/components/Sections/OurPortfolio'),
    Service: () => import('@/components/Sections/Service'),
    Stages: () => import('@/components/Sections/Stages'),
    Word: () => import('@/components/Sections/Word')
  },
  props: {
    components: Array
  }
}

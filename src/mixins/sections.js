export default {
  components: {
    HashtagLogo: () => import('@/components/Sections/HashtagLogo'),
    DescriptionSpoilers: () =>
      import('@/components/Sections/DescriptionSpoilers'),
    DescriptionImage: () => import('@/components/Sections/DescriptionImage'),
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

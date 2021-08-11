export default {
  components: {
    HashtagLogo: () => import('@/components/Sections/HashtagLogo'),
    DescriptionSpoilers: () =>
      import('@/components/Sections/DescriptionSpoilers'),
    DescriptionImage: () => import('@/components/Sections/DescriptionImage'),
    Banner: () => import('@/components/Sections/Banner'),
    Needed: () => import('@/components/Sections/Needed'),
    Offer: () => import('@/components/Sections/Offer'),
    Order: () => import('@/components/Sections/Order'),
    OrderAnother: () => import('@/components/Sections/OrderAnother'),
    Other: () => import('@/components/Sections/Other'),
    Portfolio: () => import('@/components/Sections/Portfolio'),
    Service: () => import('@/components/Sections/Service'),
    Stages: () => import('@/components/Sections/Stages'),
    Word: () => import('@/components/Sections/Word')
  }
}

const animate = {
  inViewport(el) {
    const rect = el.getBoundingClientRect()
    return !(
      rect.bottom < 0 ||
      rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight
    )
  },

  bind(el, binding) {
    el.$onScroll = () => {
      if (binding.def.inViewport(el)) {
        el.classList.add(binding.value)
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el) {
    el.$onScroll()
  },

  unbind(el) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
}

export default animate

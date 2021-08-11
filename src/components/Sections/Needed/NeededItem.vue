<template>
  <figure class="needed__item">
    <div class="needed__img">
      <g-image :src="img" :alt="title" />
    </div>
    <figcaption>{{ title }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'NeededItem',
  props: {
    title: String,
    img: Object
  }
}
</script>

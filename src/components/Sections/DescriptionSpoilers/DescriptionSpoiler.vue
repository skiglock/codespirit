<template>
  <details class="description-spoilers__spoiler">
    <summary>{{ title }}</summary>
    <ul class="description-spoilers__list">
      <li class="description-spoilers__item">
        <span>Креативная стратегия</span>
      </li>
      <li class="description-spoilers__item">
        <span>YouTube-канал под ключ</span>
      </li>
      <li class="description-spoilers__item">
        <span>Стратегия присутствия в социальных сетях</span>
      </li>
      <li class="description-spoilers__item">
        <span>Digital-стратегия</span>
      </li>
    </ul>
  </details>
</template>

<script>
export default {
  name: 'DescriptionSpoiler',
  props: {
    title: String,
    description: String
  }
}
</script>

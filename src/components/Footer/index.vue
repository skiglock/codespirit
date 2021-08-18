<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__promo">
        <h2 class="footer__title">Ждем вас!</h2>
        <Button
          @click.native="setModalSettings"
          color="primary"
          size="large"
          class="footer__button"
          type="button"
        >
          Оставить заявку
        </Button>
      </div>
      <div class="footer__info">
        <div class="footer__contacts">
          <a class="footer__contacts-item" href="tel:+79968502693">
            +7 996 850 26 93
          </a>
          <a class="footer__contacts-item" href="mailto:info@codespirit.ru">
            info@codespirit.ru
          </a>
        </div>
        <div class="footer__social">
          <a class="footer__social-item" href="#"> Telegram </a>
          <a class="footer__social-item" href="#"> Instagram </a>
        </div>
      </div>
      <div
        class="footer__menu"
        role="navigation"
        aria-label="Нижнее меню"
        itemscope
        itemtype="http://www.schema.org/SiteNavigationElement"
      >
        <ul class="footer__list">
          <li itemprop="name">
            <a href="#" itemprop="url">О студии</a>
          </li>
          <li itemprop="name">
            <a href="#" itemprop="url">Портфолио</a>
          </li>
          <li itemprop="name">
            <a href="#" itemprop="url">Что делаем?</a>
          </li>
          <li itemprop="name">
            <a href="#" itemprop="url">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom" role="contentinfo">
      <a>© 2020 CODESPIRIT. Все права защищены</a>
      <a href="#">Политика конфиденциальности</a>
      <a href="#">Политика обработки данных</a>
    </div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'
import Button from '@/components/Base/Button'
export default {
  name: 'Footer',
  components: {
    Button
  },
  methods: {
    ...mapMutations('modal', ['setModalTitle', 'setModalIsOpen']),
    setModalSettings() {
      this.setModalTitle('Мы все еще ждем вас!')
      this.setModalIsOpen(true)
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: #f5f5f5;
  padding-top: 25px;
  padding-bottom: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media screen and (min-width: $tablet-width) {
    padding-top: 35px;
  }
  &__wrapper {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 30px;
    row-gap: 20px;
    justify-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  &__promo {
    @media screen and (max-width: 699px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
  &__title {
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    text-align: center;
  }
  &__button {
    margin-top: 10px;
  }
  &__info {
    text-align: center;
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 5px;
  }
  &__contacts {
    display: grid;
    row-gap: 5px;
    &-item {
      font-size: 18px;
      color: #171717;
      text-decoration: none;
      transition: 0.1s linear;
      &:hover {
        color: rgba(#171717, 0.9);
      }
    }
  }
  &__social {
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    &-item {
      font-size: 18px;
      color: #171717;
      text-decoration: none;
      transition: 0.1s linear;
      &:hover {
        color: rgba(#171717, 0.9);
      }
    }
  }
  &__menu {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  &__list {
    list-style: none;
    display: grid;
    row-gap: 8px;
    a {
      font-size: 18px;
      color: #171717;
      text-decoration: none;
      transition: 0.1s linear;
      &:hover {
        color: rgba($red_color, 0.9);
      }
    }
  }
  &__bottom {
    padding-top: 20px;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 10px;
    text-align: center;
    a {
      color: #171717;
      text-decoration: none;
      font-size: 14px;
      &:hover {
        color: rgba($red_color, 0.9);
      }
    }
  }
}
</style>

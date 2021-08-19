<template>
  <form
    class="form"
    :name="title"
    method="post"
    @submit.prevent="handleSubmit"
    :action="`/success`"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    autocomplete="off"
  >
    <input type="hidden" name="form-name" :value="title" />
    <p hidden>
      <label> Don’t fill this out: <input name="bot-field" /> </label>
    </p>
    <div class="form__group">
      <label for="form-name" class="form__label">Имя</label>
      <input
        class="form__text"
        aria-label="Имя"
        type="text"
        name="name"
        id="form-name"
        placeholder="Введите ваше имя"
        v-model.trim="formData.name"
        @focus="clearValidation('name')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.name">
        {{ errors.name }}
      </p>
    </div>
    <div class="form__group">
      <label for="form-phone" class="form__label">Телефон</label>
      <input
        class="form__text"
        aria-label="Телефон"
        type="tel"
        name="phone"
        id="form-phone"
        placeholder="+7"
        v-model.trim="formData.phone"
        @focus="clearValidation('phone')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.phone">
        {{ errors.phone }}
      </p>
    </div>
    <div class="form__group" v-if="email">
      <label for="form-email" class="form__label">E-mail</label>
      <input
        class="form__text"
        aria-label="Почта"
        type="email"
        name="email"
        id="form-email"
        placeholder="Введите email адрес"
        v-model.trim="formData.email"
        @focus="clearValidation('email')"
        autocomplete="false"
      />
      <p class="form__error" v-if="errors.email">
        {{ errors.email }}
      </p>
    </div>
    <div v-if="textarea" class="form__group">
      <label for="form-message" class="form__label">Расскажите о проекте</label>
      <textarea
        class="form__text form__text--large"
        aria-label="Сообщение"
        name="message"
        id="form-message"
        v-model.trim="formData.message"
        @focus="clearValidation('message')"
        autocomplete="false"
      ></textarea>
      <p class="form__error" v-if="errors.message">
        {{ errors.message }}
      </p>
    </div>
    <input type="hidden" name="from" v-model="formData.from" />
    <input type="hidden" name="ref" v-model="formData.ref" />
    <Button type="submit" class="form__button" color="white" size="large">
      {{ buttonTitle }}
    </Button>
    <span class="form__agree">
      * Нажимая кнопку, вы даете согласие на обработку персональных данных
    </span>
  </form>
</template>

<script>
import {
  isRequired,
  isValidPhone,
  minLength,
  isPeopleName,
  validEmail
} from '@/utils/validate.js'
import Button from '@/components/Base/Button'
export default {
  name: 'Form',
  props: {
    title: {
      type: String,
      default: 'Форма'
    },
    email: {
      type: Boolean,
      default: false
    },
    textarea: {
      type: Boolean,
      default: false
    },
    buttonTitle: {
      type: String,
      default: 'Отправить'
    }
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        message: '',
        from: '',
        ref: ''
      },
      errors: {}
    }
  },
  components: {
    Button
  },
  computed: {
    checkName() {
      return (
        isRequired(this.formData.name) ||
        isPeopleName(this.formData.name) ||
        minLength(this.formData.name, 2)
      )
    },
    checkPhone() {
      return (
        isRequired(this.formData.phone) || isValidPhone(this.formData.phone)
      )
    },
    checkEmail() {
      return isRequired(this.formData.email) || validEmail(this.formData.email)
    },
    checkMessage() {
      return (
        isRequired(this.formData.message) ||
        minLength(this.formData.message, 10)
      )
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    handleSubmit(e) {
      if (
        this.checkName ||
        this.checkPhone ||
        this.checkEmail ||
        this.checkMessage
      ) {
        this.errors.name = this.checkName
        this.errors.phone = this.checkPhone
        this.errors.email = this.email ? this.checkEmail : ''
        this.errors.message = this.textarea ? this.checkMessage : ''
      } else {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.formData
          })
        })
          .then(() => this.$router.push('/success'))
          .catch((error) => alert(error))
        this.formData = {
          name: '',
          phone: '',
          email: '',
          message: '',
          from: '',
          ref: ''
        }
      }
      this.$forceUpdate()
    },
    clearValidation(field) {
      this.errors[field] = undefined
      this.$forceUpdate()
    }
  },
  mounted() {
    if (this.$route.path) {
      this.formData.from = `https://codespirit.ru${this.$route.path}`
    }
    if (document.referrer) {
      this.formData.ref = document.referrer
    } else {
      this.formData.ref = 'Скорее всего ввел сам'
    }
  },
  destroyed() {
    this.errors[0] = undefined
    this.$forceUpdate()
  }
}
</script>

<style lang="scss">
.form {
  display: grid;
  gap: 15px;
  @media screen and (min-width: $tablet-width) {
    gap: 10px;
  }
  &__group {
    font-family: 'Chalet-NewYorkNineteenEighty', sans-serif;
    display: grid;
    gap: 2px;
  }
  &__subgroup {
    display: grid;
    grid-auto-flow: row;
    gap: 5px;
  }
  &__label {
    color: #fff;
    font-size: 14px;
    text-shadow: 0px 1px 4px #252525;
    margin-left: 5%;
  }
  &__text {
    box-shadow: 0px 2px 2.67px 0.33px rgba(#252525, 0.2);
    border: none;
    outline: none;
    max-width: 100%;
    padding: 10px 15px;
    border-radius: 20px;
    &::placeholder {
      color: #b9b8b8;
    }
    &--large {
      resize: none;
      min-height: 130px;
      @media screen and (min-width: $tablet-width) {
        min-height: 200px;
      }
    }
  }
  &__button {
    @media screen and (min-width: $small-mobile-width) {
      justify-self: center;
    }
  }
  &__agree {
    font-size: 10px;
    color: #fff;
  }
  &__error {
    text-align: center;
    padding: 2px 0;
    color: red;
    font-size: 13px;
  }
}
</style>

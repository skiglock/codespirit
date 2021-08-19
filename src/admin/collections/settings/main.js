import id from '../fields/id'
import title from '../fields/title'
import img from '../fields/img'
import number from '../fields/number'
import mail from '../fields/mail'
import link from '../fields/link'

const main = {
  name: 'main',
  label: 'Основные настройки',
  file: 'src/data/main_settings.yaml',
  fields: [
    img('Логотип'),
    link('Главная страница', 'pages'),
    number,
    mail,
    {
      name: 'socials',
      label: 'Социальные сети',
      widget: 'list',
      summary: 'Соц. сеть',
      fields: [
        id,
        title,
        {
          name: 'link',
          label: 'Ссылка',
          widget: 'string'
        }
      ]
    },
    {
      name: 'main_color',
      label: 'Цвет заголовков и кнопок',
      widget: 'color',
      default: '#eb563a'
    },
    {
      name: 'background_color',
      label: 'Цвет фона сайта',
      widget: 'color',
      default: '#ffeab3'
    },
    {
      name: 'content_color',
      label: 'Цвет контентной части',
      widget: 'color',
      default: '#fff'
    },
    {
      name: 'footer_color',
      label: 'Цвет подвала',
      widget: 'color',
      default: '#f5f5f5'
    }
  ]
}

export default main

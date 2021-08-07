const pages = {
  name: 'pages',
  label: 'Основные страницы',
  label_singular: 'Страница',
  folder: 'content/pages',
  path: '{{slug}}/index',
  create: true,
  fields: [
    {
      name: 'date',
      label: 'Создана',
      picker_utc: false,
      widget: 'datetime'
    },
    {
      name: 'title',
      label: 'Заголовок страницы',
      widget: 'string',
      default: 'Заголовок'
    },
    {
      name: 'description',
      label: 'Описание страницы',
      widget: 'string',
      default: 'Описание'
    }
  ]
}

export default pages

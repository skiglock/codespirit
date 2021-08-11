import id from '../fields/id'
import title from '../fields/title'
import description from '../fields/description'
import img from '../fields/img'

const descriptionImage = {
  name: 'descriptionImage',
  label: 'Картинка с описанием',
  widget: 'object',
  fields: [
    id,
    title,
    description,
    img(),
    {
      name: 'position',
      label: 'Позиция',
      widget: 'select',
      options: ['row', 'column']
    },
    {
      name: 'reverse',
      label: 'Поменять местами',
      widget: 'boolean',
      default: false
    }
  ]
}

export default descriptionImage

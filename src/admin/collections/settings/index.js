import main from './main'
import menu from './menu'
import documents from './documents'

const settings = {
  name: 'settings',
  label: 'Настройки',
  files: [main, menu, documents],
  editor: {
    preview: false
  }
}
export default settings

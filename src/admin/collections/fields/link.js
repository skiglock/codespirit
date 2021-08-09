const link = (label, page) => ({
  name: 'link',
  label: label,
  widget: 'relation',
  collection: page,
  search_fields: ['title'],
  value_field: 'id',
  display_fields: ['title']
})

export default link

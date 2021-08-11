module.exports = (api) => {
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
    type Sections {
      id: ID!
      type: String
      date: String
      title: String
      subtitle: String
      description: String
      img: String
      link: String
      mail: String
      number: Int
      price: String
      color: String
      color_first: String
      color_second: String
      spoilers: [Spoiler]
      button: Button

      # Other
      position: String
      reverse: Boolean
      items: [item]
      variant: Boolean
    }

    type Button {
      title: String
      color_first: String
      color_second: String
    }

    type Spoiler {
      id: ID!
      title: String
      description: String
    }

    type item {
      id: ID!
      img: String
      title: String
    }

    type Pages implements Node {
      id: ID!
      title: String
      path: String
      sections: [Sections]
    }
  `)
  })
}

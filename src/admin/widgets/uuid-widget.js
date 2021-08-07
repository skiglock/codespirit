import { v4 as uuid } from 'uuid'

export const IdControl = window.createClass({
  getInitialState() {
    return {}
  },
  componentDidMount() {
    if (!this.props.value) {
      this.props.onChange(uuid())
    }
  },
  handleChange() {
    this.props.onChange(uuid())
  },
  render() {
    return window.h('p', null, `${this.props.value}`)
  }
})

export const IdPreview = window.createClass({
  getInitialState() {
    console.log(this.props)
    return {}
  },
  render() {
    return window.h('p', null, `ID: ${this.props.value}`)
  }
})

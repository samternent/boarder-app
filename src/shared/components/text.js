import React from 'react'
import ReactDOM from 'react-dom'

// Flux

// Components

// Component
export default class Text extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        editable: true
      };
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.textInput).focus();
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }
  handleBlur() {
    this.setState({ editable: false })
  }
  handleClick() {
    this.setState(
      { editable: true }
      , () => {
        ReactDOM.findDOMNode(this.refs.textInput).focus();
    })
  }
  renderInput() {
    return (
      <input
        className=''
        ref='textInput'
        type='text'
        placeholder='Add some text...'
        value={ this.state.title }
        onChange={ this.handleTitleChange.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
    )
  }
  renderTitle() {
    if (this.state.editable) {
      return this.renderInput()
    }
    return this.state.title;
  }
  render() {
    return (
      <p onClick={this.handleClick.bind(this)}>
        { this.renderTitle() }
      </p>
    );
  }
}

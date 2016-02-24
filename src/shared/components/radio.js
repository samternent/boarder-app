import React from 'react'

// Flux

// Components

// Component
export default class Radio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  renderRadios() {
    return ['on', 'off'].map((val, i) => {
      return (
        <span className='radio'>
          <input name={ this.props.name } type='radio' key={`key_${i}`} />
          { val }
        </span>
      )
    })
  }
  render() {
    return (
      <div>
        { this.renderRadios() }
      </div>
    );
  }
}

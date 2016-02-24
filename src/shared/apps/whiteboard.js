import React from 'react';
import canUseDOM from 'can-use-dom';

// Styles
if (canUseDOM) { require('../../style/whiteboard'); }

// Flux

// Components

// Component
export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          properties: []
        };
    }

    handleMouseDown(e) {
      console.log('mousedown');
    }
    handleDrag(e) {
      console.log('drag');
    }
    render() {
      return (
          <div className='whiteboard'>
            <canvas
                onMouseDown={ this.handleMouseDown.bind(this) }
                onDragStart={ this.handleDrag.bind(this) }
              className="whiteboard__canvas" />
          </div>
        );
      }
}

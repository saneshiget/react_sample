import React, {Component} from 'react';

export default class InputView extends Component {
  constructor() {
    super();
  }

  render() {
    var key = 0;
    var textVals = this.props.children.map(function (textVal) {
      return <li key={key++}>{key}.{textVal}</li>;
    });

    return (
      <div>
        <ul>{textVals}</ul>
      </div>
    );
  }
}
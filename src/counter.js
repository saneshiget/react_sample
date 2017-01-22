import React, {Component} from 'react';

import CustomInput from './Input';
import CustomInputView from './InputView';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      text: '初期値',
      children: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.addText = this.addText.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  /* テキストの追加 */
  addText(value) {
    var textVals = this.state.children.concat(value);
    this.setState({
      children: textVals
    });
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handleClick}>追加</button>
        <div>
            <p>入力してEnterキーを押す</p>
            <CustomInput onSave={this.addText} />
            <CustomInputView children={this.state.children} />
        </div>
      </div>
    );
  }
}


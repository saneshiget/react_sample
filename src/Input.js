import React, {Component} from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _onKeyDown (e) {
    if (e.keyCode === 13) { // Enterキー
      if(e.target.value == '') {
        alert('入力してください');
        return;
      }
      this.props.onSave(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    return <input type="text" onKeyDown={this._onKeyDown} />;
  }
}

/*
Input.propTypes = {
  onSave: React.PropTypes.func
};
*/
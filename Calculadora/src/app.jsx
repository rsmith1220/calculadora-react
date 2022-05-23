import React from 'react';
import ButtonNumber from './Numeros.jsx';
import Display from './display.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '0',
      value1: null,
      value2: null,
      lastV: null,
      removeValue: false,
      changeValue: false,
      op: null,
    };
  }

  check(v) {
    /* Especificación para la cantidad de numeros y caracter para mostrar error */
    if (parseFloat(v) < 0 || parseFloat(v) > 999999999) {
      this.clear();
      return 'Error';
    }
    if (String(v).length > 9) {
      return v.substring(0, 9);
    }
    return v;
  }

  clear() {
    this.state.value1 = null;
    this.state.value2 = null;
    this.state.op = null;
    this.state.lastV = null;
    this.state.removeValue = true;
  }

  add(v) {
    /* Next numero y borra */
    let { text } = this.state;
    const { lastV, removeValue } = this.state;
    if (lastV === '=') {
      this.clear();
    }
    if (text === '0' || removeValue || lastV === '=') {
      text = '';
    }
    if (text.length < 9) {
      text += v;
      this.setState({ text, removeValue: false, changeValue: true });
    }
  }

  op(v) {
    /* Operaciones con sus restrincciones y logica */
    const {
      text, lastV, op, value1, value2, changeValue,
    } = this.state;
    if (v === 'CE') {
      const t = '0';
      this.setState({ text: t });
    } else
    if (v === 'C') {
      const t = '0';
      this.setState({
        text: t,
        value1: null,
        value2: null,
        op: null,
        lastV: null,
      });
    } else
    if (v === '<-') {
      let t = text;
      if (t.length > 0) {
        if (t.includes('-') && t.length === 2) {
          t = t.substring(0, t.length - 2);
        } else {
          t = t.substring(0, t.length - 1);
        }
        if (t === '') {
          t = '0';
        }
        this.setState({ text: t });
      }
    } else
    if (v === '.') {
      let t = text;
      if (t.length < 9) {
        if (!t.includes('.')) {
          t = `${t}.`;
          this.setState({ text: t });
        }
      }
    } else
    if (v === '+/-') {
      let t = text;
      if (t.includes('-')) {
        t = t.substring(1, t.length);
      } else
      if (t.length < 9 && t !== '0') {
        t = `-${t}`;
      }
      this.setState({ text: t });
    } else
    if (v === '=') {
      if (changeValue && value1 !== null && text !== 'Error') {
        if (lastV !== '=') {
          const num2 = parseFloat(text);
          switch (op) {
            case '+':
              this.setState({ value2: num2, text: this.check(String(value1 + num2)), lastV: '=' });
              break;
            case '-':
              this.setState({ value2: num2, text: this.check(String(value1 - num2)), lastV: '=' });
              break;
            case '/':
              this.setState({ value2: num2, text: this.check(String(value1 / num2)), lastV: '=' });
              break;
            case '*':
              this.setState({ value2: num2, text: this.check(String(value1 * num2)), lastV: '=' });
              break;
            default: break;
          }
          this.check();
        } else if (lastV === '=') {
          const num1 = parseFloat(text);
          switch (op) {
            case '+':
              this.setState({ value1: num1, text: this.check(String(num1 + value2)), lastV: '=' });
              break;
            case '-':
              this.setState({ value1: num1, text: this.check(String(num1 - value2)), lastV: '=' });
              break;
            case '/':
              this.setState({ value1: num1, text: this.check(String(num1 / value2)), lastV: '=' });
              break;
            case '*':
              this.setState({ value1: num1, text: this.check(String(num1 * value2)), lastV: '=' });
              break;
            default: break;
          }
        }
      }
    } else if (changeValue && text !== 'Error') {
      const t = text;
      if (lastV === '=' || lastV === null) {
        this.setState({
          value1: parseFloat(t), op: v, lastV: v, removeValue: true, changeValue: false,
        });
      } else if (lastV !== null && lastV !== '=') {
        const num2 = parseFloat(t);
        switch (lastV) {
          case '+':
            this.setState({
              value1: value1 + num2,
              op: v,
              value2: num2,
              text: this.check(String(value1 + num2)),
              lastV: v,
              removeValue: true,
              changeValue: false,
            });
            break;
          case '-':
            this.setState({
              value1: value1 - num2,
              op: v,
              value2: num2,
              text: this.check(String(value1 - num2)),
              lastV: v,
              removeValue: true,
              changeValue: false,
            });
            break;
          case '/':
            this.setState({
              value1: value1 / num2,
              op: v,
              value2: num2,
              text: this.check(String(value1 / num2)),
              lastV: v,
              removeValue: true,
              changeValue: false,
            });
            break;
          case '*':
            this.setState({
              value1: value1 * num2,
              op: v,
              value2: num2,
              text: this.check(String(value1 * num2)),
              lastV: v,
              removeValue: true,
              changeValue: false,
            });
            break;
          default: break;
        }
      }
    }
  }

  Op() {
    return this.op.bind(this);
  }

  Add() {
    return this.add.bind(this);
  }

  render() {
    const bodyStyle = {
      display: 'flex',
      flexDirection: 'column',
    };

    const { text } = this.state;

    return (
      <div style={bodyStyle}>
        <Display text={text} />
        <ButtonNumber click={this.Add()} clickOp={this.Op()} />
      </div>
    );
  }
}

import React from 'react';
import Button from './Boton.jsx';

export default class ButtonNumber extends React.Component {
  clickOp(v) {
    const { clickOp } = this.props;
    return clickOp.bind(this, v);
  }

  click(v) {
    const { click } = this.props;
    return click.bind(this, v);
  }

  render() {
    const bodyStyle = {
      display: 'grid',
      gridTemplateColumns: '125px 125px 125px 125px',
      gridTemplateRows: '103px 103px 103px 103px 103px',
    };
    return (
      <div style={bodyStyle}>
        <Button color="#99ccff" id="bCE" text="CE" click={this.clickOp('CE')} />
        <Button color="#99ccff" classname="boton" id="bC" text="C" click={this.clickOp('C')} />
        <Button classname="boton" id="bB" text="bspce" click={this.clickOp('<-')} />
        <Button color="#ff99cc" classname="boton" id="bD" text="/" click={this.clickOp('/')} />
        <Button color="#cc99ff" classname="boton" id="b7" text="7" click={this.click('7')} />
        <Button color="#cc99ff" classname="boton" id="b8" text="8" click={this.click('8')} />
        <Button color="#cc99ff" classname="boton" id="b9" text="9" click={this.click('9')} />
        <Button color="#ff99cc" classname="boton" id="bX" text="*" click={this.clickOp('*')} />
        <Button color="#cc99ff" classname="boton" id="b4" text="4" click={this.click('4')} />
        <Button color="#cc99ff" classname="boton" id="b5" text="5" click={this.click('5')} />
        <Button color="#cc99ff" classname="boton" id="b6" text="6" click={this.click('6')} />
        <Button color="#ff99cc" classname="boton" id="bR" text="-" click={this.clickOp('-')} />
        <Button color="#cc99ff" classname="boton" id="b1" text="1" click={this.click('1')} />
        <Button color="#cc99ff" classname="boton" id="b2" text="2" click={this.click('2')} />
        <Button color="#cc99ff" classname="boton" id="b3" text="3" click={this.click('3')} />
        <Button color="#ff99cc" classname="boton" id="bS" text="+" click={this.clickOp('+')} />
        <Button classname="boton" id="bSi" text="+/-" click={this.clickOp('+/-')} />
        <Button color="#cc99ff" classname="boton" id="b0" text="0" click={this.click('0')} />
        <Button classname="boton" id="bP" text="." click={this.clickOp('.')} />
        <Button classname="boton" id="bE" text="=" click={this.clickOp('=')} />
      </div>
    );
  }
}

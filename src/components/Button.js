import React from "react";

class Button extends React.Component {
  render() {
    // console.log(this.props.applyColor)
    return (
      <button
        onClick={this.props.chooseColor}
        className={this.props.isLight ? "light-button" : "dark-button"}
      >
        <p>Hi, im color picker</p>
      </button>
    );
  }
}

export { Button };
//export default Button;

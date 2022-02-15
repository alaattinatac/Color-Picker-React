import React from "react";
import { Button } from "./Button";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [155, 158, 77],
    };
    // this.chooseColor = this.chooseColor.bind(this);
  }

  componentDidMount() {
    console.log(
      "i invoked immediately after component is mounted, just one time at the beginning; after render method"
    );
    // this.applyColor()
    // this.chooseColor()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "i invoked immediately after updating occurs, upon every change."
    );
    this.applyColor();
  }

  isLight = (colorArr) => {
    if (colorArr[0] + colorArr[1] + colorArr[2] >= 381) {
      return true;
    } else {
      return false;
    }
    // it should return true or false according to the given array;
  };

  formatColor(colorArr) {
    return "rgb(" + colorArr.join(", ") + ")";
  }

  applyColor() {
    document.body.style.backgroundColor = this.formatColor(this.state.color);
  }

  chooseColor = () => {
    //it creates an array, consist of randomized numbers (between 0 and 256). And sets the state of color.
    let randomNumber = [];
    for (let i = 0; i < 3; i++) {
      let random2 = Math.floor(Math.random() * 256);
      randomNumber.push(random2);
      randomNumber[i] = random2;
    }
    this.setState({
      color: randomNumber,
    });
  };

  render() {
    //  this.chooseColor()
    //  this.applyColor()
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? "black" : "white"}>
          Your Color is: {this.formatColor(this.state.color)}
        </h1>

        <Button
          chooseColor={this.chooseColor}
          isLight={this.isLight(this.state.color)}
        />
      </div>
    );
  }
}

export default ColorPicker;

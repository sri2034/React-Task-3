import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              >
              </div>
            ))}
          </div>
        )}
        <button style={{ backgroundColor: selectedColor}} onClick={this.toggleColorList}>Pick a color</button>
      </div>
    );
  }
}

export default ColorPicker;

class Shape {
  constructor({ logoName, textColour, logoColour, logoShape }) {
    this.logoShape = logoShape;

    this.logoName = logoName;

    this.textColour = textColour;

    this.logoColour = logoColour;
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}
module.exports = Shape;
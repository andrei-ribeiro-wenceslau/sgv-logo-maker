const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('Render Method', () => {
    it('should render circle string', () => {
      const circle = new Circle({
        logoName: 'Ted',
        textColour: 'purple',
        logoColour: 'red',
        logoShape: 'circle',
      });
      expect(circle.render()).toBe(
        `<circle cx="50" cy="50" r="50" fill="red" />`
      );
    });
  });
});

const Square = require('../lib/square');

describe('Square', () => {
  describe('Render Method', () => {
    it('should render square string', () => {
      const square = new Square({
        logoName: 'Ted',
        textColour: 'red',
        logoColour: 'orange',
        logoShape: 'square',
      });
      expect(square.render()).toBe(
        `<rect width="100" height="100" rx="15" fill="orange" />`
      );
    });
  });
});

const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Render Method', () => {
    it('should return triangle string', () => {
      const triangle = new Triangle({
        logoName: 'Mel',
        textColour: 'purple',
        logoColour: '#000',
        logoShape: 'triangle',
      });
      expect(triangle.render()).toBe(
        `<polygon points="100 0, 0 ,0 50, 100" fill="#000" />`
      );
    });
  });
});
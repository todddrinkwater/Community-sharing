import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../client/components/Header.jsx';

describe('Header (Snapshot)', () => {
  it('The Header renders', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

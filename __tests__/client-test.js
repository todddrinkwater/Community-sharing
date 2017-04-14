import React from 'react';
import renderer from 'react-test-renderer';
import Order from '../client/components/Order.jsx';
import {Header} from '../client/components/Header.jsx';

describe('Header (Snapshot)', () => {
  it('The Header renders', () => {
    const component = renderer.create(<Header />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Order (Snapshot)', () => {
  it('The Order renders', () => {
    const component = renderer.create(<Order />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

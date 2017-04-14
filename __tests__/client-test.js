import React from 'react';
import renderer from 'react-test-renderer';


import Order from '../client/components/Order';
import LenderForm from '../client/components/LenderForm';

import ImBorrowing from '../client/containers/ImBorrowing';

import {Header} from '../client/components/Header';




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

describe('LenderForm (Snapshot)', () => {
  it('The LenderForm renders', () => {
    const component = renderer.create(<LenderForm />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

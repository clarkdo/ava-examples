import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Foo } from '../src/foo';

test('has a .Foo class name', t => {
  const wrapper = shallow(<Foo />);
  t.true(wrapper.hasClass('Foo'));
});

test('renders two `.Bar`', t => {
  const wrapper = shallow(<Foo />);
  t.is(wrapper.find('.bar').length, 2);
});

test('renders children when passed in', t => {
  const wrapper = shallow(
    <Foo>
      <div className="unique" />
    </Foo>
  );
  t.true(wrapper.contains(<div className="unique" />));
});

test('shallow just generates wrapper of component', t => {
  const stub = sinon.spy(Foo.prototype.componentDidMount);
  shallow(<Foo />);
  t.is(stub.callCount, 0);
});

test('simulates click events', t => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(
    <Foo onButtonClick={onButtonClick} />
  );
  wrapper.find('button').simulate('click');
  t.true(onButtonClick.calledOnce);
});

import React from "react";
import NewCard from "../../components/Card";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const TEST_CASES = [
    ["341234567890123", "American Express"],
    ["371234567890123", "American Express"],
    ["38123456789012", "Diners Club"],
    ["5112345678901245", "MasterCard"],
    ["5212345678901245", "MasterCard"],
    ["5312345678901245", "MasterCard"],
    ["5412345678901245", "MasterCard"],
    ["5512345678901245", "MasterCard"],
    ["4512345678901", "Visa"],
    ["4512345678901345", "Visa"],
    ["4512345678901345345", "Visa"],
  ]

describe('<Card />', () => {
  it('correctly identifies card networks', () => {
    const newCardComponent = shallow(<NewCard />);
    TEST_CASES.forEach(([cardNumber, expectedCardType]) => {
        newCardComponent.find('#card-number').simulate('change', {target: {value: cardNumber}});
        expect(newCardComponent.find('#card-type').text()).toBe(expectedCardType);
    })
  });
  it('showns error message if card number is not correct', () => {
    const newCardComponent = shallow(<NewCard />);
    newCardComponent.find('#card-number').simulate('change', {target: {value: "5555555555"}});
    expect(newCardComponent.find('#card-type').text()).toBe("Invalid Card");
  });
})
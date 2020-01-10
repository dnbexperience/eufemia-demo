import React from 'react'
import renderer from 'react-test-renderer'
import { DatePicker } from 'dnb-ui-lib/es/components'
// import { DatePicker } from '../form-demo-01'

test('react-test-renderer', () => {
  // NB: To make sure we not render "react-text-mask"
  // we use our own input element: input_element="input"
  const component = renderer.create(
    <DatePicker date="2019-08-01" input_element="input" />
  )
  const instance = component.root
  expect(instance.props.date).toContain('2019-08-01')
})

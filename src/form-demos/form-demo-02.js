/**
 *
 */

import React from 'react'
import { P } from 'dnb-ui-lib/elements'
import Layout from '../layout/Layout'
import { Link as Anchor } from '@reach/router'
import classnames from 'classnames'

export const Link = ({ className, children, ...rest }) => (
  <Anchor className={classnames('dnb-anchor', className)} {...rest}>
    {children}
  </Anchor>
)
const FormDemo = () => {
  return (
    <Layout>
      <P>
        This page is not ready. Sorry!{' '}
        <Link to="/">I want to go back</Link>
      </P>
    </Layout>
  )
}

export default FormDemo

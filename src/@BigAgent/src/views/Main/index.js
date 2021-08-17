import React from 'react'
import { bool, shape, string } from 'prop-types'
import { useScrollLock } from '@magento/peregrine'

import { mergeClasses } from '@magento/venia-ui/lib/classify'
// import Footer from '@magento/venia-ui/lib/components/Footer'
// import Header from '@magento/venia-ui/lib/components/Header'
import defaultClasses from './main.css'
// import TopBar from '../TopBar/topbar'

const Main = props => {
  const { children, isMasked } = props
  const classes = mergeClasses(defaultClasses, props.classes)

  const rootClass = isMasked ? classes.root_masked : classes.root
  const pageClass = isMasked ? classes.page_masked : classes.page

  useScrollLock(isMasked)

  return (
    <main className={rootClass}>
      <div className={pageClass}>{children}</div>
    </main>
  )
}

export default Main

Main.propTypes = {
  classes: shape({
    page: string,
    page_masked: string,
    root: string,
    root_masked: string
  }),
  isMasked: bool
}

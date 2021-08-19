import React from 'react'
import { bool, shape, string } from 'prop-types'
import { useScrollLock } from '@magento/peregrine'

// CSS Modules
import defaultClasses from './main.css'

// Magento Components
import { mergeClasses } from '@magento/venia-ui/lib/classify'
import Footer from '@magento/venia-ui/lib/components/Footer'
import Header from '@magento/venia-ui/lib/components/Header'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: MAGENTO_SERVICE_QRAPHQL_URL,
  cache: new InMemoryCache()
})

const MainLayout = props => {
  const { children, isMasked } = props
  const classes = mergeClasses(defaultClasses, props.classes)

  const rootClass = isMasked ? classes.root_masked : classes.root
  const pageClass = isMasked ? classes.page_masked : classes.page

  useScrollLock(isMasked)

  return (
    <ApolloProvider client={client}>
      <main className={rootClass}>
        <Header />
        <div className={pageClass}>{children}</div>
        <Footer />
      </main>
    </ApolloProvider>
  )
}

// Prop Types
MainLayout.propTypes = {
  classes: shape({
    page: string,
    page_masked: string,
    root: string,
    root_masked: string
  }),
  isMasked: bool
}

export default MainLayout

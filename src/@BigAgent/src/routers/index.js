module.exports = () => [
  {
    name: 'MyGreetingRoute',
    pattern: '/greeting/:who?',
    path: require.resolve('../views/Greeting/index.js')
  },
  {
    name: 'AbcRoutes',
    pattern: '/zxz',
    path: require.resolve('../views/Greeting/index.js')
  }
]

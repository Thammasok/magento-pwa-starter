module.exports = () => [
  {
    name: 'MyGreetingRoute',
    pattern: '/greeting/:who?',
    path: require.resolve('../views/Greeting/index.jsx')
  },
  {
    name: 'TodoRoute',
    pattern: '/todo',
    path: require.resolve('../views/Todo/index.jsx')
  }
]

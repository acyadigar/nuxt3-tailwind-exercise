export default ((to, from) => {
  // const token = useState('token')
  const token = localStorage.getItem('access_token')

  if(to.path === '/') {
    if(!token) return navigateTo('/login')
  }
  
  if(to.path === '/login' && token) {
    return navigateTo('/')
  }
})

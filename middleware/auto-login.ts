export default (() => {
  const token = localStorage.getItem('access_token')
  const userData = JSON.parse(localStorage.getItem('user'))
  if(!token || !userData) return

  
  request('POST', 'api/login', userData)
})

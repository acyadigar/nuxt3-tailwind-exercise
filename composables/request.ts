interface UserData {
  email: string,
  password: string
}

interface Result {
  token?: string
}

export const request = async (method, url, data: UserData) => {
  const config = useRuntimeConfig()
  
  const result:Result = await $fetch(url, {
      baseURL: config.public.baseUrl,
      method: method,
      body: data
    })
    
    if(!result.token) return result

    // if logging in
    useState('token', () => result.token)
    useState('user', () => data)
    localStorage.setItem('access_token', result.token)
    localStorage.setItem('user', JSON.stringify(data))

    return result
}


import { isProduction } from 'helpers/isProduction'

/**
 * This helper function returns the current domain of the API.
 * If the environment is production, the production App Engine URL will be returned.
 * Otherwise, the link localhost:8080 will be returned (Spring server default port).
 * @returns {string}
 */
export const getDomain = () => {
  const prodUrl = 'https://sopra-fs23-group-28-server.oa.r.appspot.com/' // TODO: insert your prod url for server (once deployed)
  // const devUrl = 'http://192.168.32.155:8080'
  const devUrl = 'http://localhost:8080'
  // const devUrl = 'https://sopra-fs23-group-28-server.oa.r.appspot.com/' // TODO: insert your prod url for server (once deployed)

  return isProduction() ? prodUrl : devUrl
}

export const getSocketAdr = (ip) => {
  const prodUrl = 'ws://'+ip+':65080' // TODO: insert your prod url for server (once deployed)
  // const devUrl = 'http://192.168.32.155:8080'
    const devUrl = 'http://localhost:65080'
  // const devUrl = 'ws://'+ip+':65080'

  return isProduction() ? prodUrl : devUrl
}


/**
 * @param username
 * @returns {boolean}
 */
export function validUsername(username: string) {
  const valid_map = ['admin', 'editor']
  return valid_map.includes(username.trim())
}


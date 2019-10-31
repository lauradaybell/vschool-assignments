function valid(str) {
    let separate = str.split('.')
        if (separate.length === 4) {
            for (let i = 0; i < separate.length; i++) {
                if (separate[i] < 0 || separate[i] > 255) {
                    return 'invalid ip address'
                }
            }
        } else {
            return 'invalid ip address'
        }
 
  return 'valid ip address'
}

console.log(valid('172.254.1'))
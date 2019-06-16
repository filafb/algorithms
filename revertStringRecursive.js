
class RevertString {
  revertString(str) {
    if(str.length === 1) {
      return str[0]
    }
    return this.revertString(str.substring(str.length - str.length + 1)) + str[0]
  }
}

module.exports = RevertString

/*
  find first repeating letter.
  brute force: two loops to find repeated
*/

function firstRepeatingLetter(str) {
  // enter code here
    let result = null
    let memo = {}
    let firstIndex = +Infinity
    for(let i = 0; i < str.length; i++) {
        if(memo[str[i]] !== undefined) {
            console.log(str[i], firstIndex)
            if(memo[str[i]] < firstIndex) {
                result = str[i]
                firstIndex = memo[str[i]]
            }
        } else {
            memo[str[i]] = i
        }
    }

    return result

}

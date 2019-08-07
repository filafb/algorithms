/* eslint-disable complexity */
//source: https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

//     Each group has exactly X cards.
//     All the cards in each group have the same integer.

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  /**
   * approach:
   * This is a math problem. The all the group must have a great common divisor greater than 1.
   * First, we need to create the groups, counting how many times an integer is in the set.
   * Then, we have to find the GCD between all of the values. We can perform gcd(values[0], values[1]) updating the GCD until gcd(currentGCD, values[n])
   * If any time the GCD is updated as 1, return false. Otherwise, we passed all the cases
   */
  //create a map to count number of cards with the same integer
  let deckMap = {}

  for(let i = 0; i < deck.length; i++) {
    if(!deckMap[deck[i]]) {
      deckMap[deck[i]] = 1
    } else {
      deckMap[deck[i]] += 1
    }
  }

  let values = Object.values(deckMap)
  if(values[0] === 1) return false
  let gcd = values[0]
  for(let i = 1; i < values.length; i++) {
    gcd = findGcd(gcd, values[i])
    if(gcd === 1) return false
  }
  return true
};

function findGcd(a,b) {
  //keep getting the reminder between the biggest and the smallest, until b = 0. WHen it's 0, the lastest smallest is the gcd.
  return b > 0 ? findGcd(b, a%b) : a
}

module.exports = hasGroupsSizeX



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
  //create a map to count number of cards with the same integer
  let deckMap = {}

  for(let i = 0; i < deck.length; i++) {
    if(!deckMap[deck[i]]) {
      deckMap[deck[i]] = 1
    } else {
      deckMap[deck[i]] += 1
    }
  }

  let smallest = null
  for(let key in deckMap) {
    if(deckMap.hasOwnProperty(key)) {
      if(deckMap[key] === 1) return false
      if(!smallest) smallest = deckMap[key]
      else if(deckMap[key] < smallest) {
        if(smallest % deckMap[key] !== 0) return false
        smallest = deckMap[key]
      } else if(deckMap[key] % smallest !== 0) return false
    }
  }
  return true
};

console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))

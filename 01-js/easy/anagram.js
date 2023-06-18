/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/



function isAnagram(q,t) {
  q= q.toLowerCase() ;
  t = t.toLowerCase();
    if (q.length !== t.length) {
      return false;
    }

    var freq = {};
    for (var i = 0; i < q.length; i++) {
       freq[q[i]]= (freq[q[i]] || 0) + 1;
      freq[t[i]] = (freq[t[i]] || 0) - 1;
      console.log(freq)
    }
    console.log('final')
    console.log(freq)
    for (var char in freq) {
      if (freq[char] !== 0) {
        return false;
      }
    }
  

    return true;

}

module.exports = isAnagram;


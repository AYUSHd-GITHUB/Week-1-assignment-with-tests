/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 
    var result = [];
    
    var wordCheck = function(word, p) {
      return p.includes(word);
    };
  
    var isAnagram = function(q, t) {
      if (q.length !== t.length) {
        return false;
      }
  
      var freq = {};
      for (var i = 0; i < q.length; i++) {
        freq[q[i]] = (freq[q[i]] || 0) + 1;
        freq[t[i]] = (freq[t[i]] || 0) - 1;
      }
  
      for (var char in freq) {
        if (freq[char] !== 0) {
          return false;
        }
      }
  
      return true;
    };
    
    for (var j = 0; j <= s.length ; j++) {
      var stringSlice = s.slice(j, j + p.length);
      console.log(stringSlice);
      if (wordCheck(s[j],p) && isAnagram(stringSlice, p)) {
        result.push(j);
      }
    }
    
    return result;
  };



module.exports = isAnagram;

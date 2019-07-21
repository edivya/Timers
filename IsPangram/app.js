var countLetters = function(s){
    var letters = {};
    for(var i = 0; i < s.length; i++){
      var letter = s[i];
      if(letter == " ") continue;
      letters[letter] = (letters[letter] || 0) + 1;
    }
    return letters;
  };
  
  var isAnagram = function(s1, s2){
    s1 = s1.toLowerCase().trim();
    s2 = s2.toLowerCase().trim();
  
    if(s1 === s2){
      return false;
    }
  
    return _.eq(countLetters(s1), countLetters(s2));
  };
  
  // Для тех кто не хочет подключать lodash
  // http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
  var _ = {
    eq: function(a,b){
      for(var i in a) {
        if(b[i] != a[i]) return false;
      }
      for(var i in b) {
        if(b[i] != a[i]) return false;
      }
      return true;
    }
  
  };
  
  
  console.log(isAnagram("стационар", "соратница"));
  console.log(isAnagram("покраснение", "пенсионерка"));
  console.log(isAnagram("внимание", "Вениамин"));
  console.log(isAnagram("апельсин", "спаниель"));
  console.log(isAnagram("eleven plus two", "twelve plus one"));
  console.log(isAnagram("statue of liberty", "built to stay free"));
  console.log(isAnagram("older and wiser", "I learned words"));
  
  // false
  console.log(isAnagram("стационар", "стационар"));
  console.log(isAnagram("стационар", "сортница"));
  console.log(isAnagram("покранение", "пенсионерка"));
  console.log(isAnagram("внимание", "Вениамина"));
  console.log(isAnagram("eleven plus one", "спаниель"));
  console.log(isAnagram("eleven plus one", "twelve plus one"));
  console.log(isAnagram("statue of paris", "built to stay free"));
  console.log(isAnagram("older and wiser", "you learned words"));
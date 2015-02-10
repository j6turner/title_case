var titleCase = function(sentence) {
  var result = []
  var words = sentence.split(" ");
  words.forEach(function(word) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });
  return result.join(" ");
}

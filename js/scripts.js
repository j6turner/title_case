var titleCase = function(sentence) {
  var exception = ["a", "an", "and", "at", "behind", "beneath", "but", "by", "for", "from", "in", "into",
  "nor", "of", "off", "on", "onto", "or", "out", "over", "up", "the", "to", "with"]
  var result = []
  var words = sentence.split(" ");
  words.forEach(function(word) {
    if exception !== indexOf(words[0]) {
      result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    } else {
      result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) && exception.toLowerCase()
    }
  });
  return result.join(" ");
}

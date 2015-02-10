var titleCase = function(sentence) {
  var exception = ["a", "an", "and", "at", "behind", "beneath", "but", "by", "for", "from", "in", "into",
  "nor", "of", "off", "on", "onto", "or", "out", "over", "up", "the", "to", "with"]
  var result = []
  var words = sentence.split(" ");
  words.forEach(function(word) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });
  return result.join(" ");

}

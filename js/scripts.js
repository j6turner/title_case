var titleCase = function(sentence) {
  var exceptions = ["a", "an", "and", "at", "behind", "beneath", "but", "by", "for", "from", "in", "into",
  "nor", "of", "off", "on", "onto", "or", "out", "over", "up", "the", "to", "with"]
  var result = []
  var words = sentence.split(" ");
  var firstword = words.shift();

  exceptions.forEach(function(exception) {
    if firstword = exception
      result.push(firstword.charAt(0).toUpperCase() + firstword.slice(1).toLowerCase());
  })

    } else {
      words.forEach(function(word) {
      result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    }
  });
  return result.join(" ");
}

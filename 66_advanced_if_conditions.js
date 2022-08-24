// true when the user type is 'admin
// true when the isAuthor flag is true (this means that theis user is the author of the article, thus they should be able to preview it)
// false otherwise

function canPreviewArticle(type, is_author) {
  if (type === 'admin' || is_author === true) {
    return true
  } else {
    return false
  }
}

//========================================================================================

// it returns Pro when the user has paid and has completed at least 10 chanllenges (inclusive)
// it returns Trial in all other cases

function getUserPlan(has_paid, completed_challenges) {
  if (has_paid === true && completed_challenges >= 10) {
    return 'Pro'
  } else {
    return 'Trial'
  }
}

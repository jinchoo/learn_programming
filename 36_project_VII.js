// Promo Code Validator

// Suppose we have a fomr that accepts a promo code.  The promo code is only considered valid when it's betwee 5 and 10 characgers (inclusive).  This means 5,6, 7, 8, 9, and 10 characters are considered valid, but everything else is not.
// complete the function isPromoCodeValid() such that it returns true when the promo code is valid and false otherwise.

function isPromoCodeValid(code) {
  if (code.trim().length < 5) {
    return false
  } else if (code.trim().length > 10) {
    return false
  } else {
    return true
  }
}

// Shows Invalid number for negative numbers

function getMessage(value) {
  console.log(value)

  //Shows Invalid number for negative numbers
  if (value < 0) {
    return 'Invalid number'
  }

  //Shows correct message when it's ) selected
  if (value === 0) {
    return "You don't have any items in your shopping list"
  }

  //Shows correct message when it's 1 selected
  if (value === 1) {
    return 'You have one item in your shopping list'
  }

  //Shows correct message when it's more than 1 selected
  if (value > 1) {
    return 'You have more than 1 item in your shopping list'
  }
}

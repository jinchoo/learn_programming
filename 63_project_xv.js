// 1. addItems should add the item it receiveds as a parameter to the items array

function addItem(items, item) {
  items.push(item)
  return items
}
// 2. exportLowerCasedCSV should return a string containing all the items in lower case and separated by a comma and a space character.
function exportLowerCasedCSV(items) {
  return items
    .map(function (item) {
      return item.toLowerCase()
    })
    .join(', ')
}

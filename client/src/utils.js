const books = ['📙', '📘', '📗', '📕', '📒']
export const random = max => Math.floor(Math.random() * Math.floor(max))
export const getBookIcon = num =>
  books[num ? num % books.length : random(books.length)]

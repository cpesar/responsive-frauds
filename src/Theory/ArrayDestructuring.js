import React from 'react'

function ArrayDestructuring() {

  function makeArray() {
    return [1, 31, 34, 69, 420]
  }

  // Without destructuring
  // const myArray = makeArray()
  // const firstEl = myArray[0]
  // const secondEl = myArray[1]

  // Using Destructuring
  const [firstEl, secondEl] = makeArray()
  console.log(firstEl, secondEl)

  return (
    <></>
  )
}

export default ArrayDestructuring
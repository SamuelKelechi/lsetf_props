import React from 'react'
import Property from './Component/Property'

function App () {
  return(
    <>
      <div>
        HELLO World
        <Property col="green" content="Hi, am the first Props Component"/>

        <div>Am not among the props component</div>
        <Property content="Hi, am the Second Props Component"/>
        <Property col="pink" content="Hi, am the Third Props Component"/>
        <Property content="Hi, am the Fourth Props Component"/>
        <Property col="blue" content="Hello" direct="center"/>
        <Property content="Have Changed"/>
        <Property col="yellow" content="Good to go"/>

      </div>
    </>
  )
}
export default App
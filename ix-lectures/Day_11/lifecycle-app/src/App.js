import React, { useState } from 'react'
import Clock from './components/Clock'
import Counter from './components/Counter'

export default function App() {

  const [showCounter, setShowCounter] = useState(true);

  const [appCount, setAppCount] = useState(0);

  return (
    <div>
      {/* <Clock></Clock> */}

      {
        showCounter ?
          <Counter appCount={appCount} />
          :
          <></>
      }

      <button
        onClick={() => setShowCounter(!showCounter)}
      >
        Toggle show Counter
      </button>

      <button onClick={() => setAppCount(appCount + 1)}>
        Inc App Count
      </button>



    </div>
  )
}

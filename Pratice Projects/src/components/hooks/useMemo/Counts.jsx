import React, { memo, useRef } from 'react'

 function Counts() {
    const renderCount = useRef(0);
    console.log(renderCount);

  return (
    <div>
        <p>Noting Changed here <span>{renderCount.current++} times</span></p>
    </div>
  )
}

export default React.memo(Counts);
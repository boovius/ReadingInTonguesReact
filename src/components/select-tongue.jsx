import React, { useState } from 'react';

const SelectTongue = ({tongueCodes, setTarget, initialTarget}) => {
  const [val, setVal] = useState(initialTarget);
  const updateVal = (val) => {
    setVal(val);
    setTarget(val);
  }

  return (
    <select
      onChange={e => updateVal(e.target.value) }
      name='tongue'
      id='tongue'
      value={val}
    >
      {
        tongueCodes.sort((a,b) => {
          if (a.tongue < b.tongue) {
            return -1
          } else if (a.tongue > b.tongue) {
            return 1
          } else {
            return 0
          }
        }).map(({tongue, code}, i) => (
          <option key={i} value={code}>{tongue}</option>
        ))
      }
    </select>
  )
}

export default SelectTongue;

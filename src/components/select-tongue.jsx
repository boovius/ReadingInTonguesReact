import React from 'react';

const SelectTongue = ({tongueCodes, setTarget, initialTarget}) => (
  <select
    onChange={e => setTarget(e.target.value) }
    name='tongue'
    id='tongue'
    value='en'
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

export default SelectTongue;

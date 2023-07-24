import "./App.css";
import { useEffect, useState } from 'react';

const App = () => {

  const min = 0;
  const max = 99;

  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  var thumbsize = 10;
  const width = 200;
  const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const minPercent = ((minVal - min) / (avg - min)) * 100;
  const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
  const styles = {
    min: {
      width: minWidth,
      left: 0,
      "--minRangePercent": `${minPercent}%`
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      "--maxRangePercent": `${maxPercent}%`
    }
  };

  useEffect(() => {
    setAvg(Math.round((maxVal + minVal) / 2));
  }, [minVal, maxVal]);

  return (
    <>
    <center>
      <div className="slider">
        <input
          className="thumb thumb--left"
          name="min"
          type="range"
          style={styles.min}
          min={min}
          max={avg}
          value={minVal}
          onChange={e => setMinVal(+e.target.value)}
        />
        <input
          className="thumb thumb--right"
          name="max"
          type="range"
          style={styles.max}
          min={avg}
          max={max}
          value={maxVal}
          onChange={e => setMaxVal(+e.target.value)}
        />
      </div>
    </center>
    </>
  )
  
}

export default App;

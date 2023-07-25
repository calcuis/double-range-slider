## double-range-slider

This UI component (double-range-slider) is written in TypeScript. Let's break down the code step by step and explain what it does:

```
const min = 0;
const max = 99;
```

These lines declare two constants min and max with values 0 and 99, respectively. These values represent the minimum and maximum possible values for the range slider.

```
const [avg, setAvg] = useState((min + max) / 2);
const [minVal, setMinVal] = useState(min);
const [maxVal, setMaxVal] = useState(max);
```

Here, three states are declared using the useState hook from React. `avg`, `minVal`, and `maxVal` are the state variables, and `setAvg`, `setMinVal`, and `setMaxVal` are the functions to update these state variables. `avg` is initialized with the average of min and max, which would be (0 + 99) / 2 = 49.5. `minVal` is initialized with the value of min, which is 0. `maxVal` is initialized with the value of max, which is 99.

```
var thumbsize = 10;
```

A variable `thumbsize` is declared and initialized with a value of 10. It likely represents the size (width) of the slider's thumb or handle.

```
const width = 200;
```

Another constant `width` is declared and initialized with a value of 200. This might represent the total width of the slider track.

```
const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
```

`minWidth` is calculated using the formula to determine the width of the slider's minimum range. It takes into account the thumbsize and the ratio of the difference between `avg` and `min` to the difference between `max` and `min`, scaled to the width of the slider track minus twice the thumbsize.

```
const minPercent = ((minVal - min) / (avg - min)) * 100;
```

`minPercent` is calculated to determine the percentage of the slider track that should be filled on the left side of the thumb to represent the selected minimum value (`minVal`). It's calculated using the ratio of the difference between `minVal` and `min` to the difference between `avg` and `min`, scaled to a percentage.

```
const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
```

`maxPercent` is calculated to determine the percentage of the slider track that should be filled on the right side of the thumb to represent the selected maximum value (`maxVal`). It's calculated using the ratio of the difference between `maxVal` and `avg` to the difference between `max` and `avg`, scaled to a percentage.

```
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
```

An object `styles` is created, which contains two properties, `min` and `max`. These properties define the styles for the minimum and maximum thumbs (handles) of the slider, respectively. The styles include width, left, and CSS variables `--minRangePercent` and `--maxRangePercent`.

For the `min` property, width is set to `minWidth`, which we calculated earlier. left is set to 0 since it represents the starting position of the minimum thumb. The `--minRangePercent` CSS variable is set to the previously calculated minPercent to determine the filled percentage on the left side of the thumb.

For the `max` property, width is calculated similar to `minWidth`, but it's based on the distance between `avg` and `max` instead. left is set to `minWidth` to position the maximum thumb after the minimum thumb. The `--maxRangePercent` CSS variable is set to the previously calculated `maxPercent` to determine the filled percentage on the right side of the thumb.

```
useEffect(() => {
  setAvg(Math.round((maxVal + minVal) / 2));
}, [minVal, maxVal]);
```

`useEffect` is used to update the `avg` state whenever `minVal` or `maxVal` changes. It calculates the new average value and rounds it to the nearest integer using `Math.round()`. The effect ensures that the average value is always up to date based on the selected minimum and maximum values.

```
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
);
```

This code block above (return) is rendering a range slider component using two input elements. The component is designed to have two draggable thumbs that can be used to select a range of values between `min` and `max`.

The first input element represents the left thumb (min thumb) of the range slider. It has the following attributes:

`className="thumb thumb--left"`: This sets the CSS classes for the thumb element to customize its appearance.

`name="min"`: The name of the input element, which can be used for form submissions.

`type="range"`: Specifies that this input is of type range (slider).

`style={styles.min}`: This sets the inline CSS styles for the left thumb based on the styles object previously defined.

`min={min}`: Sets the minimum value of the range slider to 0 (since min is 0).

`max={avg}`: Sets the maximum value of the range slider to the avg value calculated in the TypeScript code (initially set to 49.5).

`value={minVal}`: Binds the value of the input to the minVal state variable from the useState hook.

`onChange={e => setMinVal(+e.target.value)}`: When the user interacts with the slider and changes its value, this onChange handler updates the minVal state with the new value. The + before e.target.value is used to convert the string value to a number.

The second input element represents the right thumb (max thumb) of the range slider. It has similar attributes, but with some differences:

`className="thumb thumb--right"`: This sets the CSS classes for the right thumb element.

`name="max"`: The name of the input element, again for form submissions.

`type="range"`: Specifies that this input is of type range (slider).

`style={styles.max}`: This sets the inline CSS styles for the right thumb based on the styles object defined earlier.

`min={avg}`: Sets the minimum value of the range slider to the avg value calculated in the TypeScript code (initially set to 49.5).

`max={max}`: Sets the maximum value of the range slider to 99 (since max is 99).

`value={maxVal}`: Binds the value of the input to the maxVal state variable from the useState hook.

`onChange={e => setMaxVal(+e.target.value)}`: When the user interacts with the slider and changes its value, this onChange handler updates the maxVal state with the new value. The + before e.target.value is used to convert the string value to a number.

### summary
This component creates a visually appealing range slider with two draggable thumbs that allow users to select a range of values between a certain range (0 and 99 in this example). The component's appearance and behavior are controlled by the `styles` object and the state variables `minVal` and `maxVal`. The `useEffect` hook ensures that the `avg` state remains up-to-date based on the selected `minVal` and `maxVal`.

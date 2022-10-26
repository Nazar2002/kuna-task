import React from 'react';
import { useViewport } from "./hooks";

function App() {
  const { lessThan, greaterThan, betweenBreakpoints } = useViewport();

  const sm = lessThan('sm');

  const xl = greaterThan('xl');

  const between = betweenBreakpoints('sm', 'lg');

  return (
    <div>
      <h2>Width less than SM: 576  {sm.toString()}</h2>

      <h2>Width greater than XL: 1024  {xl.toString()}</h2>

      <h2>Between breakpoints SM: 576 and XL: 1024  {between.toString()}</h2>
    </div>
  );
}

export default App;

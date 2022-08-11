import React from 'react';


function Boxed() {
  return (
    <div class="slidecontainer">
      <p>Range slider for job length:</p>
      <input type="range" min="1" max="5" value="3"></input>
    </div>
  );
}
   export default Boxed;

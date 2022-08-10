import logo from './logo.svg';
import './App.css';

function App() {
  function checkSlotAvailability(time, jobLength, date, availability) {
    const bookingHrs = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const minJobLen = 1;
    const maxJobLen = 5;
    const buffer = 1;
    const currentDayBuffer = 1 + buffer;
    let bookingEndTime = time + jobLength;
    let bookingStartTime;
    let bookingDate;
    //this if condition can be replaced by the slider
    if (jobLength > maxJobLen) {
      return 'A job cannot exceed 5 hours';
    }
    if (jobLength < minJobLen) {
      return 'A job cannot be done within an hour ';
    }
    // replace the about condition with the slider 

    if (time !== bookingHrs[0] && time !== bookingHrs[bookingHrs.length - 1]) {
      if (time !== bookingHrs[1]) {
        if (bookingDate === date) {
          bookingStartTime = time - currentDayBuffer;
        }
      }
      else 
        bookingStartTime = time - buffer;
    }
    if (availability.indexOf(time) === -1)// how to include  date passed in for the condition
    {
      return 'Full';
    }
    else if(bookingEndTime > bookingHrs[bookingHrs.length - 1] || time > bookingStartTime){
      return 'Unavailable'
    }
    else
      return 'Available';
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

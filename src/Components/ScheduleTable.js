import data from '../data.json'
import * as moment from 'moment'
import '../App.css';
import Boxed from './Box';


function ScheduleTable(){
    const dates = []
    data.map((date) => dates.push(date.Date))
    return (
      <div className="App">
        <Boxed></Boxed>
        <table cellSpacing="0">
          <thead>
            <tr>
              <td></td>
              {
                dates.map((data, i) => {
                  return (
  
                    <td>{moment(data).format('dddd Do')}</td>
  
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:00 - 10:00</td>
            </tr>
            <tr>
              <td>10:00 - 11:00</td>
            </tr>
            <tr>
              <td>11:00 - 12:00</td>
            </tr>
            <tr>
              <td>12:00 - 13:00</td>
            </tr>
            <tr>
              <td>13:00 - 14:00</td>
            </tr>
            <tr>
                      <td>14:00 - 15:00</td>
                  </tr>
                  <tr>
                      <td>15:00 - 16:00</td>
                  </tr>
                  <tr>
                      <td>16:00 - 17:00</td>
                  </tr>
                  <tr>
                      <td>17:00 - 18:00</td>
                  </tr>
  
            {/* {data.map((data, index) => {
              return (
                <tr>
                  <td> {data.HoursAvailable} </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
}
export default ScheduleTable;
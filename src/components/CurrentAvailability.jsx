import * as React from "react";
import '../App.css';

function CurrentAvailability() {
    return (
      <div>
        <h1 className = "font-bold">Available Parking Spaces</h1>

        <table>
            <tr>
                <td>
                    <a href="#" className="aps_link">Nutwood Structure</a><br/>
                    <span className="details">Total Spots 2484<br/>2/28/2025 6:38:00 PM</span><br/>
                </td>
                <td class="spots">1980</td>
                <td><a href="#" className="aps_link">Levels (1)</a></td>
            </tr>

            <tr>
                <td>
                    <a href="#" className="aps_link">State College Structure</a><br/>
                    <span class="details">Total Spots 1373<br/>2/28/2025 6:38:00 PM</span><br/>
                </td>
                <td class="spots">1204</td>
                <td><a href="#" className="aps_link">Levels (2)</a></td>
            </tr>

            <tr>
                <td>
                    <a href="#" className="aps_link">Eastside North</a><br/>
                    <span class="details">Total Spots 1880<br/>2/28/2025 6:38:00 PM</span><br/>
                </td>
                <td class="spots">1719</td>
                <td><a href="#" className="aps_link">Levels (3)</a></td>
            </tr>

            <tr>
                <td>
                    <a href="#" className="aps_link">Eastside South</a><br/>
                    <span class="details">Total Spots 1341<br/>2/28/2025 6:38:00 PM</span><br/>
                </td>
                <td class="spots">1335</td>
                <td><a href="#" className="aps_link">Levels (4)</a></td>
            </tr>

            <tr>
                <td>
                    <a href="#" className="aps_link">Lot A & G</a><br/>
                    <span class="details">Total Spots 2104<br/>2/28/2025 6:38:00 PM</span><br/>
                </td>
                <td class="spots">1336</td>
                <td><a href="#" className="aps_link">Levels (5)</a></td>
            </tr>
        </table>
      </div>
    )
  }

  
export default CurrentAvailability
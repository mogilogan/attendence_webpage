import React,{useState,useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

import  monday from './mon.json';

const Homepage =()=>{
    const [day,setDay]=useState(Date().toLocaleString());
    const [showhide,setShowhide]=useState('');
    const tableRef = useRef(null);

    const handleshowhide=(event)=>{
        const getday = event.target.value;    
        setShowhide(getday);
      }

      const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })
    

    return(
        <div>
            <h1>{day}</h1>

            <select onChange={(e)=>(handleshowhide(e))}>
                <option value="">Select Day</option>
                <option value="mon">MONDAY</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thu">Thursday</option>
                <option value="fri">Friday</option>
            </select>

            {showhide==="mon" && (
            <div>
            <button onClick={onDownload}> Export excel </button>

             <table  ref={tableRef}>
              <tbody>
                <tr>
                    <th>Register No.</th>
                    <th>Name</th>
                    <th>{monday.one}</th>
                    <th>{monday.two}</th>
                    <th>{monday.three}</th>
                    <th>{monday.four}</th>
                    <th>{monday.five}</th>
                    <th>{monday.six}</th>
                    <th>{monday.seven}</th>
                    <th>{monday.eight}</th>
                </tr>
                <tr>
                    <td>20EC1001</td>
                    <td>Aarthe</td>
                    <td><select><option>Present</option><option>Absent</option></select></td>
                </tr>
                <tr>
                    <td>Alberto</td>
                    <td>Lopez</td>
                    <td>94</td>
                </tr>
              </tbody>
            </table>

        </div>
            )}

{showhide==="tue" && (
            <div>
                <p>tue</p>
            </div>
            )}

{showhide==="wed" && (
            <div>
                <p>wed</p>
            </div>
            )}

{showhide==="thu" && (
            <div>
                <p>thu</p>
            </div>
            )}

{showhide==="fri" && (
            <div>
                <p>fri</p>
            </div>
            )}





        </div>
        
        
    )
}

export default Homepage;
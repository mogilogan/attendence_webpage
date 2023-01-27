import React,{useState,useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

import  monday from './mon.json';
import tuesday from './tue.json';
import wednesday from './wed.json';
import thursday from './thu.json';
import friday from './fri.json';


const Homepage =()=>{
    const [day,setDay]=useState(Date().toLocaleString());
    const [showhide,setShowhide]=useState('');
    const [showlist,setShowlist]=useState('');
    const tableRef = useRef(null);

    const handleshowhide=(event)=>{
        const getday = event.target.value;    
        setShowhide(getday);
      }
      const handleshowlist=(event)=>{
        const getperiod = event.target.value;    
        setShowlist(getperiod);
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
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="mon">{monday.one}</option>
                <option value="mon">{monday.two}</option>
                <option value="mon">{monday.three}</option>
                <option value="mon">{monday.four}</option>
                <option value="mon">{monday.five}</option>
                <option value="mon">{monday.six}</option>
                <option value="mon">{monday.seven}</option>
                <option value="mon">{monday.eight}</option>
            </select>
          </div>
            )}
            {(showlist==="oec"||) && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option >{monday.one}</option>
                <option>{monday.two}</option>
                <option>{monday.three}</option>
                <option>{monday.four}</option>
                <option>{monday.five}</option>
                <option>{monday.six}</option>
                <option>{monday.seven}</option>
                <option>{monday.eight}</option>
            </select>
          </div>
            )}






        </div>
        
        
    )
}

export default Homepage;
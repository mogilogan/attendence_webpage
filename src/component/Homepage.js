import React,{useState,useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

import  monday from './mon.json';
import tuesday from './tue.json';
import wednesday from './wed.json';
import thursday from './thu.json';
import friday from './fri.json';


const Homepage =()=>{
    const [day,setDay]=useState(Date().toLocaleString().slice(0,15));
    const [showhide,setShowhide]=useState('');
    const [showlist,setShowlist]=useState('');
    const tableRef = useRef(null);
    const [aarthe,setAarthe]= useState("Absent");
    const [abhinav,setAbhinav]=useState("Absent");
    const [aman,setAman]=useState("Absent");
    const [ashmitha,setAshmitha]=useState("Absent");
    const [aswinr,setAswinr]=useState("Absent");
    const [aswinv,setAswinv]=useState("Absent");
    const [bala,setBala]=useState("Absent");
    const [bogi,setBogi]=useState("Absent");
    const [chaitanyavaradhan,setChaitanyavaradhan]=useState("Absent");
    const [sreeteja,setSreeja]=useState("Absent");
    const [upendra,setUpendra]=useState("Absent");
    const [cyril,setCyril]=useState("Absent");
    const [gowthamsai,setGowthamsai]=useState("Absent");
    const [dana,setDana]=useState("Absent");
    const [deepak,setDeepak]=useState("Absent");
    const [divakar,setDivakar]=useState("Absent");
    const [farvesh,setFarvesh]=useState("Absent");
    const [arjun,setArjun]=useState("Absent");
    const [ganja,setGanja]=useState("Absent");

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
                <option value="OEC">{monday.one}</option>
                <option value="VLSI">{monday.two}</option>
                <option value="CSE">{monday.three}</option>
                <option value="IEM">{monday.four}</option>
                <option value="H/M">{monday.five}</option>
                <option value="MOE">{monday.six}</option>
                <option value="Ly">{monday.seven}</option>
                <option value="SP">{monday.eight}</option>
            </select>
          </div>
            )}
            {(showlist==="OEC"||showlist==="VLSI"||showlist==="CSE"||showlist==="IEM"||showlist==="H/M"||showlist==="MOE"||showlist==="LY"||showlist==="SP") && (
          <div>
            <center>
            <h3>{showlist}</h3>

            <h4>{day}</h4>
            </center>




            <button onClick={onDownload}> Export excel </button>
            <br />
            <br />
            <table >
                  <tbody>
                  <tr>
                        <th>DAY: {day.slice(0,3)}</th>
                        <th>DATE: {day.slice(4,15)}</th>
                        <th>SUBJECT: {showlist}</th>
                    </tr>
                    <tr>
                        <th>REGISTER NO.</th>
                        <th>NAME</th>
                        <th>ATTENDENCE</th>
                    </tr>
                    <tr>
                        <td>20EC1001</td>
                        <td>AARTHE</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAarthe("Present")} else {setAarthe("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1002</td>
                        <td>ABHINAV KUMAR</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAbhinav("Present")} else {setAbhinav("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1003</td>
                        <td>AMAN SINGH</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAman("Present")} else {setAman("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1004</td>
                        <td>ASHMITHA M</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAshmitha("Present")} else {setAshmitha("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1005</td>
                        <td>ASWIN R</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAswinr("Present")} else {setAswinr("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1006</td>
                        <td>ASWIN V</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAswinv("Present")} else {setAswinv("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1007</td>
                        <td>BALAMURUGANANTHAM K</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setBala("Present")} else {setBala("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1009</td>
                        <td>BOGI VIJAY KUMAR</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setBogi("Present")} else {setBogi("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1010</td>
                        <td>CHAITANYA VARDHAN KOTE</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setChaitanyavaradhan("Present")} else {setChaitanyavaradhan("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1011</td>
                        <td>CHANDIKA SREE TEJA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setSreeja("Present")} else {setSreeja("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1012</td>
                        <td>CHENNUPATI VENKATA UPENDRA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setUpendra("Present")} else {setUpendra("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1013</td>
                        <td>CYRIL CHRISTOPHER B</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setCyril("Present")} else {setCyril("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1014</td>
                        <td>DAMALACHERUVU GOWTHAM SAI</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setGowthamsai("Present")} else {setGowthamsai("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1015</td>
                        <td>DANAPRASAD M</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setDana("Present")} else {setDana("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1016</td>
                        <td>DEEPAK M</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setDeepak("Present")} else {setDeepak("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1017</td>
                        <td>DIVAKAR.J</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setDivakar("Present")} else {setDivakar("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1018</td>
                        <td>FARVESH H</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setFarvesh("Present")} else {setFarvesh("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1019</td>
                        <td>G ARJUN KRISHNA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setArjun("Present")} else {setArjun("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1020</td>
                        <td>GANJA YUVARANI</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setGanja("Present")} else {setGanja("Absent")}}}  /></td>
                    </tr>
                  </tbody>
                </table>
            <br />
            <br />
            

                 <table  ref={tableRef}>
                  <tbody>
                    <tr>
                        <th>REGISTER NO.</th>
                        <th>NAME</th>
                        <th>ATTENDENCE</th>
                    </tr>
                    <tr>
                        <td>20EC1001</td>
                        <td>AARTHE</td>
                        <td>{aarthe}</td>
                    </tr>
                    <tr>
                        <td>20EC1002</td>
                        <td>ABHINAV KUMAR</td>
                        <td>{abhinav}</td>
                    </tr>
                    <tr>
                        <td>20EC1003</td>
                        <td>AMAN SINGH</td>
                        <td>{aman}</td>                    </tr>
                    <tr>
                        <td>20EC1004</td>
                        <td>ASHMITHA M</td>
                        <td>{ashmitha}</td>                    </tr>
                    <tr>
                        <td>20EC1005</td>
                        <td>ASWIN R</td>
                        <td>{aswinr}</td>                    </tr>
                    <tr>
                        <td>20EC1006</td>
                        <td>ASWIN V</td>
                        <td>{aswinv}</td>                    </tr>
                    <tr>
                        <td>20EC1007</td>
                        <td>BALAMURUGANANTHAM K</td>
                        <td>{bala}</td>                    </tr>
                    <tr>
                        <td>20EC1009</td>
                        <td>BOGI VIJAY KUMAR</td>
                        <td>{bogi}</td>                    </tr>
                    <tr>
                        <td>20EC1010</td>
                        <td>CHAITANYA VARDHAN KOTE</td>
                        <td>{chaitanyavaradhan}</td>                    </tr>
                    <tr>
                        <td>20EC1011</td>
                        <td>CHANDIKA SREE TEJA</td>
                        <td>{sreeteja}</td>                    </tr>
                    <tr>
                        <td>20EC1012</td>
                        <td>CHENNUPATI VENKATA UPENDRA</td>
                        <td>{upendra}</td>                    </tr>
                    <tr>
                        <td>20EC1013</td>
                        <td>CYRIL CHRISTOPHER B</td>
                        <td>{cyril}</td>                    </tr>
                    <tr>
                        <td>20EC1014</td>
                        <td>DAMALACHERUVU GOWTHAM SAI</td>
                        <td>{gowthamsai}</td>                    </tr>
                    <tr>
                        <td>20EC1015</td>
                        <td>DANAPRASAD M</td>
                        <td>{dana}</td>                    </tr>
                    <tr>
                        <td>20EC1016</td>
                        <td>DEEPAK M</td>
                        <td>{deepak}</td>                    </tr>
                    <tr>
                        <td>20EC1017</td>
                        <td>DIVAKAR.J</td>
                        <td>{divakar}</td>                    </tr>
                    <tr>
                        <td>20EC1018</td>
                        <td>FARVESH H</td>
                        <td>{farvesh}</td>                    </tr>
                    <tr>
                        <td>20EC1019</td>
                        <td>G ARJUN KRISHNA</td>
                        <td>{arjun}</td>                    </tr>
                    <tr>
                        <td>20EC1020</td>
                        <td>GANJA YUVARANI</td>
                        <td>{ganja}</td>                    </tr>
                  </tbody>
                </table>
          </div>
            )}






        </div>
        
        
    )
}

export default Homepage;
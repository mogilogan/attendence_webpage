import React,{useState,useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

import  timetable from './days.json';



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
        filename: `${day.slice(0,3)} ${showlist} ${day.slice(4,15)}`,
        sheet: 'Users'
    })
    

    return(
        <div>
            <h1>{day}</h1>

            <select onChange={(e)=>(handleshowhide(e))}>
                <option value="">Select Day</option>
                <option value="mon">Monday</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thu">Thursday</option>
                <option value="fri">Friday</option>
            </select>

            {showhide==="mon" && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="OEC">{timetable.mon.one}</option>
                <option value="VLSI">{timetable.mon.two}</option>
                <option value="CSE">{timetable.mon.three}</option>
                <option value="IEM">{timetable.mon.four}</option>
                <option value="H/M">{timetable.mon.five}</option>
                <option value="MOE">{timetable.mon.six}</option>
                <option value="Ly">{timetable.mon.seven}</option>
                <option value="SP">{timetable.mon.eight}</option>
            </select>
          </div>
            )}
               {showhide==="tue" && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="VLSI">{timetable.tue.one}</option>
                <option value="MOE">{timetable.tue.two}</option>
                <option value="CSE">{timetable.tue.three}</option>
                <option value="H/M">{timetable.tue.four}</option>
                <option value="IEM">{timetable.tue.five}</option>
                <option value="RC">{timetable.tue.six}</option>
                <option value="EITK">{timetable.tue.seven}</option>
                <option value="EITK">{timetable.tue.eight}</option>
            </select>
          </div>
            )}
                {showhide==="wed" && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="H/M">{timetable.wed.one}</option>
                <option value="LAB">{timetable.wed.two}</option>
                <option value="LAB">{timetable.wed.three}</option>
                <option value="LAB">{timetable.wed.four}</option>
                <option value="OEC">{timetable.wed.five}</option>
                <option value="T&P">{timetable.wed.six}</option>
                <option value="T&P">{timetable.wed.seven}</option>
                <option value="T&P">{timetable.wed.eight}</option>
            </select>
          </div>
            )}
                {showhide==="thu" && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="CSE">{timetable.thu.one}</option>
                <option value="MOE">{timetable.thu.two}</option>
                <option value="DCN">{timetable.thu.three}</option>
                <option value="OEC">{timetable.thu.four}</option>
                <option value="RC">{timetable.thu.five}</option>
                <option value="LAB">{timetable.thu.six}</option>
                <option value="LAB">{timetable.thu.seven}</option>
                <option value="LAB">{timetable.thu.eight}</option>
            </select>
          </div>
            )}
                {showhide==="fri" && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="IEM">{timetable.fri.one}</option>
                <option value="DCN">{timetable.fri.two}</option>
                <option value="CSE">{timetable.fri.three}</option>
                <option value="VLSI">{timetable.fri.four}</option>
                <option value="H/M">{timetable.fri.five}</option>
                <option value="LAB">{timetable.fri.six}</option>
                <option value="LAB">{timetable.fri.seven}</option>
                <option value="LAB">{timetable.fri.eight}</option>
            </select>
          </div>
            )}






            {(showlist==="OEC"||showlist==="VLSI"||showlist==="CSE"||showlist==="IEM"||showlist==="H/M"||showlist==="MOE"||showlist==="LY"||showlist==="SP"||showlist==="RC"||showlist==="EITK"||showlist==="LAB"||showlist==="T&P"||showlist==="DCN") && (
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
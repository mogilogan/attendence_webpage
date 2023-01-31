import React,{useState,useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

import  timetable from './days.json';
import './style.css';



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
    const [gnana,setGnana]=useState("Absent");
    const [gokul,setGokul]=useState("Absent");
    const [guru,setGuru]=useState("Absent");
    const [hari,sethari]=useState("Absent"); 
    const [harshal,setHarshal]=useState("Absent");
    const [hrithin,setHrithin]=useState("Absent");
    const [jangam,setJangam]=useState("Absent");
    const [jayaraj,setJayaraj]=useState("Absent");
    const [joseph,setJoseph]=useState("Absent");
    const [saiswarup,setSaiswarup]=useState("Absent");
    const [ragavi,setRagavi]=useState("Absent");
    const [harsha,setHarsha]=useState("Absent");
    const [kalai,setKalai]=useState("Absent"); 
    const [bhargav,setBhargav]=useState("Absent");
    const [kalyan,setKalyan]=useState("Absent");
    const [kamalesh,setKamalesh]=useState("Absent");
    const [karan,setKaran]=useState("Absent");
    const [hemanth,setHemanth]=useState("Absent"); 
    const [kaushik,setKaushik]=useState("Absent");
    const [keerthi,setKeerthi]=useState("Absent");
    const [krishna,setKrishna]=useState("Absent");
    const [manju,setManju]=useState("Absent");
    const [madesh,setMadesh]=useState("Absent");
    const [sahithi,setSahithi]=useState("Absent");
    const [mamatha,setMamatha]=useState("Absent");
    const [manojl,setManojl]=useState("Absent");
    const [mangai,setMangai]=useState("Absent");
    const [manjula,setManjula]=useState("Absent");
    const [manojs,setManojs]=useState("Absent");
    const [mogi,setMogi]=useState("Absent");
    const [basith,setBasith]=useState("Absent");
    const [ajmal,setAjmal]=useState("Absent");
    const [victor,setVictor]=useState("Absent");
    const [murali,setMurali]=useState("Absent");
    const [nandhini,setNandhini]=useState("Absent");
    const [harshitha,setHarshitha]=useState("Absent");
    const [napps,setNapps]=useState("Absent");
    const [naveen,setNaveen]=useState("Absent");
    const [ajay,setAajay]=useState("Absent");
    const [rihana,setRihana]=useState("Absent");
    const [mani,setMani] = useState("Absent");

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
            <center>

            <h2>Take Attendence For ECE-A</h2>
            <h1>Today's Date: {day}</h1>

            <select onChange={(e)=>(handleshowhide(e))}>
                <option value="">Select Day</option>
                <option value="mon">Monday</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thu">Thursday</option>
                <option value="fri">Friday</option>
            </select>
            <br />
            <br />

            {showhide==="mon" && (
          <div>
            <select onChange={(e)=>(handleshowlist(e))}>
                <option value="">Select Class</option>
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
            <option value="">Select Class</option>
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
            <option value="">Select Class</option>
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
            <option value="">Select Class</option>
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
            <option value="">Select Class</option>
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
            </center>






            {(showlist==="OEC"||showlist==="VLSI"||showlist==="CSE"||showlist==="IEM"||showlist==="H/M"||showlist==="MOE"||showlist==="LY"||showlist==="SP"||showlist==="RC"||showlist==="EITK"||showlist==="LAB"||showlist==="T&P"||showlist==="DCN") && (
          <div>
            <center>
            <h2>{showlist}</h2>

            
            <br />
            <br />
            <table style={{borderCollapse:'collapse',borderSpacing:'0',width:'80%',border:'1px solid #ddd'}}>
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
                    <tr>
                        <td>20EC1022</td>
                        <td>GNANAVENDANE T</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setGnana("Present")} else {setGnana("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1023</td>
                        <td>GOKULKRISHNA.P</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setGokul("Present")} else {setGokul("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1024</td>
                        <td>GURUPRASAD R</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setGuru("Present")} else {setGuru("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1025</td>
                        <td>HARIHARAN G V</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){sethari("Present")} else {sethari("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1026</td>
                        <td>HARSHAL KARIYA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setHarshal("Present")} else {setHarshal("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1027</td>
                        <td>HRITHIN SUNIL</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setHrithin("Present")} else {setHrithin("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1028</td>
                        <td>JANGAM CHAITANYA SAI</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setJangam("Present")} else {setJangam("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1029</td>
                        <td>JAYRAJ POZHILAN</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setJayaraj("Present")} else {setJayaraj("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1030</td>
                        <td>JOSEPH G CARDOZ</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setJoseph("Present")} else {setJoseph("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1031</td>
                        <td>JJYOTHI SRI SAI SWARUP NADENDLA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setSaiswarup("Present")} else {setSaiswarup("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1032</td>
                        <td>K RAGAVI</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setRagavi("Present")} else {setRagavi("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1033</td>
                        <td>KADALI HARSHA SRI SAMPATH</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setHarsha("Present")} else {setHarsha("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1034</td>
                        <td>KALAIMATHI S</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKalai("Present")} else {setKalai("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1035</td>
                        <td>KALISETTY BHARGAV NAIDU</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setBhargav("Present")} else {setBhargav("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1036</td>
                        <td>KALYAN</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKalyan("Present")} else {setKalyan("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1037</td>
                        <td>KAMALESHKUMAR K</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKamalesh("Present")} else {setKamalesh("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1038</td>
                        <td>KARAN J</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKaran("Present")} else {setKaran("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1039</td>
                        <td>KATTOJU HEMANTH</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setHemanth("Present")} else {setHemanth("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1040</td>
                        <td>KAUSHIK</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKaushik("Present")} else {setKaushik("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1041</td>
                        <td>KEERTHIVASAN R</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKeerthi("Present")} else {setKeerthi("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1042</td>
                        <td>KRISHNA TEJA MURIKIPUDI</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setKrishna("Present")} else {setKrishna("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1044</td>
                        <td>MADDUKURI SRIMANJUNADH</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setManju("Present")} else {setManju("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1045</td>
                        <td>MADESHVARADHAN V</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setMadesh("Present")} else {setMadesh("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1046</td>
                        <td>MALLELA SATYA MANIKYA SAHITHI</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setSahithi("Present")} else {setSahithi("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1047</td>
                        <td>MAMATHA B</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setMamatha("Present")} else {setMamatha("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1048</td>
                        <td>MANCHIKALAPATI MANOJ LEKYENDRA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setManojl("Present")} else {setManojl("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1049</td>
                        <td>MANGAIYARKARASI.M</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setMangai("Present")} else {setMangai("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1050</td>
                        <td>MANJULA.K</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setManjula("Present")} else {setManjula("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1051</td>
                        <td>MANOJ.S</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setManojs("Present")} else {setManojs("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1052</td>
                        <td>MOGINDER E</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setMogi("Present")} else {setMogi("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1053</td>
                        <td>MOHAMMED ABDUL BASITH.A</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setBasith("Present")} else {setBasith("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1054</td>
                        <td>MUHAMMED AJMAL SHAMEER</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAjmal("Present")} else {setAjmal("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1056</td>
                        <td>MUPPARAPU VICTOR MATTHEW</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setVictor("Present")} else {setVictor("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1057</td>
                        <td>MURALIDHARAN B</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setMurali("Present")} else {setMurali("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1058</td>
                        <td>NANDHINI P</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setNandhini("Present")} else {setNandhini("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1059</td>
                        <td>NANDI SREE HARSHITHA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setHarshitha("Present")} else {setHarshitha("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1060</td>
                        <td>NAPPINNAI V</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setNapps("Present")} else {setNapps("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC1061</td>
                        <td>NATAKARANI NAVEEN</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setNaveen("Present")} else {setNaveen("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC2001</td>
                        <td>AJAYKUMAR N</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setAajay("Present")} else {setAajay("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC2005</td>
                        <td>RIHANA M</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setRihana("Present")} else {setRihana("Absent")}}}  /></td>
                    </tr>
                    <tr>
                        <td>20EC2006</td>
                        <td>SANGADI MANIKANTHA</td>
                        <td><input type="checkbox" onChange={(e)=>{if(e.target.checked){setMani("Present")} else {setMani("Absent")}}}  /></td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                <button onClick={onDownload}> Export excel </button>
                </center>



                
            <br />
            <br />
            <center>
            <h3>PREVIEW</h3>

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
                        <td>{aman}</td>                 
                    </tr>
                    <tr>
                        <td>20EC1004</td>
                        <td>ASHMITHA M</td>
                        <td>{ashmitha}</td>                 
                    </tr>
                    <tr>
                        <td>20EC1005</td>
                        <td>ASWIN R</td>
                        <td>{aswinr}</td>                  
                    </tr>
                    <tr>
                        <td>20EC1006</td>
                        <td>ASWIN V</td>
                        <td>{aswinv}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1007</td>
                        <td>BALAMURUGANANTHAM K</td>
                        <td>{bala}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1009</td>
                        <td>BOGI VIJAY KUMAR</td>
                        <td>{bogi}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1010</td>
                        <td>CHAITANYA VARDHAN KOTE</td>
                        <td>{chaitanyavaradhan}</td>                
                    </tr>
                    <tr>
                        <td>20EC1011</td>
                        <td>CHANDIKA SREE TEJA</td>
                        <td>{sreeteja}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1012</td>
                        <td>CHENNUPATI VENKATA UPENDRA</td>
                        <td>{upendra}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1013</td>
                        <td>CYRIL CHRISTOPHER B</td>
                        <td>{cyril}</td>                  
                    </tr>
                    <tr>
                        <td>20EC1014</td>
                        <td>DAMALACHERUVU GOWTHAM SAI</td>
                        <td>{gowthamsai}</td>                  
                    </tr>
                    <tr>
                        <td>20EC1015</td>
                        <td>DANAPRASAD M</td>
                        <td>{dana}</td>                  
                    </tr>
                    <tr>
                        <td>20EC1016</td>
                        <td>DEEPAK M</td>
                        <td>{deepak}</td>                  
                    </tr>
                    <tr>
                        <td>20EC1017</td>
                        <td>DIVAKAR.J</td>
                        <td>{divakar}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1018</td>
                        <td>FARVESH H</td>
                        <td>{farvesh}</td>                  
                    </tr>
                    <tr>
                        <td>20EC1019</td>
                        <td>G ARJUN KRISHNA</td>
                        <td>{arjun}</td>                   
                    </tr>
                    <tr>
                        <td>20EC1020</td>
                        <td>GANJA YUVARANI</td>
                        <td>{ganja}</td>                    
                    </tr>
                    <tr>
                        <td>20EC1022</td>
                        <td>GNANAVENDANE T</td>
                        <td>{gnana}</td>
                    </tr>
                    <tr>
                        <td>20EC1023</td>
                        <td>GOKULKRISHNA.P</td>
                    <td>{gokul}</td>
                    </tr>
                    <tr>
                        <td>20EC1024</td>
                        <td>GURUPRASAD R</td>
                        <td>{guru}</td>
                    </tr>
                    <tr>
                        <td>20EC1025</td>
                        <td>HARIHARAN G V</td>
                        <td>{hari}</td>
                    </tr>
                    <tr>
                        <td>20EC1026</td>
                        <td>HARSHAL KARIYA</td>
                        <td>{harshal}</td>
                    </tr>
                    <tr>
                        <td>20EC1027</td>
                        <td>HRITHIN SUNIL</td>
                        <td>{hrithin}</td>
                    </tr>
                    <tr>
                        <td>20EC1028</td>
                        <td>JANGAM CHAITANYA SAI</td>
                        <td>{jangam}</td>
                    </tr>
                    <tr>
                        <td>20EC1029</td>
                        <td>JAYRAJ POZHILAN</td>
                        <td>{jayaraj}</td>
                     </tr>
                    <tr>
                        <td>20EC1030</td>
                        <td>JOSEPH G CARDOZ</td>
                        <td>{joseph}</td>                    </tr>
                    <tr>
                        <td>20EC1031</td>
                        <td>JJYOTHI SRI SAI SWARUP NADENDLA</td>
                        <td>{saiswarup}</td>                    </tr>
                    <tr>
                        <td>20EC1032</td>
                        <td>K RAGAVI</td>
                        <td>{ragavi}</td>                    </tr>
                    <tr>
                        <td>20EC1033</td>
                        <td>KADALI HARSHA SRI SAMPATH</td>
                        <td>{harsha}</td>                    </tr>
                    <tr>
                        <td>20EC1034</td>
                        <td>KALAIMATHI S</td>
                        <td>{kalai}</td>                    </tr>
                    <tr>
                        <td>20EC1035</td>
                        <td>KALISETTY BHARGAV NAIDU</td>
                        <td>{bhargav}</td>                    </tr>
                    <tr>
                        <td>20EC1036</td>
                        <td>KALYAN</td>
                        <td>{kalyan}</td>                    </tr>
                    <tr>
                        <td>20EC1037</td>
                        <td>KAMALESHKUMAR K</td>
                        <td>{kamalesh}</td>                    </tr>
                    <tr>
                        <td>20EC1038</td>
                        <td>KARAN J</td>
                        <td>{karan}</td>                    </tr>
                    <tr>
                        <td>20EC1039</td>
                        <td>KATTOJU HEMANTH</td>
                        <td>{hemanth}</td>                    </tr>
                    <tr>
                        <td>20EC1040</td>
                        <td>KAUSHIK</td>
                        <td>{kaushik}</td>                    </tr>
                    <tr>
                        <td>20EC1041</td>
                        <td>KEERTHIVASAN R</td>
                        <td>{keerthi}</td>                    </tr>
                    <tr>
                        <td>20EC1042</td>
                        <td>KRISHNA TEJA MURIKIPUDI</td>
                        <td>{krishna}</td>                    </tr>
                    <tr>
                        <td>20EC1044</td>
                        <td>MADDUKURI SRIMANJUNADH</td>
                        <td>{manju}</td>                    </tr>
                    <tr>
                        <td>20EC1045</td>
                        <td>MADESHVARADHAN V</td>
                        <td>{madesh}</td>                    </tr>
                    <tr>
                        <td>20EC1046</td>
                        <td>MALLELA SATYA MANIKYA SAHITHI</td>
                        <td>{sahithi}</td>                    </tr>
                    <tr>
                        <td>20EC1047</td>
                        <td>MAMATHA B</td>
                        <td>{mamatha}</td>                    </tr>
                    <tr>
                        <td>20EC1048</td>
                        <td>MANCHIKALAPATI MANOJ LEKYENDRA</td>
                        <td>{manojl}</td>                    </tr>
                    <tr>
                        <td>20EC1049</td>
                        <td>MANGAIYARKARASI.M</td>
                        <td>{mangai}</td>                    </tr>
                    <tr>
                        <td>20EC1050</td>
                        <td>MANJULA.K</td>
                        <td>{manjula}</td>                    </tr>
                    <tr>
                        <td>20EC1051</td>
                        <td>MANOJ.S</td>
                        <td>{manojs}</td>                    </tr>
                    <tr>
                        <td>20EC1052</td>
                        <td>MOGINDER E</td>
                        <td>{mogi}</td>                    </tr>
                    <tr>
                        <td>20EC1053</td>
                        <td>MOHAMMED ABDUL BASITH.A</td>
                        <td>{basith}</td>                    </tr>
                    <tr>
                        <td>20EC1054</td>
                        <td>MUHAMMED AJMAL SHAMEER</td>
                        <td>{ajmal}</td>                    </tr>
                    <tr>
                        <td>20EC1056</td>
                        <td>MUPPARAPU VICTOR MATTHEW</td>
                        <td>{victor}</td>                    </tr>
                    <tr>
                        <td>20EC1057</td>
                        <td>MURALIDHARAN B</td>
                        <td>{murali}</td>                    </tr>
                    <tr>
                        <td>20EC1058</td>
                        <td>NANDHINI P</td>
                        <td>{nandhini}</td>                    </tr>
                    <tr>
                        <td>20EC1059</td>
                        <td>NANDI SREE HARSHITHA</td>
                        <td>{harshitha}</td>                    </tr>
                    <tr>
                        <td>20EC1060</td>
                        <td>NAPPINNAI V</td>
                        <td>{napps}</td>                    </tr>
                    <tr>
                        <td>20EC1061</td>
                        <td>NATAKARANI NAVEEN</td>
                        <td>{naveen}</td>                    </tr>
                    <tr>
                        <td>20EC2001</td>
                        <td>AJAYKUMAR N</td>
                        <td>{ajay}</td>                    </tr>
                    <tr>
                        <td>20EC2005</td>
                        <td>RIHANA M</td>
                        <td>{rihana}</td>                    </tr>
                    <tr>
                        <td>20EC2006</td>
                        <td>SANGADI MANIKANTHA</td>
                        <td>{mani}</td>                    </tr>
                  </tbody>
                </table>
                </center>
          </div>
            )}






        </div>
        
        
    )
}

export default Homepage;
fetch('http://ip-api.com/json/')
.then(data=>data.json())
.then(ipData=>{
    const ipquery=ipData.query;
    // const ipquer=ipData.country;
    const ipelement=document.getElementById('ipelement');
    ipelement.innerHTML=ipquery;
    // ipelement.innerHTML=ipquer;
})
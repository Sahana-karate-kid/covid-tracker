import './App.css';
import React, { useEffect, useState } from 'react';
import CovidSummary from './components/CovidSummary';
import LineGraph from './components/LineGraph';
import axios from './components/axios';
function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country,setCountry] = useState('');
  const [coronaArray, setCoronaArray] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('/summary')
      .then(res => {
        setLoading(false);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalRecovered(res.data.Global.TotalRecovered);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setCovidSummary(res.data);

        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();
    return `${year}-${month}-${_date}`
  }

  const countryHandler = (e) => {
    setCountry(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate()- 7));

    console.log(from, to);
    getRangeBy();
  }

  const daysHandler =(e) => {
    setDays(e.target.value);
  }

 const getRangeBy = () => {
   axios.get('/summary')
   .then(res => {
     console.log(res);
     const yAxis = res.data.Countries.map(country => (    
     setCoronaArray(country.NewConfirmed)
     )
     )
   })
   .catch(err=>{
     console.log(err);
   })
 }

  if (loading) {
    return <div>Fetching data from API...</div>
  }

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={''}
      />
      <div>
        <select onChange={countryHandler}>
          {covidSummary.Countries && covidSummary.Countries.map(country => (
            <option value={country.Slug} key={country.Slug}>
              {country.Country}
            </option>
          ))}
        </select>
        <select value={days} onChange={daysHandler}>
          <option value='7'>Last 7 days</option>
          <option value='30'>Last 30 days</option>
          <option value='90'>Last 90 days</option>
        </select>
      </div>
      <LineGraph 
      yAxis={coronaArray}/>
    </div>
  );
}

export default App;

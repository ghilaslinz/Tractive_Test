import React, {useState} from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';

function Bmi() {
    const [petName, setPetName] = useState('');
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [flag, setFlag] = useState(true);
    
    const calculate = (e) => {
      const checkForm = +height > 0 && +mass > 0 && petName>'';
      if (!checkForm) {
       
        return;
      }
      const result=[mass / (height * height)]*10000;

      if( result > 0 && result < 120){
        e.preventDefault();

      
      setBmi(result);
      setFlag(false);
   
      }else{
        console.log("error")
        alert('Error : BMI can not be more than 120 or less than 0. Please check your values')
      }
      };
    
    const hideUI = () =>{
      setFlag(true)
    }
    // 0 ---> 30 -->90-->120
      return (
        <div className="App">
      {flag ? 

     
          <form onSubmit={calculate}>
            <div>
            <h1>BMI Score Vizualisation</h1>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-amount">Name of your pet</InputLabel>
          <FilledInput
              required
            id="outlined-adornment-amount"
            value={petName} onChange={(e) => setPetName(e.target.value)}
            endAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
          />
        </FormControl>


            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-amount">height in centimeter</InputLabel>
          <FilledInput
              required
            id="outlined-adornment-amount"
            value={height} onChange={(e) => setHeight(e.target.value)}
            endAdornment={<InputAdornment position="start">cm</InputAdornment>}
            label="Amount"
          />
        </FormControl>
             
            </div>
    
            <div>

            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-amount">mass in kg</InputLabel>
          <FilledInput
              required
            id="outlined-adornment-amount"
            value={mass} onChange={(e) => setMass(e.target.value)}
            endAdornment={<InputAdornment position="start">Kg</InputAdornment>}
            label="Amount"
          />
        </FormControl>
             
            </div>
            <Button  type="submit" variant="contained">calculate</Button>
           
          </form>
            : 
          <div>
          <p><b>Mr.{petName}'s BMI is</b></p>

          <ReactSpeedometer
            width={500}
        minValue={0}
       maxValue={120}

        segments={3}
        segmentColors={['#FFA500', '#00C8A4', '#FF0000']}
       customSegmentStops={[0, 30, 90, 120]}
       customSegmentLabels={[
        {
          text: 'Underweight',
          position: 'INSIDE',
          color: '#FFFFFF',
        },
      
        {
          text: 'Normal',
          position: 'INSIDE',
          color: '#FFFFFF',
        },

        {
            text: 'Overweight',
            position: 'INSIDE',
            color: '#FFFFFF',
          },
      ]}
        ringWidth={40}
       
    
    value={Math.round(bmi * 100) / 100}
    
     
      />
        <Button  onClick={hideUI} variant="contained">calculate again</Button>
      </div>
    }
        </div>
   
      );
    
    }

export default Bmi
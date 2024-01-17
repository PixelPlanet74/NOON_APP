import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Component_1 = () => {


    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
            `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
            }`,
    );
    return (
        <>


            {/* <Autocomplete style={{border:"none"}}
      id="disabled-options-demo"
      options={timeSlots}
      getOptionDisabled={(option) =>
        option === timeSlots[0] || option === timeSlots[2]
      }
      sx={{ width: 250, paddingTop:"10px", border:"none"}}
      renderInput={(params) => <TextField style={{border:"none"}} {...params} label="All Categories" />}
    /> */}

            <div  className="main container" style={{ padding: "", color: "blue", display: "flex", alignItems: "center", justifyContent:"space-around"}}>
                <div className="cont1" style={{ width:"30%", borderRight: "2px solid gray", width: "200px", textAlign: "center", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h3 style={{ paddingRight: "10px" }}>All Categories</h3>
                    <ArrowDropDownIcon />

                </div>
                <div className="cont2" style={{ width:"70%",padding:"8px", color:"black", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h5>ELECTRONICS</h5>
                    <h5>MEN</h5>
                    <h5>WOMEN</h5>
                    <h5>HOME</h5>
                    <h5>BEAUTY & FRAGRANCE</h5>
                    <h5>BABY</h5>
                    <h5>TOYS</h5>
                    <h5>SPORTS</h5>
                    <h5>HEALTH & NUTRITION</h5>
                    <h5>BESTSELLERS</h5>
                    
                </div>

            </div>


        </>
    )
}

export default Component_1
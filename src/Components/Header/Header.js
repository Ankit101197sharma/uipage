import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from "./Header.module.css"

function Header() {
  return (
    <div>
      <>
    
    <main>
        
        <div className={classes.div1}>
        <div>
            <h3>USER MANAGEMENT  <span style={{fontWeight:"400", marginLeft:'14px'}}> USER DETAILS</span></h3> 
        </div>
        <div>
    <Stack direction="row" spacing={2}>
      <Button className={classes.userbtn}  >Add user</Button>
      <Button style={{color:'black', backgroundColor:"white"}} >
      &#8592; Previous
      </Button>
      <Button style={{color:'black',backgroundColor:"white"}} href="#contained-buttons">
        Next &#8594;
      </Button>
    </Stack>
 
        </div>
        
        </div>

        <div className={classes.div2}> <div className={classes.cards} ><h4>MOST PURCHASED SERVICS</h4>
        <p>HairCut</p>
            </div> 
         </div>
        <div className={classes.div3}> <div className={classes.cards}>
        <h4>TOTAL BOOKINGS</h4> 
        <p>10 Bookings</p>
            </div>
        </div>
        <div className={classes.div4}> <div className={classes.cards}>
        <h4>LAST DATE OF SERVIC</h4>
        <p>10/02/2021</p>
            </div> 
         </div>
        
        <div className={classes.div6}>
            <div className={classes.container}>
                <h6>Akash kumar <span> <button style={{backgroundColor:'#90ee90', border:'none', color:'green'}}>Active</button> </span> </h6>

            </div>
            <div className={classes.cDetails}>
                <div>
                    <ul>
                        <li>Role:</li>
                        <li>Contact no:</li>
                        <li>Email:</li>
                        <li>Address:</li>
                        <li>Password</li>
                        <li>Service:</li>
                    </ul>
                </div>
                <div>
                <ul>
                        <li>Customer</li>
                        <li>98658555</li>
                        <li>akash@1212.com</li>
                        <li>Usa Newyork</li>
                        <li>0123@455</li>
                        <li>View details</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={classes.div7}>
        <div className={classes.cDetails}>
                <div>
                    <ul>
                        <li>Name on card:</li>
                        <li>Card number:</li>
                        <li>Expiry:</li>
                        
                        <li>CVV:</li>
                    </ul>
                </div>
                <div>
                <ul>
                        <li>Visa Card</li>
                        <li>986585 55254 01235</li>
                        <li>15 Feb 2024</li>
                        <li>000</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </main>
    </>
 
           </div>
  )
}

export default Header;
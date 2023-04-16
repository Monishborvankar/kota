import React, { useState,  useEffect } from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import axios from "axios";\
import Imgup from './Imgup.js'
import "../CSS/addroom.css";
import { storage } from './firebase';
import { dataref } from './firebase'
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";
// import { v4 } from "uuid";



 function Addhr() {
  const [nama,SetNama] = useState('')
  const [loca, SetLoca,] = useState('')
  const [adr,SetAdr] = useState('')
  const [bhk,SetBhk] = useState('')
  const [rent,SetRent] = useState('')
  const [dis,SetDis] = useState('')
  const [image ,setImage] = useState('');
  const [image2 ,setImage2] = useState('');
  const [image3 ,setImage3] = useState('');
  const [image4 ,setImage4] = useState('');
  const [Url , setUrl] = useState('');
  const [Url2 , setUrl2] = useState('');
  const [Url3 , setUrl3] = useState('');
  const [Url4 , setUrl4] = useState('');
  const [selectedImage, setSelectedImage] = useState(Url)
  const [allImag, setAllImg] = useState([Url, Url2, Url3, Url4])
  
const upload = () =>{
  if(image == null)
  return;
  setUrl("gettingg urls...")
    // first image
    storage.ref('/images/'+image.name).put(image)
  // .on("state_changed", alert("success"), alert , () => {

  storage.ref("images").child(image.name).getDownloadURL()
  .then((url) =>{
    // seconnd image
    storage.ref('/images/'+image2.name).put(image2)
  // .on("state_changed", alert("success"), alert , () => {

  storage.ref("images").child(image2.name).getDownloadURL()
  .then((url2) =>{
    
   //third image
   storage.ref('/images/'+image3.name).put(image3)
  //  .on("state_changed", alert("success"), alert , () => {

   storage.ref("images").child(image3.name).getDownloadURL()
   .then((url3) =>{

    //forth image
    storage.ref('/images/'+image4.name).put(image4)
   .on("state_changed", alert("Data is uploaded successfuly"), alert , () => {

   storage.ref("images").child(image4.name).getDownloadURL()
   .then((url4) =>{

    dataref.ref("addhr").push().set({
      nama: nama,
      loca: loca,
      adr: adr,
      bhk : bhk,
      rent : rent,
      dis : dis,
      url : url,
      url2: url2,
      url3 : url3,
      url4 : url4,
    }).catch(alert);

    setUrl(url);
    setUrl2(url2);
    setUrl3(url3);
    setUrl4(url4);
  })
// })
})
// })
});
  // });
})
});
}


// const App = () => {

  const [phone, setPhone] = useState('+91');
  // const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      }
    }, auth);
  }

  const handleSend = (event) => {
    event.preventDefault();
    // setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  }
  
  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        let user = result.user;
        console.log(user);
        alert('User signed in successfully');
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert('User couldn\'t sign in (bad verification code?)');
      });
    }
  }

// }


  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: "center", padding: "40px" }}>Room Information</h3>
      </div>
      

        {/* <form onSubmit={(e)=>submit(e)}> */}
        <div style={{ textAlign: "center" }}>
          <Box
            component="form"
            // onSubmit={submitAddroom} id = "Room_form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                name='nama'
                id="nmae"
                label="Name"
                
                value={nama}
                onChange={(e) => {SetNama(e.target.value)}}
                required
              />
              <TextField
                name='loca'
                id="loc"
                label="Location"
                
                value={loca}
                onChange={(e) => {SetLoca(e.target.value)}}
                required
              />
              <TextField
                name='adr'
                id="add"
                label="Address"
                
                value={adr}
                onChange={(e) => {SetAdr(e.target.value)}}
                required
              />
              <TextField
                name='bhk'
                id="bhk"
                label="BHK"
                
                value={bhk}
                onChange={(e) => {SetBhk(e.target.value)}}
                required
              />
              <TextField
                name='rent'
                id="rentt"
                label="Rent"
                
                value={rent}
                onChange={(e) => {SetRent(e.target.value)}}
                required

              />
              <TextField
                name='dis'
                id="Des"
                label="Descreption"
                
                value={dis}
                onChange={(e) => {SetDis(e.target.value)}}
                required
              />
            </div>

          </Box>
          <input type="file" onChange={(e) => {setImage2(e.target.files[0])
    }}></input>
    <br/>
    <br/>
    <input type="file" onChange={(e) => {setImage(e.target.files[0])
    }}></input>
    <br/>
    <br/>
    <input type="file" onChange={(e) => {setImage3(e.target.files[0])
    }}></input>
    <br/>
    <br/>
     <input type="file" onChange={(e) => {setImage4(e.target.files[0])
    }}></input>
    <br/>
    <br/>
      {/* <button onClick={upload}> Upload Image</button>
      <br></br>
      <p> <a herf={imageUrls}> {imageUrls}</a></p> */}


      
      <div className='app__container' >
        <Card >
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography sx={{ padding: '5px'}} variant='h5' component='div'>Enter your phone number</Typography>
            <form onSubmit={handleSend}>
              <TextField sx={{ width: '50%'}} variant='outlined' autoComplete='off' label='Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
              <Button type='submit' variant='contained' sx={{ width: '240px', marginTop: '20px'}}>Send Code</Button>
            </form>
          </CardContent>
        </Card>
        <div id="recaptcha"></div>
        
        <Card>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography  variant='h5' component='div'>Enter the OTP</Typography>
              <TextField sx={{ width: '240px'}} variant='outlined' label='OTP ' value={otp} onChange={verifyOtp} />
          </CardContent>
        </Card>
        <div id="recaptcha"></div>
      
      </div>




        </div>
        <br/>
        <br/>
        
        <div style={{ display: "flex", alignItems: "center", margin: "auto", paddingLeft: "50%" }}>
          {/* <Button type="submit"
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", backgroundColor: "#87d5fc"
            }}>
            submit
          </Button> */}
          <button className="button-21" role="button" onClick={upload} style={{ display: "flex", alignItems: "center",
              justifyContent: "center", backgroundColor: "#87d5fc"
            }}>
            Add Room
          </button>
        </div>
        {/* <div className="imgg">
        <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
            <button  onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      </div> */}
      
    
      {/* <div>
      <Imgup/>
      </div> */}
    </React.Fragment>
  );
  
}
export default Addhr;
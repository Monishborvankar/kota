import React, { useState,  useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from "axios";\
import Imgup from './Imgup.js'
import "../CSS/addroom.css";
import { storage } from './firebase';
import { dataref } from './firebase'

// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";
// import { v4 } from "uuid";



 function Addroom() {
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
  // const [user, setUser]= useState({
  //   nama: "",
  //   loca: "",
  //   adr: "",
  //   bhk : "",
  //   rent: "",
  //   dis: "",
  //   url:"",
  // });
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);

//   const imagesListRef = ref(storage, "images/");
//   const uploadFile = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       // getDownloadURL(snapshot.ref).then((url) => {
//       //   setImageUrls((prev) => [...prev, url]);
//       alert("Image is uploaded");
// //       storage.ref('images').child(imageUpload.name).getdownloadurl()
// //       .then((url) =>{
// //         setImageUrls(url);
// // })
//     })
      
//     // });
//   };

//   useEffect(() => {
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           // postData.ref("users").push().set({
//           //   url : url,
//           // }).catch(alert);
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);


  
// let name, value ;
//   const getUserData = (event) =>{
//     name= event.target.name
//     value= event.target.value

//     setUser({...user,[name]: value});
//   };
//   const postData = async (e) =>{
//     e.preventDefault();
//     const { nama,  loca, adr,  bhk, rent,  dis, url,} = user;
//    const res = await fetch(
//     "https://kota-35cec-default-rtdb.firebaseio.com/addrooms.json",
//     { 
//       method:"POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(
//         {
//           nama,
//           loca,
//           adr,
//           bhk,
//           rent,
//           dis,
//           url,
//         }
//       )
//     });
//     if(res){
//       setUser({
//         nama: "",
//         loca: "",
//         adr: "",
//         bhk : "",
//         rent: "",
//         dis: "",
//         url:"",
//       });
//       alert("Room Info Added!");
//     }
//   };
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

    dataref.ref("addrooms").push().set({
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

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textAlign: "center", padding: "40px" }}>Room Information</h3>
      </div>
      =

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
                defaultValue=""
                value={nama}
                onChange={(e) => {SetNama(e.target.value)}}
                required
              />
              <TextField
                name='loca'
                id="loc"
                label="Location"
                defaultValue=""
                value={loca}
                onChange={(e) => {SetLoca(e.target.value)}}
                required
              />
              <TextField
                name='adr'
                id="add"
                label="Address"
                defaultValue=""
                value={adr}
                onChange={(e) => {SetAdr(e.target.value)}}
                required
              />
              <TextField
                name='bhk'
                id="bhk"
                label="BHK"
                defaultValue=""
                value={bhk}
                onChange={(e) => {SetBhk(e.target.value)}}
                required
              />
              <TextField
                name='rent'
                id="rentt"
                label="Rent"
                defaultValue=""
                value={rent}
                onChange={(e) => {SetRent(e.target.value)}}
                required

              />
              <TextField
                name='dis'
                id="Des"
                label="Descreption"
                defaultValue=""
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
          <button class="button-21" role="button" onClick={upload} style={{ display: "flex", alignItems: "center",
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
export default Addroom;
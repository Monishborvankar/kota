import React, {useState, useEffect} from 'react';
import fireDb from "../RealtimeData/Firebase";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import '../Components/CSS/Viwe.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CardMedia } from '@mui/material';
import '../Components/CSS/dataroom.css'
import locationp from '../Components/JS/images/location.png'

const Pay = () => {
  const[data, setData] = useState({});
  const [sortedData, setSortedData] = useState([])
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
     navigate(`/search?name=${search}`);
     setSearch("");


  }
  async function fetchtext (e) {
    const url = 'https://ipinfo.io/json?token=879a08b9e629d8';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.city);
    e.preventDefault();
    navigate(`/search?name=${data.city}`);
    setSearch("");


  }
  useEffect(() => {
    fireDb.child("addrooms").on("value", (snapshot) => {
    if(snapshot.val()!== null) {
      setData({... snapshot.val()})
    } else{
      setData({});
    }
    });

    return () => {
      setData({})
    }
  }, []);

  const onDelete = (id) =>{
    if(window.confirm("Are you sure that you want to delete that contact ?")
    ) {
      fireDb.child(`addrooms/${id}`).remove((err) => {
        if(err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Sucessfully");
        }
      });
    }
  };
  const handleChange = (e) => {
    setSort(true)
    fireDb.child("addrooms").orderByChild(`${e.target.value}`).on("value", (snapshot) => {
      let sortedData = [];
      snapshot.forEach((snap) => {
        sortedData.push(snap.val())
      });
      setSortedData(sortedData);
    })
  };
  const handleReset =() => {
    setSort(false);
    fireDb.child("addrooms").on("value", (snapshot) => {
      if(snapshot.val()!== null) {
        setData({... snapshot.val()})
      } else{
        setData({});
      }
      });
  };


  const filterData = (value) => {
    fireDb.child("addrooms").orderByChild("status").equalTo(value).on("value", (snapshot) => {
      if(snapshot.val()) {
        const data= snapshot.val();
        setData(data);
      }
    })
  }
  return (
    <React.Fragment>
      <div className='serach'>
        <form onSubmit={handleSubmit} style={{ display: "inline" }}>
            <input
            type="text"
            className="inputfield"
            
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter your city..."
            />
         </form>
         </div>
         {/* <button img src={locationp} style={{ width:"100px",height:"100px" }} onClick={fetchtext}></button> */}
         <div className='locat'>
         <img src={locationp}  style={{ width:"50px",height:"50px" }} onClick={fetchtext} ></img>
         </div>
        <CardMedia>
    <div >
      
      
        {/* <thead>
          <tr>
            <th style= {{textAlign: 'center'}}> Number.</th>
            <th style= {{textAlign: 'center'}}> Name</th>
            <th style= {{textAlign: 'center'}}> Email</th>
            <th style= {{textAlign: 'center'}}> Contact</th>
            <th style= {{textAlign: 'center'}}> Status</th>
            <th style= {{textAlign: 'center'}}> Status</th>
            <th style= {{textAlign: 'center'}}> Status</th>
            {!sort && <th style= {{textAlign: 'center'}}> Action</th>}
          </tr>
        </thead> */}




        {sort && (
            
            <tbody>
              {sortedData.map((item, index) => {
                return (
                  <tr key={index}>
                  <th scope= "index">{index + 1}</th>
                  <td>{item.nama}</td>
                  <td>{item.loca}</td>
                  <td>{item.bhk}</td>
                  <td>{item.adr}</td>
                  </tr>
                )
              })}
            </tbody>
          )}
            
      <div className='sort'>
      <label> Sort By:</label>
      <select className="dropdown" name="colValue" onChange={handleChange}>
        <option>Please Select </option>
        <option value="name"> Name </option>
        <option value="email"> Email </option>
        <option value="contact"> Contact </option>
        <option value="status"> Status </option>
      </select>
      <button className="button-21" onClick={handleReset}>Reset
      </button>
      </div>
      <br/>
      <div class="custom-shape-divider-top-1680415537">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      {/* <label>Status: </label>
      <button className="btn btn-active" onClick={() => filterData("Active")}>
        Active
        </button>
      <button className="btn btn-inactive" onClick={() => filterData("Inactive")}>
        Inactive
        </button> */}




          {!sort &&(
            <tbody>
            {Object.keys(data).map((id, index) => {
                
              return (
                <div className="maion">
                        <div className="main">
                            
                            <div className="container">
                            <div className='carsol'>
                  <Carousel>
                    
                <div>
                    <img src={data[id].url} />
                    
                </div>
                <div>
                    <img src={data[id].url2} />
                    
                </div>
                <div>
                    <img src={data[id].url3} />
                    
                </div>
                <div>
                    <img src={data[id].url4} />
                   
                </div>
              
            </Carousel>
            </div>
                            <div className="text-container" key={id}>
                
                  {/* <th scope= "row">{index + 1}</th> */}
                  <h1>Location: {data[id].loca}</h1>
                  <h2>Owner name :{data[id].nama}</h2>
                  <h2>{data[id].bhk}BHK</h2>
                  <h2>Adrres:{data[id].adr}</h2>
                  <h2>Rs: {data[id].rent}/- per month</h2>
                  <h3>Discription:{data[id].dis}</h3>
                  <td> 
                    {/* <Link to ={'/update/$(id)'}>
                    <button className="btn btn-edit"> Edit</button>
                    </Link> */}
                     <button class="button-21" role="button">Rent It</button>
                    <button className="button-21" onClick={() => onDelete(id)}
                    >
                       Delete
                       </button>
                    {/* <Link to ={'/view/$(id)'}>
                    <button className="btn btn-view"> View</button>
                    </Link> */}
                  </td>

                </div>
     
                </div>
                
                        </div>
                        
                        </div>
                    
                    
              );
            })}
          </tbody>
  
          )}
          
              
    </div>
    </CardMedia>
    </React.Fragment>
  )
}

export default Pay

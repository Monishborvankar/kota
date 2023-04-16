import React,{useState, useEffect} from "react";
import { useLocation, Link } from "react-router-dom";
import fireDb from "./Firebase";
// import "./Search.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Components/CSS/dataroom.css'

const Search = () => {
    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("name");
    console.log("search", search);

    useEffect(() =>{
      searchData();

    }, [search])
    const searchData = () => {
      fireDb
      .child("addrooms").orderByChild("loca")
      .equalTo(search)
      .on("value", (snapshot) => {
        if(snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      })
    }
  return (
    <>
      <div style = {{marginTop: "100px"}}>
        <Link to ="/Homi">
          <button className="button-21"> Go Back</button>
        </Link>
        {Object.keys(data).length === 0 ? (
          <h2> No Search Found with that Name : {query.get("name")}</h2>
        ): (
          <table className= "styled-table">
        {/* <thead>
          <tr>
            <th style= {{textAlign: 'center'}}> Number.</th>
            <th style= {{textAlign: 'center'}}> Name</th>
            <th style= {{textAlign: 'center'}}> Email</th>
            <th style= {{textAlign: 'center'}}> Contact</th>
            <th style= {{textAlign: 'center'}}> Status</th>
            <th style= {{textAlign: 'center'}}> Status</th>
            <th style= {{textAlign: 'center'}}> Status</th>
          </tr>
        </thead> */}
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <div className="maion">
              <div className="main">
                  
                  <div className="container">
                  <div className="text-container" key={id}>
      
        {/* <th scope= "row">{index + 1}</th> */}
        <h1>Location: {data[id].loca}</h1>
        <h2>Owner name :{data[id].nama}</h2>
        <h2>{data[id].bhk}BHK</h2>
        <h2>Adrres:{data[id].adr}</h2>
        <h2>Rs: {data[id].rent}</h2>
        <h3>Discription:{data[id].dis}</h3>
        <td> 
          {/* <Link to ={'/update/$(id)'}>
          <button className="btn btn-edit"> Edit</button>
          </Link> */}
           <button class="button-21" role="button">Rent It</button>
        
          {/* <Link to ={'/view/$(id)'}>
          <button className="btn btn-view"> View</button>
          </Link> */}
        </td>

      </div>
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
      </div>
      
              </div>
              
              </div>
            );
          })}
        </tbody>

      </table>

        )}
      
    </div>
    </>
  )
}

export default Search;

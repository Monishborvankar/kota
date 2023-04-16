import StartFirebase from './Firebase';
import React,{useState}from 'react';
import {ref, onValue} from 'firebase/database';
import {Table} from 'react-bootstrap';
import '../Components/CSS/Viwe.css'
import data from '../Components/JS/data';
import { CardMedia } from '@mui/material';
import '../Components/CSS/dataroom.css'
import storage from 'redux-persist/lib/storage';
import { set } from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const db = StartFirebase();
// const [selectedImage, setSelectedImage] = this.state(data.url)
const selectedImage = (data.url)
const setSelectedImage = (data.url)
// const setSelectedImage = event => {
//     // 👇️ refers to the image element
//     // console.log(event.target);

//     // console.log('Image clicked');
    

//   };
//   const selectedImage = event => {
//     // 👇️ refers to the image element
//     // console.log(event.target);

//     // console.log('Image clicked');

//   };
export class RealtimeData extends React.Component{
   
    
    constructor(){
        super();
        this.state = {
        tableData: []
        }
    }
    
    componentDidMount() {
        
        const dbRef = ref(db, 'addrooms');

        onValue(dbRef, (snapshot)=>{
            let records =[];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data":data});

            });
            this.setState({
                tableData: records,
                filterData:[]
            });
        });
    }

    // filterData=(e)=>{
    //     if(e.target.val===""){
    //         var filtereddata= this.tableData.filter((row)=>{
    //             return row.loca==e.target.val;
    //          });
    //     }else if(e.target.val.toLowerCase()){
    //         var filtereddata= this.tableData.filter((row)=>{
    //             return row.loca;
    //          });

    //     }
    //     this.setState({
    //         ...this.state,
    //            filterData:filtereddata
    //     })
    // }
    render(){
       
        
        // const set ="";
        // return(
            
        //     <div id="bab">
        //         <center>
        //         <input className="form-control me-2" style={{ width: '300px' }}  data-aos="fade-right"  type="search" placeholder="Search" aria-label="Search" />
        //         </center>
        //         <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
        //         { 

        //         data.filter(function (val) {
        //       if (set === "") {
        //         return val;
        //       } else if (val.name.toLowerCase()) {
        //         return val;
        //       }
        //     })
        // .map((item)=>{
            // storage.ref('images').child(image.name).getdownloadurl()
            // .then((url) =>{
            //     setUrl(url);
            // })
            
            return(
                <React.Fragment>
                    <form className="d-flex" style={{ width: '300px', margin: 'auto', marginBottom: "20px" }}>
          <input className="form-control me-2" style={{ width: '300px' }}  data-aos="fade-right"  type="search" placeholder="Search" aria-label="Search" onChange={this.filterData} />
        </form>
            <CardMedia>
                
                {
                  
                
                
                this.state.tableData.map((row)=>{
                     
                return(
                    <div>
                        <div class="main">
                            
                            <div class="container">
                            <div class="contai">
                                
                <Carousel>
                <div>
                    <img src={row.data.url} />
                    
                </div>
                <div>
                    <img src={row.data.url2} />
                    
                </div>
                <div>
                    <img src={row.data.url3} />
                    
                </div>
                <div>
                    <img src={row.data.url4} />
                   
                </div>
              
            </Carousel>

    </div>
                            {/* <div class="imag"></div> */}
                            <div class="text-container">
                            <span></span>
                            <h1>Location: {row.data.loca}</h1>
                            <h2>Adrres: {row.data.adr}</h2>
                            <h2>{row.data.bhk}BHK</h2>
                            <h2>Rs {row.data.rent}</h2>
                    
                            <p>Discription: {row.data.dis}
                            <h3>Owner name : {row.data.nama}</h3>
                            </p>
                            
                            <button class="button-21" role="button">Rent It</button>

                            </div>
                        </div>
                        </div>

                    </div>
                    )
                })}
            <Table>
                 <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Addres</th>
                    <th>BHK</th>
                    <th>Rent</th>
                    <th>Discription</th>
                      </tr>
                        </thead>
                        <tbody>
                            {this.state.tableData.map((row,index)=>{
                                return(
                            <tr>
                                <td>{index}</td>
                                {/* <td>{row.key}</td> */}
                                <td>{row.data.nama}</td>
                                <td>{row.data.loca}</td>
                                <td>{row.data.adr}</td>
                                <td>{row.data.bhk}</td>
                                <td>{row.data.rent}</td>
                                <td>{row.data.dis}</td>
                                
                                
                            </tr>
                            
                            )
                        })}
                        </tbody>

            </Table>
            </CardMedia>
            </React.Fragment>
            //      )
            //     })
            // }
            // </div>
            // </div>
        )
        
    }
}
export default db
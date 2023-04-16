import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import ShareIcon from '@mui/icons-material/Share';
import data from './data'
import {Link} from 'react-router-dom'
import '../CSS/Service.css'
import h8 from '../JS/images/h8.jpg'
import h6 from '../JS/images/h6.png'
import h7 from '../JS/images/h7.jpg'

export default function RecipeReviewCard() {

  const [set, reset] = useState('');

  return (
    <div style={{minHeight:"90vh"}} id="Service">
      
        <h1 data-aos="flip-left" style={{margin:"0px",textAlign:"center",padding:"10px",}}>OUR SERVICES</h1>

        {/* <form className="d-flex" style={{ width: '300px', margin: 'auto', marginBottom: "20px" }}>
          <input className="form-control me-2" style={{ width: '300px' }}  data-aos="fade-right" value={set} onChange={(e) => reset(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        </form> */}
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
    {/* { 

      data.filter(function (val) {
              if (set === "") {
                return val;
              } else if (val.name.toLowerCase().includes(set.toLowerCase())) {
                return val;
              }
            })
        .map((item)=>{
            return( */}
              <React.Fragment>
      <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos="class" id="card">
      <CardHeader
        style={{color:"white"}}
        title="Rent A Room"
        subheader="Service Avaliable" 
      />
      <Link to="/Homi">
      <CardMedia
        component="img"
        height="194"
        img src={h8}
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
        a building in which one or more families live. : something as a nest or den
         used by an animal for shelter.
         : a building in which something is stored. carriage house
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos="class" id="card">
      <CardHeader
      style={{color:"white"}}
        title="Paying Guest"
        subheader="Service Avaliable" color="white"
      />
      <Link to="/Pgdata">
      <CardMedia
        component="img"
        height="194"
        img src={h7}
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
        a building in which one or more families live. : something as a nest or den
         used by an animal for shelter.
         : a building in which something is stored. carriage house
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos="class" id="card">
      <CardHeader
      style={{color:"white"}}
        title="Hourly Rooms"
        subheader="Service Avaliable" color="white"
      />
      <Link to="/Hrdata">
      <CardMedia
        component="img"
        height="194"
        img src={h6}
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
        a building in which one or more families live. : something as a nest or den
         used by an animal for shelter.
         : a building in which something is stored. carriage house
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    {/* <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos="class" id="card">
      <CardHeader
        title="Pest control"
        subheader="Service Avaliable" color="white"
      />
      <Link to="/Homi">
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
        a building in which one or more families live. : something as a nest or den
         used by an animal for shelter.
         : a building in which something is stored. carriage house
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos="class" id="card">
      <CardHeader
        title="Rent or Buy"
        subheader="Service Avaliable" color="white"
      />
      <Link to="/Rebu">
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
        a building in which one or more families live. : something as a nest or den
         used by an animal for shelter.
         : a building in which something is stored. carriage house
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos="class" id="card">
      <CardHeader
        title="Other"
        subheader="Service Avaliable" color="white"
      />
      <Link to="/Homi">
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
        a building in which one or more families live. : something as a nest or den
         used by an animal for shelter.
         : a building in which something is stored. carriage house
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card> */}
    
      </React.Fragment>
            {/* )
        }) */}
    {/* } */}
    </div>
    </div>
  );
}


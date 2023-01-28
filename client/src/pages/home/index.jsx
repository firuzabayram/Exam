import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import "../home/index.css"
import { Card } from 'antd';
import { Button, Space } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
  console.log(e);
};

const Home = () => {
<Space
    direction="vertical"
    style={{
      width: '50px',
      height:'50px',
      background:'black',
    }}
  ></Space>
  
  const [education, seteducation] = useState();
  const getData = async () => {
    let res = await axios.get("http://localhost:4000/education");

    seteducation(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  
  const handleDelete = (_id)=>{
    axios.delete(`http://localhost:4000/education/${_id}`)
  }

  return (
      <div>
        <div>


          
        {education?.map((element) => {

return (
<div className="umumu1">
<div className="shekil">
                  <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" srcset="" />
              </div>

              <div className="backend">
                  <h1>Popular Courses</h1>
                  
              </div>
<div className="server">
  <h1>{element.name}</h1>
  <div >
  <Link to={`/detail/${element._id}`}>
              <img src= {element.img} alt="" />
              </Link>
              </div>
            <h4>{element.complete}</h4>
            <h4>{element.guide}</h4>
            <Link to={`/detail/${element._id}`}>
              <img src= {element.imgtwo} alt="" />
              </Link>
            <h4>{element.author}</h4>
            <h4>{element.number}</h4>
            <button onClick={()=> handleDelete (element._id)} >delete</button></div>
       
       



        <div className="asagi">
            <div className='yellowbg'>
        <h1>Register now and get a discount <span>50%</span> discount until 1 January</h1>
        <h3>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</h3>
    <button
    style={{
      width: 250,
      height:50,
      background: 'black',
      color:'white',
    }} >REGISTER NOW</button>
    </div>
    <div className="photobg">
        <h1>Search for your course</h1>
          <Input placeholder="Course Name" allowClear onChange={onChange} />
          <Input placeholder="Catagory" allowClear onChange={onChange} />
          <Input placeholder="Degree" allowClear onChange={onChange} />
        
   
       
        <Button type="primary" block>
        SEARCH COURSE
    </Button>
    </div></div>




   

    <div className="ourservices">
        <h1>Our Services</h1>
        <div className="indoor">
        <Card
    style={{
      width: 300,
    }}
  >
    <div className="card"> 
            <i class="fa-solid fa-phone"></i>
           <h3>Online Courses</h3>
           <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</h5>
            </div>
  </Card>
  <Card
    style={{
      width: 300,
    }}
  >
    <div className="card"> 
            <i class="fa-solid fa-phone"></i>
           <h3>Online Courses</h3>
           <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</h5>
            </div>
  </Card>    <Card
    style={{
      width: 300,
    }}
  >
    <div className="card"> 
            <i class="fa-solid fa-phone"></i>
           <h3>Online Courses</h3>
           <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</h5>
            </div>
  </Card>
        </div>
        <div className="indoor">
        <Card
    style={{
      width: 300,
    }}
  >
    <div className="card"> 
            <i class="fa-solid fa-phone"></i>
           <h3>Online Courses</h3>
           <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</h5>
            </div>
  </Card>
  <Card
    style={{
      width: 300,
      margin: 20,
    }}
  >
    <div className="card"> 
            <i class="fa-solid fa-phone"></i>
           <h3>Online Courses</h3>
           <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</h5>
            </div>
  </Card>    <Card
    style={{
      width: 300,
    }}
  >
    <div className="card"> 
            <i class="fa-solid fa-phone"></i>
           <h3>Online Courses</h3>
           <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</h5>
            </div>
  </Card>
        </div>
    </div>











<div className="week">
    <div className="kvadrat"><h1>07</h1>
    <h3>January</h3></div>
    <div className="basliq"> 
        <h2>Student Festival</h2>
        <h4>Grand Central Park</h4>
        <p><h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</h5></p>
    </div>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" srcset="" />
</div>

</div>
<div className="week">
    <div className="kvadrat"><h1>07</h1>
    <h3>January</h3></div>
    <div className="basliq">
        <h2>Student Festival</h2>
        <h4>Grand Central Park</h4>
        <p><h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</h5></p>
    </div>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="" srcset="" />
</div>

</div>
<div className="week">
    <div className="kvadrat"><h1>07</h1>
    <h3>January</h3></div>
    <div className="basliq">
        <h2>Student Festival</h2>
        <h4>Grand Central Park</h4>
        <p><h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</h5></p>
    </div>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="" srcset="" />
</div>

</div>
        
</div> 
          
        );
      })}
    </div>
  </div>
  
);
};





export default Home
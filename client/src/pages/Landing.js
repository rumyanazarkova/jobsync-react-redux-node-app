import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import styled from 'styled-components' 
import {Logo} from '../components'


const Landing = () => {
  return <Wrapper>
    <nav>
     <Logo/>
    </nav>
    <div className='container page'>
      <div className='info'>
      <h2>Navigating Your Career Journey, from Everywhere.</h2>
      <p> Your all-in-one solution for tracking and managing your job applications. Manage your opportunities and never miss a beat in your professional journey.</p>
        <Link to='/register' className='btn btn-hero'>Login/Register</Link>
      </div>
     <img src={main} alt='job-hunt' className='img main-img'/>
    </div>
  </Wrapper>
}

const Wrapper=styled.main`
nav{
  width:var(--fluid-width);
  max-width:var(--max-width);
  margin:0 auto;
  height: var(--nav-height);
  display:flex;
  align-items:center;
}
.page{
  min-height:calc(100vh - var(--nav-height));
 display:grid;
 align-items:center;

}
h1{
  font-weight:700;
}
h2{
  font-weight:600;
}
p{
  color: var(--grey-600);
  font-size:1.2rem;
}
.main-img{
  display: none;
}
@media (min-width:992px){
.page{
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
}
.main-img{
  display: block;
  
}
}

`

export default Landing
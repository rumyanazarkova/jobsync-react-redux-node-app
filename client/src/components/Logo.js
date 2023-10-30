
import styled from 'styled-components'

const Logo = () => {
  return  <Wrapper>
  <h1>JobSync</h1>
  </Wrapper>
}

const Wrapper= styled.div`
margin-top: 3rem;
h1{
  font-size:2rem;
  font-weight:600;
  color:var(--primary-1);
}

`
export default Logo
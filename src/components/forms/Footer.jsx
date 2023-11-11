import React from 'react'
import { useLocation ,Link} from 'react-router-dom';
import { Typography } from 'antd';



const Footer = () => {
    const {Text} = Typography ;
    const path = useLocation() ;
    const currentPath = path.pathname ;
    const pathFlag = currentPath==='/' ? true : false ;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px' }}>
          <Text style={{ fontSize: '1.1rem', fontWeight: 600, marginRight: '8px' }}>{pathFlag?"New to Modernize?":"Already have an Account?"}</Text>
          {pathFlag?<Link to='/signUp'>Create an account</Link>:<Link to='/'> Sign in</Link>}
    </div>
  )
}
export default Footer  ;
import React from 'react'
import { Button,Space,Typography} from 'antd';
import { useLocation } from 'react-router-dom';


const data = [
    {
        button : {
            text : "sign in with Google"
        } ,
        image : {
            dm : 15 ,
            src : "https://modernize-nextjs.adminmart.com/images/svgs/google-icon.svg" ,
        } ,

    } ,
    {
        button : {
            text : "sign in with FB"
        } ,
        image : {
            dm : 25 ,
            src : "https://modernize-nextjs.adminmart.com/images/svgs/facebook-icon.svg" ,
        } ,

    } ,
]
const Buttons = ({text}) => {
    const path = useLocation() ;
    const { Text, Title } = Typography;
    const currentPath = path.pathname ;

    return (
        <>
            <Space style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', marginBottom: '15px' }}>
                {
                    data.map((item,index) => {
                        return (
                            <Button key={index} style={{fontSize : "16px"}}>
                                <img
                                
                                alt="icon"
                                width={item.image.dm}
                                height={item.image.dm}
                                src= {item.image.src}
                                style={{ marginRight: '8px' ,verticalAlign: 'middle'}}
                                />{item.button.text}
                            </Button >
                        )
                    })
                }
            </Space>
            <div><Text style={{fontSize: '1.1rem'}}>Or {currentPath === '/' ? <>Sign In</> :<> Sign Up</>} with </Text></div>
        </>
  )
}
export default Buttons ;
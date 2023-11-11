import React ,{useState,useEffect} from 'react';
import { useLocation ,useNavigate } from 'react-router-dom';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button ,Skeleton  } from 'antd';


const Home = () => {
  const [skeleton ,setSkeleton] = useState(true)
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate() ;

  useEffect(() => {
    // Change the title
    document.title = 'Home page';
  },[])
  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation('/') ;
    }, 1500);
  } ;
  setTimeout(() => {
    setSkeleton(false)
  },1000)
  const { state } = useLocation();
  const receivedUser = state && state.user ;
  return (
    <>
    {
      skeleton?<Skeleton active={skeleton} /> :<><h1>Welcome to home page</h1>
      <h3 style={{color:'gray'}}>{receivedUser.username}</h3>
      <Button
        type="primary"
        danger
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={() => enterLoading()}
      /></>
    }
    </>
  );
};

export default Home;
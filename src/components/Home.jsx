import React ,{useState} from 'react';
import { useLocation ,useNavigate } from 'react-router-dom';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button  } from 'antd';


const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate() ;
  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation('/') ;
    }, 1500);
  } ;
  const { state } = useLocation();
  const receivedUser = state && state.user ;
  return (
    <>
    <h1>Welcome to home page</h1>
    <h3 style={{color:'gray'}}>{receivedUser.username}</h3>
    <Button
      type="primary"
      danger
      icon={<PoweroffOutlined />}
      loading={loading}
      onClick={() => enterLoading()}
    />
    </>
  );
};

export default Home;
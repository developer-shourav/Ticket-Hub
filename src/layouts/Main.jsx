
import { Outlet, useNavigation } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader/SpinnerLoader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
           <Header></Header>
          {/* ------Loading Spinner------ */}
           {navigation.state === 'loading' && <SpinnerLoader> </SpinnerLoader>}
  
            <Outlet> </Outlet>
            <Footer> </Footer> 
        </div>
    );
};

export default Main;
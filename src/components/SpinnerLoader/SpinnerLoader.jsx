import Loader from '../../assets/loader/loader.gif';
const SpinnerLoader = () => {
  return (
    <div className="container mx-auto">
      <div className=" d-flex justify-content-center mt-5" >
        <img className="" src={Loader} alt="" />
      </div>
    </div>
  );
};

export default SpinnerLoader;

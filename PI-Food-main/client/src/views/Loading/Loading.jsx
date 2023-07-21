import './loading.css'

const Loading =  () =>  {
    return (
      <div>
        <div className='container-loading'>
          <div className='loader'>
            <div className='myLoader'></div>
            {/* <div className={style.loaderIcon}><i class='bx bx-loader-alt bx-spin' ></i></div> */}
            <div className='loaderText'></div>
          </div>
        </div>
      </div>
    );
  };



export default Loading;
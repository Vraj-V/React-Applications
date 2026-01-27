import { Link,Outlet} from 'react-router-dom';

const Product = () => {

  return (
    <div>

      <div className=' flex gap-10'>
        <Link to="men">Men`s Collection</Link>
        <Link to="women">Women`s Collection</Link>
        
      </div>
      <Outlet />
    </div>
  )
}

export default Product

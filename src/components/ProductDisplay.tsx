interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

function ProductDisplay ({product, showDescription, showStockStatus, onAddToCart, children}:ProductDisplayProps) {
    const inStockStyle = product.inStock ? "text-green-300" : "text-red-500"
    return (
        <div className='p-5 shadow-xl w-120 rounded-xl text-center'>
         <div>
            {product.imageUrl && <img className='p-5 w-100' src={product.imageUrl} alt="Sony Headphones" />}
        </div>
        <div className='flex flex-col gap-3 mb-3'>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className='text-blue-600 font-bold text-lg'>${product.price}</p>
            {showDescription && <p className="text-gray-600">{product.description}</p>}
            {showStockStatus && <p className={inStockStyle}>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>}
        </div>
        {onAddToCart && <button className="text-lg bg-blue-400 text-white w-105 my-3 p-2" onClick={() => {onAddToCart(product.id)}}>Add to Cart</button>}
        </div>
       
    )
}

export default ProductDisplay
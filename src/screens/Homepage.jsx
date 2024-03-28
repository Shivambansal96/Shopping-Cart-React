import ProductList from "../components/ProductsList";
import CartList from "../components/CartList";

function Homepage() {
    return (
        <div id="homepage" className=" h-screen w-screen flex justify-center items-center gap-10">

        <ProductList />
        <CartList />





        </div>
    )
}

export default Homepage;
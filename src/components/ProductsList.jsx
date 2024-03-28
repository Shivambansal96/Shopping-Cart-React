import "./ProductList.css";

function ProductList() {
    return(
        <div id="product-list">

        
{/* Start  */}

{/* <div id="products"> */}
        <div class="heading">
            <h1>Products</h1>
        </div>
        <div id="productOne">
            
            <div class="text">
                {/* <img src="./images/sylvesterTshirt" alt="Sylvester Tshirt" /> */}
            </div>

            <div class="number"><p id="numberOne">100</p></div>
            <div class="buttons">
                <div class="buttonContainer">   
                    <button id="decreaseButtonOne" class="decreaseButton">-</button>
                    <div class="noOfProducts"><p id="noOfProductsOne">0</p></div>
                    <button id="increaseButtonOne" class="increaseButton">+</button>
                </div>
            </div>
        </div>
        <div id="productTwo">

            <div class="text">
                {/* <img src="./images/harryPotterLeviosa.webp" alt="Harry Potter Leviosa"> */}
            </div>

            <div class="number"><p id="numberTwo">200</p></div>
            <div class="buttons">
                <div class="buttonContainer">
                    <button class="decreaseButton" id="decreaseButtonTwo">-</button>
                    {/* <!-- <input type="number" value="1" class="quantityInput"/> --> */}
                    <div class="noOfProducts"><p id="noOfProductsTwo">0</p></div>
                    <button class="increaseButton" id="increaseButtonTwo">+</button>
                </div>
            </div>

        </div>


        <div id="productThree">

            <div class="text">
                {/* <img src="./images/harryPotterHogwarts.webp" alt="Harry Potter Hogwarts"> */}
            </div>
            <div class="number"><p  id="numberThree">300</p></div>
            <div class="buttons">
                <div class="buttonContainer">
                    <button class="decreaseButton" id="decreaseButtonThree">-</button>
                    {/* <!-- <input type="number" value="1" class="quantityInput"/> --> */}
                    <div class="noOfProducts"><p id="noOfProductsThree">0</p></div>
                    <button class="increaseButton" id="increaseButtonThree">+</button>
                </div>
            </div>

        </div>
    {/* </div> */}
{/* Start  */}

            
        </div>
    )
}

export default ProductList;
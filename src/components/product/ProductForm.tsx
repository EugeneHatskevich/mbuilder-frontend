import React, {useState} from 'react';
import {InputTypeConstants} from "../types/constants/input-type.constants";
import {IProductItem} from "../types/product.interface";
import {ILogin} from "../types/login.interface";
import {AuthService} from "../../api/api.url";

interface ProductFormProps {

}

const ProductForm: React.FunctionComponent<ProductFormProps> = () => {
    const [name, setName] = useState('')
    const [proteins, setProteins] = useState(0)
    const [fats, setFats] = useState(0)
    const [carbohydrates, setCarbohydrates] = useState(0)
    const [calories, setCalories] = useState(0)

    async function clickHandler(e: React.MouseEvent<HTMLElement>) {
        const product: IProductItem = {
            name,
            proteins,
            fats,
            carbohydrates,
            calories
        } as IProductItem

        console.log(product)

        e.preventDefault()

        const token: ILogin = await (new AuthService().login('parkour.trayball@gmail.com', 'admin'))
        localStorage.setItem('token', token.accessToken);

        console.log(token)
    }

    return (
        <div>
            <form>
                <label>Name</label>
                <input name={'Name'} type={InputTypeConstants.text} defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                <br/>
                <label>Proteins</label>
                <input name={'Proteins'} type={InputTypeConstants.number} defaultValue={proteins} onChange={(e) => setProteins(Number(e.target.value))}></input>
                <br/>
                <label>Fats</label>
                <input name={'Fats'} type={InputTypeConstants.number} defaultValue={fats} onChange={(e) => setFats(Number(e.target.value))}></input>
                <br/>
                <label>Carbohydrates</label>
                <input name={'Carbohydrates'} type={InputTypeConstants.number} defaultValue={carbohydrates} onChange={(e) => setCarbohydrates(Number(e.target.value))}></input>
                <br/>
                <label>Calories</label>
                <input name={'Calories'} type={InputTypeConstants.number} defaultValue={calories} onChange={(e) => setCalories(Number(e.target.value))}></input>
                <br/>

                <button onClick={(e) => clickHandler(e)}>Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
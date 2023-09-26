import React, {useState} from 'react';
import {InputTypeConstants} from "../../types/constants/input-type.constants";
import {IProductItem} from "../../types/product.interface";
import {ILogin} from "../../types/login.interface";
import {AuthService} from "../../../api/api.url";
import {Form} from "react-bootstrap";
import styles from './ProductForm.module.css'
import FormButton from "../../common/FormButton";

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
            <Form className='align-content-center'>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className={styles.control} name={'Name'} type={InputTypeConstants.text} defaultValue={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Proteins</Form.Label>
                    <Form.Control className={styles.control} name={'Proteins'} type={InputTypeConstants.number} defaultValue={proteins} onChange={(e) => setProteins(Number(e.target.value))}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fats</Form.Label>
                    <Form.Control className={styles.control} name={'Fats'} type={InputTypeConstants.number} defaultValue={fats} onChange={(e) => setFats(Number(e.target.value))}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Carbohydrates</Form.Label>
                    <Form.Control className={styles.control} name={'Carbohydrates'} type={InputTypeConstants.number} defaultValue={carbohydrates} onChange={(e) => setCarbohydrates(Number(e.target.value))}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Calories</Form.Label>
                    <Form.Control className={styles.control} name={'Calories'} type={InputTypeConstants.number} defaultValue={calories} onChange={(e) => setCalories(Number(e.target.value))}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <FormButton buttonName={'Submit'} clickHandler={(e) => clickHandler(e)}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default ProductForm;
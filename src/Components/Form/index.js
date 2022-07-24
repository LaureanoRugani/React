


const Input = () => {
    return (
        <input type="text" placeholder={PaymentResponse.placeholder} />
    )
}

const TextArea = () => {
    return (
        <textarea styles={{width: 500, height: 400}}></textarea>
    )
}

const Submit = (porps) => {
    return (
        <button type="submit">{porps.label}</button>
    )
}

function Form () {

        return (
            <form>
                <Input placeholder={'Ingrese el nombre'} />   
                <Input placeholder={'Ingrese el apellido'} />
                <TextArea />
                <Submit label={'enviar'}/>
            </form>
        );
}

export default Form;
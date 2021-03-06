import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import { useHistory } from 'react-router'

const SubmitButtonContainer = styled.button`
    box-sizing: border-box;
    margin-top: 10px;
    padding: 10px;
    border-color: transparent;
    background-color: #3483fa;
    color: #fff;
    width: ${({width}) => width};
    border-radius: .375em;
    font-size: 16px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 25%);
    min-height: 48px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`

const SubmitButton = ({ innerText, onClick=()=>{}, onLoad, goTo=null, width='100%' }) => {
    const history = useHistory()
    
    const handleClick = () => {
        if (goTo) history.push(goTo)
        onClick()
    }
    return (
        <SubmitButtonContainer onClick={handleClick} width={width} >
        {
            onLoad ?
            <Loader type="ThreeDots" color="#00BFFF" height={18} width={18} /> :
            innerText
        }
        </SubmitButtonContainer>
    )
}

export default SubmitButton
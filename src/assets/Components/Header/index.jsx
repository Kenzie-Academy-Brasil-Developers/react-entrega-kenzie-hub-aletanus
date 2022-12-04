
export const Header = ({username, pDescription, buttonTitle, onClick, type, hidden}) => {

    return (
        
        <header>
            <h2>{username}</h2>
            <p>{pDescription}</p>
            <button onClick={onClick} type={type} hidden={hidden} >{buttonTitle}</button>
        </header>

    )
}
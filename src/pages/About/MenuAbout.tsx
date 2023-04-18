import logo from '../../assets/share-rent.png'

export default function MenuAbout() {
    return (
        <>
            <nav className="menu">
                <img src={logo} alt="logo" className='logo' />
            </nav>
            <p> esse é o menu about </p>
        </>
    )
}
export default function Top( {user, logoUser} ) {
    return (
      <>
      <header>
        <img className='logo' id='logoBurger' src='./src/assets/logo.png' alt='Logo' />
        <p id='pLogo'>Burger Queen</p>
        <p className='pUser'> {user} </p> 
        <img className='logoUser' src={logoUser} alt='Logo' />
      </header>

      </>
    );
  }
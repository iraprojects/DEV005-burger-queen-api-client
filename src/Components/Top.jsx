export default function Top( {user, logoUser} ) {
    return (
      <>
      <header>
        <div id='topLeft'>
        <img className='logo' id='logo-burger' src='./src/assets/logo.png' alt='Logo' />
        <h2 id='text-logo'>Burger Queen</h2>
        </div>
        <div id='topRight'>
        <h2 id='text-user'> {user} </h2> 
        <img id='logo-user' src={logoUser} alt='Logo' />
        </div>
      </header>

      </>
    );
  }
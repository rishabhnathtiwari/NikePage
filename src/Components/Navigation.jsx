import '../App.css';
const Navigation=()=>{

    return(
        <div>
    <nav>
       <div className="logo">
       <img src='brand_logo.png' alt="logo" />
       </div>
       <ul>
        <li href='#'>Menu</li>
        <li href='#'>Local</li>
        <li href='#'>About </li>
        <li href='#'>Contact</li>
       </ul>
       <button>
        Login
       </button>
    </nav>

</div>

    )
}

export default Navigation;


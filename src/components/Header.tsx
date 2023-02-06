import "./Header.css";
interface HeaderProps {
  category: string;
  logo: string;
  text: string;
}

function Header(props: HeaderProps) {
  return (
    <header className="App-header">
      <label className="category">{props.category}</label>
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>{props.text}</p>
    </header>
  );
}
export default Header;

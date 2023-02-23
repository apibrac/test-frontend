import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <div>
      <button id="addNews" onClick={handleClick}>
        Ajouter news
      </button>
    </div>
  );
}

export default Header;

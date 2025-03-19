import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Профиль</h1>
      <button onClick={() => navigate("/")}>На главную</button>
    </div>
  );
}

export default Profile;

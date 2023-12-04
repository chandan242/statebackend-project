import { useState } from "react";
import { login } from "../../apis/authentication";
import { LoadingWidget } from "../../components/loading";

export const LoginScreen = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    const data_new = { ...data };
    data_new[e.target.name] = e.target.value;
    setData(data_new);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    response = await login(data);
    setIsLoading(false);
  };

  const formFieldUI = (label, name, type) => {
    return (
      <div key={name} className="form-groups ">

        <label className="form-labels">{label}</label>
        <input
          required
          className="form-inputs"
          name={name}
          type={type}
          onChange={(e) => onChange(e)}
        ></input>

      </div>  
    );
  };

  return (
    <div   className="form-container login-form">
      {isLoading ? (
        <LoadingWidget />
      ) : (
        <form>
          <div  className="form-tag">
          <h4>Login</h4>
          <div className="">
            {formFieldUI("Email ID", "username", "text")}
          </div>
          <div>
            {formFieldUI("Password", "password", "password")}
          </div>
          </div>

          <div className="form-submit-btn">
            <button onClick={(e) => handleSubmit(e)}>Login</button>
          </div>

        </form>
      )}
    </div>
  );
};

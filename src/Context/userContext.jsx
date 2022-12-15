import { api } from "../assets/Api";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const navigateToLogin = useNavigate("/");
  const [loggedUserData, setloggedUserData] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("@USER.TOKEN");
    if (userToken) {
      const autoLogin = async () => {
        try {
          setLoading(true)
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${userToken}` },
          })
          // setloggedUserData([])
          setloggedUserData(response.data)

        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      autoLogin()
    }
  }, []);

  const userLogin = async (formData) => {
    try {
      setLoading(true)
      const response = await api.post("sessions", formData)

      localStorage.setItem("@USER.TOKEN", response.data.token)
      localStorage.setItem("@USER.ID", response.data.user.id)
      toast.success(
        `${response.data.user.name.toUpperCase().trim()}, seja bem vindo!`
      );

      // setloggedUserData([])
      // setloggedUserData(response.data)
      

      setTimeout(() => {
        navigate("/dashboard");
      }, 4000);

    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);
      if (response) {
        setTimeout(() => {
          toast.success(
            `Oi ${response.data.name.toUpperCase()}! Agora faça o seu login.`
          );
          console.log(response);
          console.log(response.data.name);
        }, 100);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    } catch (error) {
      toast.error(error.response);
      console.log(error.response);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        toast,
        navigate,

        userLogin,
        userRegister,
        loggedUserData,
        setloggedUserData,
        loading,
        setLoading,
        navigateToLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

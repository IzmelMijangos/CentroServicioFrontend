
import { useState } from "react";

import axios from "axios"; 
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import { useNavigate  } from "react-router-dom"; // Import para redirigir al usuario
import { useLocation } from 'react-router-dom';


// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const navigate = useNavigate();
  const [agreement, setAgremment] = useState(true);
  const location = useLocation(); 
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    plan: location.state?.plan || 'Plan Básico',
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setFormValues({ ...formValues, [name]: value.replace(/\s/g, '') });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSetAgremment = () => setAgremment(!agreement);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!agreement) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/',{formValues,plan: formValues.plan});
      if (response.data.checkout_url) {
        window.location.href = response.data.checkout_url;
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Error durante el registro", error);
      setError("Error durante el registro. Inténtalo de nuevo.");
    }
  };

  return (
    <BasicLayout title="Bienvenido!" image={curved6}>
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={handleSignUp}>
            <SoftBox mb={2}>
            <SoftInput 
              placeholder="Nombre de usuario" 
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              pattern="[\w.@+-]+" // Este patrón permite letras, números y los caracteres @ . + - _
              title="El nombre de usuario puede contener solo letras, números, y @/./+/-/_ caracteres."
              required 
            />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Correo Electrónico" name="email" value={formValues.email} onChange={handleInputChange} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Contraseña" name="password" value={formValues.password} onChange={handleInputChange}/>
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;Acepto&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terminos y Condiciones
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth type="submit">
                Registrar
              </SoftButton>
            </SoftBox>
            {error && (
              <SoftBox mt={2}>
                <SoftTypography color="error">{error}</SoftTypography>
              </SoftBox>
            )}
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Ya cuentas con una cuenta?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Inicio de sesión
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;

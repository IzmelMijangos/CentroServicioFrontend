/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

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

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const navigate = useNavigate();
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!agreement) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      const response = await axios.post('/api/register', formValues);
      if (response.data.checkout_url) {
        // Redirige al usuario a la URL de pago de Stripe
        window.location.href = response.data.checkout_url;
      } else {
        // Manejar falta de checkout_url en la respuesta
        // Aquí podrías usar navigate para redirigir a otra ruta en caso de éxito
        // Ejemplo: navigate('/dashboard');
      }
    } catch (error) {
      console.error("Error durante el registro", error);
      // Manejar el error en la interfaz de usuario
    }
  };

  return (
    <BasicLayout
      title="Bienvenido!"
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="Nombre" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Correo Electrónico" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Contraseña" />
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
              <SoftButton variant="gradient" color="dark" fullWidth>
                Registrar
              </SoftButton>
            </SoftBox>
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

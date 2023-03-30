import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
    .Toastify__toast-body{
        div:last-child{
            font-weight: 900;
        }
    }
`
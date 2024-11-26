import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes/theme";
import "../styles/globals.css";
import ClientLayout from "./clientLayout";
import { AdminProvider } from "./context/adminContext";
import { CashierProvider } from "./context/cashierContext";
import { AdminRegContext } from "./context/adminRegContext";

export const metadata = {
  title: "Airupees",
  description: "Generated by create next app",
};

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <AdminRegContext>
            <AdminProvider>
              <CashierProvider>
                <ClientLayout>{children}</ClientLayout>
              </CashierProvider>
            </AdminProvider>
          </AdminRegContext>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default Layout;

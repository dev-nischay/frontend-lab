import { Outlet } from "react-router-dom";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/SideBar";
import { useState } from "react";
export default () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </div>
  );
};

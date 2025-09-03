import { Outlet, Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";

export default () => {
  return (
    <div>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

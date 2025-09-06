import { Outlet, Link } from "react-router-dom";
import Container from "../components/Container";

export default () => {
  return (
    <div>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

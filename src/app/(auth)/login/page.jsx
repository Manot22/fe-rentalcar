import { Button } from "@nextui-org/react";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <main>
      <div>
        <Button>back</Button>
      </div>
      <div>
        <LoginForm />
      </div>
    </main>
  );
};
export default LoginPage;

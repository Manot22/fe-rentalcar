import RegisterForm from "./_components/RegisterForm";
import { Button } from "@nextui-org/button";

const RegisterPage = () => {
  return (
    <main>
      <div>
        <Button>Back</Button>
      </div>
      <div className="">
        <RegisterForm />
      </div>
    </main>
  );
};
export default RegisterPage;

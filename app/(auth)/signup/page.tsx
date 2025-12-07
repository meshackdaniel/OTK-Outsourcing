import RegisterPage from "@/components/client-pages/Register";
import { redirect } from "next/navigation";

const register = async () => {
  // const session = await getSession();
  // const user = session?.user;
  // if (user) {
  //   // If user is already logged in, redirect to home page
  //   redirect("/");
  // }
  return (
    <div>
      <RegisterPage />
    </div>
  );
};

export default register;

import Image from "next/image";
import logo from "../../img/AdminBoard.png";
import background1 from "../../img/bg1.jpg";
import background2 from "../../img/bg2.jpg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-[100vh] w-100% bg-no-repeat bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${background1.src})` }}
    >
      <div className="bg-white/10 backdrop-blur-md p-10 drop-shadow-md border rounded-lg">
        <div className="flex justify-center mb-3">
          <Image src={logo} alt="admin-logo" width={280}></Image>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

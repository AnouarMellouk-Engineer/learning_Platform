import Footer from "@/components/Footer";
import Nav from "../components/Nav";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Main;

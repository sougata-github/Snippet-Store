import Footer from "@/components/marketing/Footer";
import Navbar from "@/components/marketing/Navbar";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex flex-col w-full">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-6 flex-1">{children}</div>
      {/* <Footer /> */}
    </main>
  );
};

export default Marketinglayout;

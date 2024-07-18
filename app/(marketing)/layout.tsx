import Footer from "@/components/marketing/Footer";
import Navbar from "@/components/marketing/Navbar";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-7xl mx-auto h-screen flex flex-col w-full justify-between px-8">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Marketinglayout;

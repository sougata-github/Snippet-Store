import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relaive h-screen w-screen flex items-center justify-center">
      <Link href="/">
        <Button className="text-black/80 absolute top-[20px] left-[20px] bg-transparent hover:bg-gray-200">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </Link>

      {children}
    </div>
  );
};

export default Authlayout;

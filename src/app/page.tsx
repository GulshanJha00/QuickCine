import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex ">
      <h1 >First Project First Layout</h1>
      <Button>Button</Button>
      <UserButton/>
      </div>
    </>
  );
}

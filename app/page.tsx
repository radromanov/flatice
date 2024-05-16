import Main from "@/components/content/main-content";
import { Button } from "@/components/ui/button";

export default function Home() {
  return <Landing />;
}

const Landing = () => {
  return (
    <div className="flex flex-grow container">
      <Main>
        <div className="flex flex-col justify-center items-center w-full gap-2 container">
          <h1 className="text-4xl font-semibold">
            <span>Your expense tracking companion</span>
          </h1>

          <h3 className="text-xl">
            <span>Streamline your finances, anytime, anywhere</span>
          </h3>

          <div className="flex gap-2">
            <Button>Get Started</Button>
            <Button variant="ghost">
              <a target="_blank" href="https://github.com/radromanov/flatice">
                Github
              </a>
            </Button>
          </div>
        </div>
      </Main>
    </div>
  );
};

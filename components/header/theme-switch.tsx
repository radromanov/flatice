import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ThemeIcon from "../icons/theme-icon";

const ThemeSwitch = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-full">
        <ThemeIcon mode="dark" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <ThemeIcon mode="dark">Dark</ThemeIcon>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <ThemeIcon mode="light">Light</ThemeIcon>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitch;

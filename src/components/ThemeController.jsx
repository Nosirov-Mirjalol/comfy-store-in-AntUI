import { Button } from "antd";
import { useTheme } from "../utils/index";

const ThemeController = ({ lightIcon, darkIcon }) => {
  const { theme, toggleTheme } = useTheme();

  const heroBtnStyle = {
    backgroundColor: "#000075",
    color: "#ffffff",
    border: "none",
    borderRadius: "50%",
    padding: "10px 10px",
    transition: "all 0.5s ease",
  };

  return (
    <Button onClick={toggleTheme} style={heroBtnStyle}>
      {theme === "dark" ? lightIcon : darkIcon}
    </Button>
  );
};

export default ThemeController;

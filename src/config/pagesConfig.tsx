import { paths } from "../navigation/navigate";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
const pagesConfig = {
  notLogged: [
    {
      navigationId: 0,
      path: paths.login,
      name: "Login",
    }
   
  ],
  logged: [
    {
      navigationId: 0,
      path: paths.login,
      name: "Home",
      title: "MAPA DE RISCOS",
      icon: <BubbleChartIcon />,
      working: true,
      show: true,
    },
  ],
};
export default pagesConfig;

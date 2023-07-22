// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import {AppRoutes} from "./routes";
import {Outlet} from "react-router-dom";
import {DefaultLayout} from "./layouts/default-layouts/DefaultLayout";

export function App() {
  return (
    <AppRoutes/>
  );
}

export default App;

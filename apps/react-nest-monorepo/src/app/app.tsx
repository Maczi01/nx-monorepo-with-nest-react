// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import {AppRoutes} from "./routes";

export function App() {
  return (
    <>
      {/*<NxWelcome title="react-nest-monorepo" />*/}
      <AppRoutes />
    </>
  );
}

export default App;

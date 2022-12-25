import { useState } from "react";
import { css } from "@linaria/core";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "./assets/react.svg";

type Props = {
  name?: string;
};

const style = css`
  background: #999;
  color: #fff;
  border-radius: 12px;
`;

function App({ name }: Props = {}) {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  console.log({ name });

  return (
    <div className="App">
      <div className={style}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((newCount) => newCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{t("learn more", { ns: "main" })}</p>
    </div>
  );
}

export default App;

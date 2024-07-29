import "./App.css";
import { ItemListContainer, Header } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="greeting">
          <ItemListContainer greeting="Bienvenidos a Play Store" />
        </div>
      </main>
    </>
  );
};

import * as React from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default App;

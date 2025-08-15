import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;

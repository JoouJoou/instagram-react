import BodyLeft from "./Main/BodyLeft";
import BodyRight from "./Main/BodyRight";
import Footer from "./Footer";
import Header from "./header/Header";
export default function App() {
  return (
    <>
      <Header />
      <div className="corpo">
        <BodyLeft />
        <BodyRight />
      </div>
      <Footer />
    </>
  );
}

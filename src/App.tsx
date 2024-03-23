import Container from "./components/container/Container";
import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { themeMode } = useAppSelector((state) => state.theme);

  return (
    <Container className={themeMode === true ? "bg-gray-800 text-white" : "bg-white text-black"}>
      <MainLayout />
    </Container>
  );
}

export default App;

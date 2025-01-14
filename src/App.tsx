import Footer from "./components/Footer";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
      }}
    >
      <main style={{ flex: 1 }}>
        <h1>Welcome to LOPE Lab</h1>
        <p>Content goes here...</p>
      </main>

      <Footer />
    </div>
  );
}

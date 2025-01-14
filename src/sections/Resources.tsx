import { Container, Title } from "@mantine/core";
import AdditionalResources from "./AdditionalResources";
import MainResources from "./MainResources";

export default function Resources() {
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title
        align="center"
        order={2}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        實驗室資源與工具
      </Title>

      <MainResources />

      <AdditionalResources />
    </Container>
  );
}


import { Container, Title, Text, Center } from "@mantine/core";

export default function MainVisual() {
  return (
    <div
      style={{
        backgroundColor: "#1E88E5", // 背景色を青に設定
        padding: "60px 0",
        textAlign: "center",
        color: "white",
      }}
    >
      <Container>
        <Center>
          <Title order={1} style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            知識本體、語言處理與人文計算實驗室
          </Title>
        </Center>

        <Center>
          <Text size="lg" style={{ marginBottom: "20px" }}>
            @ 台大語言學研究所
          </Text>
        </Center>

        {/* 詳細説明 */}
        <Center>
          <Text size="md" style={{ maxWidth: "800px", lineHeight: 1.5 }}>
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>L</span>ab of{" "}
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>O</span>
            ntologies, Language{" "}
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>P</span>
            rocessing and{" "}
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>E</span>
            -humanities
          </Text>
        </Center>
      </Container>
    </div>
  );
}

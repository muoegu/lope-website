import { Box, Container, Text, Anchor, Center } from "@mantine/core";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
        width: "100%",
      }}
    >
      <Container>
        <Center>
          <div style={{ textAlign: "center" }}>
            <Text size="lg" weight={700} mb="sm">
              聯絡我們
            </Text>
            <Text>
              謝老師 email:{" "}
              <Anchor
                href="mailto:sieh@ntu.edu.tw"
                style={{ color: "white", textDecoration: "none" }}
              >
                sieh@ntu.edu.tw
              </Anchor>
            </Text>
            <Text>臺大語言所 | 知識本體、語言處理與人文計算實驗室</Text>
            <Text>
              LOPE lab @ National Taiwan University, Graduate Institute of
              Linguistics
            </Text>
          </div>
        </Center>
      </Container>
    </Box>
  );
}

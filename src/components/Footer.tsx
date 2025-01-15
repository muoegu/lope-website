import { Box, Container, Text, Anchor, Center } from "@mantine/core";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black", // 背景色を黒に設定
        color: "white", // テキスト色を白に設定
        padding: "20px 0",
        width: "100%",
        marginTop: "auto", // フッターをページの下部に配置
      }}
    >
      <Container>
        <Center>
          <div style={{ textAlign: "center" }}>
            {/* セクションタイトル */}
            <Text size="lg" weight={700} mb="sm">
              聯絡我們
            </Text>
            
            {/* 連絡先 */}
            <Text>
              謝老師 email:{" "}
              <Anchor
                href="mailto:sieh@ntu.edu.tw"
                style={{ color: "white", textDecoration: "none" }}
              >
                sieh@ntu.edu.tw
              </Anchor>
            </Text>

            {/* ラボ名 */}
            <Text style={{ marginTop: "10px" }}>
              臺大語言所 | 知識本體、語言處理與人文計算實驗室
            </Text>
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

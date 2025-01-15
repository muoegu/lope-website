import { Grid, Card, Text, Button, Image } from "@mantine/core";
import { useEffect, useState } from "react";

// 画像をインポート
import cwn from "../assets/images/resources/cwn.png";
import tool2 from "../assets/images/resources/cwn.png";
import tool3 from "../assets/images/resources/cwn.png";

// リソースの型
type Resource = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function MainResources() {
  const [resources, setResources] = useState<Resource[]>([]);

  // 画像マッピング
  const imageMap: { [key: string]: string } = {
    cwn,
    tool2,
    tool3,
  };

  useEffect(() => {
    // JSON データを動的に読み込む
    async function fetchResources() {
      const data = await import("../data/resources/main_resources.json");
      setResources(data.default);
    }

    fetchResources();
  }, []);

  return (
    <Grid gutter="lg">
      {resources.map((resource, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={imageMap[resource.image]} // 画像マッピングでパスを取得
                alt={resource.title}
                height={130}
                fit="cover"
              />
            </Card.Section>
            <Text
              weight={700}
              size="lg"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {resource.title}
            </Text>
            <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
              {resource.description}
            </Text>
            <Button
              component="a"
              href={resource.link}
              target="_blank"
              variant="light"
              color="blue"
              fullWidth
            >
              查看更多
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}

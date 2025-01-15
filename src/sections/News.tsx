import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Badge,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";

// ニュースアイテムの型定義
type NewsItem = {
  date: string;
  tag: string;
  status: string;
  title: string;
  content: string;
};

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    // JSON データを動的に読み込む
    async function fetchNews() {
      const data = await import("../data/news/news.json");
      setNewsItems(data.default);
    }

    fetchNews();
  }, []);

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title
        align="center"
        order={2}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        最新消息
      </Title>

      {/* ニュースアイテム */}
      <Grid gutter="lg">
        {newsItems.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              {/* 日付とタグ */}
              <Group position="apart" style={{ marginBottom: "10px" }}>
                <Text size="xs" color="dimmed">
                  {item.date}
                </Text>
                <Badge color="blue" variant="light">
                  {item.tag}
                </Badge>
                <Badge
                  color="green"
                  variant="outline"
                  style={{ marginBottom: "10px" }}
                >
                  {item.status}
                </Badge>
              </Group>

              {/* ニュースタイトル */}
              <Text weight={700} size="lg" style={{ marginBottom: "10px" }}>
                {item.title}
              </Text>

              {/* ニュース内容 */}
              <Text size="sm" color="dimmed">
                {item.content}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

import { Container, Grid, Card, Text, Title } from "@mantine/core";

export default function News() {
  const newsItems = [
    {
      title: "New Research Published",
      description: "Our team has published a new paper on semantic analysis.",
    },
    {
      title: "Workshop Announcement",
      description: "Join our upcoming workshop on digital humanities tools.",
    },
    {
      title: "Conference Keynote",
      description: "Prof. X delivered a keynote speech at ABC Conference.",
    },
    {
      title: "Grant Awarded",
      description: "We received funding for our project on NLP and AI ethics.",
    },
    {
      title: "Collaboration with XYZ Lab",
      description: "Our lab is collaborating with XYZ Lab on a new project.",
    },
  ];

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
          <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              {/* ニュースタイトル */}
              <Text weight={700} size="lg" style={{ marginBottom: "10px" }}>
                {item.title}
              </Text>

              {/* ニュース説明 */}
              <Text size="sm" color="dimmed">
                {item.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

import { Grid, Card, Text, Button, Image } from "@mantine/core";

export default function MainResources() {
  const resources = [
    {
      title: "Resource A",
      description: "Main resource A description.",
      image: "/assets/images/resources/cwn.png",
      link: "https://example.com/resource-a",
    },
    {
      title: "Resource B",
      description: "Main resource B description.",
      image: "/assets/images/tool2.png",
      link: "https://example.com/resource-b",
    },
    {
      title: "Resource B",
      description: "Main resource B description.",
      image: "/assets/images/tool2.png",
      link: "https://example.com/resource-b",
    },
  ];

  return (
    <Grid gutter="lg">
      {resources.map((resource, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={resource.image}
                alt={resource.title}
                height={160}
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
              Learn More
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}

import {
  Container,
  Title,
  Grid,
  Card,
  Text,
  Image,
  Badge,
  Button,
} from "@mantine/core";
import MemberCards from "./MemberCards";

export default function Member() {
  // 指導教授の情報
  const professor = {
    image: "/assets/images/professor.jpg",
    name: "Professor Name",
    year: "Director",
    researchField: "Knowledge Ontology, NLP, Digital Humanities",
    email: "professor@ntu.edu.tw",
  };

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      {/* セクションタイトル */}
      <Title
        align="center"
        order={2}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        成員
      </Title>

      <Grid gutter="lg" style={{ marginBottom: "40px" }}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={professor.image}
                alt={professor.name}
                height={160}
                fit="cover"
              />
            </Card.Section>
            <Text
              weight={700}
              size="lg"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {professor.name}
            </Text>
            <Badge
              color="blue"
              variant="light"
              style={{ marginBottom: "10px" }}
            >
              {professor.year}
            </Badge>
            <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
              {professor.researchField}
            </Text>
            <Button
              component="a"
              href={`mailto:${professor.email}`}
              variant="light"
              color="green"
              fullWidth
            >
              Contact
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

      <MemberCards />
    </Container>
  );
}

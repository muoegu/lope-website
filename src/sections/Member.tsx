import { Container, Title, Grid } from "@mantine/core";
import MemberCards from "./MemberCards";

export default function Member() {
  const professor = {
    image: "/assets/images/professor.jpg",
    name: "Professor Name",
    year: "Director",
    researchField: "Knowledge Ontology, NLP, Digital Humanities",
    email: "professor@ntu.edu.tw",
  };

  const members = [
    {
      image: "/assets/images/member1.jpg",
      name: "John Doe",
      year: "Ph.D. Student",
      researchField: "Syntax and Semantics",
      github: "https://github.com/johndoe",
      email: "johndoe@ntu.edu.tw",
    },
    {
      image: "/assets/images/member2.jpg",
      name: "Jane Smith",
      year: "M.A. Student",
      researchField: "Computational Linguistics",
      github: "https://github.com/janesmith",
      email: "janesmith@ntu.edu.tw",
    },
    {
      image: "/assets/images/member3.jpg",
      name: "Alan Turing",
      year: "Research Assistant",
      researchField: "Machine Translation",
      github: "https://github.com/alanturing",
      email: "alanturing@ntu.edu.tw",
    },
  ];

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      {/* セクションタイトル */}
      <Title
        align="center"
        order={2}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Members
      </Title>

      {/* 教授情報 */}
      <Grid>
        <Grid.Col span={12}>
          <MemberCards {...professor} />
        </Grid.Col>
      </Grid>

      {/* メンバー情報 */}
      <Grid gutter="lg">
        {members.map((member, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <MemberCards {...member} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

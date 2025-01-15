import { Container, Title, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type Member = {
  englishName: string;
  chineseName: string;
  degree: string;
};

export default function Alumni() {
  const [alumni, setAlumni] = useState<Member[]>([]);
  const [researchAssistants, setResearchAssistants] = useState<Member[]>([]);
  const [postdocs, setPostdocs] = useState<Member[]>([]);

  useEffect(() => {
    async function fetchData() {
      const alumniData = await import("../data/alumni/alumni.json");
      setAlumni(alumniData.default);

      const researchAssistantsData = await import(
        "../data/alumni/research_assistants.json"
      );
      setResearchAssistants(researchAssistantsData.default);

      const postdocsData = await import(
        "../data/alumni/postdoctoral_researchers.json"
      );
      setPostdocs(postdocsData.default);
    }

    fetchData();
  }, []);

  const renderMembers = (members: Member[]) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div>
        {members.slice(0, 5).map((member, index) => (
          <Text key={index} style={{ marginBottom: "10px" }}>
            <strong>{member.englishName}</strong> | {member.chineseName},{" "}
            {member.degree}
          </Text>
        ))}
      </div>

      <div>
        {members.slice(5).map((member, index) => (
          <Text key={index} style={{ marginBottom: "10px" }}>
            <strong>{member.englishName}</strong> | {member.chineseName},{" "}
            {member.degree}
          </Text>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Title
        align="center"
        order={1}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        歷任成員
      </Title>
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Title
          align="center"
          order={2}
          style={{ fontSize: "2.5rem", marginBottom: "20px" }}
        >
          已畢業成員
        </Title>
        {renderMembers(alumni)}

        <Title
          align="center"
          order={2}
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          研究助理＆交換生
        </Title>
        {renderMembers(researchAssistants)}

        <Title
          align="center"
          order={2}
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            marginTop: "40px",
          }}
        >
          博士後研究員＆專任助理
        </Title>
        {renderMembers(postdocs)}
      </Container>
    </>
  );
}

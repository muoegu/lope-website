import {
  Card,
  Image,
  Text,
  Badge,
  ActionIcon,
  Group,
  Grid,
} from "@mantine/core";
import { IconMail, IconLink } from "@tabler/icons-react"; // Tabler Icons をインポート
import { useEffect, useState } from "react";

// 画像をインポート
import micah from "../assets/images/member/micah.png";
import jane_smith from "../assets/images/resources/cwn.png";
import alan_turing from "../assets/images/resources/cwn.png";
import alan_turing1 from "../assets/images/resources/cwn.png";
import alan_turing2 from "../assets/images/resources/cwn.png";

// メンバーの型定義
type Member = {
  name: string;
  year: string;
  researchField: string;
  image: string;
  github?: string;
  email: string;
};

export default function MemberCards() {
  const [members, setMembers] = useState<Member[]>([]);

  // 画像マッピング
  const imageMap: { [key: string]: string } = {
    micah,
    jane_smith,
    alan_turing,
    alan_turing1,
    alan_turing2
  };

  useEffect(() => {
    // JSON データを動的に読み込む
    async function fetchMembers() {
      const data = await import("../data/member/members.json");
      setMembers(data.default);
    }

    fetchMembers();
  }, []);

  return (
    <Grid gutter="lg">
      {members.map((member, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={imageMap[member.image]} // 画像マッピングでパスを取得
                alt={member.name}
                height={160}
              />
            </Card.Section>

            {/* メンバー情報 */}
            <Text weight={700} size="lg" style={{ marginTop: "10px" }}>
              {member.name}
            </Text>

            <Badge
              color="blue"
              variant="light"
              style={{ marginBottom: "10px" }}
            >
              {member.year}
            </Badge>

            <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
              {member.researchField}
            </Text>

            {/* アクションアイコン */}
            <Group position="apart">
              {member.github && (
                <ActionIcon
                  component="a"
                  href={`mailto:${member.email}`}
                  variant="light"
                  color="green"
                  aria-label="Email"
                  radius="xl"
                  style={{ width: 40, height: 40 }}
                >
                  <IconMail
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              )}
              <ActionIcon
                component="a"
                href={member.github}
                target="_blank"
                variant="light"
                color="blue"
                aria-label="GitHub"
                radius="xl"
                style={{ width: 40, height: 40 }}
              >
                <IconLink
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}

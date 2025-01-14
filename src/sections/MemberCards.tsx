import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

type MemberCardProps = {
  image: string;
  name: string;
  year: string;
  researchField: string;
  github?: string;
  email: string;
};

export default function MemberCards({
  image,
  name,
  year,
  researchField,
  github,
  email,
}: MemberCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* メンバー画像 */}
      <Card.Section>
        <Image src={image} alt={name} height={160} />
      </Card.Section>

      {/* メンバー情報 */}
      <Text weight={700} size="lg" style={{ marginTop: "10px" }}>
        {name}
      </Text>

      <Badge color="blue" variant="light" style={{ marginBottom: "10px" }}>
        {year}
      </Badge>

      <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
        {researchField}
      </Text>

      {/* アクションボタン */}
      <Group position="apart">
        {github && (
          <Button
            component="a"
            href={github}
            target="_blank"
            variant="light"
            color="blue"
          >
            Github
          </Button>
        )}
        <Button
          component="a"
          href={`mailto:${email}`}
          variant="light"
          color="green"
        >
          Email
        </Button>
      </Group>
    </Card>
  );
}

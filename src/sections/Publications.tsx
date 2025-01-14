import { Tabs, Title } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Publications() {
  const [data, setData] = useState<{ [key: string]: any[] }>({});
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    // データの動的ロード
    async function fetchData() {
      const context = import.meta.glob("../data/publications/*.json");
      const loadedData: { [key: string]: any[] } = {};
      const loadedYears: string[] = [];

      for (const path in context) {
        const module = await context[path]();
        const year = path.match(/(\d{4})\.json$/)?.[1];
        if (year) {
          loadedData[year] = module.default;
          loadedYears.push(year);
        }
      }

      // 年代順にソート
      loadedYears.sort((a, b) => Number(b) - Number(a));
      setData(loadedData);
      setYears(loadedYears);
    }

    fetchData();
  }, []);

  return (
    <>
      <Title
        align="center"
        order={2}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        研究成果
      </Title>
      {years.length > 0 && (
        <Tabs variant="outline" defaultValue={years[0]}>
          {/* タブリスト */}
          <Tabs.List>
            {years.map((year) => (
              <Tabs.Tab key={year} value={year}>
                {year}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {/* 各年のデータ */}
          {years.map((year) => (
            <Tabs.Panel key={year} value={year}>
              <ul>
                {data[year].map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </Tabs.Panel>
          ))}
        </Tabs>
      )}
    </>
  );
}

// import { useState } from "react";
// import {
//   Header,
//   Container,
//   Group,
//   Burger,
//   Text,
//   Paper,
//   Transition,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";

// export default function AppHeader() {
//   const [opened, { toggle, close }] = useDisclosure(false);
//   const links = [
//     { label: "Home", link: "/" },
//     { label: "About", link: "/about" },
//     { label: "Resources", link: "/resources" },
//     { label: "News", link: "/news" },
//     { label: "Contact", link: "/contact" },
//   ];

//   return (
//     <Header height={60} style={{ borderBottom: "1px solid #eaeaea" }}>
//       <Container
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           height: "100%",
//         }}
//       >
//         {/* ロゴ部分 */}
//         <Text weight={700} size="xl">
//           LOPE Lab
//         </Text>

//         {/* ナビゲーションメニュー */}
//         <Group
//           spacing={30}
//           className="desktop-menu"
//           style={{ display: "flex" }}
//         >
//           {links.map((link, index) => (
//             <Text
//               key={index}
//               component="a"
//               href={link.link}
//               style={{
//                 textDecoration: "none",
//                 fontWeight: 500,
//                 color: "#333",
//               }}
//             >
//               {link.label}
//             </Text>
//           ))}
//         </Group>

//         {/* ハンバーガーメニュー（小画面） */}
//         <Burger
//           opened={opened}
//           onClick={toggle}
//           size="sm"
//           className="mobile-menu"
//           style={{ display: "none" }}
//         />

//         {/* モバイルメニュー */}
//         <Transition
//           mounted={opened}
//           transition="pop-top-right"
//           duration={200}
//           timingFunction="ease"
//         >
//           {(styles) => (
//             <Paper
//               style={{
//                 ...styles,
//                 position: "absolute",
//                 top: 60,
//                 left: 0,
//                 right: 0,
//                 zIndex: 10,
//               }}
//               shadow="sm"
//               p="md"
//             >
//               {links.map((link, index) => (
//                 <Text
//                   key={index}
//                   component="a"
//                   href={link.link}
//                   onClick={close}
//                   style={{
//                     display: "block",
//                     marginBottom: 10,
//                     textDecoration: "none",
//                     fontWeight: 500,
//                     color: "#333",
//                   }}
//                 >
//                   {link.label}
//                 </Text>
//               ))}
//             </Paper>
//           )}
//         </Transition>
//       </Container>
//     </Header>
//   );
// }

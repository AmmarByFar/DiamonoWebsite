import { FactionPageTemplate } from "@/components/faction-page/FactionPageTemplate";

const content = {
  name: "taneika",
  banner: "/faction-page/taneika-banner.jpg",
  wordmark: "/faction-page/taneika-daimono.svg",
  swoosh: "/faction-page/taneika-swoosh.svg",
  swooshPosition: "-bottom-2 left-5",
  emblem: "/emblems/taneika-emblem.png",
  emblemBorderColor: "primary",
  avatar: {
    image: "/taneika-avatar.png",
    name: "Lorem",
    description: "Lorem, ipsum",
  },
  subtext:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente eius",
  loreDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, omnis impedit dolor et modi voluptatem reiciendis adipisci laborum iure qui officiis amet dolorem quibusdam aspernatur excepturi sapiente magni provident harum doloribus! Asperiores totam possimus dicta, voluptatum ratione quas vero nostrum doloremque dolore corporis qui autem placeat quam? Repudiandae error odit veniam, ducimus recusandae atque doloremque, saepe ad similique modi numquam nostrum excepturi consequuntur labore quasi cum laboriosam sunt quam? Similique sed itaque sapiente distinctio debitis animi aliquam harum optio dolore?",
};

export default function Taneika() {
  return <FactionPageTemplate content={content} />;
}

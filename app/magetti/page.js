import { FactionPageTemplate } from "@/components/faction-page/FactionPageTemplate";

const content = {
  name: "Magetti",
  banner: "/faction-page/magetti-banner.jpg",
  wordmark: "/faction-page/magetti-daimono.svg",
  swoosh: "/faction-page/magetti-swoosh.svg",
  swooshPosition: "-top-5 right-0",
  emblem: "/emblems/magetti-emblem.png",
  emblemBorderColor: "blueAccent",
  avatar: {
    image: "/magetii-avatar.png",
    name: "Lorem",
    description: "Lorem, ipsum",
  },
  subtext:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente eius",
  loreDescription:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, omnis impedit dolor et modi voluptatem reiciendis adipisci laborum iure qui officiis amet dolorem quibusdam aspernatur excepturi sapiente magni provident harum doloribus! Asperiores totam possimus dicta, voluptatum ratione quas vero nostrum doloremque dolore corporis qui autem placeat quam? Repudiandae error odit veniam, ducimus recusandae atque doloremque, saepe ad similique modi numquam nostrum excepturi consequuntur labore quasi cum laboriosam sunt quam? Similique sed itaque sapiente distinctio debitis animi aliquam harum optio dolore?",
};

export default function Magetti() {
  return <FactionPageTemplate content={content} />;
}

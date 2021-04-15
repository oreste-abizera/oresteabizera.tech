import ExTra1 from "../images/Extra/ExTra1.png"
import ExTra2 from "../images/Extra/ExTra2.png"
import ExTra3 from "../images/Extra/ExTra3.png"
import ExTra4 from "../images/Extra/ExTra4.png"
import ExTra5 from "../images/Extra/ExTra5.png"
import ExTra6 from "../images/Extra/ExTra6.png"
import ExTra7 from "../images/Extra/ExTra7.png"
import ExTra8 from "../images/Extra/ExTra8.png"
import ExTra9 from "../images/Extra/ExTra9.png"
import ExTra10 from "../images/Extra/ExTra10.png"
import ExTra11 from "../images/Extra/ExTra11.png"

const projects = [
  {
    title: "ExTra",
    description:
      "ExTra is an application which helps you to track your daily incomes and expenses. A user is able to record his/her income or expense anytime. When there is no internet connection available on the user's phone, there is an option of saving the transaction locally. A user can view the transactions made on a given day and he/she can delete any one if it is the choice. There is online syncing in this app: When a user has saved transactions locally they will be synced to his/her account when the internet is available.",
    social_image: ExTra1,
    slug: "ExTra",
    type: "Mobile application",
    images: [
      ExTra2,
      ExTra3,
      ExTra4,
      ExTra5,
      ExTra6,
      ExTra7,
      ExTra8,
      ExTra9,
      ExTra10,
      ExTra11,
    ],
    technologies: ["React Native", "Expo", "Node js", "MongoDB"],
    mobileImages: true,
    download_url: `/downloads/ExTra.apk`,
  },
  {
    title: "Whatsapp Clone",
    description:
      "This is a clone of Whatsapp web app. It contains basic features of whatsapp like real time messaging, creating  rooms(groups),...",
    url: "https://ao-whatsapp-clone.netlify.app/",
    social_image:
      "https://d33wubrfki0l68.cloudfront.net/5fa2dfe2054a04254b4d811a/screenshot.png",
    slug: "whatsapp-clone",
    type: "Web application",
    images: [],
    technologies: ["React js", "Firebase", "Material ui"],
    github_url: "https://github.com/oreste-abizera/whatsapp-clone",
    site_url: "https://ao-whatsapp-clone.netlify.app/",
  },
  {
    title: "Redux Cart",
    description:
      "This is a simple project for management of cart for an ecommerce application. It contains features including decrementing cart items, removing items from cart, clearing cart, etc.",
    url: "https://ao-redux-cart.netlify.app/",
    social_image:
      "https://d33wubrfki0l68.cloudfront.net/5fa56245f1c7d4012c8f6aea/screenshot.png",
    slug: "redux-cart",
    type: "Web application",
    images: [],
    technologies: ["React js", "Redux"],
  },
  {
    title: "Upcrew School",
    description:
      "Upcrew is a project for managing a school activities. Students can attend quizes assigned by their teacher. Teachers can set quizes with timer and deadline. System admin manages students and teachers in the system.",
    url: "https://upcrew.netlify.app/",
    social_image:
      "https://d33wubrfki0l68.cloudfront.net/5fb97da139e1490007640e5a/screenshot.png",
    slug: "upcrew",
    type: "Web application",
    images: [],
    technologies: [
      "React js",
      "Styled components",
      "Bootstrap",
      "Node js",
      "Express",
      "MongoDB",
    ],
    github_url: "https://github.com/oreste-abizera/upcrew",
    site_url: "https://upcrew.netlify.app/",
  },
  {
    title: "Con Fusion",
    description: "Con Fusion is a restaurant app built for learning purposes.",
    url: "https://ao-confusion.netlify.app/",
    social_image:
      "https://d33wubrfki0l68.cloudfront.net/5fe86839484016000855968d/screenshot.png",
    slug: "con-fusion",
    type: "Web application",
    images: [],
    technologies: ["React js"],
    github_url: "https://github.com/oreste-abizera/confusion",
  },
  {
    title: "Markdown Preview",
    description:
      "This project allows you to create a markdown content while live previewing the result on the same page.",
    url: "https://react-markdownpreview.netlify.app/",
    social_image:
      "https://d33wubrfki0l68.cloudfront.net/5feb25f660a1040eb92b609c/screenshot.png",
    slug: "markdown-preview",
    type: "Web application",
    images: [],
    technologies: ["React js"],
  },
]

export default projects

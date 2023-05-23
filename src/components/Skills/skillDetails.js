import { SiMongodb } from "react-icons/si";
import { DiBackbone } from "react-icons/di";
import { FaFlask, FaPython } from "react-icons/fa";
import {GiArtificialIntelligence} from "react-icons/gi";
import { AiOutlineConsoleSql} from "react-icons/ai"

export const skills = [
  {
    id: 1,
    iconDet: SiMongodb,
    col: "#439743",
    url: "https://img.icons8.com/color/480/000000/mongodb.png",
    title: "MongoDB",
  },
  {
    id: 2,
    iconDet: FaPython,
    col: "#01C67F",
    title: "Python",
  },
  {
    id: 3,
    col: "#439743",
    iconDet: DiBackbone,
    title: "DSA",
  },
  {
    id: 4,
    iconDet: GiArtificialIntelligence,
    col: "#5ED3F3",
    title: "Artificial Intelligence",
  },
  
  {
    id: 5,
    col: "#5ED3F3",
    iconDet: FaFlask,
    title: "Flask",
  },  
  {
    id: 6,
    col: "#5ED3F3",
    iconDet: AiOutlineConsoleSql,
    title: "SQL",
  }
  
];

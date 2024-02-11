import React from "react";
import SkillCard from "./SkillCard";
import ReactIcon from "../../public/react.svg";
import JavascriptIcon from "../../public/javascript.svg";
import NextJSIcon from "../../public/nextJs.svg";
import HTMLIcon from "../../public/html.svg";
import CSSIcon from "../../public/css.svg";
import TailwindIcon from "../../public/tailwind.svg";
import MaterialUIIcon from "../../public/materialUI.svg";
import ReactQueryIcon from "../../public/reactQuery.svg";
import PythonIcon from "../../public/python.svg";
import DjangoIcon from "../../public/django.svg";
import MysqlIcon from "../../public/mysql.svg";
import APIIcon from "../../public/api.svg";
import RedisIcon from "../../public/redis.svg";
import PostgresqlIcon from "../../public/postgresql.svg";
import PostManIcon from "../../public/postman.svg";
import GitIcon from "../../public/git.svg";
import GitHubIcon from "../../public/github.svg";
import VSCodeIcon from "../../public/vscode.svg";
import AWSIcon from "../../public/aws.svg";
import DockerIcon from "../../public/docker.svg";
import FigmaIcon from "../../public/figma.svg";
import NginxIcon from "../../public/nginx.svg";

type Props = {};

const SkillSection = (props: Props) => {
  const frontend = [
    { title: "Javascript", image: JavascriptIcon },
    { title: "ReactJS", image: ReactIcon },
    { title: "NextJS", image: NextJSIcon },
    { title: "HTML", image: HTMLIcon },
    { title: "CSS", image: CSSIcon },
    { title: "TailwindCSS", image: TailwindIcon },
    { title: "MaterialUI", image: MaterialUIIcon },
    { title: "ReactQuery", image: ReactQueryIcon },
  ];

  const backend = [
    { title: "Python", image: PythonIcon },
    { title: "Django", image: DjangoIcon },
    { title: "Mysql", image: MysqlIcon },
    { title: "RESTful", image: APIIcon },
    { title: "Redis", image: RedisIcon },
    { title: "Postgresql", image: PostgresqlIcon },
    { title: "Postman", image: PostManIcon },
  ];

  const others = [
    { title: "Git", image: GitIcon },
    { title: "GitHub", image: GitHubIcon },
    { title: "VS Code", image: VSCodeIcon },
    { title: "AWS", image: AWSIcon },
    { title: "Docker", image: DockerIcon },
    { title: "Figma", image: FigmaIcon },
    { title: "Nginx", image: NginxIcon },
  ];

  return (
    <div id='skills'>
      <h1 className='text-5xl font-semibold text-center mb-10 text-gray-200'>
        Skills
      </h1>
      <div className='max-w-xl mx-auto mb-8'>
        <p className='text-center text-gray-400 text-xl'>
          These are some of the abilities that I have been developing over the
          last four years.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-12 xl:grid-cols-2 place-content-center'>
        <SkillCard title='Frontend' icons={frontend} />
        <SkillCard title='Backend' icons={backend} />
        <SkillCard title='Others' icons={others} />
      </div>
    </div>
  );
};

export default SkillSection;

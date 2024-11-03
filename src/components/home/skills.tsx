import { SkillInterface } from "@/types/tables"

type Props = {
  skills: SkillInterface[] | null
}

const Skills = (props: Props) => {
  return (
    <>
      {
        props.skills?.map((skill, index) => (
          <div key={index}>
            <h3>{skill.category}</h3>
            <p>{skill.skill}</p>
          </div>
        ))
      }
    </>
  )
}

export default Skills
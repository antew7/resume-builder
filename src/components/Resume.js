import React, { Component } from "react"
import PersonalDetails from "./PersonalDetails"
import Experience from "./Experience"
import Skills from "./Skills"
import Project from "./Project"
import Education from "./Education"
import Extra from "./Extra"
import DetailsContext from "../DetailsContext"

class Resume extends Component {
  render() {
    const { theme } = this.props
    return (
      <div
        style={{
          padding: `10mm`,
          margin: 0,
        }}
      >
        <DetailsContext.Consumer>
          {({ details, exp, project, skills, edu, extra }) => (
            <div>
              {/* {console.log(details)} */}
              <PersonalDetails details={details} theme={theme} />
              <div className="flex pt-6">
                <div className="w-7/12">
                  {/* left side */}
                  <h2
                    className={`w-full text-2xl text-${theme}-600 border-b-2 border-${theme}-600 font-medium mb-3`}
                  >
                    EXPERIENCE
                  </h2>
                  {exp.map((ex, i) => (
                    <Experience ex={ex} key={i} theme={theme} />
                  ))}
                  <h2
                    className={`w-full text-2xl text-${theme}-600 border-b-2 border-${theme}-600 font-medium mb-3`}
                  >
                    PROJECTS
                  </h2>
                  {project.map((pro, i) => (
                    <Project pro={pro} key={i} theme={theme} />
                  ))}
                </div>
                <div className="w-1/12">{/* empty space */}</div>
                <div className="w-4/12">
                  {/* right side */}
                  <h2
                    className={`w-full text-2xl text-${theme}-600 border-b-2 border-${theme}-600 font-medium mb-3`}
                  >
                    SKILLS
                  </h2>
                  {skills.map((sk, i) => (
                    <Skills skill={sk} key={i} theme={theme} />
                  ))}
                  <h2
                    className={`w-full text-2xl text-${theme}-600 border-b-2 border-${theme}-600 font-medium mb-3`}
                  >
                    EDUCATION
                  </h2>
                  {edu.map((ed, i) => (
                    <Education edu={ed} key={i} theme={theme} />
                  ))}
                  <h2
                    className={`w-full text-2xl text-${theme}-600 border-b-2 border-${theme}-600 font-medium mb-3`}
                  >
                    EXTRA CURRICULAR
                  </h2>
                  <ol className="list-inside list-disc text-gray-700">
                    {extra.map((extra, i) => (
                      <Extra extra={extra} key={i} theme={theme} />
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}
        </DetailsContext.Consumer>
      </div>
    )
  }
}

export default Resume

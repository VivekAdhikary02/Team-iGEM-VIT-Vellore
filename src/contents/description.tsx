
import { Inspirations, InspirationLink } from "../components/Inspirations";

export function Description() {
  return (
    <>
      {/* Project Overview Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="project-overview">Project Overview</h2>
          <hr />
          <p>
            {/* Add your project overview content here */}
            Brief description of your project and its main objectives.
          </p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="problem-statement">Problem Statement</h2>
          <hr />
          <p>
            {/* Describe the problem your project addresses */}
            What specific problem does your project aim to solve?
          </p>
        </div>
      </div>

      {/* Solution Approach Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="solution-approach">Our Solution</h2>
          <hr />
          <p>
            {/* Explain your proposed solution */}
            How does your project address the identified problem?
          </p>
        </div>
      </div>

      {/* Project Goals Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="project-goals">Project Goals</h2>
          <hr />
          <ul>
            <li>{/* Add your specific goals here */}Goal 1</li>
            <li>Goal 2</li>
            <li>Goal 3</li>
          </ul>
        </div>
      </div>

      {/* Innovation and Impact Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="innovation-impact">Innovation and Impact</h2>
          <hr />
          <p>
            {/* Describe what makes your project innovative and its potential impact */}
            What makes your approach unique and what impact do you expect?
          </p>
        </div>
      </div>

      {/* Team Motivation Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="team-motivation">Why We Chose This Project</h2>
          <hr />
          <p>
            {/* Explain why your team chose this particular project */}
            What inspired your team to work on this specific problem?
          </p>
        </div>
      </div>

      {/* Scientific Background Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="scientific-background">Scientific Background</h2>
          <hr />
          <p>
            {/* Provide relevant scientific context */}
            What scientific principles and background research support your project?
          </p>
        </div>
      </div>

      {/* Expected Outcomes Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="expected-outcomes">Expected Outcomes</h2>
          <hr />
          <p>
            {/* Describe what you expect to achieve */}
            What results do you anticipate from your project?
          </p>
        </div>
      </div>

      {/* References Section */}
      <div className="row mt-4">
        <div className="col">
          <h2 id="references">References</h2>
          <hr />
          <ol>
            <li>{/* Add your references here */}Reference 1</li>
            <li>Reference 2</li>
            <li>Reference 3</li>
          </ol>
        </div>
      </div>
    </>
  );
}


import { Inspirations, InspirationLink } from "../components/Inspirations";

// Project Overview Section Component
function ProjectOverview() {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2 id="project-overview">Project Overview</h2>
        <hr />
        <p>
          {/* Add your project overview content here */}
          Brief description of your project and its main objectives.
        </p>
        
        {/* Image Upload Block */}
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-cloud-upload-alt fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Upload Project Overview Image</p>
              <small className="text-muted">Drag & drop or click to upload</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-image fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Project Logo/Diagram</p>
              <small className="text-muted">Recommended: 800x600px</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Problem Statement Section Component
function ProblemStatement() {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2 id="problem-statement">Problem Statement</h2>
        <hr />
        <p>
          {/* Describe the problem your project addresses */}
          What specific problem does your project aim to solve?
        </p>
        
        {/* Image Upload Block */}
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-chart-line fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Problem Statistics/Data Visualization</p>
              <small className="text-muted">Charts, graphs, or infographics showing the problem scope</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Solution Approach Section Component
function SolutionApproach() {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2 id="solution-approach">Our Solution</h2>
        <hr />
        <p>
          {/* Explain your proposed solution */}
          How does your project address the identified problem?
        </p>
        
        {/* Image Upload Block */}
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-cogs fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Solution Workflow Diagram</p>
              <small className="text-muted">Process flow or system architecture</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-microscope fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Lab Setup/Equipment Photos</p>
              <small className="text-muted">Visual documentation of your approach</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Goals Section Component
function ProjectGoals() {
  return (
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
  );
}

// Innovation and Impact Section Component
function InnovationAndImpact() {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2 id="innovation-impact">Innovation and Impact</h2>
        <hr />
        <p>
          {/* Describe what makes your project innovative and its potential impact */}
          What makes your approach unique and what impact do you expect?
        </p>
        
        {/* Image Upload Block */}
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-lightbulb fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Innovation Showcase</p>
              <small className="text-muted">Before/after comparisons, impact projections, or innovation highlights</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Team Motivation Section Component
function TeamMotivation() {
  return (
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
  );
}

// Scientific Background Section Component
function ScientificBackground() {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2 id="scientific-background">Scientific Background</h2>
        <hr />
        <p>
          {/* Provide relevant scientific context */}
          What scientific principles and background research support your project?
        </p>
        
        {/* Image Upload Block */}
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-dna fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Scientific Diagrams</p>
              <small className="text-muted">Molecular structures, pathways, or mechanisms</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-book-open fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Research Citations Visual</p>
              <small className="text-muted">Timeline or network of supporting research</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Expected Outcomes Section Component
function ExpectedOutcomes() {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2 id="expected-outcomes">Expected Outcomes</h2>
        <hr />
        <p>
          {/* Describe what you expect to achieve */}
          What results do you anticipate from your project?
        </p>
        
        {/* Image Upload Block */}
        <div className="row mt-3">
          <div className="col-md-8">
            <div className="border rounded p-3 text-center bg-light">
              <i className="fas fa-target fa-2x text-muted mb-2"></i>
              <p className="text-muted mb-0">Expected Results Visualization</p>
              <small className="text-muted">Projected outcomes, timelines, or success metrics</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// References Section Component
function References() {
  return (
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
  );
}

// Main Description Component
export function Description() {
  return (
    <>
      <ProjectOverview />
      <ProblemStatement />
      <SolutionApproach />
      <ProjectGoals />
      <InnovationAndImpact />
      <TeamMotivation />
      <ScientificBackground />
      <ExpectedOutcomes />
      <References />
    </>
  );
}

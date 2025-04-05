import "./css/Resources.css";

import ResourcePlan from "../components/ResoursePlan";
function Resources() {
  return (
    <main className="page-background">
      <section className="page-content page-background">
        <h1 className="center margin"> Other Resources</h1>
        <h3 className="center margin"> Sources and Inspirations I used</h3>
        <ResourcePlan />
      </section>
    </main>
  );
}

export default Resources;

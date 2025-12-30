import projectsData from '../data/projectData.json';

const getCategories = () => {
  const categories = [
    { id: "all", name: "All", count: projectsData.length },
    {
      id: "frontend",
      name: "Frontend (React)",
      count: projectsData.filter((p) => p.category === "frontend").length,
    },
    {
      id: "vanilla javascript",
      name: "Vanilla",
      count: projectsData.filter((p) => p.category === "vanilla javascript").length,
    },
  ];
  
  return categories;
};

export { projectsData };

export default getCategories
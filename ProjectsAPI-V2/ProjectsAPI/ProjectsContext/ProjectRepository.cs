using System;
using System.Collections.Generic;
using System.Linq;
using Domain.Contracts;
using Domain;

namespace Infrastructure.ProjectDB
{
    public class ProjectRepository : IProjectRepository
    {
        ProjectContext context = new ProjectContext();
        public void Add(Project project)
        {
            context.Projects.Add(project);
            context.SaveChanges();
        }

        public void Delete(string name)
        {
            var project = context.Projects.Single(t => t.Name == name);

            context.Projects.Remove(project);
            context.SaveChanges();

        }

        public IEnumerable<Project> Get()
        {
            return context.Projects;
        }

        public Project Get(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Project p)
        {

         
            var project = context.Projects.Single(t => t.Name == p.Name);
            p.Id = project.Id;
            var projectSet = context.Set<Project>();
            context.Entry(project).CurrentValues.SetValues(p);
            context.SaveChanges();


        }
    }
}

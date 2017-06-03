using Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace Infrastructure.ProjectDB
{
    public class ProjectDBInitializer : DropCreateDatabaseAlways<ProjectContext>
    {
        protected override void Seed(ProjectContext context)
        {
            List<Project> projects = new List<Project>();
            projects.Add(new Project { Name = "Tapco", Allocation = 3, StartDate = new DateTime(2015, 01, 12), EndDate = new DateTime(2018, 03, 07), Status = "Open" });
            projects.Add(new Project { Name = "ICE", Allocation = 6, StartDate = new DateTime(2017, 11, 01), EndDate = new DateTime(2018, 05, 03), Status = "Open" });

            foreach(Project proj in projects)
            {
                context.Projects.Add(proj);
            }

            
            base.Seed(context);

        }
    }
}

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectsContext;
using ProjectDomain;

namespace Tests
{
    [TestClass]
    public class ProjectTest
    {
        [TestMethod]
        public void LoadProjects()
        {
            var projectContext = new ProjectContext();

            var project = new Project { Name = "Tapco", Allocation = 3, StartDate = new DateTime(2015, 01, 12), EndDate = new DateTime(2018, 03, 01), Status = "Open" };
            projectContext.Projects.Add(project);
            projectContext.SaveChanges();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectsAPI.Models
{
    public class Project
    {
        public Project(string name, int allocation, DateTime startDate, DateTime endDate, string status)
        {
            this.Name = name;
            this.Allocation = allocation;
            this.StartDate = startDate;
            this.EndDate = endDate;
            this.Status = status;
        }

        public string Name { get; private set; }
        public int Allocation { get; private set; }
        public DateTime StartDate { get; private set; }
        public DateTime EndDate { get; private set; }
        public string Status { get; private set; }

        internal void Update(Project project)
        {
            this.Name = project.Name;
            this.Allocation = project.Allocation;
            this.StartDate = project.StartDate;
            this.EndDate = project.EndDate;
            this.Status = project.Status;
        }
    }
}
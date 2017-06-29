using System;

namespace ProjectsAPI.Models
{
    public class Project
    {
        public Project()
        {

        }
        public Project(string name, int allocation, DateTime startDate, DateTime endDate, string status)
        {
            this.Name = name;
            this.Allocation = allocation;
            this.StartDate = startDate;
            this.EndDate = endDate;
            this.Status = status;
        }

        public string Name { get; set; }
        public int Allocation { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }

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
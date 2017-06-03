using System;

namespace Domain
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Allocation { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Status { get; set; }
    }
}

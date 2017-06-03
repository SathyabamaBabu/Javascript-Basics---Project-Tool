using Domain;
using System.Data.Entity;

namespace Infrastructure.ProjectDB
{
    public class ProjectContext : DbContext
    {
        static ProjectContext() 
        {
            Database.SetInitializer<ProjectContext>(new ProjectDBInitializer());
        }

        public ProjectContext() : base("name=ProjectsDB")
        {

        }
        public IDbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Project>().ToTable("Project");
        }

      
    }
}

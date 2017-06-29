using Domain.Contracts;
using System;
using System.Collections.Generic;
using Domain;

namespace Infrastructure.ApiConsumer
{
    public class ProjectRepository : IProjectRepository
    {
        public void Add(Project p)
        {
            throw new NotImplementedException();
        }

        public void Delete(string name)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Project> Get()
        {
            throw new NotImplementedException();
        }

        public Project Get(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Project p)
        {
            throw new NotImplementedException();
        }
    }
}

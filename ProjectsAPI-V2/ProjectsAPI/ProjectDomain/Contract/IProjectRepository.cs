
using Domain;
using System.Collections.Generic;

namespace Domain.Contracts
{
    public interface IProjectRepository
    {
        IEnumerable<Project> Get();
        Project Get(int id);

        void Add(Project p);

        void Update(Project p);

        void Delete(string name);

    }
}

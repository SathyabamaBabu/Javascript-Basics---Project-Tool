using Domain.Contracts;
using Infrastructure.ProjectDB;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace ProjectsAPI
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            

            container.RegisterType<IProjectRepository, ProjectRepository>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}
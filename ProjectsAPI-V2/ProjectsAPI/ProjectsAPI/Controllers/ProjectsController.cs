using Domain.Contracts;
using ProjectsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Results;
using System.Web.Routing;
using domain = Domain;

namespace ProjectsAPI.Controllers
{
    [RoutePrefix("api/projects")]
    public class ProjectsController : ApiController
    {
        private IProjectRepository repository;

        public ProjectsController(IProjectRepository repository)
        {
            this.repository = repository;
        }

        private domain.Project GetDBProject(Project project)
        {
            var dbProject = new domain.Project();
            dbProject.Name = project.Name;
            dbProject.Allocation = project.Allocation;
            dbProject.StartDate = project.StartDate;
            dbProject.EndDate = project.EndDate;
            dbProject.Status = project.Status;

            return dbProject;
        }

        private Project GetModelProject(domain.Project project)
        {
            var modelProject = new Project();
            modelProject.Name = project.Name;
            modelProject.Allocation = project.Allocation.Value;
            modelProject.StartDate = project.StartDate.Value;
            modelProject.EndDate = project.EndDate.Value;
            modelProject.Status = project.Status;

            return modelProject;
        }

        [HttpPost]
        [ActionName("add")]
        public IHttpActionResult AddProjects(Project project)
        {
            try
            {
                if (project == null) return BadRequest("Project should not be empty");

                var dbProject = GetDBProject(project);

                repository.Add(dbProject);


            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            return Ok();
        }

        [HttpPut]
        [ActionName("update")]
        public IHttpActionResult UpdateProjects(Project project)
        {
            try
            {
                var dbProject = GetDBProject(project);
                repository.Update(dbProject);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            return Ok();
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IHttpActionResult DeleteProjects(string name)
        {
            try
            {
                repository.Delete(name);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Ok<IEnumerable<Project>>(repository.Get().Select(t => GetModelProject(t)));

        }

        [HttpGet]
        [ActionName("all")]
        [ResponseType(typeof(List<Project>)), ResponseType(typeof(InternalServerErrorResult))]
        public IHttpActionResult GetProjects()
        {
            try
            {
                return Ok<IEnumerable<Project>>(repository.Get().Select(t => GetModelProject(t)));
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
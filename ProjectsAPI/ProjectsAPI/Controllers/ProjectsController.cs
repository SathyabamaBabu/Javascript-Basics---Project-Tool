using ProjectsAPI.App_Start;
using ProjectsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Results;
using System.Web.Routing;

namespace ProjectsAPI.Controllers
{
    [RoutePrefix("api/projects")]
    public class ProjectsController : ApiController
    {

        [HttpPost]
        [ActionName("add")]
        public IHttpActionResult AddProjects(Project project)
        {
            try
            {

                if (project == null) return BadRequest("Project should not be empty");

                ObjectService.Projects.Add(project);
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
            return Ok();
        }

        [HttpPut]
        [ActionName("update")]
        public IHttpActionResult UpdateProjects(Project project)
        {
            try
            {
                var proj = ObjectService.Projects.FirstOrDefault(t => t.Name == project.Name);
                proj.Update(project);
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
            return Ok();
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IHttpActionResult DeleteProjects(string name)
        {
            try
            {
                var proj = ObjectService.Projects.FirstOrDefault(t => t.Name == name);
                ObjectService.Projects.Remove(proj);
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }

            return Ok<List<Project>>(ObjectService.Projects);
        }

        [HttpGet]
        [ActionName("all")]
        [ResponseType(typeof(List<Project>)), ResponseType(typeof(InternalServerErrorResult))]
        public IHttpActionResult GetProjects()
        {
            try
            {
                return Ok<List<Project>>(ObjectService.Projects);
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
        }

    }
}
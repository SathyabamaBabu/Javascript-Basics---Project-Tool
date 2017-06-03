using ProjectsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectsAPI.App_Start
{
    public class ObjectService
    {
        private static List<Project> project = new System.Collections.Generic.List<Project>() {
            new Project("Tapco",2,DateTime.Now,DateTime.Now.AddDays(365),"Open") };
        public static List<Project> Projects
        {
            get
            {
                return project;
            }
        }

    }

   
}
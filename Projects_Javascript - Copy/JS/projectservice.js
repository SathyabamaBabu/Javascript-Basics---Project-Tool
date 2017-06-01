var projectservice = (function() {


    function addProjects(project, onsuccess) {
        /* if (localStorage.getItem('projects') == null) {
             var projects = [];
             project.id = projects.length + 1;
             projects.push(project);
             localStorage.setItem('projects', JSON.stringify(projects));
         }
         else {
             var projects = JSON.parse(localStorage.getItem('projects'));
             projects.push(project);
             localStorage.setItem('projects', JSON.stringify(projects));
         }*/

        var request = new XMLHttpRequest();
        request.open("POST", settings.apiUrl + "api/projects/add", true);
        request.setRequestHeader("Content-type", "application/json");

        onloadhandler(request, onsuccess);

        request.send(JSON.stringify(project));


    }


    function getProjects(onsuccess) {

        /* if (localStorage.getItem('projects') == null) return [];
 
         var projects = JSON.parse(localStorage.getItem('projects'));
 
         
 
         for (i = 0; i < projects.length; i++) {
             var project = new Project();
             project.setProject(projects[i]);
             projectstoReturn.push(project);
         }
         return projectstoReturn;*/

        var request = new XMLHttpRequest();
        request.open("GET", settings.apiUrl + "api/projects/all", true);
        request.onload = function() {

            if (request.readyState == 4 && request.status == "200") {
                console.log(status);
                var projects = JSON.parse(request.responseText);

                var projectstoReturn = [];

                for (i = 0; i < projects.length; i++) {
                    var sourceProject = projects[i];
                    if (sourceProject == null || sourceProject == undefined) continue;
                    var project = new Project();
                    project.setProject(sourceProject);
                    projectstoReturn.push(project);
                }

                onsuccess(projectstoReturn);
            } else {
                console.error(status);
            }
        };
        request.send();




    }

    function updateProject(project, onsuccess) {

        //localStorage.setItem('projects', JSON.stringify(projects));

        var request = new XMLHttpRequest();
        request.open("PUT", settings.apiUrl + "api/projects/update", false);
        request.setRequestHeader("Content-type", "application/json");
        onloadhandler(request, onsuccess);
        request.send(JSON.stringify(project));

    }


    function deleteProject(name, onsuccess) {

        //localStorage.setItem('projects', JSON.stringify(projects));

        var request = new XMLHttpRequest();
        request.open("DELETE", settings.apiUrl + "api/projects/delete/" + name, true);
        onloadhandler(request, onsuccess);
        request.send();

    }

    function onloadhandler(request, onsuccess) {

        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                console.log(request.status);
                onsuccess(request.responsetext);
            } else {
                console.error(request.status);
            }
        }
    }

    return {
        addProjects: addProjects,
        getProjects: getProjects,
        updateProject: updateProject,
        deleteProject: deleteProject
    };

})();
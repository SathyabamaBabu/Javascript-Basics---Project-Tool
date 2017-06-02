var projectservice = (function() {


    function addProjects(project, onsuccess) {

        /*/*var request = new XMLHttpRequest();
        request.open("POST", settings.apiUrl + "api/projects/add", true);*/

        //        request.setRequestHeader("Content-type", "application/json");


        /* onloadhandler(request, onsuccess);

         request.send(JSON.stringify(project));*/

        $().post(settings.apiUrl + "api/projects/add", onsuccess, JSON.stringify(project));
    }


    function getProjects(onsuccess) {

        /*var request = new XMLHttpRequest();
        request.open("GET", settings.apiUrl + "api/projects/all", true);*/

        $().get(settings.apiUrl + "api/projects/all", function(request) {

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
        });


    }

    function updateProject(project, onsuccess) {

        $().update(settings.apiUrl + "api/projects/update", onsuccess, JSON.stringify(project));

    }


    function deleteProject(name, onsuccess) {

        $().delete(settings.apiUrl + "api/projects/delete/" + name, onsuccess);

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
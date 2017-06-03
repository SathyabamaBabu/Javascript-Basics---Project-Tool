var projectservice = (function() {


    function addProjects(project, onsuccess) {

        /*/*var request = new XMLHttpRequest();
        request.open("POST", settings.apiUrl + "api/projects/add", true);*/

        //        request.setRequestHeader("Content-type", "application/json");


        /* onloadhandler(request, onsuccess);

         request.send(JSON.stringify(project));*/

        var request = {
            url: settings.apiUrl + "api/projects/add",
            type: "POST",
            success: onsuccess,
            data: JSON.stringify(project),
            contentType: "application/json"
        };

        $.ajax(request);

        //$.post(settings.apiUrl + "api/projects/add", JSON.stringify(project), onsuccess);
    }


    function getProjects(onsuccess) {

        /*var request = new XMLHttpRequest();
        request.open("GET", settings.apiUrl + "api/projects/all", true);*/

        $.get(settings.apiUrl + "api/projects/all", function(response) {

            var projects = response;

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

        var request = {
            url: settings.apiUrl + "api/projects/update",
            type: "PUT",
            success: onsuccess,
            data: JSON.stringify(project),
            contentType: "application/json"
        };

        $.ajax(request);


    }


    function deleteProject(name, onsuccess) {

        var request = {
            url: settings.apiUrl + "api/projects/delete/" + name,
            type: "DELETE",
            success: onsuccess
        };
        $.ajax(request);

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
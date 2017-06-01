$('projects').addEventListener('submit', saveproject);

function saveproject(e) {

    var project = new Project();
    project.addProject();
    projectservice.addProjects(project, onSuccess);

    e.preventDefault();

    $('projects').reset();

}

function onSuccess(response) {
    getprojects();
}

function $(elementName) {
    return document.getElementById(elementName);

}

function getprojects() {

    var projectlist = $('projectlist');

    projectlist.innerHTML = '';

    projectservice.getProjects(function(projects) {
        for (i = 0; i < projects.length; i++) {
            projectlist.innerHTML += '<div class="result">' +
                '<h2>' + projects[i].name + '</h2>' +
                '<label>' + projects[i].status + '</label>' +
                '<p><span>StartDate: ' + projects[i].startdate + '</span><span>    EndDate: ' + projects[i].enddate + '</span></p>' +
                '<p>Allocation: ' + projects[i].allocation + '</p>' +
                '<button class="smallbutton" value="Close" onclick="updatestatus(\'' + projects[i].name + '\')">CLOSE</button>' +
                '<button class="smallbutton" value="Delete" onclick="deleteproject(\'' + projects[i].name + '\')">DELETE</button>' + '</div>';
        }
    });


}

function updatestatus(name) {
    var projectlist = $('projectlist');
    projectservice.getProjects(function(projects) {
        for (i = 0; i < projects.length; i++) {
            if (projects[i].name == name) {
                projects[i].changeStatus("closed");
                projectservice.updateProject(projects[i], onSuccess);

            }
        }
    });

}

function deleteproject(name) {
    var projectlist = $('projectlist');
    projectservice.getProjects(function(projects) {
        for (i = 0; i < projects.length; i++) {
            if (projects[i].name == name) {
                projectservice.deleteProject(projects[i].name, onSuccess);
            }
        }
    });


}
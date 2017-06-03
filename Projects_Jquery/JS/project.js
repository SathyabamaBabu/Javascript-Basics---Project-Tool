function Project() {
    this.name = "";
    this.allocation = 0;
    this.startdate = "";
    this.enddate = "";
    this.status = "Open";
}

Project.prototype.addProject = function() {
    this.name = $('#projectname').val();
    this.startdate = $('#startdate').val();
    this.enddate = $('#enddate').val();
    this.allocation = $('#allocation').val();
}

Project.prototype.changeStatus = function(status) {
    this.status = status;
}

Project.prototype.setProject = function(obj) {
    this.name = obj.name;
    this.allocation = obj.allocation;
    this.startdate = obj.startDate;
    this.enddate = obj.endDate;
    this.status = obj.status;
}
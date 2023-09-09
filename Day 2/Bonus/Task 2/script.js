let course;
const table = document.createElement("table");

function determineCourse(faculty) {
    switch (faculty) {
        case "FIC":
            course = "You're eligible for Programming tracks";
            break;
        case "Engineering":
            course = "You're eligible for Networks and Embedded tracks";
            break;
        case "Commerce":
            course = "You're eligible for ERP and Social Media tracks";
            break;
        default:
            course = "You're eligible for SW Fundamental track";
    }
}

const userFaculty = prompt("Enter your faculty");

determineCourse(userFaculty);

function createTable(faculty, course) {
    const trHeader = document.createElement("tr");
    const thFaculty = document.createElement("th");
    const thCourse = document.createElement("th");
    thFaculty.textContent = "Faculty";
    thCourse.textContent = "Course";
    trHeader.appendChild(thFaculty);
    trHeader.appendChild(thCourse);

    const trData = document.createElement("tr");
    const tdFaculty = document.createElement("td");
    const tdCourse = document.createElement("td");
    tdFaculty.textContent = faculty;
    tdCourse.textContent = course;
    trData.appendChild(tdFaculty);
    trData.appendChild(tdCourse);


    table.appendChild(trHeader);
    table.appendChild(trData);

    table.style.cssText = "border: 2px solid black; border-collapse: collapse; width: 50%; margin: 0 auto; text-align: center;";
    trHeader.style.cssText = "border: 2px solid black; background-color: #ccc;";
    trData.style.cssText = "border: 2px solid black; text-align: center; border-collapse: collapse;";

    trHeader.style.fontWeight = 'bold';

    document.body.appendChild(table);
}
createTable(userFaculty, course);

console.log(course);
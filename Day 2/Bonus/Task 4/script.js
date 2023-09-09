const skillListDiv = document.createElement('div');
const mainHeading = document.createElement('h1');
mainHeading.textContent = "Skills List";
const subHeadings = [];
const deleteButtons = [];
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

subHeadings.push(mainHeading);
skillListDiv.appendChild(mainHeading);

const skillSet = new Set(skills);

function removeSkill(skill) {
    skillSet.delete(skill);
    const index = skills.indexOf(skill);
    if (index > -1) {
        skills.splice(index, 1);
    }
}

window.onload = function () {
    skills.forEach(skill => {
        const subHeading = document.createElement('h2');
        subHeading.textContent = skill;
        subHeadings.push(subHeading);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function (e) {
            e.preventDefault();
            const clickedSkill = subHeading.textContent;
            removeSkill(clickedSkill);
            skillListDiv.removeChild(subHeading);
        });
        deleteButtons.push(deleteButton);

        subHeading.appendChild(deleteButton);
        skillListDiv.appendChild(subHeading);
    });

    document.body.appendChild(skillListDiv);
};

console.log(Array.from(skillSet));
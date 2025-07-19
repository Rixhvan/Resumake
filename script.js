console.log('script is running');

document.getElementById('workAddbtn').addEventListener('click', (e) => {
    e.preventDefault();

    let newWorkField = document.createElement('textarea');
    newWorkField.classList.add('form-control');
    newWorkField.classList.add('mt-3');
    newWorkField.classList.add('experienceField'); // -----> this line will provide class to each newly created textarea
    newWorkField.setAttribute('placeholder', 'Enter next work experience');
    newWorkField.setAttribute('rows', 0);

    let firstworkField = document.getElementById('foraddExperience');
    let workAddbtn = document.getElementById('workAddbtn');

    firstworkField.insertBefore(newWorkField, workAddbtn);

    // Set cursor to the beginning when the new textarea is focused
    newWorkField.addEventListener('focus', function () {
        this.setSelectionRange(0, 0);  // Set cursor position to the start
    });
});

document.getElementById('academicAddbtn').addEventListener('click', (e) => {
    e.preventDefault();

    let newAcademicField = document.createElement('textarea');
    newAcademicField.classList.add('form-control');
    newAcademicField.classList.add('mt-3');
    newAcademicField.classList.add('academicField');
    newAcademicField.setAttribute('placeholder', 'Enter next academic qualification');
    newAcademicField.setAttribute('rows', 3);

    let firstacademicField = document.getElementById('foraddAcademic');
    let academicAddbtn = document.getElementById('academicAddbtn');

    firstacademicField.insertBefore(newAcademicField, academicAddbtn);

    // Set cursor to the beginning when the new textarea is focused
    newAcademicField.addEventListener('focus', function () {
        this.setSelectionRange(0, 0);  // Set cursor position to the start
    });
});

// Generating resume function
document.getElementById('generate_resume').addEventListener('click', (e) => {
    e.preventDefault();

    console.log('generating started');

    // Start filling template by grabbing value in inputs from form
    let nameField = document.getElementById('nameField');
    let phoneField = document.getElementById('phoneField');
    let adressField = document.getElementById('adressField');
    let LinkedInField = document.getElementById('LinkedInField');
    let githubField = document.getElementById('githubField');

    // Filling general info
    document.getElementById('nameT').innerHTML = `<p id="name_left">${nameField.value}</p>`;
    document.getElementById('nameT2').innerHTML = `<p id="name_left">${nameField.value}</p>`;
    document.getElementById('contactT').innerHTML = `<p id="name_left">${phoneField.value}</p>`;
    document.getElementById('adressT').innerHTML = `<p id="name_left">${adressField.value}</p>`;

    document.getElementById('linkedinT').innerHTML = `${LinkedInField.value}`;
    document.getElementById('linkedinT').setAttribute("href", `${LinkedInField.value}`);
    document.getElementById('linkedinT').setAttribute("target", "_blank");

    document.getElementById('githubT').innerHTML = `${githubField.value}`;
    document.getElementById('githubT').setAttribute("href", `${githubField.value}`);
    document.getElementById('githubT').setAttribute("target", " ");

    // Filling objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    // Filling experience
    // For this 1. Grab all fields
    //          2. Add all field to the id="experienceT"

    // 1. Getting all the elements of the "experienceField" class
    let wes = document.querySelectorAll('.experienceField');
    let results = ""; // ------> string to store the whole result

    for (const exp of wes) {
        // Concatenating each experience of applicant to the <li>tag
        results = results + `<li>${exp.value}</li>`;
    }

    // 2. Store created list of <li> to experienceT
    document.getElementById('experienceT').innerHTML = results;

    // Now repeat same process for academic qualification
    let qualifications = document.getElementsByClassName('academicField');
    let Allqualification = "";

    for (const qua of qualifications) {
        Allqualification = Allqualification + `<li>${qua.value}</li>`;
    }
    document.getElementById('qualificationT').innerHTML = Allqualification;

    // Code for image upload
    let file = document.getElementById('profilepic').files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
        document.getElementById('profilepicT').src = reader.result;
    };

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';
});

// Print resume
document.getElementById('print_resume').addEventListener('click', () => {
    window.print();
});

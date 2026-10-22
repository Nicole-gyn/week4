
Papa.parse('Student Mental Health.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {
        console.log("Student mental health data loaded successfully.");
        console.log(results.data);

        const tbody = document.querySelector('#dataTable tbody');
        const status = document.getElementById('status');

        // Check whether the table exists
        if (!tbody) {
            console.error("The data table was not found.");
            return;
        }

        // Remove any existing table rows
        tbody.innerHTML = '';

        // Display each row of CSV data
        results.data.forEach(row => {
            const tr = document.createElement('tr');

            const studentId = document.createElement('td');
            studentId.textContent = row.student_id;
            tr.appendChild(studentId);

            const age = document.createElement('td');
            age.textContent = row.age;
            tr.appendChild(age);

            const gender = document.createElement('td');
            gender.textContent = row.gender;
            tr.appendChild(gender);

            const yearOfStudy = document.createElement('td');
            yearOfStudy.textContent = row.year_of_study;
            tr.appendChild(yearOfStudy);

            const majorCategory = document.createElement('td');
            majorCategory.textContent = row.major_category;
            tr.appendChild(majorCategory);

            const sleepHours = document.createElement('td');
            sleepHours.textContent = row.daily_sleep_hours;
            tr.appendChild(sleepHours);

            const screenTime = document.createElement('td');
            screenTime.textContent = row.daily_screen_time_hours;
            tr.appendChild(screenTime);

            const physicalActivity = document.createElement('td');
            physicalActivity.textContent =
                row.physical_activity_days_per_week;
            tr.appendChild(physicalActivity);

            const phq9Score = document.createElement('td');
            phq9Score.textContent = row.phq9_score;
            tr.appendChild(phq9Score);

            const gad7Score = document.createElement('td');
            gad7Score.textContent = row.gad7_score;
            tr.appendChild(gad7Score);

            // Add the completed row to the table
            tbody.appendChild(tr);
        });

        // Show the loading result
        if (status) {
            status.textContent =
                `Successfully loaded ${results.data.length} student records.`;
        }
    },

    error: function(error) {
        console.error("Failed to load student data:", error);

        const status = document.getElementById('status');

        if (status) {
            status.textContent =
                'Failed to load data. Please check the CSV file name and path.';
        }
    }
});

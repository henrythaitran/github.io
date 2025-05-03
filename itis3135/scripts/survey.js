document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("introForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const mascot = document.getElementById("mascot").value;
      const image = document.getElementById("image").files[0];
      const caption = document.getElementById("caption").value;
      const personal = document.getElementById("personal").value;
      const professional = document.getElementById("professional").value;
      const academic = document.getElementById("academic").value;
      const webdev = document.getElementById("webdev").value;
      const platform = document.getElementById("platform").value;
      const funny = document.getElementById("funny").value;
      const anything = document.getElementById("anything").value;
      const courses = Array.from(document.querySelectorAll(".courseInput")).map((input) => input.value);
      const reader = new FileReader();
      reader.onload = function (event) {
        const imgUrl = event.target.result;
        let courseList = "";
        for (const course of courses) {
          if (course.trim()) courseList += `<li>${course}</li>`;
        }
        const resultHTML = `
          <h2>Introduction</h2>
          <h3>${name} || ${mascot}</h3>
          <figure>
            <img src="${imgUrl}" alt="${caption}"><figcaption>${caption}</figcaption>
          </figure>
          <ul>
            <li><strong>Personal Background:</strong> ${personal}</li>
            <li><strong>Professional Background:</strong> ${professional}</li>
            <li><strong>Academic Background:</strong> ${academic}</li>
            <li><strong>Background in Web Development:</strong> ${webdev}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses I'm Taking:</strong>
              <ul>${courseList}</ul>
            </li>
            <li><strong>Funny/Interesting Item to Remember Me by:</strong> ${funny}</li>
            <li><strong>I'd also like to share:</strong> ${anything}</li>
          </ul>
          <button onclick="location.reload()">Reset</button>
        `;
        document.getElementById("formSection").style.display = "none";
        document.getElementById("result").innerHTML = resultHTML;
      };
      reader.readAsDataURL(image);
    });
    window.addCourse = function () {
      const container = document.getElementById("coursesContainer");
      const wrapper = document.createElement("div");
      const input = document.createElement("input");
      input.type = "text";
      input.className = "courseInput";
      input.placeholder = "Enter course";
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.type = "button";
      deleteBtn.onclick = function () {
        container.removeChild(wrapper);
      };
      wrapper.appendChild(input);
      wrapper.appendChild(deleteBtn);
      container.appendChild(wrapper);
    };
  });
window.onload = function() {
  var timeElement = document.getElementById('time');
  var dateElement = document.getElementById('date');
  updateTime();

  function updateTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var month = currentTime.getMonth(); // Month is zero-based
      var day = currentTime.getDate();
      var year = currentTime.getFullYear();

      // Array of month names
      var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];

      // Add leading zeros if needed
      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      day = addOrdinal(day);

      var timeString = hours + ":" + minutes;
      var monthString = monthNames[month]; // Get month name from array
      var dateString = monthString + " " + day + " in the year of our Lord " + year;

      timeElement.textContent = timeString;
      dateElement.innerHTML = dateString;

      // Update time every minute
      setTimeout(updateTime, 60000 - currentTime.getSeconds() * 1000); // Update at the beginning of the next minute
  }

  // Function to add superscript ordinals to days
  function addOrdinal(n) {
      var s=["th","st","nd","rd"],
      v=n%100;
      return n+(s[(v-20)%10]||s[v]||s[0]);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  fetch('path/to/your/database/api')
    .then(response => response.json())
    .then(data => {
      const databaseInfo = document.getElementById('database-info');
      if (data && data.length > 0) {
        data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('database-item');
          itemElement.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          `;
          databaseInfo.appendChild(itemElement);
        });
      } else {
        databaseInfo.innerHTML = '<p>No data available.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('database-info').innerHTML = '<p>Error fetching data.</p>';
    });
});

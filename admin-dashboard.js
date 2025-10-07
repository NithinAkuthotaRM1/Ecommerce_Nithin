// Sidebar navigation
const sidebarItems = document.querySelectorAll('.sidebar ul li');
const contentSections = document.querySelectorAll('.content-section');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebarItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    contentSections.forEach(section => section.classList.remove('active'));

    const sectionToShow = item.getAttribute('data-section');
    document.getElementById(sectionToShow).classList.add('active');
  });
});

// Logout button
document.getElementById('logoutBtn').addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Add Product
document.getElementById("addProductBtn").addEventListener("click", () => {
  const table = document.getElementById("productsTable").querySelector("tbody");
  const row = table.insertRow();
  const id = table.rows.length;
  row.innerHTML = `
    <td>${id}</td>
    <td>New Product</td>
    <td>$0.00</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
});

// Delete Product
document.getElementById("productsTable").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("tr").remove();
  }
});

// Delete Customer
document.getElementById("customersTable").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-customer-btn")) {
    e.target.closest("tr").remove();
  }
});

// Settings Form
document.getElementById("settingsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("adminName").value;
  const email = document.getElementById("email").value;
  alert(`Settings updated:\nName: ${name}\nEmail: ${email}`);
});






document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded data
    const items = [
        { id: 1, name: 'Item 1', description: 'Description of Item 1' },
        { id: 2, name: 'Item 2', description: 'Description of Item 2' },
        { id: 3, name: 'Item 3', description: 'Description of Item 3' },
        { id: 4, name: 'Item 4', description: 'Description of Item 4' },
    ];

    const tableBody = document.getElementById('list-table-body');

    // Populate the table
    items.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editItem(${item.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
});

// Functions for future enhancements (e.g., Edit and Delete functionality)
function editItem(id) {
    alert(`Edit item with ID: ${id}`);
}

function deleteItem(id) {
    alert(`Delete item with ID: ${id}`);
}

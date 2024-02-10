// Treeview
document.querySelectorAll('.treeview-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        const submenu = e.target.parentElement.querySelector('.treeview-submenu');
        submenu.classList.toggle('hidden');
        e.target.classList.toggle('collapsed');
    });
});

// Load Json
parseJson()

function parseJson() {
    var wrapper = document.getElementById("result-json");
    var request = new XMLHttpRequest();
    request.open("GET", "data/data.json", false);
    request.send(null)
    var data = JSON.parse(request.responseText);
    var tree = jsonTree.create(data, wrapper);
    tree.expand(function (node) {
        return node.childNodes.length < 2 || node.label === 'data';
    });
}

// Chartjs
const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
    datasets: [{
      label: 'Penjualan',
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      data: [100, 150, 120, 200, 180, 210],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const config2 = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

var barChart = new Chart(
    document.getElementById('result-bar-chart'),
    config
);
var pieCcart = new Chart(
    document.getElementById('result-pie-chart'),
    config2
);
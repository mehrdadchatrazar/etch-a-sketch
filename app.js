const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const settings = document.createElement('div');
settings.className = 'settings';
container.appendChild(settings);

settings.textContent = "Settings"

const grid = document.createElement('div');
grid.className = 'grid';
container.appendChild(grid);

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'grid-element';
    grid.appendChild(div);
}

gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach((gridElement) => gridElement.addEventListener('mouseover', function (e){
    gridElement.style.backgroundColor = random_rgba();
}));

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
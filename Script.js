let data = JSON.parse(localStorage.getItem("classes") || "[]");

function save() {
  localStorage.setItem("classes", JSON.stringify(data));
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  data.forEach((c, i) => {
    list.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.day}</td>
        <td>${c.start} - ${c.end}</td>
        <td><button class="del" onclick="delClass(${i})">X</button></td>
      </tr>
    `;
  });
}

function addClass() {
  const name = document.getElementById("name").value;
  const day = document.getElementById("day").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;

  if (!name || !start || !end) {
    alert("همه فیلدها رو پر کن");
    return;
  }

  data.push({ name, day, start, end });
  save();
  render();

  document.getElementById("name").value = "";
  document.getElementById("start").value = "";
  document.getElementById("end").value = "";
}

function delClass(i) {
  data.splice(i, 1);
  save();
  render();
}

render();


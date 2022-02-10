let jobs = ["Dev", "CEO", "PM", "CTO", "DevOps"];

const initialRender = () => {
  let output1 = `<option value="">All</option>`;
  let output2 = `<option value="" hidden selected>pilih pekerjaan</option>`;

  jobs.forEach((val) => {
    output1 += `<option value="${val}">${val}</option>`;
    output2 += `<option value="${val}">${val}</option>`;
  });
  document.getElementById("pekerjaanFilter").innerHTML = output1;
  document.getElementById("inputPekerjaan").innerHTML = output2;
};

initialRender();

let data = [
  {
    nama: "Alex",
    usia: 22,
    pekerjaan: "Dev",
  },
  {
    nama: "Alicia",
    usia: 32,
    pekerjaan: "Dev",
  },
  {
    nama: "Alona",
    usia: 26,
    pekerjaan: "Dev",
  },
  {
    nama: "Batios",
    usia: 33,
    pekerjaan: "CEO",
  },
  {
    nama: "Bakhti",
    usia: 38,
    pekerjaan: "PM",
  },
  {
    nama: "Charlee",
    usia: 27,
    pekerjaan: "CTO",
  },
];

const renderData = (arr) => {
  let el = document.getElementById("data");
  let output = arr.map((val, index) => {
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${val.nama}</td>
        <td>${val.usia}</td>
        <td>${val.pekerjaan}</td>
      </tr>`;
  });
  el.innerHTML = output.join("");
};

renderData(data);

const filterByName = () => {
  let namaFilter = document.getElementById("namaFilter").value;
  let newFilterData = data.filter((val) => {
    if (!namaFilter) {
      return true;
    }
    return val.nama.toLowerCase().includes(namaFilter.toLowerCase());
  });
  renderData(newFilterData);
};

const filterByAge = () => {
  let usiaFilterMin = document.getElementById("usiaMinFilter").value;
  let usiaFilterMax = document.getElementById("usiaMaxFilter").value;
  if (!usiaFilterMin) {
    usiaFilterMin - 0;
  }
  let newFilterData = data.filter((val) => {
    let kondisiMin = !usiaFilterMin ? true : val.usia >= usiaFilterMin;

    let kondisiMax =
      !usiaFilterMax && usiaFilterMax != 0 ? true : val.usia <= usiaFilterMax;

    return kondisiMax && kondisiMin;
  });
  renderData(newFilterData);
};

const filterByPekerjaan = () => {
  let pekerjaanFilter = document.getElementById("pekerjaanFilter").value;
  let newFilterData = data.filter((val) => {
    if (!pekerjaanFilter) {
      return true;
    }
    return val.pekerjaan === pekerjaanFilter;
  });
  renderData(newFilterData);
};

const clearFilter = () => {
  document.getElementById("usiaMinFilter").value = "";
  document.getElementById("usiaMaxFilter").value = "";
  document.getElementById("namaFilter").value = "";
  document.getElementById("pekerjaanFilter").value = "";
  renderData(data);
};

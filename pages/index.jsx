import React, { useState } from "react";
import s from "../styles/pages/Home.module.scss";
import html2canvas from "html2canvas";

const index = () => {
  const [data, setData] = useState({
    pName: "Nombre del producto",
    pUse: "Usos del producto",
    pWeight: "Peso del producto",
    pVen: "Fecha de vencimiento"
  });
  const handleOnChangeInput = e => {
    console.log("object");
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const capture = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      let image = document.body.appendChild(canvas);
      image.style.display = "none";
      let img = image
        .toDataURL("image/png", 1.0)
        .replace("image/png", "image/octet-stream");
      var link = document.createElement("a");
      link.download = "etiqueta.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className={s.container}>
      <section className={s.canvas}>
        <div id="capture" className={s.paper}>
          <div className={s.top}>
            <h2>{data.pName}</h2>
            <div>
              <p className={s.use}>
                <span>USO:</span> {data.pUse}
              </p>
              <div className={s.fdc}>
                <p>
                  <span>Peso:</span> {data.pWeight}
                </p>
                <p>
                  <span>Fecha de vencimiento:</span> {data.pVen}
                </p>
              </div>
            </div>
          </div>
          <h4>Ficha de seguridad</h4>
          <div className={s.bottom}>
            <ul>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Alimenticio
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Industrial
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Corrosivo
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                No corrosivo
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Inflamable
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" className={s.checkbox} />
                No inflamable
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Tóxico
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                No tóxico
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                No peligro por inhalación
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Inha
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Irrita los ojos
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                No irrita los ojos
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                Evite contacto con la piel
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                No hace daño a la piel
              </li>
              <li>
                <input type="checkbox" className={s.checkbox} />
                USP
              </li>
            </ul>
            <div className={s.logo}>
              <p>Elaborado y empacado</p>
              <img src="/assets/logo.png" alt="Logo" />
              <p>Distribución de productos químicos</p>
              <p>R.M00121174</p>
              <p>Dir. Técnico Jorge A Parra P.</p>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <h2>ZONA DE EDICIÓN</h2>
        {/* <p>Escoge el tamaño de la etiqueta:</p> */}
        {/* <div className={s.paperType}>
          <div>
            <input type="radio" id="type1" name="size" value="type1" />
            <label htmlFor="type1">Tamaño 1</label>
          </div>
          <div>
            <input type="radio" id="type2" name="size" value="type2" />
            <label htmlFor="type2">Tamaño 2</label>
          </div>
          <div>
            <input type="radio" id="type3" name="size" value="type3" />
            <label htmlFor="type3">Tamaño 3</label>
          </div>
        </div> */}
        <p>Nombre del producto:</p>
        <input
          name="pName"
          type="text"
          onChange={handleOnChangeInput}
          placeholder="Escribe el nombre del producto"
        />
        <p>Uso:</p>
        <input
          name="pUse"
          type="text"
          onChange={handleOnChangeInput}
          placeholder="Escribe el uso del producto"
        />
        <p>Peso Neto:</p>
        <input
          name="pWeight"
          type="text"
          onChange={handleOnChangeInput}
          placeholder="Escribe el peso neto"
        />
        <p>Vencimiento:</p>
        <input
          name="pVen"
          type="text"
          onChange={handleOnChangeInput}
          placeholder="Escribe la fecha de vencimiento"
        />

        <button className={s.export} onClick={capture}>Exportar etiqueta</button>
      </aside>
    </div>
  );
};

export default index;

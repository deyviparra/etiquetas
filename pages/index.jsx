import React, { useState, useEffect } from "react";
import s from "../styles/pages/Home.module.scss";
import html2canvas from "html2canvas";

const index = () => {
  const [data, setData] = useState({
    pName: "Nombre del producto",
    pUse: "Usos del producto",
    pWeight: "Peso del producto",
    pVen: "Fecha de vencimiento"
  });
  const [showVen, setShowVen] = useState(false);
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

  useEffect(() => {
    let capture = document.getElementById("capture");
    let title = document.getElementById("title");
    const fonts = document.getElementsByTagName('p');
    const lis = document.getElementsByTagName('li');
    var lisList = Array.prototype.slice.call(lis);
    var fontsList = Array.prototype.slice.call(fonts);
    console.log(fontsList)
    fontsList.forEach((font) => {
      font.style.fontSize = data?.fontSize
    }
    )
    lisList.forEach((li) => {
      li.style.fontSize = data?.fontSize
    }
    )
    title.style.fontSize = data.titleFz;
    capture.style.backgroundColor = data?.bgColor;
    capture.style.color = data?.fontColor;
  }, [data]);

  return (
    <div className={s.container}>
      <section className={s.canvas}>
        <div id="capture" className={s.paper}>
          <div className={s.top}>
            <h2 id="title">{data.pName}</h2>
            <div>
              <p className={s.use}>
                <span>USO:</span> {data.pUse}
              </p>
              <div className={s.fdc}>
                <p>
                  <span>Peso:</span> {data.pWeight}
                </p>
                {showVen && (
                  <p>
                    <span>Fecha de vencimiento:</span> {data.pVen}
                  </p>
                )}
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
            </div>
          </div>
        </div>
      </section>
      <aside>
        <h2>ZONA DE EDICIÓN</h2>
        <div className={s.colors}>
          <p>Escoge color de fondo:</p>
          <input type="color" name="bgColor" onChange={handleOnChangeInput} />
          <p>Escoge color de la letra:</p>
          <input type="color" name="fontColor" onChange={handleOnChangeInput} />
        </div>

        <p>Tamaño del titulo:</p>
        <select name="titleFz" onChange={handleOnChangeInput}>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="24px">24</option>
          <option value="32px">32</option>
          <option value="40px">40</option>
          <option value="48px">48</option>
          <option value="56px">56</option>
          <option value="64px">64</option>
          <option value="72px">72</option>
          <option value="80px">80</option>
        </select>
        <p>Tamaño de la letra:</p>
        <select name="fontSize" onChange={handleOnChangeInput}>
          
        <option value="10px">10</option>
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="24px">24</option>
        </select>

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
        <div className={s.checkbox}>
          <label htmlFor="showVen">Agregar fecha de vencimiento</label>
          <input type="checkbox" id='showVen' onChange={e => setShowVen(e.target.checked)} />
        </div>
        {showVen && (
          <>
          <p>Vencimiento:</p>
          <input
            name="pVen"
            type="text"
            onChange={handleOnChangeInput}
            placeholder="Escribe la fecha de vencimiento"
          />
          </>
        )}

        <button className={s.export} onClick={capture}>
          Exportar etiqueta
        </button>
      </aside>
    </div>
  );
};

export default index;

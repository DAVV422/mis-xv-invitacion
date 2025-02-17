import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MusicButton from "./components/MusicButton";

const CUMPLEANERA = process.env.REACT_APP_CUMPLEANERA || "Nombre de la cumpleañera";
const TARGET_DATE = new Date(process.env.REACT_APP_TARGET_DATE || "2025-06-15T18:00:00");
const DIA_FECHA_FIESTA = process.env.REACT_APP_DIA_FECHA_FIESTA || "15";
const UBICACION_URL = process.env.REACT_APP_UBICACION_URL || "https://maps.google.com?q=UbicacionEjemplo";
const DIA_FIESTA = process.env.REACT_APP_DIA_FIESTA || "Sábado";
const MES_FIESTA = process.env.REACT_APP_MES_FIESTA || "Agosto";
const ANIO_FIESTA = process.env.REACT_APP_ANIO_FIESTA || "2025";
const HORA_FIESTA = process.env.REACT_APP_HORA_FIESTA || "18:00";
const CONTACTO = process.env.REACT_APP_CONTACTO || "00000000";


const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const confirmarUrl = "https://wa.me/" + CONTACTO + "/?text=¡Hola%20" + CUMPLEANERA +"!%20Confirmo%20mi%20asistencia%20a%20tu%20fiesta%20de%20XV%20años";

  const [showInvite, setShowInvite] = useState(false);
  const targetDate = TARGET_DATE;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenInvite = () => {
    setShowInvite(true); 
  };

  return  (
    <div>
      {!showInvite ? (
        <div id="full-screen-img">
          {/* Botón para abrir la invitación */}
          <button onClick={handleOpenInvite} className="open-invite-btn btn btn-lg btn-success">
            Abrir invitación
          </button>
        </div>
      ) : (
    <div className="container">
      <section className="section section1">
        <h1 className="title1">Mis <br></br>XV Años</h1>
        <h2 className="subtitle name font-name">{CUMPLEANERA}</h2>
        <img src="/Mariposa.png" alt="Divider" className="divider" />
      </section>

      <section className="section section2">
        <div className="text-box">
          <p className="invitation-text">Hoy es un día que quedará grabado para siempre en mi corazón.
            Es el inicio de una etapa llena de nuevos sueños, experiencias y desafíos. A quienes han
            estado a mi lado, guiándome con amor y apoyo, les dedico esta celebración.
            ¡Gracias por ser parte de mis XV años!</p>
        </div>
        <div class="mb-4">
          <i class="fas fa-calendar-alt text-3xl text-gray-500"></i>
        </div>
        <p class="text-gray-500 text-lg mb-4 border-text">ACOMPÁÑAME A CELEBRAR EL DÍA</p>
        <div class="flex justify-center items-center mb-4">
          <div class="text-right ">
            <p class="pr-4 text-date text-xl font-bold">{DIA_FIESTA}</p>
            <hr></hr>
            <p class="pr-4 text-date text-xl font-bold">{MES_FIESTA}</p>
          </div>
          <div class="text-center px-4 border-l border-r">
            <p class="fecha-dorada text-6xl font-bold">{DIA_FECHA_FIESTA}</p>
          </div>
          <div class="text-left">
            <p class="pl-4 text-date text-xl font-bold">{HORA_FIESTA}</p>
            <hr></hr>
            <p class="pl-4 text-date text-xl font-bold">{ANIO_FIESTA}</p>
          </div>
        </div>
        <div class="mb-4">
          <i class="fas fa-clock text-3xl text-gray-500"></i>
        </div>
        <p class="text-gray-500 text-2xl mb-4">¿Cuánto falta?</p>
        <div class="flex justify-center items-center space-x-4">
          <div class="text-center">
            <div class="circle text-3xl font-bold text-gray-700">
              {timeLeft.days}
            </div>
            <p class="text-gray-500 text-sm">Días</p>
          </div>
          <div class="divisor-time">
            :
          </div>
          <div class="text-center">
            <div class="circle text-3xl font-bold text-gray-700">
              {timeLeft.hours}
            </div>
            <p class="text-gray-500 text-sm">Horas</p>
          </div>
          <div class="divisor-time">
            :
          </div>
          <div class="text-center">
            <div class="circle text-3xl font-bold text-gray-700">
              {timeLeft.minutes}
            </div>
            <p class="text-gray-500 text-sm">Minutos</p>
          </div>
          <div class="divisor-time">
            :
          </div>
          <div class="text-center">
            <div class="circle text-3xl font-bold text-gray-700">
              {timeLeft.seconds}
            </div>
            <p class="text-gray-500 text-sm">Segundos</p>
          </div>
        </div>
      </section>

      <section className="section section3">
        <h2 className="location-title">Ubicación</h2>
        <button className="btn" onClick={() => window.open(UBICACION_URL)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fdeaf2">
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 
        294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 
        106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
          </svg>
          <div class="text-btn">Abrir ubicación</div>
        </button>
        <h2 className="rsvp-title">Asistencia</h2>
        <p class="text-gray-500 text-2xl text-asistencia">Confirma tu asistencia por whatsapp</p>
        <button className="btn" onClick={() => window.open(confirmarUrl)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fdeaf2">
            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 
        31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 
        85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          <div class="text-btn">Confirmar</div>
        </button>
        <h2 className="farewell">¡Te espero! ✨</h2>
        <img src="/mariposa2.png" alt="End" className="small-image" />
      </section>
      <MusicButton/>
    </div>
  )}
  </div>);
};

export default App;
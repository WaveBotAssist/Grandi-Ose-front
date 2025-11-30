'use client';
import React, { useState } from 'react';

const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const hours = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30'
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function outilsPage() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mode, setMode] = useState<'presentiel' | 'visio' | ''>('');

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(year, month, day));
    setSelectedHour(null);
  };

  const handleConfirm = () => {
    alert(
      `Rendez-vous confirmé pour le ${selectedDate?.toLocaleDateString('fr-FR')} à ${selectedHour}\n` +
      `Nom: ${nom}\nPrénom: ${prenom}\nMode: ${mode === 'presentiel' ? 'Présentiel' : 'Visio'}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 py-12 px-2">
      <div className="w-full  rounded-3xl shadow-2xl border-t-4 border-t-amber-800 bg-amber-50 p-8">
        <h1 className="text-3xl font-extrabold text-amber-900 mb-2 text-center tracking-tight drop-shadow">Prendre un rendez-vous</h1>
        <p className="text-amber-800 text-center mb-8">Choisissez une date dans le calendrier ci-dessous :</p>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrevMonth}
            className="text-amber-700 hover:bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center transition"
            aria-label="Mois précédent"
          >
            <span className="text-2xl font-bold">{'‹'}</span>
          </button>
          <span className="font-semibold text-lg text-amber-900 capitalize">
            {today.toLocaleString('fr-FR', { month: 'long' , year: 'numeric', timeZone: 'UTC' }).replace(
              today.toLocaleString('fr-FR', { month: 'long', timeZone: 'UTC' }),
              new Date(year, month).toLocaleString('fr-FR', { month: 'long', timeZone: 'UTC' })
            ).replace(
              today.getFullYear().toString(),
              year.toString()
            )}
          </span>
          <button
            onClick={handleNextMonth}
            className="text-amber-700 hover:bg-amber-100 rounded-full w-10 h-10 flex items-center justify-center transition"
            aria-label="Mois suivant"
          >
            <span className="text-2xl font-bold">{'›'}</span>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(d => (
            <div key={d} className="text-center font-semibold text-amber-700">{d}</div>
          ))}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = selectedDate &&
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === month &&
              selectedDate.getFullYear() === year;
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={[
                  "rounded-lg font-semibold w-10 h-10 flex items-center justify-center transition border",
                  isSelected
                    ? "bg-gradient-to-br from-amber-700 to-amber-400 text-white border-amber-800 shadow-lg scale-105"
                    : isToday
                      ? "bg-amber-100 border-amber-300 text-amber-900"
                      : "bg-transparent border-amber-100 text-amber-700 hover:bg-amber-100 hover:border-amber-300"
                ].join(' ')}
              >
                {day}
              </button>
            );
          })}
        </div>
        {selectedDate && (
          <div className="mt-8 bg-amber-100/70 rounded-2xl p-6 shadow-inner border border-amber-200">
            <div className="mb-4 text-center text-amber-900 font-semibold">
              Date sélectionnée :{' '}
              {selectedDate.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="mb-4 flex flex-col items-center">
              <label className="mb-1 text-amber-800 font-medium">Heure :</label>
              <select
                value={selectedHour || ''}
                onChange={e => setSelectedHour(e.target.value)}
                className="rounded-lg border border-amber-300 px-4 py-2 text-lg focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white text-amber-900"
              >
                <option value="" disabled>Choisir une heure</option>
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={e => setNom(e.target.value)}
                className="rounded-lg border border-amber-300 px-4 py-2 text-lg bg-white text-amber-900 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full sm:w-40"
              />
              <input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={e => setPrenom(e.target.value)}
                className="rounded-lg border border-amber-300 px-4 py-2 text-lg bg-white text-amber-900 focus:ring-2 focus:ring-amber-400 focus:outline-none w-full sm:w-40"
              />
            </div>
            <div className="mb-4 flex items-center justify-center gap-8">
              <label className="flex items-center cursor-pointer text-amber-800 font-medium">
                <input
                  type="radio"
                  name="mode"
                  value="presentiel"
                  checked={mode === 'presentiel'}
                  onChange={() => setMode('presentiel')}
                  className="accent-amber-700 mr-2"
                />
                Présentiel
              </label>
              <label className="flex items-center cursor-pointer text-amber-800 font-medium">
                <input
                  type="radio"
                  name="mode"
                  value="visio"
                  checked={mode === 'visio'}
                  onChange={() => setMode('visio')}
                  className="accent-amber-700 mr-2"
                />
                Visio
              </label>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className={[
                  "bg-gradient-to-br from-amber-700 to-amber-400 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition",
                  selectedHour && nom && prenom && mode
                    ? "hover:from-amber-800 hover:to-amber-500 hover:scale-105"
                    : "opacity-60 cursor-not-allowed"
                ].join(' ')}
                disabled={!(selectedHour && nom && prenom && mode)}
                onClick={handleConfirm}
              >
                Confirmer le rendez-vous
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { cn } from "../../lib/utils";
import { FaRocket, FaCalendarAlt, FaStar, FaLightbulb, FaClock, FaCheckCircle } from "react-icons/fa";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [personalizedMessage, setPersonalizedMessage] = useState("");

  const generateUniqueMessage = (userName: string): string => {
    const templates = t("templates", { returnObjects: true }) as Array<{
      greeting: string;
      body: string;
      cta: string;
    }>;

    const seed = userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + Date.now();
    const index = seed % templates.length;
    const template = templates[index];

    const greeting = template.greeting.replace("{{name}}", userName);
    const body = template.body;
    const cta = template.cta;

    return `${greeting}\n\n${body}\n\n${cta}`;
  };

  const availableHours = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      const message = generateUniqueMessage(name.trim());
      setPersonalizedMessage(message);
      setShowMessage(true);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime || !email) {
      alert(t("fillAllFields", "Please fill all fields"));
      return;
    }

    const date = selectedDate instanceof Date ? selectedDate : selectedDate[0];
    if (!date) return;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const [hours, minutes] = selectedTime.split(':');

    const startDate = `${year}${month}${day}T${hours}${minutes}00`;
    const endHour = String(parseInt(hours) + 1).padStart(2, '0');
    const endDate = `${year}${month}${day}T${endHour}${minutes}00`;

    const title = encodeURIComponent(`Meeting with ${name}`);
    const details = encodeURIComponent(personalizedMessage);
    const location = encodeURIComponent("Online (Google Meet)");

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&add=${email}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSelectedDate(new Date());
    setSelectedTime("");
    setShowCalendar(false);
    setShowMessage(false);
    setPersonalizedMessage("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 py-14 sm:py-20 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {!showMessage ? (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center px-1 sm:px-0">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="inline-block mb-5 sm:mb-6">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full shadow-2xl">
                  <FaRocket className="text-5xl sm:text-6xl text-white" />
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-tight">
                <span className="gradient-text">{t("title")}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
                {t("subtitle")}
              </motion.p>

              <motion.form initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} className={cn("w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all duration-300 text-base sm:text-lg text-gray-800 dark:text-gray-100 shadow-lg focus:shadow-2xl")} required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("emailPlaceholder")} className={cn("w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white dark:bg-dark-card border-2 border-light-border dark:border-dark-border focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all duration-300 text-base sm:text-lg text-gray-800 dark:text-gray-100 shadow-lg focus:shadow-2xl")} required />
                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={cn("w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3")}>
                  <FaStar className="text-lg sm:text-xl" />
                  {t("button")}
                  <FaLightbulb className="text-lg sm:text-xl" />
                </motion.button>
              </motion.form>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>{t("available")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{t("response")}</span>
                </div>
              </motion.div>
            </motion.div>
          ) : !showCalendar ? (
            <motion.div key="message" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="card p-4 sm:p-12 text-center bg-white/80 dark:bg-dark-card/80 backdrop-blur-lg max-w-3xl mx-auto">
              <motion.div animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} className="inline-block mb-6">
                <div className="p-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-xl">
                  <FaStar className="text-5xl text-white" />
                </div>
              </motion.div>

              <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-100">{t("messageTitle")}</h2>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8 text-left">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-bg dark:to-dark-card rounded-2xl border-l-4 border-primary-500">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">{personalizedMessage}</p>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button onClick={() => setShowCalendar(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-purple-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  <FaCalendarAlt />
                  {t("selectDateTime")}
                </motion.button>
                <motion.button onClick={handleReset} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gray-200 dark:bg-dark-bg text-gray-800 dark:text-gray-200 font-semibold border-2 border-gray-300 dark:border-dark-border hover:bg-gray-300 dark:hover:bg-dark-hover transition-all duration-300">
                  {t("tryAgain")}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="calendar" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="card p-6 bg-white/80 dark:bg-dark-card/80 backdrop-blur-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <FaCalendarAlt className="text-primary-500" />
                  {t("selectDate")}
                </h3>
                <Calendar onChange={setSelectedDate} value={selectedDate} minDate={new Date()} className="mx-auto rounded-xl border-none shadow-lg" />
              </div>

              <div className="card p-6 bg-white/80 dark:bg-dark-card/80 backdrop-blur-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <FaClock className="text-primary-500" />
                  {t("selectTime")}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-h-96 overflow-y-auto pr-1 sm:pr-2 p-2 sm:p-4">
                  {availableHours.map((time) => (
                    <motion.button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "px-2 sm:px-4 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2",
                        selectedTime === time
                          ? "bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-xl border-primary-300"
                          : "bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-lg"
                      )}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {selectedDate && selectedTime && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>{t("selectedSlot")} </strong>
                        {selectedDate instanceof Date ? selectedDate.toLocaleDateString() : selectedDate[0]?.toLocaleDateString()} at {selectedTime}
                      </p>
                    </motion.div>
                  )}

                  <motion.button onClick={handleBookAppointment} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={!selectedTime} className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    <FaCheckCircle />
                    {t("confirmAppointment")}
                  </motion.button>

                  <motion.button onClick={() => setShowCalendar(false)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold bg-gray-200 dark:bg-dark-bg text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-dark-border hover:bg-gray-300 dark:hover:bg-dark-hover transition-all duration-300">
                    {t("back")}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;

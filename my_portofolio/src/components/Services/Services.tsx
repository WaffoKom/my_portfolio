import React from "react";
import { Div } from "../ui/motion";
import { useTranslations } from "../../i18n/useTranslation";
import { cn } from "../../lib/utils";
import { Icon, type IconName } from "../ui/icon/icon";

type ServiceItem = {
  title: string;
  icon: IconName;
  gradient: string;
  secondaryIcons: [IconName, IconName];
  alt: string;
};

const Services: React.FC = () => {
  const { t } = useTranslations("services");

  const services: ServiceItem[] = [
    {
      title: t("services.devmobile"),
      icon: "FaMobileAlt",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      secondaryIcons: ["HiDeviceMobile", "FaReact"],
      alt: "Mobile Development",
    },
    {
      title: t("services.devweb"),
      icon: "FaLaptopCode",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      secondaryIcons: ["BiCodeAlt", "FaNodeJs"],
      alt: "Web Development",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <Div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t("services.contact")}</span>
          </h1>
        </Div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                "bg-white dark:bg-dark-card",
                "border border-light-border dark:border-dark-border",
                "shadow-xl hover:shadow-2xl",
                "transition-all duration-300",
                "p-8"
              )}
            >
              {/* Background Gradient Effect */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                service.gradient
              )} />

              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                {/* Main Icon with Gradient Background */}
                <Div
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r rounded-full blur-3xl opacity-30",
                    service.gradient
                  )} />

                  {/* Main icon container */}
                  <div className={cn(
                    "relative w-40 h-40 rounded-3xl",
                    "bg-gradient-to-br",
                    service.gradient,
                    "flex items-center justify-center",
                    "shadow-2xl",
                    "transform group-hover:rotate-3 transition-transform duration-300"
                  )}>
                    <Icon name={service.icon} className="text-white text-6xl drop-shadow-2xl" />
                  </div>

                  {/* Secondary floating icons */}
                  <div className="absolute -top-4 -right-4">
                    <Div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-14 h-14 rounded-2xl bg-white dark:bg-dark-card shadow-xl flex items-center justify-center border-2 border-white dark:border-dark-border"
                    >
                      <Icon
                        name={service.secondaryIcons[0]}
                        className={cn(
                          "text-2xl bg-gradient-to-r bg-clip-text text-transparent",
                          service.gradient
                        )}
                      />
                    </Div>
                  </div>

                  <div className="absolute -bottom-4 -left-4">
                    <Div
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                      className="w-14 h-14 rounded-2xl bg-white dark:bg-dark-card shadow-xl flex items-center justify-center border-2 border-white dark:border-dark-border"
                    >
                      <Icon
                        name={service.secondaryIcons[1]}
                        className={cn(
                          "text-2xl bg-gradient-to-r bg-clip-text text-transparent",
                          service.gradient
                        )}
                      />
                    </Div>
                  </div>
                </Div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">
                  {service.title}
                </h3>

                {/* Decorative line */}
                <Div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className={cn(
                    "h-1 bg-gradient-to-r rounded-full max-w-xs",
                    service.gradient
                  )}
                />
              </div>

              {/* Animated Corner Accents */}
              <Div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={cn(
                  "absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20",
                  "bg-gradient-to-bl",
                  service.gradient
                )}
              />
              <Div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className={cn(
                  "absolute bottom-0 left-0 w-24 h-24 rounded-tr-full opacity-20",
                  "bg-gradient-to-tr",
                  service.gradient
                )}
              />
            </Div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

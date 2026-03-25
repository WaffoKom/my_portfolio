import React from "react";
import { Div, Img } from "../ui/motion";
import ProjetCardProps from "../../types/ProjetCard.ts";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Icon } from "../ui/icon/icon";

const ProjetCard: React.FC<typeof ProjetCardProps> = ({
                                                        name,
                                                        description,
                                                        tags,
                                                        image,
                                                        thumbnail,
                                                        demo,
                                                        sourcecode,
                                                      }) => {
  const mobileDevice = window.matchMedia("(max-width: 640px)").matches;
  const imgSrc = mobileDevice ? thumbnail || image : image;

  return (
      <Div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={cn(
              "group relative overflow-hidden rounded-3xl",
              "bg-white dark:bg-dark-card",
              "border border-light-border dark:border-dark-border",
              "shadow-xl hover:shadow-2xl",
              "transition-all duration-500",
              "h-full flex flex-col"
          )}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <Img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              loading="lazy"
              src={imgSrc}
              alt={name}
              className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            {name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags?.map((tag, index) => (
                <span
                    key={index}
                    style={{ color: tag.color }}
                    className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-bg"
                >
              # {tag.name}
            </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {demo && (
                <NavLink
                    to={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                  <Div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                          "flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                          "bg-gradient-to-r from-primary-500 to-purple-600",
                          "text-white font-semibold",
                          "shadow-md hover:shadow-lg",
                          "transition-all duration-300"
                      )}
                  >
                    <span>Demo</span>
                    <Icon name="AiOutlineGoogle" className="text-xl" />
                  </Div>
                </NavLink>
            )}
            {sourcecode && (
                <NavLink
                    to={sourcecode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                  <Div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                          "flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                          "bg-gray-800 dark:bg-gray-700",
                          "text-white font-semibold",
                          "shadow-md hover:shadow-lg",
                          "transition-all duration-300"
                      )}
                  >
                    <span>Code</span>
                    <Icon name="AiOutlineGithub" className="text-xl" />
                  </Div>
                </NavLink>
            )}
          </div>
        </div>
      </Div>
  );
};

export default ProjetCard;

/*
 * SakuYado - A web application that helps you find the best value accommodations
 * Copyright (C) 2025  Sakan Nirattisaykul
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", id, ...props }, ref) => {
    const baseClasses =
      "w-full px-3 py-2 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white/80 backdrop-blur transition-all duration-300 text-sm sm:px-4 sm:py-3 sm:text-base sm:rounded-2xl";

    const errorClasses = error
      ? "border-red-300 focus:border-red-400 focus:ring-red-400"
      : "";

    const combinedClasses = `${baseClasses} ${errorClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm sm:text-base font-bold text-pink-800 mb-2"
          >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
          </label>
        )}
        <input ref={ref} id={id} className={combinedClasses} {...props} />
        {error && (
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-500 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };

import React, { createContext, useContext, useState, useMemo } from "react";
import Values from "values.js";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [mainColor, setMainColor] = useState("#4f46e5");

  const palette = useMemo(() => {
    try {
      return new Values(mainColor).all(10).map((c) => c.hexString());
    } catch (error) {
      console.error("Error generando paleta:", error);
      return [mainColor];
    }
  }, [mainColor]);

  const gradient = useMemo(() => {
    const darker = palette[palette.length - 4] || mainColor;
    return `linear-gradient(135deg, ${mainColor}, ${darker})`;
  }, [mainColor, palette]);

  return (
    <ColorContext.Provider value={{ mainColor, setMainColor, palette, gradient }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);

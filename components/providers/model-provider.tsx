"use client";
import { useEffect, useState } from "react";
import SettingModel from "../models/settings-model";
import CoverImageModel from "../models/cover-image-model";

export const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SettingModel />
      <CoverImageModel />
    </>
  );
};

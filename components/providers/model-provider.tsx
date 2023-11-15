"use client";
import { useEffect, useState } from "react";
import SettingModel from "../models/settings-model";
import { CoverImageModal } from "../models/cover-image-modal";

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
      <CoverImageModal />
    </>
  );
};

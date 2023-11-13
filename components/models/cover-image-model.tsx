"use client";
import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useEdgeStore } from "@/lib/edgestore";
import React, { useState } from "react";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const CoverImageModel = () => {
  const params = useParams();
  const coverImage = useCoverImage();
  const [file, setFile] = React.useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { edgestore } = useEdgeStore();
  const update = useMutation(api.documents.update);
  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });
      console.log(res);

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });
    }
    onClose();
  };

  const onClose = () => {
    setIsSubmitting(false);
    setFile(undefined);
    coverImage.onClose();
  };
  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          value={file}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModel;

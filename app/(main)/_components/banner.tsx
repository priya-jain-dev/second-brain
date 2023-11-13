"use client";
import ConfirmModel from "@/components/models/confirm-model";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface bannerProps {
  documentId: Id<"documents">;
}
const Banner = ({ documentId }: bannerProps) => {
  const router = useRouter();

  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const onRestore = async () => {
    const promise = restore({ id: documentId });
    toast.promise(promise, {
      loading: "Restoring a  note...",
      success: "Note restored!",
      error: "Failed to restore a note.",
    });
  };

  const onRemove = () => {
    const promise = remove({ id: documentId });
    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: "Failed to delete note.",
    });
    router.push("/documents");
  };
  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      This page is in Trash.
      <Button
        size={"sm"}
        onClick={onRestore}
        variant={"outline"}
        className="font-normal border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto"
      >
        Restore page
      </Button>
      <ConfirmModel onConfirm={onRemove}>
        <Button
          size={"sm"}
          variant={"outline"}
          className="font-normal border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto"
        >
          Delete forever
        </Button>
      </ConfirmModel>
    </div>
  );
};

export default Banner;

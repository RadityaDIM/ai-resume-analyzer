import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileSearch } from "@boxicons/react";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;

      onFileSelect?.(file);
    },
    [onFileSelect],
  );
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "application/pdf": [".pdf"],
      },
      maxSize: 20000000,
    });

  const file = acceptedFiles[0] || null;

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-4">
          {file ? (
            <div className="mx-auto w-full h-30 flex items-center justify-center">
              <div className="flex items-center justify-between px-20 w-full h-full bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-center space-x-3">
                  <img src="/images/pdf.png" alt="pdf" className="size-10" />
                  <div>
                    <p className="text-lg text-gray-700">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {formatBytes(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  className="p-2 cursor-pointer"
                  onClick={(e) => {
                    onFileSelect?.(null);
                  }}
                >
                  <img
                    src="/icons/cross.svg"
                    alt="remove"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mx-auto w-16 h-30 flex items-center justify-center">
                <FileSearch className="size-20 text-gray-400 animate-pulse" />
              </div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">Click to upload </span>
                or drag and drop here
              </p>
              <p className="text-sm text-red-500">PDF (max 20MB)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;

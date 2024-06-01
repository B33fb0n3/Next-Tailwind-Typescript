"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Result = {
  status: "success" | "fail";
  results?: any;
  error?: any;
};

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<Result>(null);
  const router = useRouter();

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("image", fileInput?.current?.files?.[0]!);
    formData.append("name", nameInput?.current?.value);

    const response = await fetch("/api/entries", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setResult(result);
    // or directly redirect the client somewhere
  }

  const renderResult = () => {
    if (!result) return null;

    switch (result.status) {
      case "success":
        return <p>Upload was successful.</p>;
      case "fail":
        return <p>Upload failed.</p>;
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <div>
        {result && (
          <div>
            {renderResult()}
            <button onClick={() => router.reload()}>Show newest upload</button>
          </div>
        )}
      </div>
      <label>
        <span>Name</span>
        <input type="text" name="name" ref={nameInput} />
      </label>
      <label>
        <span>Upload a file</span>
        <input type="file" name="image" ref={fileInput} />
      </label>
      <button type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}

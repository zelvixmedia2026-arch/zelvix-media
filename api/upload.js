
import { put } from "@vercel/blob";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = req.headers["x-admin-secret"];

  if (!adminSecret || providedSecret !== adminSecret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { filename, contentType, fileBase64 } = req.body || {};

    if (!filename || !fileBase64 || !contentType?.startsWith("video/")) {
      return res.status(400).json({ error: "Valid video data is required" });
    }

    const buffer = Buffer.from(fileBase64, "base64");

    if (!buffer.length || buffer.length > 4 * 1024 * 1024) {
      return res.status(400).json({
        error: "For this initial test, videos must be under 4 MB."
      });
    }

    const blob = await put(
      `client-videos/${Date.now()}-${filename.replace(/[^a-zA-Z0-9._-]/g, "_")}`,
      buffer,
      {
        access: "private",
        contentType,
        token: process.env.BLOB_READ_WRITE_TOKEN
      }
    );

    return res.status(200).json({
      success: true,
      pathname: blob.pathname,
      message: "Video uploaded successfully."
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: "Video upload failed." });
  }
}

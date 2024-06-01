import fs from "node:fs/promises";
import { initializeDatabase } from "../../_utils/db.ts";

export async function GET() {
  try {
    const db = await initializeDatabase();
    const [results, columns] = await db.execute("SELECT * FROM entries");

    return Response.json({ status: "success", results: results });
  } catch (e) {
    console.error(e);
    return Response.json({ status: "fail", error: e });
  }
}

export async function POST(request: Request) {
  try {
    // upload stuff

    return Response.json({ status: "success", results: [{}] });
  } catch (e) {
    console.error(e);
    return Response.json({ status: "fail", error: e });
  }
}

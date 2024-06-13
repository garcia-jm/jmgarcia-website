import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  console.log("I got it!");

  return NextResponse.json({ status: 201 });
};

import { NextRequest, NextResponse } from "next/server";

const Middleware = (req: NextRequest) => {
	if (req.nextUrl.pathname === req.nextUrl.pathname.toUpperCase()) return NextResponse.next();
	return NextResponse.redirect(`${req.nextUrl.origin}${req.nextUrl.pathname.toUpperCase()}`);
};

export default Middleware;

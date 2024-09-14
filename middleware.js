
import { NextResponse } from 'next/server';
import { isExpired } from 'react-jwt';

export function middleware(req) {
    const token = req.cookies.get("token")?.value
    const isTokenExpired = isExpired(token);

    if (!isTokenExpired) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
    matcher: ['/home'],
};

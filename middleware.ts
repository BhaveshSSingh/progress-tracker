import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/daily/:path*",
    "/projects/:path*",
    "/applications/:path*",
    "/weekly/:path*",
  ],
};

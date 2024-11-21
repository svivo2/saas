import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/sign-in',
    '/sign-up'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
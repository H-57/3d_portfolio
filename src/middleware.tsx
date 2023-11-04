import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes:["/","/projects","/projects/:id","/api/:path","/:paths/:path"],

 
  
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
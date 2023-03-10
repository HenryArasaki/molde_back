import {Router} from 'express'

import { getAllCourses } from "./controllers/get-all-courses"
import { findCourseByUrl } from "./controllers/find-crouse-by-url"
import { findLessonsForCourse } from "./controllers/find-lessons-for-course"
import { updateCourse } from "./controllers/update-course"
import { createCourse } from "./controllers/create-course"
import {deleteCourseAndLessons } from "./controllers/delete-course"
import { createUser } from "./controllers/create-user"
import { login } from "./controllers/login"
import { checkIfAuthenticated } from "./middlewares/authentication-middleware"
import { checkIfAdmin } from "./middlewares/admin-only.middleware"

export const routes = Router()


routes.get("/api/courses",checkIfAuthenticated,getAllCourses)

routes.get("/api/courses/:courseUrl",checkIfAuthenticated,findCourseByUrl)

routes.get("/api/courses/:courseId/lessons",checkIfAuthenticated,findLessonsForCourse)

routes.patch("/api/courses/:courseId",checkIfAuthenticated,updateCourse)

routes.post("/api/courses/",checkIfAuthenticated,createCourse)

routes.delete("/api/courses/:courseId",checkIfAuthenticated,deleteCourseAndLessons)

// routes.post("/api/users",checkIfAuthenticated,checkIfAdmin,createUser)
routes.post("/api/users",createUser)

routes.post("/api/login",login)



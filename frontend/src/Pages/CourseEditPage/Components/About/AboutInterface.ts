import { CourseEditInterface } from '../../CourseEditInterface'

export interface AboutComponentInterface {
    course: CourseEditInterface
    changeCourse: (x: CourseEditInterface) => void
}

import Course from "./Course"

export const metadata = {
    title: 'Beginners React Class',
    description: 'Frontend 6B6 class 1 on React',
  }

export default function layout( {children} ) {
  return (
    <div>
        <Course />
        {children}
    </div>
  )
}
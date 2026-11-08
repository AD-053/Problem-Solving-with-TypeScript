function multiplyValue(value: number, multiplier: number = 2): number {
  return value*multiplier;
}

function processInput(input: string | number | boolean): string | number {
  if(typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if(typeof input === "number") {
    return input*10;
  }
  return input? "Active" : "Inactive";
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => (course.isPublished) && (course.students >= minStudents)
  );
}


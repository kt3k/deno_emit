import { printHello2, returnsFoo } from "./subdir/mod2.ts";
export function returnsHi() {
    return "Hi";
}
export function returnsFoo2() {
    return returnsFoo();
}
export function printHello3() {
    printHello2();
}
export function throwsError() {
    throw Error("exception from mod1");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vbW9kMS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmludEhlbGxvMiwgcmV0dXJuc0ZvbyB9IGZyb20gXCIuL3N1YmRpci9tb2QyLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5zSGkoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFwiSGlcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybnNGb28yKCk6IHN0cmluZyB7XG4gIHJldHVybiByZXR1cm5zRm9vKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEhlbGxvMygpIHtcbiAgcHJpbnRIZWxsbzIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93c0Vycm9yKCkge1xuICB0aHJvdyBFcnJvcihcImV4Y2VwdGlvbiBmcm9tIG1vZDFcIik7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxXQUFXLEVBQUUsVUFBVSxRQUFRLG1CQUFtQjtBQUUzRCxPQUFPLFNBQVMsWUFBb0I7SUFDbEMsT0FBTztBQUNULENBQUM7QUFFRCxPQUFPLFNBQVMsY0FBc0I7SUFDcEMsT0FBTztBQUNULENBQUM7QUFFRCxPQUFPLFNBQVMsY0FBYztJQUM1QjtBQUNGLENBQUM7QUFFRCxPQUFPLFNBQVMsY0FBYztJQUM1QixNQUFNLE1BQU0sdUJBQXVCO0FBQ3JDLENBQUMifQ==
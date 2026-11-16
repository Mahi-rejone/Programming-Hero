const multiplyValue = (value, multiplier = 2) => {
    if (multiplier === 0) {
        return 0;
    }
    else {
        return value * multiplier;
    }
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value === true ? "Active" : "Inactive";
    }
};
const formatCoordinate = (data) => {
    const [latitude, longitude, locationName] = data;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const result = [];
    return result.concat(...arrays);
};
const getPopularCourses = (Course, minStudents) => {
    const result = [];
    for (const course of Course) {
        if (course.students >= minStudents && course.isPublished === true) {
            result.push(course);
        }
    }
    return result;
};
const pluckValues = (items, key) => {
    const result = [];
    for (const i of items) {
        result.push(i[key]);
    }
    return result;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    const validatePromise = new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
    return validatePromise;
};
export {};

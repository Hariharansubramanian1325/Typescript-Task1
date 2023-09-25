type Address = {
    street: string;
    city: string;
  };
  
  type ContactInfo = {
    email: string;
    mobile: string;
  };
  
  type Student = {
    name: string;
    age: number;
    grade: string;
    address: Address;
    contactInfo: ContactInfo;
  };
  
  const students: Student[] = [
    {
      name: 'Alice',
      age: 18,
      grade: '12th',
      address: { street: '123 Main St', city: 'Anytown' },
      contactInfo: { email: 'alice@example.com', mobile: '123-456-7890' }
    },
    {
      name: 'Bob',
      age: 17,
      grade: '11th',
      address: { street: '456 Elm St', city: 'Another City' },
      contactInfo: { email: 'bob@example.com', mobile: '987-654-3210' }
    }
  ];
  
  function displayStudentInfo(student: Student): void {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Grade: ${student.grade}`);
    console.log(`Address: ${student.address.street}, ${student.address.city}`);
    console.log(`Contact Email: ${student.contactInfo.email}`);
    console.log(`Contact Phone: ${student.contactInfo.mobile}`);
  }
  
  function displayStudents(students: Student[]): void {
    for (const student of students) {
      displayStudentInfo(student);
    }
  }
  
  displayStudents(students);
  
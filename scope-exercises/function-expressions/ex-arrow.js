// TODO: revisit implementation using answer from course

function printRecords(recordIds) {
  // TODO

  const recordsList = [];
  if (recordIds) {
    recordIds.forEach((id) => {
      recordsList.push(
        studentRecords.find((studentRecord) => studentRecord.id == id)
      );
    });

    recordsList
      .sort((recordA, recordB) => {
        if (recordA.name > recordB.name) {
          return 1;
        }
        if (recordA.name < recordB.name) {
          return -1;
        }
        return 0;
      })
      .forEach((record) =>
        console.log(
          `${record.name} (${record.id}): ${!record.paid ? "Not Paid" : "Paid"}`
        )
      );
  }
}

function paidStudentsToEnroll() {
  // TODO
  const paidStudentsToEnroll = studentRecords
    .filter(
      (studentRecord) =>
        studentRecord.paid && !currentEnrollment.includes(studentRecord.id)
    )
    .map((studentRecord) => studentRecord.id);

  return [...currentEnrollment, ...paidStudentsToEnroll];
}

function remindUnpaid(recordIds) {
  // TODO
  const recordsList = [];

  if (recordIds) {
    recordIds.forEach((id) => {
      recordsList.push(
        studentRecords.find((studentRecord) => studentRecord.id == id)
      );
    });
  }

  printRecords(
    recordsList.filter((student) => !student.paid).map((student) => student.id)
  );
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
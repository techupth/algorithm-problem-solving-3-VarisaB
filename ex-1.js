function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  console.log(customers);
  return customers;
}

const exCustomers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
sortCustomerName(exCustomers);

// ตอบคำถามตรงนี้จ้า
// Bubble Sort Algorithm มี Big O เป็น n^2 เพราะ มีการใช้ loop ซ้อนกัน ทำให้เกิดการทำซ้ำมากขึ้นกว่าแค่จำนวนค่าใน array เช่น จากตัวอย่างข้อมูลที่ใช้กับโจทย์ข้อนี้มีสมาชิก 5 ตัว จะมีการทำซ้ำเกิดขึ้นทั้งหมด 10 ครั้ง และหากมีข้อมูลเพิ่มขึ้นเป็น 10 ตัว ก็จะมีการทำซ้ำเกิดขึ้น 45 ครั้ง ซึ่งเพิ่มขึ้นมากกว่าแค่ตามจำนวนสมาชิก

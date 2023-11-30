INSERT INTO department (name)
VALUES 
  ("Engineering and Facilities"),
  ("Shipping"),
  ("Receiving"),
  ("Quality Control");

INSERT INTO roles (title, salary, department_id) 
VALUES 
  ("Facilities Manager", 100000.00, 1),
  ("Facilitator", 50000.00, 1),
  ("Mechanic", 80000.00, 1),
  ("Receiving Manager", 80000.00, 3),
  ("Receiver", 50000.00, 3),
  ("Pallet Builder", 50000.00, 3),
  ("Shipping Manager", 80000.00, 2),
  ("Sorting", 50000.00, 2),
  ("Truck Loader", 50000.00, 2),
  ("Quality Control Manager", 110000.00, 4),
  ("Quality Captain", 95500.00, 4),
  ("Warehouse Auditor", 80000.00, 4),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ("Abigail", "Reed", 1, NULL),
  ("Aiden", "Taylor", 2, 1),
  ("Alice", "Smith", 2, 1),
  ("Ava", "Parker", 3, 1),
  ("Bob", "Johnson", 3, 1),
  ("Caleb", "Rivera", 4, NULL),
  ("Carter", "Ross", 5, 6),
  ("Chris", "Jones", 5, 6),
  ("Chris", "Johnson", 11, 16),
  ("Daniel", "Miller", 6, 6),
  ("Eva", "Williams", 7, NULL),
  ("Grace", "Hill", 8, 11),
  ("Grace", "Taylor", 8, 11),
  ("Hazel", "Wright", 9, 11),
  ("Isaac", "Reed", 9, 11),
  ("John", "Doe", 10, NULL),
  ("Levi", "Mitchell", 12, 16),
  ("Scarlett", "Wright", 12, 16),
  ("Zoe", "Hayes", 6, 6),
  ("Zoe", "Jenkins", 12, 16)

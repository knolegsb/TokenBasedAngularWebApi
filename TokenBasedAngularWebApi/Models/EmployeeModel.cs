using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TokenBasedAngularWebApi.Models
{
    public class EmployeeModel
    {
        public class Employee
        {
            public int EmployeeNo { get; set; }
            public string EmployeeName { get; set; }
            public int Salary { get; set; }
            public string DepartmentName { get; set; }
        }

        public class EmployeeDatabase : List<Employee>
        {
            public EmployeeDatabase()
            {
                Add(new Employee() { EmployeeNo = 101, EmployeeName = "Thomas Smith", Salary = 12000, DepartmentName = "IT" });
                Add(new Employee() { EmployeeNo = 102, EmployeeName = "Mike Sympson", Salary = 12000, DepartmentName = "System" });
                Add(new Employee() { EmployeeNo = 103, EmployeeName = "Logan Holm", Salary = 12000, DepartmentName = "Sales" });
                Add(new Employee() { EmployeeNo = 104, EmployeeName = "Victor Bright", Salary = 12000, DepartmentName = "HRD" });
                Add(new Employee() { EmployeeNo = 105, EmployeeName = "Praatt Polman", Salary = 12000, DepartmentName = "HRD" });
                Add(new Employee() { EmployeeNo = 106, EmployeeName = "Adran Brown", Salary = 12000, DepartmentName = "Admin" });
            }
        }
    }
}
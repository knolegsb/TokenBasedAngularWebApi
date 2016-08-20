using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using static TokenBasedAngularWebApi.Models.EmployeeModel;

namespace TokenBasedAngularWebApi.Controllers
{
    [Authorize]
    public class EmployeeApiController : ApiController
    {
        public List<Employee> Get()
        {
            return new EmployeeDatabase();
        }
    }
}

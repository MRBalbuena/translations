using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Trs.API.Controllers
{
    [Route("api/[controller]")]
    public class TranslationsController
    {
        [HttpGet]
        [EnableCors("AllowAllOrigins")]
        public IActionResult GetTranslations(){
            return null;
        }        
    }    
}


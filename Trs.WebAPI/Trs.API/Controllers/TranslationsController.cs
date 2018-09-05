using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Trs.Engine;

namespace Trs.API.Controllers
{
    [Route("api/[controller]")]
    public class TranslationsController: Controller
    {
        private readonly ITranslationService _translationService;

        public TranslationsController(ITranslationService translationService)
        {
            _translationService = translationService;
        }
        [HttpGet]
        [EnableCors("AllowAllOrigins")]
        public IActionResult Get(){
            return Ok(_translationService.GetTranslations());
        }        
    }    
}


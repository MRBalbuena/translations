using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Trs.Engine;
using Trs.Data.Entities;

namespace Trs.API.Controllers
{    
    [Route("api/[controller]")]    
    [EnableCors("CorsPolicy")]
    public class TranslationsController: Controller
    {
        private readonly ITranslationService _translationService;

        public TranslationsController(ITranslationService translationService)
        {
            _translationService = translationService;
        }
        [HttpGet]        
        public IActionResult Get(){
            return Ok(_translationService.GetTranslations());
        }
        
        [HttpPost("save")]
        public IActionResult Save([FromBody]Translation translation){
            return Ok(_translationService.Update(translation));
        }

        [HttpPost("test")]        
        public IActionResult Test([FromBody]Translation translation){
            return Ok();
        }

        // [HttpGet("save")]
        // public IActionResult Save(){
        //     return Ok();
        // }        
    }    
}


using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Trs.Core.Models;
using Trs.Engine;
using Trs.Data;


namespace Trs.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddCors(options =>
            //     options.AddPolicy("AllowAllOrigins",
            //         builder =>
            //         {
            //             // builder.WithOrigins("http://localhost:4200")
            //             builder.AllowAnyOrigin()
            //             .AllowAnyHeader()
            //             .AllowAnyMethod();
            //             //.AllowCredentials();
            //         })
            // );

			services.AddCors(options =>
			{
				options.AddPolicy("CorsPolicy",
									builder => builder.AllowAnyOrigin()
									.AllowAnyMethod()
									.AllowAnyHeader()
									.AllowCredentials()
							);
			});

            var configBuilder = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json", optional: true);
            var config = configBuilder.Build();

            services.AddMvc();
            services.AddSingleton(config);
            // services.AddSingleton<ITranslationsContext, TranslationsContext>();
            services.AddScoped<ITranslationsContext, TranslationsContext>();
            services.AddScoped<ITranslationService, TranslationService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // string[] origins = new string[] { "http://localhost:4200" }; 
            // //app.UseCors(b => b.AllowAnyMethod().AllowAnyHeader().WithOrigins(origins));
            // app.UseCors(builder =>
            //     builder.WithOrigins(origins)
            //            .AllowAnyHeader()
            //     );

            app.UseCors("CorsPolicy");      
            app.UseMvc();
              
        }
    }
}

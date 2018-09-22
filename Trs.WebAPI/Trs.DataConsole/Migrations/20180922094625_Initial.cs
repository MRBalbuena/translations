using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Trs.DataConsole.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Version`",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(maxLength: 200, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    StartedOn = table.Column<DateTime>(nullable: false),
                    EndedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Version`", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Translations",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Key = table.Column<string>(nullable: true),
                    OriginalText = table.Column<string>(nullable: false),
                    TranslatedText = table.Column<string>(nullable: true),
                    BlockedBy = table.Column<string>(nullable: true),
                    BlockedTime = table.Column<DateTime>(nullable: true),
                    TranslatedBy = table.Column<string>(nullable: true),
                    TranslatedTime = table.Column<DateTime>(nullable: true),
                    CheckedBy = table.Column<string>(nullable: true),
                    CheckedTime = table.Column<DateTime>(nullable: true),
                    EditedBy = table.Column<string>(nullable: true),
                    EditedTime = table.Column<DateTime>(nullable: true),
                    Comment = table.Column<string>(nullable: true),
                    VersionId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Translations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Translations_Version`_VersionId",
                        column: x => x.VersionId,
                        principalTable: "Version`",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Translations_VersionId",
                table: "Translations",
                column: "VersionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Translations");

            migrationBuilder.DropTable(
                name: "Version`");
        }
    }
}

#pragma checksum "C:\Users\Emiko\Desktop\Univresitetet\Informatik2020\Interaktiva webbapplikationer\あそびば\ASP.NET\test\test\Views\Shared\_layoutMovie.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ae56388f2e820018fc66935cab71220030a1aec8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__layoutMovie), @"mvc.1.0.view", @"/Views/Shared/_layoutMovie.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Emiko\Desktop\Univresitetet\Informatik2020\Interaktiva webbapplikationer\あそびば\ASP.NET\test\test\Views\_ViewImports.cshtml"
using test.Models.DTO;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Emiko\Desktop\Univresitetet\Informatik2020\Interaktiva webbapplikationer\あそびば\ASP.NET\test\test\Views\_ViewImports.cshtml"
using test.Models.ViewModels;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ae56388f2e820018fc66935cab71220030a1aec8", @"/Views/Shared/_layoutMovie.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"117e1f59325ce50b0915b756ed34db05c4713f50", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__layoutMovie : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ae56388f2e820018fc66935cab71220030a1aec83454", async() => {
                WriteLiteral(@"
    <!-- Font -->
    <link href=""https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap"" rel=""stylesheet"">

    <meta charset=""UTF-8"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <title>MOVIE FLIX</title>

    <!-- För Bootstrap -->
    <link rel=""stylesheet"" href=""https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"" integrity=""sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"" crossorigin=""anonymous"">

    <!-- För Swiper.js -->
    <script src=""https://unpkg.com/swiper/swiper-bundle.js""></script>
    <link rel=""stylesheet"" href=""https://unpkg.com/swiper/swiper-bundle.css"">

    <!-- För vår egen css och js -->
    <link rel=""stylesheet"" href=""../css/style.css"">
    <script type=""module"" src=""../js/app.js""></script>

");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ae56388f2e820018fc66935cab71220030a1aec85294", async() => {
                WriteLiteral("\r\n    <!-- NAV -->\r\n    <header>\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n            <div>\r\n                <a class=\"navbar-brand\" href=\"#\">\r\n                    <img class=\"mr-2\" src=\"./assets/images/Logo.png\"");
                BeginWriteAttribute("alt", " alt=\"", 1132, "\"", 1138, 0);
                EndWriteAttribute();
                WriteLiteral(@">MOVIE FLIX
                </a>

            </div>
            <button class=""navbar-toggler"" type=""button"" data-toggle=""collapse"" data-target=""#navbarSupportedContent"" aria-controls=""navbarSupportedContent"" aria-expanded=""false"" aria-label=""Toggle navigation"">
                <span class=""navbar-toggler-icon""></span>
            </button>
            <div class=""collapse navbar-collapse"" id=""navbarSupportedContent"">
                <ul class=""navbar-nav mr-auto"">
                    <!-- Kan lägga till ytterligare menyitem -->
                </ul>

                <form class=""form-inline my-2 my-lg-0 "">
                    <img class=""mr-2"" src=""../assets/images/search.png"" alt=""search-icon"">
                    <input class=""form-control mr-sm-2"" type=""search"" placeholder=""Search"" aria-label=""Search"">
                    <button class=""btn btn-secondary my-2 my-sm-0"" type=""submit"">Sök</button>
                </form>

            </div>
        </nav>
    </header>
    ");
#nullable restore
#line 50 "C:\Users\Emiko\Desktop\Univresitetet\Informatik2020\Interaktiva webbapplikationer\あそびば\ASP.NET\test\test\Views\Shared\_layoutMovie.cshtml"
Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral(@";
    <!--  Fotter -->
    <footer>
        <div class=""footer-flex d-flex justify-content-between"">
            <div class=""footer-copyright ml-2"">
                <span>&copy; MovieFlex.</span>
                <span>All rights reserved.</span>
            </div>
            <div class=""footer-logo"">
                <img src=""./../assets/images/Logo.png""");
                BeginWriteAttribute("alt", " alt=\"", 2529, "\"", 2535, 0);
                EndWriteAttribute();
                WriteLiteral(">\r\n            </div>\r\n            <div class=\"footer-socials d-flex flex-row-reverse mr-2\">\r\n\r\n                <li><a href=\"#\"><img class=\"social-icons\" src=\"./../assets/images/twitter.png\"");
                BeginWriteAttribute("alt", " alt=\"", 2726, "\"", 2732, 0);
                EndWriteAttribute();
                WriteLiteral("></a></li>\r\n                <li><a href=\"#\"><img class=\"social-icons\" src=\"./../assets/images/facebook.png\"");
                BeginWriteAttribute("alt", " alt=\"", 2840, "\"", 2846, 0);
                EndWriteAttribute();
                WriteLiteral("></a></li>\r\n                <li><a href=\"#\"><img class=\"social-icons\" src=\"./../assets/images/GitHub.png\"");
                BeginWriteAttribute("alt", " alt=\"", 2952, "\"", 2958, 0);
                EndWriteAttribute();
                WriteLiteral("></a></li>\r\n                <li><a href=\"#\"><img class=\"social-icons\" src=\"./../assets/images/GooglePlus.png\"");
                BeginWriteAttribute("alt", " alt=\"", 3068, "\"", 3074, 0);
                EndWriteAttribute();
                WriteLiteral(@"></a></li>

            </div>
        </div><!-- /.footer-flex -->
    </footer>

    <script src=""https://code.jquery.com/jquery-3.5.1.slim.min.js"" integrity=""sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"" crossorigin=""anonymous""></script>
    <script src=""https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"" integrity=""sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"" crossorigin=""anonymous""></script>
    <script src=""https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js""></script>

");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591

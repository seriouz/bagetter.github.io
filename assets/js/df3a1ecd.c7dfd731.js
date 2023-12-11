"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[711],{451:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=a(5893),s=a(1151);const o={},r="BaGetter SDK",i={id:"Advanced/sdk",title:"BaGetter SDK",description:"You can use BaGetter's BaGetter.Protocol package to interact with a NuGet server.",source:"@site/docs/Advanced/sdk.md",sourceDirName:"Advanced",slug:"/Advanced/sdk",permalink:"/docs/Advanced/sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Advanced/sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging BaGetter",permalink:"/docs/Advanced/debugging"},next:{title:"Import packages from a local feed",permalink:"/docs/Import/local-feeds"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"List Package Versions",id:"list-package-versions",level:2},{value:"Download a package",id:"download-a-package",level:2},{value:"Find Package Metadata",id:"find-package-metadata",level:2},{value:"Search for packages",id:"search-for-packages",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bagetter-sdk",children:"BaGetter SDK"}),"\n",(0,t.jsxs)(n.p,{children:["You can use BaGetter's ",(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/BaGetter.Protocol",children:(0,t.jsx)(n.code,{children:"BaGetter.Protocol"})})," package to interact with a NuGet server."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://www.nuget.org/packages/BaGetter.Protocol",children:(0,t.jsx)(n.code,{children:"BaGetter.Protocol"})})," package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dotnet add package BaGetter.Protocol\n"})}),"\n",(0,t.jsx)(n.h2,{id:"list-package-versions",children:"List Package Versions"}),"\n",(0,t.jsxs)(n.p,{children:["Find all versions of the ",(0,t.jsx)(n.code,{children:"Newtonsoft.Json"})," package:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'NuGetClient client = new NuGetClient("https://api.nuget.org/v3/index.json");\n\nIReadOnlyList<NuGetVersion>> versions = await client.ListPackageVersionsAsync("Newtonsoft.Json");\n\nforeach (NuGetVersion version in versions)\n{\n    Console.WriteLine($"Found version: {version}");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"download-a-package",children:"Download a package"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'NuGetClient client = new NuGetClient("https://api.nuget.org/v3/index.json");\n\nstring packageId = "Newtonsoft.Json";\nNuGetVersion packageVersion = new NuGetVersion("12.0.1");\n\nusing (Stream packageStream = await client.DownloadPackageAsync(packageId, packageVersion))\n{\n    Console.WriteLine($"Downloaded package {packageId} {packageVersion}");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"find-package-metadata",children:"Find Package Metadata"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'NuGetClient client = new NuGetClient("https://api.nuget.org/v3/index.json");\n\n// Find the metadata for all versions of a package.\nIReadOnlyList<PackageMetadata> items = await client.GetPackageMetadataAsync("Newtonsoft.Json");\nif (!items.Any())\n{\n    Console.WriteLine($"Package \'Newtonsoft.Json\' does not exist");\n    return;\n}\n\nforeach (var metadata in items)\n{\n    Console.WriteLine($"Version: {metadata.Version}");\n    Console.WriteLine($"Listed: {metadata.Listed}");\n    Console.WriteLine($"Tags: {metadata.Tags}");\n    Console.WriteLine($"Description: {metadata.Description}");\n}\n\n// Or, find the metadata for a single version of a package.\nstring packageId = "Newtonsoft.Json"\nNuGetVersion packageVersion = new NuGetVersion("12.0.1");\n\nPackageMetadata metadata = await client.GetPackageMetadataAsync(packageId, packageVersion);\n\nConsole.WriteLine($"Listed: {metadata.Listed}");\nConsole.WriteLine($"Tags: {metadata.Tags}");\nConsole.WriteLine($"Description: {metadata.Description}");\n'})}),"\n",(0,t.jsx)(n.h2,{id:"search-for-packages",children:"Search for packages"}),"\n",(0,t.jsx)(n.p,{children:'Search for "json" packages:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'NuGetClient client = new NuGetClient("https://api.nuget.org/v3/index.json");\nIReadOnlyList<SearchResult> results = await client.SearchAsync("json");\n\nforeach (SearchResult result in results)\n{\n    Console.WriteLine($"Found package {result.PackageId} {searchResult.Version}");\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var t=a(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[328],{843:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=s(5893),o=s(1151);const t={},r="Run BaGetter on AWS",i={id:"Installation/aws",title:"Run BaGetter on AWS",description:"!!! warning",source:"@site/docs/Installation/aws.md",sourceDirName:"Installation",slug:"/Installation/aws",permalink:"/docs/Installation/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Installation/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Alibaba (Aliyun) Object Storage Service",permalink:"/docs/Installation/aliyun"},next:{title:"Run BaGetter on Azure",permalink:"/docs/Installation/azure"}},c={},l=[{value:"Configure BaGetter",id:"configure-bagetter",level:2},{value:"Amazon S3",id:"amazon-s3",level:3},{value:"Amazon RDS",id:"amazon-rds",level:3},{value:"Publish packages",id:"publish-packages",level:2},{value:"Restore packages",id:"restore-packages",level:2},{value:"Symbol server",id:"symbol-server",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"run-bagetter-on-aws",children:"Run BaGetter on AWS"}),"\n",(0,a.jsx)(n.p,{children:"!!! warning\nThis page is a work in progress!"}),"\n",(0,a.jsxs)(n.p,{children:["Use Amazon Web Services to scale BaGetter. You can store metadata on ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/rds/postgresql/",children:"Amazon RDS"})," and upload packages to ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"configure-bagetter",children:"Configure BaGetter"}),"\n",(0,a.jsxs)(n.p,{children:["You can modify BaGetter's configurations by editing the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file. For the full list of configurations, please refer to ",(0,a.jsx)(n.a,{href:"/docs/configuration",children:"BaGetter's configuration"})," guide."]}),"\n",(0,a.jsx)(n.h3,{id:"amazon-s3",children:"Amazon S3"}),"\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Storage": {\n        "Type": "AwsS3",\n        "Region": "us-west-1",\n        "Bucket": "foo",\n        "AccessKey": "",\n        "SecretKey": ""\n    },\n\n    ...\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"amazon-rds",children:"Amazon RDS"}),"\n",(0,a.jsxs)(n.p,{children:["To use PostgreSQL, update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Database": {\n        "Type": "PostgreSql",\n        "ConnectionString": "..."\n    },\n\n    ...\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To use MySQL, update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Database": {\n        "Type": "MySql",\n        "ConnectionString": "..."\n    },\n\n    ...\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"publish-packages",children:"Publish packages"}),"\n",(0,a.jsx)(n.p,{children:"Publish your first package with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dotnet nuget push -s http://localhost:5000/v3/index.json package.1.0.0.nupkg\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Publish your first ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/create-packages/symbol-packages-snupkg",children:"symbol package"})," with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dotnet nuget push -s http://localhost:5000/v3/index.json symbol.package.1.0.0.snupkg\n"})}),"\n",(0,a.jsxs)(n.p,{children:["!!! warning\nYou should secure your server by requiring an API Key to publish packages. For more information, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/configuration#require-an-api-key",children:"Require an API Key"})," guide."]}),"\n",(0,a.jsx)(n.h2,{id:"restore-packages",children:"Restore packages"}),"\n",(0,a.jsx)(n.p,{children:"You can restore packages by using the following package source:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"http://localhost:5000/v3/index.json"})}),"\n",(0,a.jsx)(n.p,{children:"Some helpful guides:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources",children:"Visual Studio"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file#package-source-sections",children:"NuGet.config"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"symbol-server",children:"Symbol server"}),"\n",(0,a.jsx)(n.p,{children:"You can load symbols by using the following symbol location:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"http://localhost:5000/api/download/symbols"})}),"\n",(0,a.jsxs)(n.p,{children:["For Visual Studio, please refer to the ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger?view=vs-2017#configure-symbol-locations-and-loading-options",children:"Configure Debugging"})," guide."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var a=s(7294);const o={},t=a.createContext(o);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);
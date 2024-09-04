import{c as S,g as z,W as O,r as _,j as d,Y as V,B as W}from"./app-seHo-2Pj.js";import{A as K}from"./AuthenticatedLayout-BbJCBrEl.js";import{u as G,R as Y,C as D,T as Z,d as J}from"./useUploadFile-BjrnPN_h.js";import{A as Q,C as X}from"./AdminHeader-DdAestUA.js";import{g as N}from"./ApplicationLogo-Dsn01JS_.js";import{C as I,T as ee}from"./index-B4QU2BuM.js";import{U as te}from"./index-q3HBubqJ.js";import"./FooterLayout-Vber5aYW.js";import"./index-BDXsA6_q.js";import"./Card-Kx7GyZfR.js";import"./PlusOutlined-C_6t6gwO.js";import"./DeleteOutlined-BRSLxfDv.js";import"./EyeOutlined-B47SA190.js";var U={exports:{}};/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */(function(c){(function(){var o=function(e,a){return a=a||"",e.replace(/(^|-)/g,"$1\\u"+a).replace(/,/g,"\\u"+a)},s=o("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),m="a-z"+o("DF-F6,F8-FF","00"),v="A-Z"+o("C0-D6,D8-DE","00"),b="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",x=function(e,a,t,n){return e=e||s,a=a||m,t=t||v,n=n||b,{capitalize:new RegExp("(^|["+e+"])(["+a+"])","g"),pascal:new RegExp("(^|["+e+"])+(["+a+t+"])","g"),fill:new RegExp("["+e+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+a+"])","g"),improper:new RegExp("\\b("+n+")\\b","g"),relax:new RegExp("([^"+t+"])(["+t+"]*)(["+t+"])(?=[^"+t+"]|$)","g"),upper:new RegExp("^[^"+a+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+e+"]")}},$=x(),i={re:$,unicodes:o,regexps:x,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(e){return i.up.call(e.charAt(0))+e.slice(1)},decap:function(e){return i.low.call(e.charAt(0))+e.slice(1)},deapostrophe:function(e){return e.replace($.apostrophe,"")},fill:function(e,a,t){return a!=null&&(e=e.replace($.fill,function(n,u){return u?a+u:""})),t&&(e=i.deapostrophe(e)),e},prep:function(e,a,t,n){if(e=e==null?"":e+"",!n&&$.upper.test(e)&&(e=i.low.call(e)),!a&&!$.hole.test(e)){var u=i.fill(e," ");$.hole.test(u)&&(e=u)}return!t&&!$.room.test(e)&&(e=e.replace($.relax,i.relax)),e},relax:function(e,a,t,n){return a+" "+(t?t+" ":"")+n}},p={_:i,of:function(e){for(var a=0,t=i.types.length;a<t;a++)if(p[i.types[a]].apply(p,arguments)===e)return i.types[a]},flip:function(e){return e.replace(/\w/g,function(a){return(a==i.up.call(a)?i.low:i.up).call(a)})},random:function(e){return e.replace(/\w/g,function(a){return(Math.round(Math.random())?i.up:i.low).call(a)})},type:function(e,a){p[e]=a,i.types.push(e)}},r={lower:function(e,a,t){return i.fill(i.low.call(i.prep(e,a)),a,t)},snake:function(e){return p.lower(e,"_",!0)},constant:function(e){return p.upper(e,"_",!0)},camel:function(e){return i.decap(p.pascal(e))},kebab:function(e){return p.lower(e,"-",!0)},upper:function(e,a,t){return i.fill(i.up.call(i.prep(e,a,!1,!0)),a,t)},capital:function(e,a,t){return i.fill(i.prep(e).replace($.capitalize,function(n,u,l){return u+i.up.call(l)}),a,t)},header:function(e){return p.capital(e,"-",!0)},pascal:function(e){return i.fill(i.prep(e,!1,!0).replace($.pascal,function(a,t,n){return i.up.call(n)}),"",!0)},title:function(e){return p.capital(e).replace($.improper,function(a,t,n,u){return n>0&&n<u.lastIndexOf(" ")?i.low.call(a):a})},sentence:function(e,a,t){return e=p.lower(e).replace($.sentence,function(n,u,l){return u+i.up.call(l)}),a&&a.forEach(function(n){e=e.replace(new RegExp("\\b"+p.lower(n)+"\\b","g"),i.cap)}),t&&t.forEach(function(n){e=e.replace(new RegExp("(\\b"+p.lower(n)+"\\. +)(\\w)"),function(u,l,f){return l+i.low.call(f)})}),e}};r.squish=r.pascal,p.default=p;for(var h in r)p.type(h,r[h]);var g=typeof g=="function"?g:function(){};g(c.exports?c.exports=p:this.Case=p)}).call(S)})(U);var re=U.exports;const q=z(re);function ae(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var M={exports:{}};(function(c,o){(function(s,m){typeof ae=="function"?c.exports=m():s.pluralize=m()})(S,function(){var s=[],m=[],v={},b={},x={};function $(t){return typeof t=="string"?new RegExp("^"+t+"$","i"):t}function i(t,n){return t===n?n:t===t.toLowerCase()?n.toLowerCase():t===t.toUpperCase()?n.toUpperCase():t[0]===t[0].toUpperCase()?n.charAt(0).toUpperCase()+n.substr(1).toLowerCase():n.toLowerCase()}function p(t,n){return t.replace(/\$(\d{1,2})/g,function(u,l){return n[l]||""})}function r(t,n){return t.replace(n[0],function(u,l){var f=p(n[1],arguments);return i(u===""?t[l-1]:u,f)})}function h(t,n,u){if(!t.length||v.hasOwnProperty(t))return n;for(var l=u.length;l--;){var f=u[l];if(f[0].test(n))return r(n,f)}return n}function g(t,n,u){return function(l){var f=l.toLowerCase();return n.hasOwnProperty(f)?i(l,f):t.hasOwnProperty(f)?i(l,t[f]):h(f,l,u)}}function e(t,n,u,l){return function(f){var y=f.toLowerCase();return n.hasOwnProperty(y)?!0:t.hasOwnProperty(y)?!1:h(y,y,u)===y}}function a(t,n,u){var l=n===1?a.singular(t):a.plural(t);return(u?n+" ":"")+l}return a.plural=g(x,b,s),a.isPlural=e(x,b,s),a.singular=g(b,x,m),a.isSingular=e(b,x,m),a.addPluralRule=function(t,n){s.push([$(t),n])},a.addSingularRule=function(t,n){m.push([$(t),n])},a.addUncountableRule=function(t){if(typeof t=="string"){v[t.toLowerCase()]=!0;return}a.addPluralRule(t,"$0"),a.addSingularRule(t,"$0")},a.addIrregularRule=function(t,n){n=n.toLowerCase(),t=t.toLowerCase(),x[t]=n,b[n]=t},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(t){return a.addIrregularRule(t[0],t[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(t){return a.addPluralRule(t[0],t[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(t){return a.addSingularRule(t[0],t[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(a.addUncountableRule),a})})(M);var ne=M.exports;const ie=z(ne),se=()=>{const c=r=>q.snake(r),o=r=>ie(q.snake(r)),s=r=>q.pascal(r),m=(r,h=[])=>`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class ${s(r)} extends Model
{
    use HasFactory;

    protected $table = '${o(r)}';
    protected $fillable = [
        ${h.reduce((g,e)=>`${g}'${e.name}',
        `,"")}
    ];
}`,v=(r,h=[])=>`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;
${h.reduce((g,e)=>{const a=e.type==="foreignIdFor",t=n=>`use App\\Models\\${q.pascal(n)};`;if(a){const n=e.name.slice(0,-3);return`${g}${t(n)}
`}else return g},"")}

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('${o(r)}', function (Blueprint $table) {
            $table->id();
            ${h.reduce((g,e)=>{const a=e.nullable?"->nullable()":"",t=e.primary?"->primary()":"",n=e.unique?"->unique()":"",u=e.length?`, ${e.length}`:"",l=e.type==="foreignIdFor",f=e.name.slice(0,-3),y=l?`${q.pascal(f)}::class, `:"",w=`${t}${a}${n}${l?"->constrained()":""}`;return`${g}$table->${e.type}(${y}'${e.name}'${u})${w};
            `},"")}
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('${o(r)}');
    }
};`,b=(r,h=[])=>`<?php
use App\\Http\\Controllers\\${s(r)}Controller;

Route::controller(${s(r)}Controller::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/${o(r)}', 'index')->name('${o(r)}.index');
    Route::post('/${o(r)}', 'store')->name('${o(r)}.store');
    Route::get('/${o(r)}/create', 'create')->name('${o(r)}.create');
    Route::get('/${o(r)}/{${c(r)}}', 'show')->name('${o(r)}.show');
    Route::get('/${o(r)}/{${c(r)}}/edit', 'edit')->name('${o(r)}.edit');
    Route::patch('/${o(r)}/{${c(r)}}', 'update')->name('${o(r)}.update');
    Route::delete('/${o(r)}/{${c(r)}}', 'destroy')->name('${o(r)}.destroy');
});`,x=(r,h=[])=>`<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use App\\Http\\Requests\\Store${s(r)}Request;
use App\\Http\\Requests\\Update${s(r)}Request;
use Inertia\\Inertia;
use Inertia\\Response;
use App\\Models\\${s(r)};

class ${s(r)}Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $${o(r)} = ${s(r)}::paginate(10);

        return Inertia::render('${s(r)}/Index', [
            '${o(r)}' => $${o(r)},
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('${s(r)}/Create');
    }

    /**
     * Display the specified resource.
     */
    public function show(${s(r)} $${c(r)}): Response
    {
        return Inertia::render('${s(r)}/Show', ['${c(r)}' => $${c(r)}]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store${s(r)}Request $request): RedirectResponse
    {
        $validated = $request->validated();
        ${s(r)}::create($request->all());
        return Redirect::route('${o(r)}.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(${s(r)} $${c(r)}): Response {
        return Inertia::render('${s(r)}/Edit', ['$${c(r)}' => $${c(r)}]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update${s(r)}Request $request, ${s(r)} $${c(r)}): RedirectResponse
    {
        $validated = $request->validated();
        $${c(r)}->update($request->all());
        return Redirect::route('${o(r)}.show', $${c(r)}->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(${s(r)} $${c(r)}): RedirectResponse
    {
        $${c(r)}->delete();
        return Redirect::route('${o(r)}.index');
    }
}`,$=(r,h=[],g)=>`<?php

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class ${g}${s(r)}Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \\Illuminate\\Contracts\\Validation\\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            ${h.reduce((e,a)=>{const t=a.nullable?"|nullable":"|required",n=a.length?`|max:${a.length}`:"",u=a.unique?`|unique:${o(r)}`:"",l=a.type==="timestamp",y=a.type==="integer"?"|numeric":"",w=`${t}${l?"|date":""}${y}${n}${u}`;return`${e}'${a.name}' => '${(w||"|").slice(1)}',
            `},"")}
        ];
    }
}`;return{model:m,migration:v,routes:b,controller:x,storeRequest:(r,h=[])=>$(r,h,"Store"),updateRequest:(r,h=[])=>$(r,h,"Update")}},{Panel:oe}=D;function Re({auth:c}){const{handleFileUpload:o,data:s,handleReset:m,contextHolder:v,beforeUpload:b}=G(route("admin.excel.database_import")),{data:x,post:$,reset:i,setData:p,processing:r,errors:h}=O({excel_file:null}),{migration:g,model:e,routes:a,controller:t,storeRequest:n,updateRequest:u}=se(),[l,f]=_.useState(10),y=R=>{f(R)},k=N("csrf-token"),w=R=>{R.preventDefault(),$(route("admin.excel.database_import"),{onFinish:()=>i("excel_file")})},P={showLineNumbers:!0,startingLineNumber:1,wrapLines:!1,theme:J,codeBlock:!1},L=Object.keys((s==null?void 0:s.data)||[]).map((R,j)=>{var C;return{label:R,value:j,modelName:R,migrationData:(((C=s==null?void 0:s.data)==null?void 0:C[R])||[]).filter(E=>!!E.name)}}),T=[{key:10,label:"Migration"},{key:11,label:"Model"},{key:12,label:"Route"},{key:13,label:"Controller"},{key:14,label:"Store Request"},{key:15,label:"Update Request"}],B=[{key:10,label:"Migration",functionName:g},{key:11,label:"Model",functionName:e},{key:12,label:"Route",functionName:a},{key:13,label:"Controller",functionName:t},{key:14,label:"Store Request",functionName:n},{key:15,label:"Update Request",functionName:u}];return d.jsxs(K,{user:c.user,header:d.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Database"}),children:[d.jsx(V,{title:"Database"}),v,d.jsx("div",{className:"py-12",children:d.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[d.jsx(Q,{}),d.jsxs(I,{children:[d.jsx(X,{title:"Excel Database Migration"}),d.jsxs("form",{onSubmit:w,action:"/admin/excel/database",method:"POST",encType:"multipart/form-data",children:[d.jsx("input",{type:"hidden",name:"_token",value:k}),d.jsx("div",{children:d.jsx(te,{name:"excel_file",onChange:o,beforeUpload:b,action:route("admin.excel.database_import"),accept:".xls, .xlsx",children:d.jsx(W,{icon:d.jsx(Y,{}),children:"Click to Upload"})})})]})]}),s?d.jsx(I,{children:d.jsx(ee,{tabPosition:"left",items:L.map(({label:R,value:j,migrationData:C,modelName:E})=>{var A,F;return{label:R,key:j,children:d.jsx(I,{style:{width:"100%"},tabList:T,activeTabKey:l,onTabChange:y,tabProps:{size:"middle"},children:d.jsx(D,{defaultActiveKey:["1"],children:d.jsx(oe,{header:"Code",children:d.jsx(Z,{...P,language:"php",text:(F=(A=B.filter(H=>H.key===l))==null?void 0:A[0])==null?void 0:F.functionName(E,C)})},"1")})})}})})}):null]})})]})}export{Re as default};

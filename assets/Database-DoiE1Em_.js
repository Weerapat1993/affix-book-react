import{W as L,r as O,j as s,Y as z,B as K}from"./app-WwKEh0jh.js";import{A as V}from"./AuthenticatedLayout-0xbYpEQ3.js";import{u as G,R as W,C as A,T as Y,d as J}from"./useUploadFile-CH0VI4VL.js";import{p as n,s as t,C as D,a}from"./case-C3L00SbD.js";import{A as Q,C as X}from"./AdminHeader-C1MLJt7e.js";import{g as Z}from"./laravelBlade-DnAXOTAM.js";import{C as I,T as N}from"./index-BuBjw8fh.js";import{U as ee}from"./index-DLTekfaN.js";/* empty css            */import"./ApplicationLogo-LqjnO7QA.js";import"./LayoutBreadcrumb-CeASog34.js";import"./createLucideIcon-jXqLjUQ1.js";import"./x-2Dl2fV5n.js";import"./Card-D6dZg3K8.js";import"./PlusOutlined-p0XOcNI7.js";import"./DeleteOutlined-B2hNzAM5.js";import"./EyeOutlined-CMXjSh65.js";const te=()=>{const q=(e,i=[])=>`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class ${n(e)} extends Model
{
    use HasFactory;

    protected $table = '${t(e)}';
    protected $fillable = [
        ${i.reduce((c,r)=>`${c}'${r.name}',
        `,"")}
    ];
}`,k=(e,i=[])=>`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;
${i.reduce((c,r)=>{const o=r.type==="foreignIdFor",$=l=>`use App\\Models\\${D.pascal(l)};`;if(o){const l=r.name.slice(0,-3);return`${c}${$(l)}
`}else return c},"")}

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('${t(e)}', function (Blueprint $table) {
            $table->id();
            ${i.reduce((c,r)=>{const o=r.nullable?"->nullable()":"",$=r.primary?"->primary()":"",l=r.unique?"->unique()":"",h=r.length?`, ${r.length}`:"",d=r.type==="foreignIdFor",R=r.name.slice(0,-3),b=d?`${D.pascal(R)}::class, `:"",f=`${$}${o}${l}${d?"->constrained()":""}`;return`${c}$table->${r.type}(${b}'${r.name}'${h})${f};
            `},"")}
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('${t(e)}');
    }
};`,u=(e,i=[])=>`<?php
use App\\Http\\Controllers\\${n(e)}Controller;

Route::controller(${n(e)}Controller::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/${t(e)}', 'index')->name('${t(e)}.index');
    Route::post('/${t(e)}', 'store')->name('${t(e)}.store');
    Route::get('/${t(e)}/create', 'create')->name('${t(e)}.create');
    Route::get('/${t(e)}/{${a(e)}}', 'show')->name('${t(e)}.show');
    Route::get('/${t(e)}/{${a(e)}}/edit', 'edit')->name('${t(e)}.edit');
    Route::patch('/${t(e)}/{${a(e)}}', 'update')->name('${t(e)}.update');
    Route::delete('/${t(e)}/{${a(e)}}', 'destroy')->name('${t(e)}.destroy');
});`,v=(e,i=[])=>`<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use App\\Http\\Requests\\Store${n(e)}Request;
use App\\Http\\Requests\\Update${n(e)}Request;
use Inertia\\Inertia;
use Inertia\\Response;
use App\\Models\\${n(e)};

class ${n(e)}Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $${t(e)} = ${n(e)}::paginate(10);

        return Inertia::render('${n(e)}/Index', [
            '${t(e)}' => $${t(e)},
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('${n(e)}/Create');
    }

    /**
     * Display the specified resource.
     */
    public function show(${n(e)} $${a(e)}): Response
    {
        return Inertia::render('${n(e)}/Show', ['${a(e)}' => $${a(e)}]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store${n(e)}Request $request): RedirectResponse
    {
        $validated = $request->validated();
        ${n(e)}::create($request->all());
        return Redirect::route('${t(e)}.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(${n(e)} $${a(e)}): Response {
        return Inertia::render('${n(e)}/Edit', ['$${a(e)}' => $${a(e)}]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update${n(e)}Request $request, ${n(e)} $${a(e)}): RedirectResponse
    {
        $validated = $request->validated();
        $${a(e)}->update($request->all());
        return Redirect::route('${t(e)}.show', $${a(e)}->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(${n(e)} $${a(e)}): RedirectResponse
    {
        $${a(e)}->delete();
        return Redirect::route('${t(e)}.index');
    }
}`,x=(e,i=[],c)=>`<?php

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class ${c}${n(e)}Request extends FormRequest
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
            ${i.reduce((r,o)=>{const $=o.nullable?"|nullable":"|required",l=o.length?`|max:${o.length}`:"",h=o.unique?`|unique:${t(e)}`:"",d=o.type==="timestamp",b=o.type==="integer"?"|numeric":"",f=`${$}${d?"|date":""}${b}${l}${h}`;return`${r}'${o.name}' => '${(f||"|").slice(1)}',
            `},"")}
        ];
    }
}`;return{model:q,migration:k,routes:u,controller:v,storeRequest:(e,i=[])=>x(e,i,"Store"),updateRequest:(e,i=[])=>x(e,i,"Update")}},{Panel:se}=A;function ye({auth:q}){const{handleFileUpload:k,data:u,handleReset:v,contextHolder:x,beforeUpload:w}=G(route("admin.excel.database_import")),{data:F,post:e,reset:i,setData:c,processing:r,errors:o}=L({excel_file:null}),{migration:$,model:l,routes:h,controller:d,storeRequest:R,updateRequest:b}=te(),[g,f]=O.useState(10),H=p=>{f(p)},U=Z("csrf-token"),T=p=>{p.preventDefault(),e(route("admin.excel.database_import"),{onFinish:()=>i("excel_file")})},B={showLineNumbers:!0,startingLineNumber:1,wrapLines:!1,theme:J,codeBlock:!1},E=Object.keys((u==null?void 0:u.data)||[]).map((p,C)=>{var y;return{label:p,value:C,modelName:p,migrationData:(((y=u==null?void 0:u.data)==null?void 0:y[p])||[]).filter(j=>!!j.name)}}),_=[{key:10,label:"Migration"},{key:11,label:"Model"},{key:12,label:"Route"},{key:13,label:"Controller"},{key:14,label:"Store Request"},{key:15,label:"Update Request"}],P=[{key:10,label:"Migration",functionName:$},{key:11,label:"Model",functionName:l},{key:12,label:"Route",functionName:h},{key:13,label:"Controller",functionName:d},{key:14,label:"Store Request",functionName:R},{key:15,label:"Update Request",functionName:b}];return s.jsxs(V,{user:q.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Database"}),children:[s.jsx(z,{title:"Database"}),x,s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[s.jsx(Q,{}),s.jsxs(I,{children:[s.jsx(X,{title:"Excel Database Migration"}),s.jsxs("form",{onSubmit:T,action:"/a/excel/database",method:"POST",encType:"multipart/form-data",children:[s.jsx("input",{type:"hidden",name:"_token",value:U}),s.jsx("div",{children:s.jsx(ee,{name:"excel_file",onChange:k,beforeUpload:w,action:route("admin.excel.database_import"),accept:".xls, .xlsx",children:s.jsx(K,{icon:s.jsx(W,{}),children:"Click to Upload"})})})]})]}),u?s.jsx(I,{children:s.jsx(N,{tabPosition:"left",items:E.map(({label:p,value:C,migrationData:y,modelName:j})=>{var M,S;return{label:p,key:C,children:s.jsx(I,{style:{width:"100%"},tabList:_,activeTabKey:g,onTabChange:H,tabProps:{size:"middle"},children:s.jsx(A,{defaultActiveKey:["1"],children:s.jsx(se,{header:"Code",children:s.jsx(Y,{...B,language:"php",text:(S=(M=P.filter(m=>m.key===g))==null?void 0:M[0])==null?void 0:S.functionName(j,y)})},"1")})})}})})}):null]})})]})}export{ye as default};

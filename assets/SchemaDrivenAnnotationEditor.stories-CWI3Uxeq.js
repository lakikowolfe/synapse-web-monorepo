import{jJ as T}from"./iframe-Dq0ovNdT.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DY5zJ_ED.js";import"./index-r8ZA1smB.js";import"./useEntity-D6VBWzZr.js";import"./pickBy-BdX71-rw.js";import"./isString-BtD2QHAq.js";import"./_baseIteratee-BFoO-v6v.js";import"./useQueries-Cbv2qeri.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-32AmjFc-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bs6oTsPc.js";import"./useSchema-DSrNJrSa.js";import"./index-DN7n1f82.js";import"./enums-lYDblxei.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_dJ0zYu.js";import"./uniq-Bc8qRwvi.js";import"./forEach-B8iwwgef.js";import"./Grid-D-QY8BPo.js";import"./ListItem-p8cST5u8.js";import"./listItemButtonClasses-C4BzSnGN.js";import"./ListItemIcon-D7ywWk61.js";import"./MenuItem-DkoZAmqe.js";import"./ListItemText-DmwVwZqX.js";import"./ArrowUpward-BkrEQfZf.js";import"./ContentCopy-DMk3LFMS.js";import"./FormControlLabel-bl7y3GIE.js";import"./Checkbox-CwNW9pTm.js";import"./SwitchBase-DR9JkQwt.js";import"./FormGroup-BK4MSrd4.js";import"./RadioGroup-DP8NrJB1.js";import"./Radio-CWqEyW_i.js";import"./Slider-B5sOzvMo.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Df53s-uK.js";import"./DialogBase-Cvjq7Dv5.js";import"./Close-BVVEO4rC.js";import"./HelpPopover-CbiRGPMZ.js";import"./MarkdownPopover-BcAA2VMT.js";import"./LightTooltip-5n4PTZp6.js";import"./MarkdownSynapse-CjeUGBpw.js";import"./SkeletonButton-CVWmDoUn.js";import"./SkeletonInlineBlock-CdycSzNS.js";import"./SkeletonTable-CZ5dFOqb.js";import"./SkeletonParagraph-VtSaKYcR.js";import"./JsonSchemaForm-BpUue5SB.js";import"./GridLegacy-BxQhFgCG.js";import"./HelpTwoTone-BjZxUdLX.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-D_Zs0gBr.js";import"./_createAggregator-CPAnOzT8.js";import"./_baseMap-1ZClMyFz.js";import"./DateTimePicker-B9tYmHJt.js";import"./useMobilePicker-DuYyCKUI.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Djj3Fasx.js";import"./index-DTP0DXs6.js";import"./Chip-Dvm89NDk.js";import"./Tabs-BaM8T-pu.js";import"./KeyboardArrowRight-DUVwySsA.js";import"./Autocomplete-BWs2oEEU.js";import"./usePreviousProps-DYWR85x3.js";import"./use-deep-compare-effect.esm-Da70d-lr.js";import"./TextWidget-DaOqXzXN.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};

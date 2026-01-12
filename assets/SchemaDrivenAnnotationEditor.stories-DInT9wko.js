import{jF as p}from"./iframe-DvoYBNiD.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CwkEhJ7c.js";import"./index-Chi_LkuB.js";import"./useEntity-DEMnyQ3z.js";import"./pickBy-CPmP6JaB.js";import"./isString-C7Qxkgt4.js";import"./_baseIteratee-C2VihgZa.js";import"./useQueries-H3vjvQPa.js";import"./useSuspenseQuery-TSKBM31X.js";import"./useInfiniteQuery-DDXlKMJO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dyaf_AgV.js";import"./useSchema-D1a1t1Ot.js";import"./index-FsuI4Thz.js";import"./enums-DvTbjZOn.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Byx7O7Em.js";import"./uniq-B6BenvlG.js";import"./forEach-CWOCpBhE.js";import"./Add-CW5WVWQf.js";import"./Grid-BPvFFemK.js";import"./ListItem-t_AmmaOm.js";import"./listItemButtonClasses-CS_ISlq4.js";import"./ListItemIcon-BsPoowxx.js";import"./MenuItem-DULlt_2w.js";import"./ListItemText-DIfEN8nn.js";import"./ArrowUpward-ofWscAwY.js";import"./ContentCopy-D3rqB16_.js";import"./FormControlLabel-DvUE49P8.js";import"./Checkbox-CZEsGXk1.js";import"./SwitchBase-GfkoXiNz.js";import"./FormGroup-CiGpQOQ4.js";import"./RadioGroup-BB0UZspt.js";import"./Radio-BmR6OloX.js";import"./Slider-Dn1HjQpA.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BbpYCSeJ.js";import"./DialogBase-lzCCYn9_.js";import"./Close-Bc0JSBY2.js";import"./HelpPopover-prgimuRN.js";import"./MarkdownPopover-Cg1db1MJ.js";import"./LightTooltip-CNKQ1XVV.js";import"./MarkdownSynapse-C-L_FMTC.js";import"./SkeletonButton-rl5nAPBn.js";import"./SkeletonInlineBlock-CrALH587.js";import"./SkeletonTable-h3HZ1dln.js";import"./SkeletonParagraph--j7cXsut.js";import"./JsonSchemaForm-CHzoo3Rj.js";import"./GridLegacy-CrMQBMgK.js";import"./HelpTwoTone-DFAvMUL0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bg6IZRI-.js";import"./_createAggregator-BM9Opdae.js";import"./_baseMap-GSBEYVyh.js";import"./DateTimePicker-DyWv1y3c.js";import"./useMobilePicker-cc3UAohf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-knHuLBlT.js";import"./index-CMAWu6FN.js";import"./Chip-Qo99dBLS.js";import"./Tabs-CCXd4I9c.js";import"./KeyboardArrowRight-DILHsNiK.js";import"./Autocomplete-CyCD7Kx1.js";import"./usePreviousProps-D0zSXPWd.js";import"./use-deep-compare-effect.esm-CFWlAvyU.js";import"./TextWidget-CTCG03ef.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};

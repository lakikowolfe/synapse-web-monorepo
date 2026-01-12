import{jF as p}from"./iframe-CCwNk76Y.js";import{S as a}from"./SchemaDrivenAnnotationEditor-75D7d4H1.js";import"./index-Chi_LkuB.js";import"./useEntity-C4C1UydU.js";import"./pickBy-DCC_i3uh.js";import"./isString-CbBGTrSD.js";import"./_baseIteratee-F9qPnzzH.js";import"./useQueries-C_TnSIRo.js";import"./useSuspenseQuery-BX7AVyeT.js";import"./useInfiniteQuery-BLb_KQ8Z.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BS1z4KbJ.js";import"./useSchema-DyhxWUwM.js";import"./index-D-HWmEvw.js";import"./enums-B1CGbZSG.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BlvBxLnz.js";import"./uniq-DqRYO00W.js";import"./forEach-CWOCpBhE.js";import"./Add-C-WDmIEi.js";import"./Grid-TPR8Sk9k.js";import"./ListItem-C3YTC5CM.js";import"./listItemButtonClasses-BY47SDXQ.js";import"./ListItemIcon-CmbRGzj-.js";import"./MenuItem-CXyqq271.js";import"./ListItemText-DMgkKURp.js";import"./ArrowUpward-BEH3X8f1.js";import"./ContentCopy-cXjyP9dz.js";import"./FormControlLabel-BXiw324X.js";import"./Checkbox-BiFNATGA.js";import"./SwitchBase-CCLXZP7p.js";import"./FormGroup-B8gquKDe.js";import"./RadioGroup-DeR7-uUz.js";import"./Radio-h-W8U7wE.js";import"./Slider-Kmxio8X6.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DI-jktlk.js";import"./DialogBase-C7L5OOOB.js";import"./Close-DoMmdBed.js";import"./HelpPopover-D18mc-KU.js";import"./MarkdownPopover-hakBVyDP.js";import"./LightTooltip-CSSmAbKA.js";import"./MarkdownSynapse-y_5QBZZA.js";import"./SkeletonButton-CZc1MN4w.js";import"./SkeletonInlineBlock-Btd0x96s.js";import"./SkeletonTable-Cf4tCZO5.js";import"./SkeletonParagraph-BWcs457u.js";import"./JsonSchemaForm-CHV9TP3E.js";import"./GridLegacy-BJxWVL3o.js";import"./HelpTwoTone-B92AACSH.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-hCoMwbWx.js";import"./_createAggregator-ojc8ACw-.js";import"./_baseMap-D6vqmCJk.js";import"./DateTimePicker-BCHa5mVY.js";import"./useMobilePicker-DJO8cQJu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CIqNM6mP.js";import"./index-BEhf0JCb.js";import"./Chip-Dkm58cKd.js";import"./Tabs-CAuE5Cq-.js";import"./KeyboardArrowRight-C6cn59Ly.js";import"./Autocomplete-BMd6JAtb.js";import"./usePreviousProps-Bi5Hv-GG.js";import"./use-deep-compare-effect.esm-uCkcZvw_.js";import"./TextWidget-DXKDXTiz.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

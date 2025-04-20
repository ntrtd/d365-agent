/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefinitionGroupTemplateLines } from './DefinitionGroupTemplateLines';
import { DefinitionGroupTemplateLinesRequestBuilder } from './DefinitionGroupTemplateLinesRequestBuilder';
import { DefinitionGroupTemplateHeadersApi } from './DefinitionGroupTemplateHeadersApi';
import { DmfModule } from './DmfModule';
import { NoYes } from './NoYes';
import { EntityCategory } from './EntityCategory';
import { NoYesError } from './NoYesError';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DefinitionGroupTemplateLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DefinitionGroupTemplateLines<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): DefinitionGroupTemplateLinesApi<DeSerializersT> {
    return new DefinitionGroupTemplateLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link definitionGroupTemplateHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP_TEMPLATE_HEADER: OneToManyLink<
      DefinitionGroupTemplateLines<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dmfDefinitionGroupTemplateHeaderRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_DEFINITION_GROUP_TEMPLATE_HEADER_ROLE: OneToOneLink<
      DefinitionGroupTemplateLines<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DefinitionGroupTemplateHeadersApi<DeSerializersT>,
      DefinitionGroupTemplateHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEFINITION_GROUP_TEMPLATE_HEADER: new OneToManyLink(
        'DefinitionGroupTemplateHeader',
        this,
        linkedApis[0]
      ),
      DMF_DEFINITION_GROUP_TEMPLATE_HEADER_ROLE: new OneToOneLink(
        'DMFDefinitionGroupTemplateHeaderRole',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DefinitionGroupTemplateLines;

  requestBuilder(): DefinitionGroupTemplateLinesRequestBuilder<DeSerializersT> {
    return new DefinitionGroupTemplateLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DefinitionGroupTemplateLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DefinitionGroupTemplateLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DefinitionGroupTemplateLines<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DefinitionGroupTemplateLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DefinitionGroupTemplateLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY: OrderableEdmTypeField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_MODULE: EnumField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      DmfModule,
      true,
      true
    >;
    LEVEL_IN_EXECUTION_UNIT: OrderableEdmTypeField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FAIL_LEVEL_ON_ERROR: EnumField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENTITY_CATEGORY: EnumField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      EntityCategory,
      true,
      true
    >;
    VALIDATION_STATUS: EnumField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYesError,
      true,
      true
    >;
    TAGS: OrderableEdmTypeField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAIL_EXECUTION_UNIT_ON_ERROR: EnumField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXECUTION_UNIT: OrderableEdmTypeField<
      DefinitionGroupTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link definitionGroupTemplateHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP_TEMPLATE_HEADER: OneToManyLink<
      DefinitionGroupTemplateLines<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dmfDefinitionGroupTemplateHeaderRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DMF_DEFINITION_GROUP_TEMPLATE_HEADER_ROLE: OneToOneLink<
      DefinitionGroupTemplateLines<DeSerializersT>,
      DeSerializersT,
      DefinitionGroupTemplateHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DefinitionGroupTemplateLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY: fieldBuilder.buildEdmTypeField('Entity', 'Edm.String', false),
        /**
         * Static representation of the {@link sysModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODULE: fieldBuilder.buildEnumField('SysModule', DmfModule, true),
        /**
         * Static representation of the {@link levelInExecutionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_IN_EXECUTION_UNIT: fieldBuilder.buildEdmTypeField(
          'LevelInExecutionUnit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link failLevelOnError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIL_LEVEL_ON_ERROR: fieldBuilder.buildEnumField(
          'FailLevelOnError',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link entityCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_CATEGORY: fieldBuilder.buildEnumField(
          'EntityCategory',
          EntityCategory,
          true
        ),
        /**
         * Static representation of the {@link validationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'ValidationStatus',
          NoYesError,
          true
        ),
        /**
         * Static representation of the {@link tags} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAGS: fieldBuilder.buildEdmTypeField('Tags', 'Edm.String', true),
        /**
         * Static representation of the {@link failExecutionUnitOnError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIL_EXECUTION_UNIT_ON_ERROR: fieldBuilder.buildEnumField(
          'FailExecutionUnitOnError',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link executionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_UNIT: fieldBuilder.buildEdmTypeField(
          'ExecutionUnit',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DefinitionGroupTemplateLines)
      };
    }

    return this._schema;
  }
}

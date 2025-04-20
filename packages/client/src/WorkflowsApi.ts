/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Workflows } from './Workflows';
import { WorkflowsRequestBuilder } from './WorkflowsRequestBuilder';
import { ModuleAxapta } from './ModuleAxapta';
import { WorkflowAssociationType } from './WorkflowAssociationType';
import { NoYes } from './NoYes';
import { WorkflowConfigurationType } from './WorkflowConfigurationType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class WorkflowsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Workflows<DeSerializersT>, DeSerializersT>
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
  ): WorkflowsApi<DeSerializersT> {
    return new WorkflowsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Workflows;

  requestBuilder(): WorkflowsRequestBuilder<DeSerializersT> {
    return new WorkflowsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Workflows<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Workflows<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Workflows<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Workflows, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Workflows, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      Workflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE: EnumField<
      Workflows<DeSerializers>,
      DeSerializersT,
      ModuleAxapta,
      true,
      true
    >;
    ASSOCIATION_TYPE: EnumField<
      Workflows<DeSerializers>,
      DeSerializersT,
      WorkflowAssociationType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Workflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      Workflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CONFIGURATION: EnumField<
      Workflows<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      Workflows<DeSerializers>,
      DeSerializersT,
      WorkflowConfigurationType,
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      Workflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_NAME: OrderableEdmTypeField<
      Workflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TABLE_NAME: OrderableEdmTypeField<
      Workflows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Workflows<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField('Module', ModuleAxapta, true),
        /**
         * Static representation of the {@link associationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATION_TYPE: fieldBuilder.buildEnumField(
          'AssociationType',
          WorkflowAssociationType,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONFIGURATION: fieldBuilder.buildEnumField(
          'DefaultConfiguration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          WorkflowConfigurationType,
          true
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'TemplateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'DocumentTableName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Workflows)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementTemplateDetails } from './DataManagementTemplateDetails';
import { DataManagementTemplateDetailsRequestBuilder } from './DataManagementTemplateDetailsRequestBuilder';
import { DataManagementTemplatesApi } from './DataManagementTemplatesApi';
import { NoYes } from './NoYes';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DataManagementTemplateDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DataManagementTemplateDetails<DeSerializersT>, DeSerializersT>
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
  ): DataManagementTemplateDetailsApi<DeSerializersT> {
    return new DataManagementTemplateDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link definitionGroupTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP_TEMPLATE: OneToOneLink<
      DataManagementTemplateDetails<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DataManagementTemplatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEFINITION_GROUP_TEMPLATE: new OneToOneLink(
        'DefinitionGroupTemplate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DataManagementTemplateDetails;

  requestBuilder(): DataManagementTemplateDetailsRequestBuilder<DeSerializersT> {
    return new DataManagementTemplateDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementTemplateDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementTemplateDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementTemplateDetails<DeSerializersT>,
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
    typeof DataManagementTemplateDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementTemplateDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_ID: OrderableEdmTypeField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_NAME: OrderableEdmTypeField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_IN_EXECUTION_UNIT: OrderableEdmTypeField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FAIL_LEVEL_ON_ERROR: EnumField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATION_STATUS: EnumField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      NoYesError,
      true,
      true
    >;
    FAIL_EXECUTION_UNIT_ON_ERROR: EnumField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXECUTION_UNIT: OrderableEdmTypeField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SEQUENCE_IN_LEVEL: OrderableEdmTypeField<
      DataManagementTemplateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link definitionGroupTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFINITION_GROUP_TEMPLATE: OneToOneLink<
      DataManagementTemplateDetails<DeSerializersT>,
      DeSerializersT,
      DataManagementTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DataManagementTemplateDetails<DeSerializers>>;
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
         * Static representation of the {@link entityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'EntityName',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link validationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'ValidationStatus',
          NoYesError,
          true
        ),
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
        /**
         * Static representation of the {@link sequenceInLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_IN_LEVEL: fieldBuilder.buildEdmTypeField(
          'SequenceInLevel',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementTemplateDetails)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementTargetMapEntities } from './DataManagementTargetMapEntities';
import { DataManagementTargetMapEntitiesRequestBuilder } from './DataManagementTargetMapEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { Types } from './Types';
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
export class DataManagementTargetMapEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DataManagementTargetMapEntities<DeSerializersT>, DeSerializersT>
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
  ): DataManagementTargetMapEntitiesApi<DeSerializersT> {
    return new DataManagementTargetMapEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DataManagementTargetMapEntities;

  requestBuilder(): DataManagementTargetMapEntitiesRequestBuilder<DeSerializersT> {
    return new DataManagementTargetMapEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DataManagementTargetMapEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementTargetMapEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementTargetMapEntities<DeSerializersT>,
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
    typeof DataManagementTargetMapEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementTargetMapEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STAGING_FIELD: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TARGET_TABLE: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_STAGING_FIELD: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTO_MANUAL: EnumField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TARGET_FIELD: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REC_VERSION_VALUE: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TARGET_DATA_SOURCE_NAME: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_LABEL: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REQUIRED: EnumField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATA_SOURCE_NAME: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_LENGTH: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FIELD_ENABLED: EnumField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIELD_AOT_NAME: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_SOURCE_FIELD: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_DATA_TYPE_VALUE: EnumField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      Types,
      true,
      true
    >;
    IS_SYSTEM: EnumField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARRAY_INDEX: OrderableEdmTypeField<
      DataManagementTargetMapEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DataManagementTargetMapEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link stagingField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_FIELD: fieldBuilder.buildEdmTypeField(
          'StagingField',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY: fieldBuilder.buildEdmTypeField('Entity', 'Edm.String', false),
        /**
         * Static representation of the {@link targetTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_TABLE: fieldBuilder.buildEdmTypeField(
          'TargetTable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortStagingField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_STAGING_FIELD: fieldBuilder.buildEdmTypeField(
          'ShortStagingField',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutoManual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTO_MANUAL: fieldBuilder.buildEnumField(
          'IsAutoManual',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link targetField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_FIELD: fieldBuilder.buildEdmTypeField(
          'TargetField',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recVersionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_VERSION_VALUE: fieldBuilder.buildEdmTypeField(
          'RecVersionValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link targetDataSourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_DATA_SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'TargetDataSourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_LABEL: fieldBuilder.buildEdmTypeField(
          'EntityLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REQUIRED: fieldBuilder.buildEnumField('IsRequired', NoYes, true),
        /**
         * Static representation of the {@link dataSourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'DataSourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_LENGTH: fieldBuilder.buildEdmTypeField(
          'FieldLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isFieldEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIELD_ENABLED: fieldBuilder.buildEnumField(
          'isFieldEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fieldAotName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_AOT_NAME: fieldBuilder.buildEdmTypeField(
          'FieldAOTName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataSourceField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE_FIELD: fieldBuilder.buildEdmTypeField(
          'DataSourceField',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldDataTypeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_DATA_TYPE_VALUE: fieldBuilder.buildEnumField(
          'FieldDataTypeValue',
          Types,
          true
        ),
        /**
         * Static representation of the {@link isSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYSTEM: fieldBuilder.buildEnumField('IsSystem', NoYes, true),
        /**
         * Static representation of the {@link arrayIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRAY_INDEX: fieldBuilder.buildEdmTypeField(
          'ArrayIndex',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementTargetMapEntities)
      };
    }

    return this._schema;
  }
}

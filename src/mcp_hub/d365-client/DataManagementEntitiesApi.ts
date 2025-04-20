/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DataManagementEntities } from './DataManagementEntities';
import { DataManagementEntitiesRequestBuilder } from './DataManagementEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { DmfChangeTrackingType } from './DmfChangeTrackingType';
import { EntityCategory } from './EntityCategory';
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
export class DataManagementEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DataManagementEntities<DeSerializersT>, DeSerializersT>
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
  ): DataManagementEntitiesApi<DeSerializersT> {
    return new DataManagementEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DataManagementEntities;

  requestBuilder(): DataManagementEntitiesRequestBuilder<DeSerializersT> {
    return new DataManagementEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DataManagementEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DataManagementEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DataManagementEntities<DeSerializersT>,
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
    typeof DataManagementEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DataManagementEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENTITY_NAME: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_IS_ENABLED: EnumField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TARGET_NAME: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_CODES: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SHARED: EnumField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_TRACKING_TYPE: EnumField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      DmfChangeTrackingType,
      true,
      true
    >;
    REC_VERSION_VALUE: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENTITY_KEY: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: EnumField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      EntityCategory,
      true,
      true
    >;
    STAGING_TABLE_NAME: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAGS: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODULES: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIGURATION_KEY_NAME: OrderableEdmTypeField<
      DataManagementEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DataManagementEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link entityIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_IS_ENABLED: fieldBuilder.buildEnumField(
          'EntityIsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link targetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_NAME: fieldBuilder.buildEdmTypeField(
          'TargetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_CODES: fieldBuilder.buildEdmTypeField(
          'CountryRegionCodes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isShared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHARED: fieldBuilder.buildEnumField('IsShared', NoYes, true),
        /**
         * Static representation of the {@link changeTrackingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_TRACKING_TYPE: fieldBuilder.buildEnumField(
          'ChangeTrackingType',
          DmfChangeTrackingType,
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
         * Static representation of the {@link entityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_KEY: fieldBuilder.buildEdmTypeField(
          'EntityKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField('Category', EntityCategory, true),
        /**
         * Static representation of the {@link stagingTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGING_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'StagingTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tags} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAGS: fieldBuilder.buildEdmTypeField('Tags', 'Edm.String', true),
        /**
         * Static representation of the {@link modules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULES: fieldBuilder.buildEdmTypeField('Modules', 'Edm.String', true),
        /**
         * Static representation of the {@link configurationKeyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION_KEY_NAME: fieldBuilder.buildEdmTypeField(
          'ConfigurationKeyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DataManagementEntities)
      };
    }

    return this._schema;
  }
}

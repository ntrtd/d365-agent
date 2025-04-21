/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailConnDatabaseProfiles } from './RetailConnDatabaseProfiles';
import { RetailConnDatabaseProfilesRequestBuilder } from './RetailConnDatabaseProfilesRequestBuilder';
import { RetailCdxDataStoreType } from './RetailCdxDataStoreType';
import { RetailConnProfileDatabaseVersionEnum } from './RetailConnProfileDatabaseVersionEnum';
import { PackageType } from './PackageType';
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
export class RetailConnDatabaseProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailConnDatabaseProfiles<DeSerializersT>, DeSerializersT>
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
  ): RetailConnDatabaseProfilesApi<DeSerializersT> {
    return new RetailConnDatabaseProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailConnDatabaseProfiles;

  requestBuilder(): RetailConnDatabaseProfilesRequestBuilder<DeSerializersT> {
    return new RetailConnDatabaseProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailConnDatabaseProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailConnDatabaseProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailConnDatabaseProfiles<DeSerializersT>,
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
    typeof RetailConnDatabaseProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailConnDatabaseProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CDX_DATA_GROUP_NAME: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_CONNECT_RELATION_NAME: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_SYSTEM_SYNC_STATUS: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CDX_SCHEDULER_INTERVAL_NAME: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SELF_SERVICE_PACKAGE_INFO_PACKAGE_FRIENDLY_NAME: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_STORE_DATA: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_STORE_TYPE: EnumField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      RetailCdxDataStoreType,
      true,
      true
    >;
    SELF_SERVICE_PACKAGE_INFO_PACKAGE_VERSION: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: EnumField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      RetailConnProfileDatabaseVersionEnum,
      true,
      true
    >;
    SELF_SERVICE_PACKAGE_INFO_PACKAGE_TYPE: EnumField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      PackageType,
      true,
      true
    >;
    SERVER: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_VERSION: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATABASE: OrderableEdmTypeField<
      RetailConnDatabaseProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailConnDatabaseProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link retailCdxDataGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CDX_DATA_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'RetailCDXDataGroup_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storeConnectRelationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_CONNECT_RELATION_NAME: fieldBuilder.buildEdmTypeField(
          'StoreConnectRelation_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storeSystemSyncStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_SYSTEM_SYNC_STATUS: fieldBuilder.buildEdmTypeField(
          'StoreSystemSyncStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailCdxSchedulerIntervalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CDX_SCHEDULER_INTERVAL_NAME: fieldBuilder.buildEdmTypeField(
          'RetailCDXSchedulerInterval_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'Password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link selfServicePackageInfoPackageFriendlyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_SERVICE_PACKAGE_INFO_PACKAGE_FRIENDLY_NAME:
          fieldBuilder.buildEdmTypeField(
            'SelfServicePackageInfo_PackageFriendlyName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dataStoreData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_STORE_DATA: fieldBuilder.buildEdmTypeField(
          'DataStoreData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataStoreType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_STORE_TYPE: fieldBuilder.buildEnumField(
          'DataStoreType',
          RetailCdxDataStoreType,
          true
        ),
        /**
         * Static representation of the {@link selfServicePackageInfoPackageVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_SERVICE_PACKAGE_INFO_PACKAGE_VERSION:
          fieldBuilder.buildEdmTypeField(
            'SelfServicePackageInfo_PackageVersion',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEnumField(
          'Version',
          RetailConnProfileDatabaseVersionEnum,
          true
        ),
        /**
         * Static representation of the {@link selfServicePackageInfoPackageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_SERVICE_PACKAGE_INFO_PACKAGE_TYPE: fieldBuilder.buildEnumField(
          'SelfServicePackageInfo_PackageType',
          PackageType,
          true
        ),
        /**
         * Static representation of the {@link server} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER: fieldBuilder.buildEdmTypeField('Server', 'Edm.String', true),
        /**
         * Static representation of the {@link currentVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_VERSION: fieldBuilder.buildEdmTypeField(
          'CurrentVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link database} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATABASE: fieldBuilder.buildEdmTypeField(
          'Database',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailConnDatabaseProfiles)
      };
    }

    return this._schema;
  }
}

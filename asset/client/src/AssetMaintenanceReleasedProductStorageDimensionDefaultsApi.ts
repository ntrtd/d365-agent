/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceReleasedProductStorageDimensionDefaults } from './AssetMaintenanceReleasedProductStorageDimensionDefaults';
import { AssetMaintenanceReleasedProductStorageDimensionDefaultsRequestBuilder } from './AssetMaintenanceReleasedProductStorageDimensionDefaultsRequestBuilder';
import { NoYes } from './NoYes';
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
export class AssetMaintenanceReleasedProductStorageDimensionDefaultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializersT>,
      DeSerializersT
    >
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
  ): AssetMaintenanceReleasedProductStorageDimensionDefaultsApi<DeSerializersT> {
    return new AssetMaintenanceReleasedProductStorageDimensionDefaultsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceReleasedProductStorageDimensionDefaults;

  requestBuilder(): AssetMaintenanceReleasedProductStorageDimensionDefaultsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceReleasedProductStorageDimensionDefaultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializersT>,
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
    typeof AssetMaintenanceReleasedProductStorageDimensionDefaults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceReleasedProductStorageDimensionDefaults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_WAREHOUSE_LOCATION_DIMENSION_ACTIVE: EnumField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ADVANCED_WAREHOUSE_ENABLED: EnumField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DEFAULT_WAREHOUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DEFAULT_SITE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DEFAULT_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceReleasedProductStorageDimensionDefaults<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isWarehouseLocationDimensionActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAREHOUSE_LOCATION_DIMENSION_ACTIVE: fieldBuilder.buildEnumField(
          'IsWarehouseLocationDimensionActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAdvancedWarehouseEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADVANCED_WAREHOUSE_ENABLED: fieldBuilder.buildEnumField(
          'IsAdvancedWarehouseEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDefaultWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DEFAULT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ProductDefaultWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDefaultSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DEFAULT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductDefaultSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDefaultWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DEFAULT_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductDefaultWarehouseLocationId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceReleasedProductStorageDimensionDefaults
        )
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetsV2 } from './AssetMaintenanceAssetsV2';
import { AssetMaintenanceAssetsV2RequestBuilder } from './AssetMaintenanceAssetsV2RequestBuilder';
import { AssetMaintenanceAssetLifecycleStatesApi } from './AssetMaintenanceAssetLifecycleStatesApi';
import { AssetMaintenanceProductsApi } from './AssetMaintenanceProductsApi';
import { AssetMaintenanceModelsApi } from './AssetMaintenanceModelsApi';
import { AssetMaintenanceWarrantiesApi } from './AssetMaintenanceWarrantiesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { Timezone } from './Timezone';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMaintenanceAssetsV2<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceAssetsV2Api<DeSerializersT> {
    return new AssetMaintenanceAssetsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleStateEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link modelEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MODEL_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warrantyEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WARRANTY_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link functionalLocationEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentAssetEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_ASSET_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityParentAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_PARENT_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityParentAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_PARENT_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>,
      AssetMaintenanceProductsApi<DeSerializersT>,
      AssetMaintenanceModelsApi<DeSerializersT>,
      AssetMaintenanceWarrantiesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LIFECYCLE_STATE_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'LifecycleState_EntAssetObjectTableEntity',
        this,
        linkedApis[0]
      ),
      PRODUCT_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'Product_EntAssetObjectTableEntity',
        this,
        linkedApis[1]
      ),
      MODEL_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'Model_EntAssetObjectTableEntity',
        this,
        linkedApis[2]
      ),
      WARRANTY_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'Warranty_EntAssetObjectTableEntity',
        this,
        linkedApis[3]
      ),
      FUNCTIONAL_LOCATION_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'FunctionalLocation_EntAssetObjectTableEntity',
        this,
        linkedApis[4]
      ),
      PARENT_ASSET_ENT_ASSET_OBJECT_TABLE_ENTITY: new OneToOneLink(
        'ParentAsset_EntAssetObjectTableEntity',
        this,
        linkedApis[5]
      ),
      ENT_ASSET_OBJECT_TABLE_ENTITY_PARENT_ASSET: new OneToManyLink(
        'EntAssetObjectTableEntity_ParentAsset',
        this,
        linkedApis[6]
      ),
      ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_PARENT_ASSET: new OneToManyLink(
        'EntAssetObjectTableV3Entity_ParentAsset',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetsV2;

  requestBuilder(): AssetMaintenanceAssetsV2RequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetsV2<DeSerializersT>,
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
    typeof AssetMaintenanceAssetsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_YEAR: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_VALUE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_ASSET_ACCOUNT_NUM: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRK_CTR_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACQUISITION_COST: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_DATE_FROM_VEND: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERIAL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACQUISITION_DATE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_DATE: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLEMENT: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lifecycleStateEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIFECYCLE_STATE_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link modelEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MODEL_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warrantyEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WARRANTY_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link functionalLocationEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUNCTIONAL_LOCATION_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentAssetEntAssetObjectTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_ASSET_ENT_ASSET_OBJECT_TABLE_ENTITY: OneToOneLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityParentAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_PARENT_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityParentAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_PARENT_ASSET: OneToManyLink<
      AssetMaintenanceAssetsV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetsV2<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modelYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_YEAR: fieldBuilder.buildEdmTypeField(
          'ModelYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_VALUE: fieldBuilder.buildEdmTypeField(
          'ReplacementValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentMaintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'ParentMaintenanceAssetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rAssetAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_ASSET_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'RAssetAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wrkCtrId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRK_CTR_ID: fieldBuilder.buildEdmTypeField(
          'WrkCtrId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link acquisitionCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_COST: fieldBuilder.buildEdmTypeField(
          'AcquisitionCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link purchaseOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField('ModelId', 'Edm.String', true),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link warrantyDateFromVend} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DATE_FROM_VEND: fieldBuilder.buildEdmTypeField(
          'WarrantyDateFromVend',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'SerialID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link acquisitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_DATE: fieldBuilder.buildEdmTypeField(
          'AcquisitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ReplacementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBuildingComplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING_COMPLEMENT: fieldBuilder.buildEdmTypeField(
          'AddressBuildingComplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetsV2)
      };
    }

    return this._schema;
  }
}

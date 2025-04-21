/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceReleasedProducts } from './AssetMaintenanceReleasedProducts';
import { AssetMaintenanceReleasedProductsRequestBuilder } from './AssetMaintenanceReleasedProductsRequestBuilder';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { ProductStylesApi } from './ProductStylesApi';
import { TrackingDimensionGroupsApi } from './TrackingDimensionGroupsApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { AssetMaintenanceAssetTypeDefaultSparePartsV2Api } from './AssetMaintenanceAssetTypeDefaultSparePartsV2Api';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { EcoResProductType } from './EcoResProductType';
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
export class AssetMaintenanceReleasedProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceReleasedProducts<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceReleasedProductsApi<DeSerializersT> {
    return new AssetMaintenanceReleasedProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_PRODUCT: OneToManyLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_STYLE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link trackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACKING_DIMENSION_GROUP: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      TrackingDimensionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_VERSION: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultProductSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PRODUCT_VERSION: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultProductColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetSparePartsAlternativeSparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SPARE_PARTS_ALTERNATIVE_SPARE_PART_PRODUCT_NUMBER: OneToManyLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetSparePartsSparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SPARE_PARTS_SPARE_PART_PRODUCT_NUMBER: OneToManyLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      TrackingDimensionGroupsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ProductLifecycleStatesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT>,
      AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_PRODUCT: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_Product',
        this,
        linkedApis[0]
      ),
      ALTERNATIVE_PRODUCT_STYLE: new OneToOneLink(
        'AlternativeProductStyle',
        this,
        linkedApis[1]
      ),
      TRACKING_DIMENSION_GROUP: new OneToOneLink(
        'TrackingDimensionGroup',
        this,
        linkedApis[2]
      ),
      ALTERNATIVE_PRODUCT_VERSION: new OneToOneLink(
        'AlternativeProductVersion',
        this,
        linkedApis[3]
      ),
      DEFAULT_PRODUCT_SIZE: new OneToOneLink(
        'DefaultProductSize',
        this,
        linkedApis[4]
      ),
      ALTERNATIVE_PRODUCT_SIZE: new OneToOneLink(
        'AlternativeProductSize',
        this,
        linkedApis[5]
      ),
      PRODUCT_LIFECYCLE_STATE: new OneToOneLink(
        'ProductLifecycleState',
        this,
        linkedApis[6]
      ),
      ALTERNATIVE_PRODUCT_COLOR: new OneToOneLink(
        'AlternativeProductColor',
        this,
        linkedApis[7]
      ),
      DEFAULT_PRODUCT_VERSION: new OneToOneLink(
        'DefaultProductVersion',
        this,
        linkedApis[8]
      ),
      DEFAULT_PRODUCT_COLOR: new OneToOneLink(
        'DefaultProductColor',
        this,
        linkedApis[9]
      ),
      MAINTENANCE_ASSET_SPARE_PARTS_ALTERNATIVE_SPARE_PART_PRODUCT_NUMBER:
        new OneToManyLink(
          'MaintenanceAssetSpareParts_AlternativeSparePartProductNumber',
          this,
          linkedApis[10]
        ),
      MAINTENANCE_ASSET_SPARE_PARTS_SPARE_PART_PRODUCT_NUMBER:
        new OneToManyLink(
          'MaintenanceAssetSpareParts_SparePartProductNumber',
          this,
          linkedApis[11]
        )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceReleasedProducts;

  requestBuilder(): AssetMaintenanceReleasedProductsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceReleasedProductsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceReleasedProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceReleasedProducts<DeSerializersT>,
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
    typeof AssetMaintenanceReleasedProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceReleasedProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SUB_TYPE: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TYPE: EnumField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductServiceType,
      true,
      true
    >;
    DEFAULT_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_ITEM_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      AssetMaintenanceReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_PRODUCT: OneToManyLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_STYLE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link trackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRACKING_DIMENSION_GROUP: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      TrackingDimensionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_VERSION: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultProductSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_SIZE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternativeProductColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATIVE_PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PRODUCT_VERSION: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultProductColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PRODUCT_COLOR: OneToOneLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetSparePartsAlternativeSparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SPARE_PARTS_ALTERNATIVE_SPARE_PART_PRODUCT_NUMBER: OneToManyLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetSparePartsSparePartProductNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_SPARE_PARTS_SPARE_PART_PRODUCT_NUMBER: OneToManyLink<
      AssetMaintenanceReleasedProducts<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeDefaultSparePartsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceReleasedProducts<DeSerializers>>;
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
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SUB_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductSubType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TYPE: fieldBuilder.buildEnumField(
          'ServiceType',
          EcoResProductServiceType,
          true
        ),
        /**
         * Static representation of the {@link defaultProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'AlternativeItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductStyleId',
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
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link alternativeProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trackingDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TrackingDimensionGroupName',
          'Edm.String',
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
         * Static representation of the {@link productDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProductColorId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceReleasedProducts)
      };
    }

    return this._schema;
  }
}

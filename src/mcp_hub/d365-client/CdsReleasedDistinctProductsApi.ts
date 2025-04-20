/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsReleasedDistinctProducts } from './CdsReleasedDistinctProducts';
import { CdsReleasedDistinctProductsRequestBuilder } from './CdsReleasedDistinctProductsRequestBuilder';
import { CdsInventoryOnHandRequestsApi } from './CdsInventoryOnHandRequestsApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductSizesApi } from './ProductSizesApi';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { NoYes } from './NoYes';
import { EcoResFieldServiceProductType } from './EcoResFieldServiceProductType';
import { EcoResProductType } from './EcoResProductType';
import { WarrantablePriceRangeBaseType } from './WarrantablePriceRangeBaseType';
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
export class CdsReleasedDistinctProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CdsReleasedDistinctProducts<DeSerializersT>, DeSerializersT>
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
  ): CdsReleasedDistinctProductsApi<DeSerializersT> {
    return new CdsReleasedDistinctProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsInventoryOnHandRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_REQUESTS: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsInventoryOnHandRequestsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductSizesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_INVENTORY_ON_HAND_REQUESTS: new OneToOneLink(
        'CDSInventoryOnHandRequests',
        this,
        linkedApis[0]
      ),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[1]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[2]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[3]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[4]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = CdsReleasedDistinctProducts;

  requestBuilder(): CdsReleasedDistinctProductsRequestBuilder<DeSerializersT> {
    return new CdsReleasedDistinctProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsReleasedDistinctProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsReleasedDistinctProducts<DeSerializersT>,
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
    typeof CdsReleasedDistinctProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsReleasedDistinctProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOWER_WARRANTABLE_PRICE_RANGE_LIMIT: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_DECIMAL_PRECISION: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_DURATION_TIME_UNIT: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      WarrantyDurationTimeUnit,
      true,
      true
    >;
    INVENTORY_UNIT_DECIMAL_PRECISION: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TYPE: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductServiceType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_STOCKED_PRODUCT: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIELD_SERVICE_PRODUCT_TYPE: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      EcoResFieldServiceProductType,
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WARRANTY_DURATION_TIME: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CATCH_WEIGHT_PRODUCT: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UPPER_WARRANTABLE_PRICE_RANGE_LIMIT: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WARRANTABLE_PRICE_RANGE_BASE_TYPE: EnumField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      WarrantablePriceRangeBaseType,
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      CdsReleasedDistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsInventoryOnHandRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_REQUESTS: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      CdsReleasedDistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsReleasedDistinctProducts<DeSerializers>>;
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowerWarrantablePriceRangeLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_WARRANTABLE_PRICE_RANGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'LowerWarrantablePriceRangeLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnitDecimalPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_DECIMAL_PRECISION: fieldBuilder.buildEdmTypeField(
          'SalesUnitDecimalPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warrantyDurationTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME_UNIT: fieldBuilder.buildEnumField(
          'WarrantyDurationTimeUnit',
          WarrantyDurationTimeUnit,
          true
        ),
        /**
         * Static representation of the {@link inventoryUnitDecimalPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_DECIMAL_PRECISION: fieldBuilder.buildEdmTypeField(
          'InventoryUnitDecimalPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isStockedProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STOCKED_PRODUCT: fieldBuilder.buildEnumField(
          'IsStockedProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fieldServiceProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_SERVICE_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'FieldServiceProductType',
          EcoResFieldServiceProductType,
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
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warrantyDurationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME: fieldBuilder.buildEdmTypeField(
          'WarrantyDurationTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isCatchWeightProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATCH_WEIGHT_PRODUCT: fieldBuilder.buildEnumField(
          'IsCatchWeightProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link upperWarrantablePriceRangeLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_WARRANTABLE_PRICE_RANGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'UpperWarrantablePriceRangeLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warrantablePriceRangeBaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_PRICE_RANGE_BASE_TYPE: fieldBuilder.buildEnumField(
          'WarrantablePriceRangeBaseType',
          WarrantablePriceRangeBaseType,
          true
        ),
        /**
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsReleasedDistinctProducts)
      };
    }

    return this._schema;
  }
}

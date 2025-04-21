/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductCreationsV2 } from './ReleasedProductCreationsV2';
import { ReleasedProductCreationsV2RequestBuilder } from './ReleasedProductCreationsV2RequestBuilder';
import { EcoResProductType } from './EcoResProductType';
import { WarrantablePriceRangeBaseType } from './WarrantablePriceRangeBaseType';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
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
export class ReleasedProductCreationsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReleasedProductCreationsV2<DeSerializersT>, DeSerializersT>
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
  ): ReleasedProductCreationsV2Api<DeSerializersT> {
    return new ReleasedProductCreationsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReleasedProductCreationsV2;

  requestBuilder(): ReleasedProductCreationsV2RequestBuilder<DeSerializersT> {
    return new ReleasedProductCreationsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductCreationsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductCreationsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductCreationsV2<DeSerializersT>,
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
    typeof ReleasedProductCreationsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductCreationsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    WARRANTY_DURATION_TIME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTABLE_PRICE_RANGE_BASE_TYPE: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      WarrantablePriceRangeBaseType,
      true,
      true
    >;
    UPPER_WARRANTABLE_PRICE_RANGE_LIMIT: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_PRODUCT_CATEGORYNAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_RESERVATION_HIERARCHY_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SUB_TYPE: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      EcoResProductSubtype,
      true,
      true
    >;
    BOM_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TYPE: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      EcoResProductServiceType,
      true,
      true
    >;
    WARRANTY_DURATION_TIME_UNIT: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      WarrantyDurationTimeUnit,
      true,
      true
    >;
    VARIANT_CONFIGURATION_TECHNOLOGY: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      EcoResVariantConfigurationTechnologyType,
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_KIT: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CATCH_WEIGHT_PRODUCT: EnumField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOWER_WARRANTABLE_PRICE_RANGE_LIMIT: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_MODEL_GROUP_ID: OrderableEdmTypeField<
      ReleasedProductCreationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReleasedProductCreationsV2<DeSerializers>>;
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
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
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
         * Static representation of the {@link warrantyDurationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME: fieldBuilder.buildEdmTypeField(
          'WarrantyDurationTime',
          'Edm.Int32',
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
         * Static representation of the {@link warrantablePriceRangeBaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTABLE_PRICE_RANGE_BASE_TYPE: fieldBuilder.buildEnumField(
          'WarrantablePriceRangeBaseType',
          WarrantablePriceRangeBaseType,
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
         * Static representation of the {@link retailProductCategoryname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_CATEGORYNAME: fieldBuilder.buildEdmTypeField(
          'RetailProductCategoryname',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryReservationHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_RESERVATION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'InventoryReservationHierarchyName',
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
        PRODUCT_SUB_TYPE: fieldBuilder.buildEnumField(
          'ProductSubType',
          EcoResProductSubtype,
          true
        ),
        /**
         * Static representation of the {@link bomUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BOMUnitSymbol',
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
         * Static representation of the {@link serviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TYPE: fieldBuilder.buildEnumField(
          'ServiceType',
          EcoResProductServiceType,
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
         * Static representation of the {@link variantConfigurationTechnology} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_CONFIGURATION_TECHNOLOGY: fieldBuilder.buildEnumField(
          'VariantConfigurationTechnology',
          EcoResVariantConfigurationTechnologyType,
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
         * Static representation of the {@link isProductKit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_KIT: fieldBuilder.buildEnumField(
          'IsProductKit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesSalesTaxItemGroupCode',
          'Edm.String',
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
         * Static representation of the {@link isCatchWeightProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATCH_WEIGHT_PRODUCT: fieldBuilder.buildEnumField(
          'IsCatchWeightProduct',
          NoYes,
          true
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
         * Static representation of the {@link lowerWarrantablePriceRangeLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_WARRANTABLE_PRICE_RANGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'LowerWarrantablePriceRangeLimit',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseSalesTaxItemGroupCode',
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
         * Static representation of the {@link itemModelGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_MODEL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemModelGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReleasedProductCreationsV2)
      };
    }

    return this._schema;
  }
}

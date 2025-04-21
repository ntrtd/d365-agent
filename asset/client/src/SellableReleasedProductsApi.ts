/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SellableReleasedProducts } from './SellableReleasedProducts';
import { SellableReleasedProductsRequestBuilder } from './SellableReleasedProductsRequestBuilder';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import { EcoResFieldServiceProductType } from './EcoResFieldServiceProductType';
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
export class SellableReleasedProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SellableReleasedProducts<DeSerializersT>, DeSerializersT>
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
  ): SellableReleasedProductsApi<DeSerializersT> {
    return new SellableReleasedProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SellableReleasedProducts;

  requestBuilder(): SellableReleasedProductsRequestBuilder<DeSerializersT> {
    return new SellableReleasedProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SellableReleasedProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SellableReleasedProducts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SellableReleasedProducts<DeSerializersT>,
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
    typeof SellableReleasedProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SellableReleasedProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE: EnumField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_UNIT_DECIMAL_PRECISION: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SALES_STOPPED: EnumField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT_DECIMAL_PRECISION: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELD_SERVICE_PRODUCT_TYPE: EnumField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      EcoResFieldServiceProductType,
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_STOCKED_PRODUCT: EnumField<
      SellableReleasedProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SellableReleasedProducts<DeSerializers>>;
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
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
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
         * Static representation of the {@link inventoryUnitDecimalPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_DECIMAL_PRECISION: fieldBuilder.buildEdmTypeField(
          'InventoryUnitDecimalPrecision',
          'Edm.Int32',
          false
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
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSalesStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_STOPPED: fieldBuilder.buildEnumField(
          'IsSalesStopped',
          NoYes,
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
         * Static representation of the {@link fieldServiceProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_SERVICE_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'FieldServiceProductType',
          EcoResFieldServiceProductType,
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
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
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
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SellableReleasedProducts)
      };
    }

    return this._schema;
  }
}

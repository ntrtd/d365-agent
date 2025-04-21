/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BundleSalesOrderConfirmationLines } from './BundleSalesOrderConfirmationLines';
import { BundleSalesOrderConfirmationLinesRequestBuilder } from './BundleSalesOrderConfirmationLinesRequestBuilder';
import { OperationalSitesV2Api } from './OperationalSitesV2Api';
import { CurrenciesApi } from './CurrenciesApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { WarehousesApi } from './WarehousesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { ProductStylesApi } from './ProductStylesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { ProductSizesApi } from './ProductSizesApi';
import { SalesOrderConfirmationHeadersApi } from './SalesOrderConfirmationHeadersApi';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { SalesBundleJournalLineType } from './SalesBundleJournalLineType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BundleSalesOrderConfirmationLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BundleSalesOrderConfirmationLines<DeSerializersT>, DeSerializersT>
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
  ): BundleSalesOrderConfirmationLinesApi<DeSerializersT> {
    return new BundleSalesOrderConfirmationLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link operationalSites} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCIES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitsOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNITS_OF_MEASURE: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderConfirmationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_CONFIRMATION_HEADER: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderConfirmationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesV2Api<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      SalesOrderConfirmationHeadersApi<DeSerializersT>,
      DeliveryTermsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPERATIONAL_SITES: new OneToOneLink(
        'OperationalSites',
        this,
        linkedApis[0]
      ),
      CURRENCIES: new OneToOneLink('Currencies', this, linkedApis[1]),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[2]),
      WAREHOUSES: new OneToOneLink('Warehouses', this, linkedApis[3]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[4]),
      BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: new OneToOneLink(
        'BundleSalesOrderConfirmationBundleParentLines',
        this,
        linkedApis[5]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[6]),
      DEFAULT_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultLedgerDimension',
        this,
        linkedApis[7]
      ),
      RELEASED_PRODUCTS_V_2: new OneToOneLink(
        'ReleasedProductsV2',
        this,
        linkedApis[8]
      ),
      UNITS_OF_MEASURE: new OneToOneLink('UnitsOfMeasure', this, linkedApis[9]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[10]),
      SALES_ORDER_CONFIRMATION_HEADER: new OneToOneLink(
        'SalesOrderConfirmationHeader',
        this,
        linkedApis[11]
      ),
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[12])
    };
    return this;
  }

  entityConstructor = BundleSalesOrderConfirmationLines;

  requestBuilder(): BundleSalesOrderConfirmationLinesRequestBuilder<DeSerializersT> {
    return new BundleSalesOrderConfirmationLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BundleSalesOrderConfirmationLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BundleSalesOrderConfirmationLines<DeSerializersT>,
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
    typeof BundleSalesOrderConfirmationLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BundleSalesOrderConfirmationLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONFIRMATION_DATE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFIRMATION_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_LINE_SALES_TAX_AMOUNT: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUNDLE_ROOT_PARENT_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMATION_DOCUMENT_REFERENCE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFIRMED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_PRINT_CODE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT_SALES_TAX_AMOUNT: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUNDLE_JOURNAL_LINE_TYPE: EnumField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      SalesBundleJournalLineType,
      true,
      true
    >;
    ORDERING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SALES_QUANTITY: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_ITEM_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUNDLE_PARENT_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_INVENTORY_QUANTITY: OrderableEdmTypeField<
      BundleSalesOrderConfirmationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSites} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCIES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_LEDGER_DIMENSION: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitsOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNITS_OF_MEASURE: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderConfirmationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_CONFIRMATION_HEADER: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderConfirmationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      BundleSalesOrderConfirmationLines<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BundleSalesOrderConfirmationLines<DeSerializers>>;
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link confirmationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link confirmationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConfirmationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_LINE_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderLineInventoryLotId',
          'Edm.String',
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalLineSalesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_LINE_SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalLineSalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bundleRootParentInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_ROOT_PARENT_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'BundleRootParentInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link confirmationDocumentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_DOCUMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConfirmationDocumentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
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
         * Static representation of the {@link confirmedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link confirmedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ConfirmedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link salesPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxPrintCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_PRINT_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxPrintCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConfirmedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commissionSalesRepresentativeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_REPRESENTATIVE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'CommissionSalesRepresentativeGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link multilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
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
         * Static representation of the {@link cashDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CashDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmountSalesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmountSalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SalesProductCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
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
         * Static representation of the {@link bundleJournalLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_JOURNAL_LINE_TYPE: fieldBuilder.buildEnumField(
          'BundleJournalLineType',
          SalesBundleJournalLineType,
          true
        ),
        /**
         * Static representation of the {@link orderingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderingCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConfirmedSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
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
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bundleParentInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_PARENT_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'BundleParentInventoryLotId',
          'Edm.String',
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
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConfirmedInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BundleSalesOrderConfirmationLines)
      };
    }

    return this._schema;
  }
}

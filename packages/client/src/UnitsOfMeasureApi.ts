/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitsOfMeasure } from './UnitsOfMeasure';
import { UnitsOfMeasureRequestBuilder } from './UnitsOfMeasureRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { PhysicalProductDimensionDetailsApi } from './PhysicalProductDimensionDetailsApi';
import { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { PurchaseAgreementConfirmationLinesApi } from './PurchaseAgreementConfirmationLinesApi';
import { RetailInternalOrganizationProductAttributeValues2Api } from './RetailInternalOrganizationProductAttributeValues2Api';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { BundleSalesInvoiceLinesApi } from './BundleSalesInvoiceLinesApi';
import { UnitOfMeasureTranslationsApi } from './UnitOfMeasureTranslationsApi';
import { ProductUnitOfMeasureConversionsApi } from './ProductUnitOfMeasureConversionsApi';
import { OutboundShipmentOrderLinesApi } from './OutboundShipmentOrderLinesApi';
import { TradeAllowanceAgreementMerchandisingEventBillBackLinesApi } from './TradeAllowanceAgreementMerchandisingEventBillBackLinesApi';
import { SalesAgreementConfirmationLinesApi } from './SalesAgreementConfirmationLinesApi';
import { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
import { PeriodChargeRuleLineCustomersApi } from './PeriodChargeRuleLineCustomersApi';
import { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ClmIntegrationPurchaseAgreementLinesApi } from './ClmIntegrationPurchaseAgreementLinesApi';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { TradeAllowanceAgreementMerchandisingEventProductsApi } from './TradeAllowanceAgreementMerchandisingEventProductsApi';
import { WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi } from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi';
import { TradeAllowanceAgreementHeadersApi } from './TradeAllowanceAgreementHeadersApi';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
import { TradeAllowanceAgreementMerchandisingEventProductsV2Api } from './TradeAllowanceAgreementMerchandisingEventProductsV2Api';
import { ServiceAgreementLinesApi } from './ServiceAgreementLinesApi';
import { TradeAllowanceAgreementProductsV2Api } from './TradeAllowanceAgreementProductsV2Api';
import { TradeAllowanceAgreementProductsApi } from './TradeAllowanceAgreementProductsApi';
import { ClmIntegrationReleasedProductsApi } from './ClmIntegrationReleasedProductsApi';
import { InboundShipmentOrderLinesApi } from './InboundShipmentOrderLinesApi';
import { RebateAndDeductionsAgreementDateSetupCriterionItemsApi } from './RebateAndDeductionsAgreementDateSetupCriterionItemsApi';
import { UnitOfMeasureCodeSymbol } from './UnitOfMeasureCodeSymbol';
import { UnitOfMeasureClass } from './UnitOfMeasureClass';
import { NoYes } from './NoYes';
import { UnitOfMeasureSystemOfUnits } from './UnitOfMeasureSystemOfUnits';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class UnitsOfMeasureApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UnitsOfMeasure<DeSerializersT>, DeSerializersT>
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
  ): UnitsOfMeasureApi<DeSerializersT> {
    return new UnitsOfMeasureApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link physicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link volumeAssigningPhysicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOLUME_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link massAssigningPhysicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASS_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lengthAssigningPhysicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LENGTH_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link unitOfMeasureTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE_TRANSLATIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasureTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fromUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBackLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleLineCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_LINE_CUSTOMERS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseReplenishmentTemplateUnitOfMeasureRestrictions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_REPLENISHMENT_TEMPLATE_UNIT_OF_MEASURE_RESTRICTIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADERS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_RELEASED_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaderDateSetupCriterionItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplyForecastEntriesApi<DeSerializersT>,
      PhysicalProductDimensionDetailsApi<DeSerializersT>,
      PhysicalProductDimensionDetailsApi<DeSerializersT>,
      PhysicalProductDimensionDetailsApi<DeSerializersT>,
      PhysicalProductDimensionDetailsApi<DeSerializersT>,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      BundleSalesInvoiceLinesApi<DeSerializersT>,
      UnitOfMeasureTranslationsApi<DeSerializersT>,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>,
      OutboundShipmentOrderLinesApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>,
      SalesAgreementConfirmationLinesApi<DeSerializersT>,
      SalesAgreementLinesApi<DeSerializersT>,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>,
      PurchaseAgreementLinesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventProductsApi<DeSerializersT>,
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT>,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>,
      ServiceAgreementLinesApi<DeSerializersT>,
      TradeAllowanceAgreementProductsV2Api<DeSerializersT>,
      TradeAllowanceAgreementProductsApi<DeSerializersT>,
      ClmIntegrationReleasedProductsApi<DeSerializersT>,
      InboundShipmentOrderLinesApi<DeSerializersT>,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      ),
      PHYSICAL_PRODUCT_DIMENSION_DETAILS: new OneToManyLink(
        'PhysicalProductDimensionDetails',
        this,
        linkedApis[1]
      ),
      VOLUME_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: new OneToManyLink(
        'VolumeAssigningPhysicalProductDimensionDetails',
        this,
        linkedApis[2]
      ),
      MASS_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: new OneToManyLink(
        'MassAssigningPhysicalProductDimensionDetails',
        this,
        linkedApis[3]
      ),
      LENGTH_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: new OneToManyLink(
        'LengthAssigningPhysicalProductDimensionDetails',
        this,
        linkedApis[4]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationBundleParentLines',
        this,
        linkedApis[5]
      ),
      PURCHASE_AGREEMENT_LINES_V_2: new OneToManyLink(
        'PurchaseAgreementLinesV2',
        this,
        linkedApis[6]
      ),
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: new OneToManyLink(
        'RetailInternalOrganizationProductAttributeValue2',
        this,
        linkedApis[7]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[8]
      ),
      BUNDLE_SALES_INVOICE_LINES: new OneToManyLink(
        'BundleSalesInvoiceLines',
        this,
        linkedApis[9]
      ),
      UNIT_OF_MEASURE_TRANSLATIONS: new OneToManyLink(
        'UnitOfMeasureTranslations',
        this,
        linkedApis[10]
      ),
      FROM_UNIT_OF_MEASURE_CONVERSIONS: new OneToManyLink(
        'FromUnitOfMeasureConversions',
        this,
        linkedApis[11]
      ),
      TO_UNIT_OF_MEASURE_CONVERSIONS: new OneToManyLink(
        'ToUnitOfMeasureConversions',
        this,
        linkedApis[12]
      ),
      OUTBOUND_SHIPMENT_ORDER_LINES: new OneToManyLink(
        'OutboundShipmentOrderLines',
        this,
        linkedApis[13]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventBillBackLines',
          this,
          linkedApis[14]
        ),
      SALES_AGREEMENT_CONFIRMATION_LINES: new OneToManyLink(
        'SalesAgreementConfirmationLines',
        this,
        linkedApis[15]
      ),
      SALES_AGREEMENT_LINES: new OneToManyLink(
        'SalesAgreementLines',
        this,
        linkedApis[16]
      ),
      PERIOD_CHARGE_RULE_LINE_CUSTOMERS: new OneToManyLink(
        'PeriodChargeRuleLineCustomers',
        this,
        linkedApis[17]
      ),
      BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesInvoiceBundleParentLines',
        this,
        linkedApis[18]
      ),
      PURCHASE_AGREEMENT_LINE: new OneToManyLink(
        'PurchaseAgreementLine',
        this,
        linkedApis[19]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[20]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementLines',
        this,
        linkedApis[21]
      ),
      DV_RELEASED_PRODUCTS: new OneToManyLink(
        'DVReleasedProducts',
        this,
        linkedApis[22]
      ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS: new OneToManyLink(
        'TradeAllowanceAgreementMerchandisingEventProducts',
        this,
        linkedApis[23]
      ),
      WAREHOUSE_REPLENISHMENT_TEMPLATE_UNIT_OF_MEASURE_RESTRICTIONS:
        new OneToManyLink(
          'WarehouseReplenishmentTemplateUnitOfMeasureRestrictions',
          this,
          linkedApis[24]
        ),
      TRADE_ALLOWANCE_AGREEMENT_HEADERS: new OneToManyLink(
        'TradeAllowanceAgreementHeaders',
        this,
        linkedApis[25]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[26]
      ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue2',
          this,
          linkedApis[27]
        ),
      TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2:
        new OneToManyLink(
          'TradeAllowanceAgreementMerchandisingEventProductsV2',
          this,
          linkedApis[28]
        ),
      SERVICE_AGREEMENT_LINES: new OneToManyLink(
        'ServiceAgreementLines',
        this,
        linkedApis[29]
      ),
      TRADE_ALLOWANCE_AGREEMENT_PRODUCTS_V_2: new OneToManyLink(
        'TradeAllowanceAgreementProductsV2',
        this,
        linkedApis[30]
      ),
      TRADE_ALLOWANCE_AGREEMENT_PRODUCTS: new OneToManyLink(
        'TradeAllowanceAgreementProducts',
        this,
        linkedApis[31]
      ),
      CLM_INTEGRATION_RELEASED_PRODUCTS: new OneToManyLink(
        'CLMIntegrationReleasedProducts',
        this,
        linkedApis[32]
      ),
      INBOUND_SHIPMENT_ORDER_LINES: new OneToManyLink(
        'InboundShipmentOrderLines',
        this,
        linkedApis[33]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS:
        new OneToManyLink(
          'RebateAndDeductionsAgreementHeaderDateSetupCriterionItems',
          this,
          linkedApis[34]
        )
    };
    return this;
  }

  entityConstructor = UnitsOfMeasure;

  requestBuilder(): UnitsOfMeasureRequestBuilder<DeSerializersT> {
    return new UnitsOfMeasureRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UnitsOfMeasure<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UnitsOfMeasure<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UnitsOfMeasure<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UnitsOfMeasure, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UnitsOfMeasure, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNIT_SYMBOL: OrderableEdmTypeField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_UNIT_SYMBOL_ASSIGNMENT: EnumField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureCodeSymbol,
      true,
      true
    >;
    UNIT_CLASS: EnumField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureClass,
      true,
      true
    >;
    IS_BASE_UNIT: EnumField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DECIMAL_PRECISION: OrderableEdmTypeField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SYSTEM_UNIT: EnumField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FIXED_UNIT_SYMBOL_ASSIGNED: EnumField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIT_DESCRIPTION: OrderableEdmTypeField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_OF_UNITS: EnumField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureSystemOfUnits,
      true,
      true
    >;
    NATIONAL_CODE: OrderableEdmTypeField<
      UnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link physicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link volumeAssigningPhysicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOLUME_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link massAssigningPhysicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASS_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lengthAssigningPhysicalProductDimensionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LENGTH_ASSIGNING_PHYSICAL_PRODUCT_DIMENSION_DETAILS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PhysicalProductDimensionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link unitOfMeasureTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE_TRANSLATIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasureTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fromUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventBillBackLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_BILL_BACK_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventBillBackLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleLineCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_LINE_CUSTOMERS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleLineCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseReplenishmentTemplateUnitOfMeasureRestrictions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_REPLENISHMENT_TEMPLATE_UNIT_OF_MEASURE_RESTRICTIONS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_HEADERS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementMerchandisingEventProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_PRODUCTS_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementMerchandisingEventProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS_V_2: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tradeAllowanceAgreementProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRADE_ALLOWANCE_AGREEMENT_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      TradeAllowanceAgreementProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_RELEASED_PRODUCTS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaderDateSetupCriterionItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS: OneToManyLink<
      UnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UnitsOfMeasure<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fixedUnitSymbolAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_UNIT_SYMBOL_ASSIGNMENT: fieldBuilder.buildEnumField(
          'FixedUnitSymbolAssignment',
          UnitOfMeasureCodeSymbol,
          true
        ),
        /**
         * Static representation of the {@link unitClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CLASS: fieldBuilder.buildEnumField(
          'UnitClass',
          UnitOfMeasureClass,
          true
        ),
        /**
         * Static representation of the {@link isBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BASE_UNIT: fieldBuilder.buildEnumField('IsBaseUnit', NoYes, true),
        /**
         * Static representation of the {@link decimalPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_PRECISION: fieldBuilder.buildEdmTypeField(
          'DecimalPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isSystemUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYSTEM_UNIT: fieldBuilder.buildEnumField(
          'IsSystemUnit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFixedUnitSymbolAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_UNIT_SYMBOL_ASSIGNED: fieldBuilder.buildEnumField(
          'IsFixedUnitSymbolAssigned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unitDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'UnitDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemOfUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_OF_UNITS: fieldBuilder.buildEnumField(
          'SystemOfUnits',
          UnitOfMeasureSystemOfUnits,
          true
        ),
        /**
         * Static representation of the {@link nationalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONAL_CODE: fieldBuilder.buildEdmTypeField(
          'NationalCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UnitsOfMeasure)
      };
    }

    return this._schema;
  }
}

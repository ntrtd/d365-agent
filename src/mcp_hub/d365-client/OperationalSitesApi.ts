/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationalSites } from './OperationalSites';
import { OperationalSitesRequestBuilder } from './OperationalSitesRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ItemCoverageSettingsApi } from './ItemCoverageSettingsApi';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { ItemSpecificBillOfMaterialsHeadersApi } from './ItemSpecificBillOfMaterialsHeadersApi';
import { ItemSpecificBillOfMaterialsHeadersV3Api } from './ItemSpecificBillOfMaterialsHeadersV3Api';
import { ItemSpecificFormulaHeadersV3Api } from './ItemSpecificFormulaHeadersV3Api';
import { ProductSpecificOrderSettingsV3Api } from './ProductSpecificOrderSettingsV3Api';
import { OpenSalesPriceJournalLinesApi } from './OpenSalesPriceJournalLinesApi';
import { AggregatedCostStatementEntriesApi } from './AggregatedCostStatementEntriesApi';
import { InventoryCountingJournalLinesApi } from './InventoryCountingJournalLinesApi';
import { Kitting_KitHeadersApi } from './Kitting_KitHeadersApi';
import { PurchaseAgreementConfirmationLinesApi } from './PurchaseAgreementConfirmationLinesApi';
import { ProductSpecificOrderSettingsV2Api } from './ProductSpecificOrderSettingsV2Api';
import { PeriodChargeRuleCustomersApi } from './PeriodChargeRuleCustomersApi';
import { ProductDefaultOrderSettingsApi } from './ProductDefaultOrderSettingsApi';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { InventoryTagCountingJournalLinesApi } from './InventoryTagCountingJournalLinesApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { BillOfMaterialsVersionsV3Api } from './BillOfMaterialsVersionsV3Api';
import { SalesAgreementConfirmationLinesApi } from './SalesAgreementConfirmationLinesApi';
import { WarehousesApi } from './WarehousesApi';
import { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
import { CdsInventoryOnHandEntriesApi } from './CdsInventoryOnHandEntriesApi';
import { OpenPurchasePriceJournalLinesApi } from './OpenPurchasePriceJournalLinesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { MonthlyCostStatementEntriesApi } from './MonthlyCostStatementEntriesApi';
import { OpenSalesLineDiscountJournalLinesApi } from './OpenSalesLineDiscountJournalLinesApi';
import { ClmIntegrationPurchaseAgreementLinesApi } from './ClmIntegrationPurchaseAgreementLinesApi';
import { CostStatementEntriesApi } from './CostStatementEntriesApi';
import { BillOfMaterialsVersionsV2Api } from './BillOfMaterialsVersionsV2Api';
import { SentProductReleaseHeadersApi } from './SentProductReleaseHeadersApi';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { ReceivedProductReleaseHeadersApi } from './ReceivedProductReleaseHeadersApi';
import { OpenSalesPostageDiscountJournalLinesApi } from './OpenSalesPostageDiscountJournalLinesApi';
import { ServiceAgreementLinesApi } from './ServiceAgreementLinesApi';
import { RoutePendingRouteCostCategoryUnitCostsApi } from './RoutePendingRouteCostCategoryUnitCostsApi';
import { BillOfMaterialsVersionsV4Api } from './BillOfMaterialsVersionsV4Api';
import { ItemSpecificBillOfMaterialsHeadersV2Api } from './ItemSpecificBillOfMaterialsHeadersV2Api';
import { OpenPurchaseLineDiscountJournalLinesApi } from './OpenPurchaseLineDiscountJournalLinesApi';
import { InventOperationalSiteCurrentPostalAddressesApi } from './InventOperationalSiteCurrentPostalAddressesApi';
import { FiscalEstablishmentsApi } from './FiscalEstablishmentsApi';
import { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { Timezone } from './Timezone';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OperationalSitesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OperationalSites<DeSerializersT>, DeSerializersT>
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
  ): OperationalSitesApi<DeSerializersT> {
    return new OperationalSitesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificBillOfMaterialsHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificBillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificBillOfMaterialsHeadersV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificBillOfMaterialsHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificFormulaHeadersV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_FORMULA_HEADERS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificFormulaHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link aggregatedCostStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGGREGATED_COST_STATEMENT_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      AggregatedCostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_CUSTOMERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDefaultOrderSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DEFAULT_ORDER_SETTINGS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductDefaultOrderSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTagCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsInventoryOnHandEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costMontlyStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_MONTLY_STATEMENT_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      MonthlyCostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_STATEMENT_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      CostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivingSentProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SENT_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasingSentProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASING_SENT_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivingReceivedProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_RECEIVED_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasingReceivedProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASING_RECEIVED_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPostageDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link pendingRouteCostCategoryUnitCosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PENDING_ROUTE_COST_CATEGORY_UNIT_COSTS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificBillOfMaterialsHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificBillOfMaterialsHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT: OneToOneLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ItemCoverageSettingsApi<DeSerializersT>,
      SupplyForecastEntriesApi<DeSerializersT>,
      ItemSpecificBillOfMaterialsHeadersApi<DeSerializersT>,
      ItemSpecificBillOfMaterialsHeadersV3Api<DeSerializersT>,
      ItemSpecificFormulaHeadersV3Api<DeSerializersT>,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>,
      OpenSalesPriceJournalLinesApi<DeSerializersT>,
      AggregatedCostStatementEntriesApi<DeSerializersT>,
      InventoryCountingJournalLinesApi<DeSerializersT>,
      Kitting_KitHeadersApi<DeSerializersT>,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>,
      PeriodChargeRuleCustomersApi<DeSerializersT>,
      ProductDefaultOrderSettingsApi<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      InventoryTagCountingJournalLinesApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      BillOfMaterialsVersionsV3Api<DeSerializersT>,
      SalesAgreementConfirmationLinesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      SalesAgreementLinesApi<DeSerializersT>,
      CdsInventoryOnHandEntriesApi<DeSerializersT>,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      PurchaseAgreementLinesApi<DeSerializersT>,
      MonthlyCostStatementEntriesApi<DeSerializersT>,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>,
      CostStatementEntriesApi<DeSerializersT>,
      BillOfMaterialsVersionsV2Api<DeSerializersT>,
      SentProductReleaseHeadersApi<DeSerializersT>,
      SentProductReleaseHeadersApi<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      ReceivedProductReleaseHeadersApi<DeSerializersT>,
      ReceivedProductReleaseHeadersApi<DeSerializersT>,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>,
      ServiceAgreementLinesApi<DeSerializersT>,
      RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT>,
      BillOfMaterialsVersionsV4Api<DeSerializersT>,
      ItemSpecificBillOfMaterialsHeadersV2Api<DeSerializersT>,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>,
      FiscalEstablishmentsApi<DeSerializersT>,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'RouteCardProductionJournalEntries',
        this,
        linkedApis[0]
      ),
      ITEM_COVERAGE_SETTINGS: new OneToManyLink(
        'ItemCoverageSettings',
        this,
        linkedApis[1]
      ),
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[2]
      ),
      ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS: new OneToManyLink(
        'ItemSpecificBillOfMaterialsHeaders',
        this,
        linkedApis[3]
      ),
      ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS_V_3: new OneToManyLink(
        'ItemSpecificBillOfMaterialsHeadersV3',
        this,
        linkedApis[4]
      ),
      ITEM_SPECIFIC_FORMULA_HEADERS_V_3: new OneToManyLink(
        'ItemSpecificFormulaHeadersV3',
        this,
        linkedApis[5]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: new OneToManyLink(
        'ProductSpecificOrderSettingsV3',
        this,
        linkedApis[6]
      ),
      OPEN_SALES_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPriceJournalLine',
        this,
        linkedApis[7]
      ),
      AGGREGATED_COST_STATEMENT_ENTRIES: new OneToManyLink(
        'AggregatedCostStatementEntries',
        this,
        linkedApis[8]
      ),
      INVENTORY_COUNTING_JOURNAL_LINES: new OneToManyLink(
        'InventoryCountingJournalLines',
        this,
        linkedApis[9]
      ),
      BILL_OF_MATERIALS_HEADERS: new OneToManyLink(
        'BillOfMaterialsHeaders',
        this,
        linkedApis[10]
      ),
      PURCHASE_AGREEMENT_LINES_V_2: new OneToManyLink(
        'PurchaseAgreementLinesV2',
        this,
        linkedApis[11]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: new OneToManyLink(
        'ProductSpecificOrderSettingsV2',
        this,
        linkedApis[12]
      ),
      PERIOD_CHARGE_RULE_CUSTOMERS: new OneToManyLink(
        'PeriodChargeRuleCustomers',
        this,
        linkedApis[13]
      ),
      PRODUCT_DEFAULT_ORDER_SETTINGS: new OneToManyLink(
        'ProductDefaultOrderSettings',
        this,
        linkedApis[14]
      ),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[15]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[16]
      ),
      INVENTORY_TAG_COUNTING_JOURNAL_LINES: new OneToManyLink(
        'InventoryTagCountingJournalLines',
        this,
        linkedApis[17]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[18]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_3: new OneToManyLink(
        'BillOfMaterialsVersionsV3',
        this,
        linkedApis[19]
      ),
      SALES_AGREEMENT_CONFIRMATION_LINES: new OneToManyLink(
        'SalesAgreementConfirmationLines',
        this,
        linkedApis[20]
      ),
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[21]),
      SALES_AGREEMENT_LINES: new OneToManyLink(
        'SalesAgreementLines',
        this,
        linkedApis[22]
      ),
      CDS_INVENTORY_ON_HAND_ENTRIES: new OneToManyLink(
        'CDSInventoryOnHandEntries',
        this,
        linkedApis[23]
      ),
      OPEN_PURCHASE_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchasePriceJournalLine',
        this,
        linkedApis[24]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[25]
      ),
      PURCHASE_AGREEMENT_LINE: new OneToManyLink(
        'PurchaseAgreementLine',
        this,
        linkedApis[26]
      ),
      COST_MONTLY_STATEMENT_ENTRIES: new OneToManyLink(
        'CostMontlyStatementEntries',
        this,
        linkedApis[27]
      ),
      OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesLineDiscountJournalLine',
        this,
        linkedApis[28]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementLines',
        this,
        linkedApis[29]
      ),
      COST_STATEMENT_ENTRIES: new OneToManyLink(
        'CostStatementEntries',
        this,
        linkedApis[30]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_2: new OneToManyLink(
        'BillOfMaterialsVersionsV2',
        this,
        linkedApis[31]
      ),
      RECEIVING_SENT_PRODUCT_RELEASE_HEADERS: new OneToManyLink(
        'ReceivingSentProductReleaseHeaders',
        this,
        linkedApis[32]
      ),
      RELEASING_SENT_PRODUCT_RELEASE_HEADERS: new OneToManyLink(
        'ReleasingSentProductReleaseHeaders',
        this,
        linkedApis[33]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[34]
      ),
      RECEIVING_RECEIVED_PRODUCT_RELEASE_HEADERS: new OneToManyLink(
        'ReceivingReceivedProductReleaseHeaders',
        this,
        linkedApis[35]
      ),
      RELEASING_RECEIVED_PRODUCT_RELEASE_HEADERS: new OneToManyLink(
        'ReleasingReceivedProductReleaseHeaders',
        this,
        linkedApis[36]
      ),
      OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPostageDiscountJournalLine',
        this,
        linkedApis[37]
      ),
      SERVICE_AGREEMENT_LINES: new OneToManyLink(
        'ServiceAgreementLines',
        this,
        linkedApis[38]
      ),
      PENDING_ROUTE_COST_CATEGORY_UNIT_COSTS: new OneToManyLink(
        'PendingRouteCostCategoryUnitCosts',
        this,
        linkedApis[39]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_4: new OneToManyLink(
        'BillOfMaterialsVersionsV4',
        this,
        linkedApis[40]
      ),
      ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS_V_2: new OneToManyLink(
        'ItemSpecificBillOfMaterialsHeadersV2',
        this,
        linkedApis[41]
      ),
      OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseLineDiscountJournalLine',
        this,
        linkedApis[42]
      ),
      OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: new OneToManyLink(
        'OperationalSiteCurrentPostalAddresses',
        this,
        linkedApis[43]
      ),
      FISCAL_ESTABLISHMENT: new OneToOneLink(
        'FiscalEstablishment',
        this,
        linkedApis[44]
      ),
      REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'ReportAsFinishedProductionJournalEntries',
        this,
        linkedApis[45]
      )
    };
    return this;
  }

  entityConstructor = OperationalSites;

  requestBuilder(): OperationalSitesRequestBuilder<DeSerializersT> {
    return new OperationalSitesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OperationalSites<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OperationalSites<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<OperationalSites<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof OperationalSites, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationalSites,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE_TIMEZONE: EnumField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_MASTER_PLANNED_INTRA_SITE_MOVEMENTS_USE_TRANSFER_JOURNALS: EnumField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ENTRY_DEADLINE_GROUP_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECEIVING_WAREHOUSE_OVERRIDE_ALLOWED: EnumField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SITE_NAME: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FINANCIAL_DIMENSION_VALUE: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BRANCH_CODE: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_ADDRESS_ASSIGNED: EnumField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_TIME_ZONE: EnumField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      OperationalSites<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificBillOfMaterialsHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificBillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificBillOfMaterialsHeadersV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificBillOfMaterialsHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificFormulaHeadersV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_FORMULA_HEADERS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificFormulaHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link aggregatedCostStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGGREGATED_COST_STATEMENT_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      AggregatedCostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_CUSTOMERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDefaultOrderSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DEFAULT_ORDER_SETTINGS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductDefaultOrderSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTagCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsInventoryOnHandEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costMontlyStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_MONTLY_STATEMENT_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      MonthlyCostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_STATEMENT_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      CostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivingSentProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_SENT_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasingSentProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASING_SENT_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivingReceivedProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_RECEIVED_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasingReceivedProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASING_RECEIVED_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPostageDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link pendingRouteCostCategoryUnitCosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PENDING_ROUTE_COST_CATEGORY_UNIT_COSTS: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemSpecificBillOfMaterialsHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_SPECIFIC_BILL_OF_MATERIALS_HEADERS_V_2: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ItemSpecificBillOfMaterialsHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT: OneToOneLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      OperationalSites<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OperationalSites<DeSerializers>>;
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
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', false),
        /**
         * Static representation of the {@link primaryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link formattedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siteTimezone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_TIMEZONE: fieldBuilder.buildEnumField(
          'SiteTimezone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationSalesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_SALES_TAX_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'PrimaryAddressLocationSalesTaxGroupCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link defaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willMasterPlannedIntraSiteMovementsUseTransferJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_MASTER_PLANNED_INTRA_SITE_MOVEMENTS_USE_TRANSFER_JOURNALS:
          fieldBuilder.buildEnumField(
            'WillMasterPlannedIntraSiteMovementsUseTransferJournals',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link primaryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderEntryDeadlineGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ENTRY_DEADLINE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'OrderEntryDeadlineGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReceivingWarehouseOverrideAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIVING_WAREHOUSE_OVERRIDE_ALLOWED: fieldBuilder.buildEnumField(
          'IsReceivingWarehouseOverrideAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link siteName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_NAME: fieldBuilder.buildEdmTypeField(
          'SiteName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFinancialDimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FINANCIAL_DIMENSION_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultFinancialDimensionValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxBranchCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BRANCH_CODE: fieldBuilder.buildEdmTypeField(
          'TaxBranchCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimaryAddressAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_ADDRESS_ASSIGNED: fieldBuilder.buildEnumField(
          'IsPrimaryAddressAssigned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'PrimaryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationalSites)
      };
    }

    return this._schema;
  }
}

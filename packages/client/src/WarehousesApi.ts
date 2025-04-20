/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Warehouses } from './Warehouses';
import { WarehousesRequestBuilder } from './WarehousesRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ItemCoverageSettingsApi } from './ItemCoverageSettingsApi';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { InboundShipmentOrderHeadersApi } from './InboundShipmentOrderHeadersApi';
import { ProductSpecificOrderSettingsV3Api } from './ProductSpecificOrderSettingsV3Api';
import { OpenSalesPriceJournalLinesApi } from './OpenSalesPriceJournalLinesApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { OpenSalesPriceJournalLinesV2Api } from './OpenSalesPriceJournalLinesV2Api';
import { GupOpenTradeAgreementJournalLinesApi } from './GupOpenTradeAgreementJournalLinesApi';
import { PurchaseAgreementConfirmationLinesApi } from './PurchaseAgreementConfirmationLinesApi';
import { ProductSpecificOrderSettingsV2Api } from './ProductSpecificOrderSettingsV2Api';
import { PeriodChargeRuleCustomersApi } from './PeriodChargeRuleCustomersApi';
import { ProductDefaultOrderSettingsApi } from './ProductDefaultOrderSettingsApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { BundleSalesInvoiceLinesApi } from './BundleSalesInvoiceLinesApi';
import { RetailServiceCategoriesApi } from './RetailServiceCategoriesApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { SalesAgreementConfirmationLinesApi } from './SalesAgreementConfirmationLinesApi';
import { InventCountingReasonCodePoliciesApi } from './InventCountingReasonCodePoliciesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { VendorsV2Api } from './VendorsV2Api';
import { CustomersV3Api } from './CustomersV3Api';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { ExternalWarehouseManagementSystemsApi } from './ExternalWarehouseManagementSystemsApi';
import { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
import { CdsInventoryOnHandEntriesApi } from './CdsInventoryOnHandEntriesApi';
import { OpenPurchasePriceJournalLinesApi } from './OpenPurchasePriceJournalLinesApi';
import { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { WarehouseAislesApi } from './WarehouseAislesApi';
import { OpenSalesLineDiscountJournalLinesApi } from './OpenSalesLineDiscountJournalLinesApi';
import { ClmIntegrationPurchaseAgreementLinesApi } from './ClmIntegrationPurchaseAgreementLinesApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { AssetMaintenanceWorkOrderLineProductJournalsApi } from './AssetMaintenanceWorkOrderLineProductJournalsApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { OpenSalesPostageDiscountJournalLinesApi } from './OpenSalesPostageDiscountJournalLinesApi';
import { ServiceAgreementLinesApi } from './ServiceAgreementLinesApi';
import { OpenPurchaseLineDiscountJournalLinesApi } from './OpenPurchaseLineDiscountJournalLinesApi';
import { OpenPurchasePriceJournalLinesV2Api } from './OpenPurchasePriceJournalLinesV2Api';
import { RetailStoresApi } from './RetailStoresApi';
import { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { NoYes } from './NoYes';
import { WhsRawMaterialPolicy } from './WhsRawMaterialPolicy';
import { WhsLoadReleaseReservationPolicy } from './WhsLoadReleaseReservationPolicy';
import { WhsAutoUpdateShipment } from './WhsAutoUpdateShipment';
import { InventCountingGroupBr } from './InventCountingGroupBr';
import { WhsAllowMarkingReservationRemoval } from './WhsAllowMarkingReservationRemoval';
import { WhsReleaseRuleFailureOption } from './WhsReleaseRuleFailureOption';
import { Timezone } from './Timezone';
import { InventLocationType } from './InventLocationType';
import { WhsReleaseToWarehouseRule } from './WhsReleaseToWarehouseRule';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { ProdRafPostingMethodInherit } from './ProdRafPostingMethodInherit';
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
export class WarehousesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Warehouses<DeSerializersT>, DeSerializersT>
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
  ): WarehousesApi<DeSerializersT> {
    return new WarehousesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultPlannedTransferOrderItemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PLANNED_TRANSFER_ORDER_ITEM_COVERAGE_SETTINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link gupOpenTradeAgreementJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_OPEN_TRADE_AGREEMENT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_CUSTOMERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDefaultOrderSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DEFAULT_ORDER_SETTINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductDefaultOrderSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailServiceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_SERVICE_CATEGORY: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RetailServiceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventCountingReasonCodePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_COUNTING_REASON_CODE_POLICY: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      InventCountingReasonCodePoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externallyLocatedWarehouseVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNALLY_LOCATED_WAREHOUSE_VENDOR: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainRefillingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_REFILLING_WAREHOUSE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainRefillingAssignedWarehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_REFILLING_ASSIGNED_WAREHOUSES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externallyLocatedWarehouseCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNALLY_LOCATED_WAREHOUSE_CUSTOMER: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link masterPlanningWorkCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASTER_PLANNING_WORK_CALENDAR: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link quarantineWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUARANTINE_WAREHOUSE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quarantineAssignedWarehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUARANTINE_ASSIGNED_WAREHOUSES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transitWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSIT_WAREHOUSE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transitAssignedWarehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSIT_ASSIGNED_WAREHOUSES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externalWarehouseManagementSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseManagementSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsInventoryOnHandEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_WAREHOUSE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseAisles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_AISLES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehouseAislesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesStorageProductWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_WAREHOUSE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPostageDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ItemCoverageSettingsApi<DeSerializersT>,
      ItemCoverageSettingsApi<DeSerializersT>,
      SupplyForecastEntriesApi<DeSerializersT>,
      InboundShipmentOrderHeadersApi<DeSerializersT>,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>,
      OpenSalesPriceJournalLinesApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>,
      PeriodChargeRuleCustomersApi<DeSerializersT>,
      ProductDefaultOrderSettingsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      OutboundShipmentOrderHeadersApi<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      BundleSalesInvoiceLinesApi<DeSerializersT>,
      RetailServiceCategoriesApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>,
      SalesAgreementConfirmationLinesApi<DeSerializersT>,
      InventCountingReasonCodePoliciesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ExternalWarehouseManagementSystemsApi<DeSerializersT>,
      SalesAgreementLinesApi<DeSerializersT>,
      CdsInventoryOnHandEntriesApi<DeSerializersT>,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      PurchaseAgreementLinesApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      WarehouseAislesApi<DeSerializersT>,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>,
      ServiceAgreementLinesApi<DeSerializersT>,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>,
      RetailStoresApi<DeSerializersT>,
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
      DEFAULT_PLANNED_TRANSFER_ORDER_ITEM_COVERAGE_SETTINGS: new OneToManyLink(
        'DefaultPlannedTransferOrderItemCoverageSettings',
        this,
        linkedApis[2]
      ),
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[3]
      ),
      INBOUND_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'InboundShipmentOrderHeaders',
        this,
        linkedApis[4]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: new OneToManyLink(
        'ProductSpecificOrderSettingsV3',
        this,
        linkedApis[5]
      ),
      OPEN_SALES_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPriceJournalLine',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToManyLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[7]
      ),
      OPEN_SALES_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenSalesPriceJournalLineV2',
        this,
        linkedApis[8]
      ),
      GUP_OPEN_TRADE_AGREEMENT_JOURNAL_LINE: new OneToManyLink(
        'GUPOpenTradeAgreementJournalLine',
        this,
        linkedApis[9]
      ),
      PURCHASE_AGREEMENT_LINES_V_2: new OneToManyLink(
        'PurchaseAgreementLinesV2',
        this,
        linkedApis[10]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: new OneToManyLink(
        'ProductSpecificOrderSettingsV2',
        this,
        linkedApis[11]
      ),
      PERIOD_CHARGE_RULE_CUSTOMERS: new OneToManyLink(
        'PeriodChargeRuleCustomers',
        this,
        linkedApis[12]
      ),
      PRODUCT_DEFAULT_ORDER_SETTINGS: new OneToManyLink(
        'ProductDefaultOrderSettings',
        this,
        linkedApis[13]
      ),
      WAREHOUSE_LOCATIONS: new OneToManyLink(
        'WarehouseLocations',
        this,
        linkedApis[14]
      ),
      OUTBOUND_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'OutboundShipmentOrderHeaders',
        this,
        linkedApis[15]
      ),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[16]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[17]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[18]
      ),
      BUNDLE_SALES_INVOICE_LINES: new OneToManyLink(
        'BundleSalesInvoiceLines',
        this,
        linkedApis[19]
      ),
      RETAIL_SERVICE_CATEGORY: new OneToManyLink(
        'RetailServiceCategory',
        this,
        linkedApis[20]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[21]
      ),
      SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentPackingSlipJournalHeaders',
        this,
        linkedApis[22]
      ),
      SALES_AGREEMENT_CONFIRMATION_LINES: new OneToManyLink(
        'SalesAgreementConfirmationLines',
        this,
        linkedApis[23]
      ),
      INVENT_COUNTING_REASON_CODE_POLICY: new OneToOneLink(
        'InventCountingReasonCodePolicy',
        this,
        linkedApis[24]
      ),
      OPERATIONAL_SITE: new OneToOneLink(
        'OperationalSite',
        this,
        linkedApis[25]
      ),
      EXTERNALLY_LOCATED_WAREHOUSE_VENDOR: new OneToOneLink(
        'ExternallyLocatedWarehouseVendor',
        this,
        linkedApis[26]
      ),
      MAIN_REFILLING_WAREHOUSE: new OneToOneLink(
        'MainRefillingWarehouse',
        this,
        linkedApis[27]
      ),
      MAIN_REFILLING_ASSIGNED_WAREHOUSES: new OneToManyLink(
        'MainRefillingAssignedWarehouses',
        this,
        linkedApis[28]
      ),
      EXTERNALLY_LOCATED_WAREHOUSE_CUSTOMER: new OneToOneLink(
        'ExternallyLocatedWarehouseCustomer',
        this,
        linkedApis[29]
      ),
      MASTER_PLANNING_WORK_CALENDAR: new OneToOneLink(
        'MasterPlanningWorkCalendar',
        this,
        linkedApis[30]
      ),
      QUARANTINE_WAREHOUSE: new OneToOneLink(
        'QuarantineWarehouse',
        this,
        linkedApis[31]
      ),
      QUARANTINE_ASSIGNED_WAREHOUSES: new OneToManyLink(
        'QuarantineAssignedWarehouses',
        this,
        linkedApis[32]
      ),
      TRANSIT_WAREHOUSE: new OneToOneLink(
        'TransitWarehouse',
        this,
        linkedApis[33]
      ),
      TRANSIT_ASSIGNED_WAREHOUSES: new OneToManyLink(
        'TransitAssignedWarehouses',
        this,
        linkedApis[34]
      ),
      EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM: new OneToOneLink(
        'ExternalWarehouseManagementSystem',
        this,
        linkedApis[35]
      ),
      SALES_AGREEMENT_LINES: new OneToManyLink(
        'SalesAgreementLines',
        this,
        linkedApis[36]
      ),
      CDS_INVENTORY_ON_HAND_ENTRIES: new OneToManyLink(
        'CDSInventoryOnHandEntries',
        this,
        linkedApis[37]
      ),
      OPEN_PURCHASE_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchasePriceJournalLine',
        this,
        linkedApis[38]
      ),
      BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesInvoiceBundleParentLines',
        this,
        linkedApis[39]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[40]
      ),
      PURCHASE_AGREEMENT_LINE: new OneToManyLink(
        'PurchaseAgreementLine',
        this,
        linkedApis[41]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_WAREHOUSE: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_Warehouse',
        this,
        linkedApis[42]
      ),
      WAREHOUSE_AISLES: new OneToManyLink(
        'WarehouseAisles',
        this,
        linkedApis[43]
      ),
      OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesLineDiscountJournalLine',
        this,
        linkedApis[44]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementLines',
        this,
        linkedApis[45]
      ),
      RETAIL_CALL_CENTER: new OneToManyLink(
        'RetailCallCenter',
        this,
        linkedApis[46]
      ),
      WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_WAREHOUSE:
        new OneToManyLink(
          'WorkOrderLineProductConsumptionLines_StorageProductWarehouse',
          this,
          linkedApis[47]
        ),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[48]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[49]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[50]
      ),
      OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPostageDiscountJournalLine',
        this,
        linkedApis[51]
      ),
      SERVICE_AGREEMENT_LINES: new OneToManyLink(
        'ServiceAgreementLines',
        this,
        linkedApis[52]
      ),
      OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseLineDiscountJournalLine',
        this,
        linkedApis[53]
      ),
      OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenPurchasePriceJournalLineV2',
        this,
        linkedApis[54]
      ),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[55]),
      REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'ReportAsFinishedProductionJournalEntries',
        this,
        linkedApis[56]
      )
    };
    return this;
  }

  entityConstructor = Warehouses;

  requestBuilder(): WarehousesRequestBuilder<DeSerializersT> {
    return new WarehousesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Warehouses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Warehouses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Warehouses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Warehouses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Warehouses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARE_ADVANCED_WAREHOUSE_MANAGEMENT_PROCESSES_ENABLED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ARE_LABOR_STANDARDS_ALLOWED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_SPECIFIC_DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_PICKING_LISTS_SHIPMENT_SPECIFIC_ONLY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RAW_MATERIAL_PICKING_INVENTORY_ISSUE_STATUS: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      WhsRawMaterialPolicy,
      true,
      true
    >;
    QUARANTINE_WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_RELEASE_RESERVATION_POLICY_RULE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      WhsLoadReleaseReservationPolicy,
      true,
      true
    >;
    INVENTORY_COUNTING_REASON_CODE_POLICY_NAME: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_WAREHOUSE_LOCATION_ID_INCLUDE_SHELF_ID_BY_DEFAULT: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_PICKING_LISTS_DELIVERY_MODE_SPECIFIC: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_MANUAL_LOAD_RELEASE_RESERVE_INVENTORY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID_BIN_ID_FORMAT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_ITEMS_COVERAGE_PLANNED_MANUALLY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_SHIPPING_CANCELLATION_DECREMENT_LOAD_QUANITY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_UPDATE_SHIPMENT_RULE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      WhsAutoUpdateShipment,
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID_RACK_ID_FORMAT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REFILLED_FROM_MAIN_WAREHOUSE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_WAREHOUSE_LOCATION_ID_INCLUDE_RACK_ID_BY_DEFAULT: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_STORE_QUANTITY_ALLOCATION_REPLENISMENT_RULE_WEIGHT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PALLET_MOVEMENT_DURING_CYCLE_COUNTING_ALLOWED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID_SHELF_ID_FORMAT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MASTER_PLANNING_WORK_CALENDARD_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_WORK_PROCESSING_POLICY_NAME: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNALLY_LOCATED_WAREHOUSE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_REFILLING_WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_AUTOMATIC_LOAD_RELEASE_RESERVE_INVENTORY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PHYSICAL_NEGATIVE_RETAIL_STORE_INVENTORY_ALLOWED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNALLY_LOCATED_WAREHOUSE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RETAIL_STORE_WAREHOUSE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BILL_OF_LADING_PRINTING_BEFORE_SHIPMENT_CONFIRMATION_ENABLED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_NAME: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INVENTORY_STATUS_CHANGE_REMOVE_BLOCKING: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CONTAINER_TYPE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_USED_FOR_DOMESTIC_HAZARDOUS_MATERIALS_SHIPPING_DOCUMENTS: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_GROUP: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      InventCountingGroupBr,
      true,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_PRODUCTION_BO_MS_RESERVE_WAREHOUSE_LEVEL_ONLY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_WAREHOUSE_LOCATION_ID_INCLUDE_BIN_ID_BY_DEFAULT: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_BATCH_PICKING_LIST_QUANTITY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ARE_WAREHOUSE_LOCATION_CHECK_DIGITS_UNIQUE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIMARY_ADDRESS_ASSIGNED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOULD_WAREHOUSE_LOCATION_ID_INCLUDE_AISLE_ID: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_STATUS_CHANGE_RESERVATION_REMOVAL_LEVEL: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      WhsAllowMarkingReservationRemoval,
      true,
      true
    >;
    LANGUAGE_USED_FOR_EXPORT_HAZARDOUS_MATERIALS_SHIPPING_DOCUMENTS: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE_FAILURE_OPTION: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      WhsReleaseRuleFailureOption,
      true,
      true
    >;
    PRIMARY_ADDRESS_TIME_ZONE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    TRANSIT_WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_TYPE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      InventLocationType,
      true,
      true
    >;
    IS_FINANCIAL_NEGATIVE_RETAIL_STORE_INVENTORY_ALLOWED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_PICKING_LIST_LINE_QUANTITY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      WhsReleaseToWarehouseRule,
      true,
      true
    >;
    WILL_ORDER_RELEASING_CONSOLIDATE_SHIPMENTS: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FALLBACK_WAREHOUSE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID_GOODS_IN_ROUTE_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RBO_DEFAULT_INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WMS_LOCATION_ID_GOODS_IN_ROUTE_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT_CUSTOM_RU: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_AS_FINISHED_POSTING_METHOD: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      ProdRafPostingMethodInherit,
      true,
      true
    >;
    UNDERDELIVERY_WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_IN_TRANSIT_WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WAREHOUSE_DEFAULT_LOCATION_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WAREHOUSE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WAREHOUSE_EXTERNALLY_MANAGED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultPlannedTransferOrderItemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_PLANNED_TRANSFER_ORDER_ITEM_COVERAGE_SETTINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link gupOpenTradeAgreementJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_OPEN_TRADE_AGREEMENT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link periodChargeRuleCustomers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_CHARGE_RULE_CUSTOMERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDefaultOrderSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DEFAULT_ORDER_SETTINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductDefaultOrderSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailServiceCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_SERVICE_CATEGORY: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RetailServiceCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventCountingReasonCodePolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_COUNTING_REASON_CODE_POLICY: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      InventCountingReasonCodePoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externallyLocatedWarehouseVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNALLY_LOCATED_WAREHOUSE_VENDOR: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainRefillingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_REFILLING_WAREHOUSE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainRefillingAssignedWarehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_REFILLING_ASSIGNED_WAREHOUSES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externallyLocatedWarehouseCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNALLY_LOCATED_WAREHOUSE_CUSTOMER: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link masterPlanningWorkCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASTER_PLANNING_WORK_CALENDAR: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link quarantineWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUARANTINE_WAREHOUSE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link quarantineAssignedWarehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUARANTINE_ASSIGNED_WAREHOUSES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transitWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSIT_WAREHOUSE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transitAssignedWarehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSIT_ASSIGNED_WAREHOUSES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link externalWarehouseManagementSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseManagementSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsInventoryOnHandEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_INVENTORY_ON_HAND_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      CdsInventoryOnHandEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_WAREHOUSE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseAisles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_AISLES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehouseAislesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesStorageProductWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_WAREHOUSE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPostageDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_POSTAGE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenSalesPostageDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Warehouses<DeSerializers>>;
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
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link areAdvancedWarehouseManagementProcessesEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ADVANCED_WAREHOUSE_MANAGEMENT_PROCESSES_ENABLED:
          fieldBuilder.buildEnumField(
            'AreAdvancedWarehouseManagementProcessesEnabled',
            NoYes,
            true
          ),
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
         * Static representation of the {@link areLaborStandardsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_LABOR_STANDARDS_ALLOWED: fieldBuilder.buildEnumField(
          'AreLaborStandardsAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseSpecificDefaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_SPECIFIC_DEFAULT_INVENTORY_STATUS_ID:
          fieldBuilder.buildEdmTypeField(
            'WarehouseSpecificDefaultInventoryStatusId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link arePickingListsShipmentSpecificOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PICKING_LISTS_SHIPMENT_SPECIFIC_ONLY: fieldBuilder.buildEnumField(
          'ArePickingListsShipmentSpecificOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rawMaterialPickingInventoryIssueStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAW_MATERIAL_PICKING_INVENTORY_ISSUE_STATUS:
          fieldBuilder.buildEnumField(
            'RawMaterialPickingInventoryIssueStatus',
            WhsRawMaterialPolicy,
            true
          ),
        /**
         * Static representation of the {@link quarantineWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARANTINE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'QuarantineWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadReleaseReservationPolicyRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_RELEASE_RESERVATION_POLICY_RULE: fieldBuilder.buildEnumField(
          'LoadReleaseReservationPolicyRule',
          WhsLoadReleaseReservationPolicy,
          true
        ),
        /**
         * Static representation of the {@link inventoryCountingReasonCodePolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_COUNTING_REASON_CODE_POLICY_NAME:
          fieldBuilder.buildEdmTypeField(
            'InventoryCountingReasonCodePolicyName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link willWarehouseLocationIdIncludeShelfIdByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_WAREHOUSE_LOCATION_ID_INCLUDE_SHELF_ID_BY_DEFAULT:
          fieldBuilder.buildEnumField(
            'WillWarehouseLocationIdIncludeShelfIdByDefault',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link arePickingListsDeliveryModeSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PICKING_LISTS_DELIVERY_MODE_SPECIFIC: fieldBuilder.buildEnumField(
          'ArePickingListsDeliveryModeSpecific',
          NoYes,
          true
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
         * Static representation of the {@link willManualLoadReleaseReserveInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_MANUAL_LOAD_RELEASE_RESERVE_INVENTORY: fieldBuilder.buildEnumField(
          'WillManualLoadReleaseReserveInventory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationIdBinIdFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID_BIN_ID_FORMAT: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationIdBinIdFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areItemsCoveragePlannedManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ITEMS_COVERAGE_PLANNED_MANUALLY: fieldBuilder.buildEnumField(
          'AreItemsCoveragePlannedManually',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willShippingCancellationDecrementLoadQuanity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SHIPPING_CANCELLATION_DECREMENT_LOAD_QUANITY:
          fieldBuilder.buildEnumField(
            'WillShippingCancellationDecrementLoadQuanity',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link autoUpdateShipmentRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_UPDATE_SHIPMENT_RULE: fieldBuilder.buildEnumField(
          'AutoUpdateShipmentRule',
          WhsAutoUpdateShipment,
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
         * Static representation of the {@link warehouseLocationIdRackIdFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID_RACK_ID_FORMAT: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationIdRackIdFormat',
          'Edm.String',
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
         * Static representation of the {@link isRefilledFromMainWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REFILLED_FROM_MAIN_WAREHOUSE: fieldBuilder.buildEnumField(
          'IsRefilledFromMainWarehouse',
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
         * Static representation of the {@link willWarehouseLocationIdIncludeRackIdByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_WAREHOUSE_LOCATION_ID_INCLUDE_RACK_ID_BY_DEFAULT:
          fieldBuilder.buildEnumField(
            'WillWarehouseLocationIdIncludeRackIdByDefault',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link retailStoreQuantityAllocationReplenismentRuleWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STORE_QUANTITY_ALLOCATION_REPLENISMENT_RULE_WEIGHT:
          fieldBuilder.buildEdmTypeField(
            'RetailStoreQuantityAllocationReplenismentRuleWeight',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link isPalletMovementDuringCycleCountingAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PALLET_MOVEMENT_DURING_CYCLE_COUNTING_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsPalletMovementDuringCycleCountingAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link warehouseLocationIdShelfIdFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID_SHELF_ID_FORMAT: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationIdShelfIdFormat',
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
         * Static representation of the {@link masterPlanningWorkCalendardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_PLANNING_WORK_CALENDARD_ID: fieldBuilder.buildEdmTypeField(
          'MasterPlanningWorkCalendardId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseWorkProcessingPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_PROCESSING_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkProcessingPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externallyLocatedWarehouseVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNALLY_LOCATED_WAREHOUSE_VENDOR_ACCOUNT_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ExternallyLocatedWarehouseVendorAccountNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link mainRefillingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_REFILLING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'MainRefillingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willAutomaticLoadReleaseReserveInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_AUTOMATIC_LOAD_RELEASE_RESERVE_INVENTORY:
          fieldBuilder.buildEnumField(
            'WillAutomaticLoadReleaseReserveInventory',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isPhysicalNegativeRetailStoreInventoryAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHYSICAL_NEGATIVE_RETAIL_STORE_INVENTORY_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsPhysicalNegativeRetailStoreInventoryAllowed',
            NoYes,
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
         * Static representation of the {@link externallyLocatedWarehouseCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNALLY_LOCATED_WAREHOUSE_CUSTOMER_ACCOUNT_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ExternallyLocatedWarehouseCustomerAccountNumber',
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
         * Static representation of the {@link isRetailStoreWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETAIL_STORE_WAREHOUSE: fieldBuilder.buildEnumField(
          'IsRetailStoreWarehouse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBillOfLadingPrintingBeforeShipmentConfirmationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BILL_OF_LADING_PRINTING_BEFORE_SHIPMENT_CONFIRMATION_ENABLED:
          fieldBuilder.buildEnumField(
            'IsBillOfLadingPrintingBeforeShipmentConfirmationEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link warehouseName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_NAME: fieldBuilder.buildEdmTypeField(
          'WarehouseName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willInventoryStatusChangeRemoveBlocking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVENTORY_STATUS_CHANGE_REMOVE_BLOCKING:
          fieldBuilder.buildEnumField(
            'WillInventoryStatusChangeRemoveBlocking',
            NoYes,
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
         * Static representation of the {@link defaultContainerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONTAINER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultContainerTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageUsedForDomesticHazardousMaterialsShippingDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_USED_FOR_DOMESTIC_HAZARDOUS_MATERIALS_SHIPPING_DOCUMENTS:
          fieldBuilder.buildEdmTypeField(
            'LanguageUsedForDomesticHazardousMaterialsShippingDocuments',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link identificationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_GROUP: fieldBuilder.buildEnumField(
          'IdentificationGroup',
          InventCountingGroupBr,
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
         * Static representation of the {@link willProductionBoMsReserveWarehouseLevelOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCTION_BO_MS_RESERVE_WAREHOUSE_LEVEL_ONLY:
          fieldBuilder.buildEnumField(
            'WillProductionBOMsReserveWarehouseLevelOnly',
            NoYes,
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
         * Static representation of the {@link willWarehouseLocationIdIncludeBinIdByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_WAREHOUSE_LOCATION_ID_INCLUDE_BIN_ID_BY_DEFAULT:
          fieldBuilder.buildEnumField(
            'WillWarehouseLocationIdIncludeBinIdByDefault',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link maximumBatchPickingListQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BATCH_PICKING_LIST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumBatchPickingListQuantity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link areWarehouseLocationCheckDigitsUnique} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_WAREHOUSE_LOCATION_CHECK_DIGITS_UNIQUE: fieldBuilder.buildEnumField(
          'AreWarehouseLocationCheckDigitsUnique',
          NoYes,
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
         * Static representation of the {@link shouldWarehouseLocationIdIncludeAisleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOULD_WAREHOUSE_LOCATION_ID_INCLUDE_AISLE_ID:
          fieldBuilder.buildEnumField(
            'ShouldWarehouseLocationIdIncludeAisleId',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link inventoryStatusChangeReservationRemovalLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_CHANGE_RESERVATION_REMOVAL_LEVEL:
          fieldBuilder.buildEnumField(
            'InventoryStatusChangeReservationRemovalLevel',
            WhsAllowMarkingReservationRemoval,
            true
          ),
        /**
         * Static representation of the {@link languageUsedForExportHazardousMaterialsShippingDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_USED_FOR_EXPORT_HAZARDOUS_MATERIALS_SHIPPING_DOCUMENTS:
          fieldBuilder.buildEdmTypeField(
            'LanguageUsedForExportHazardousMaterialsShippingDocuments',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link warehouseReleaseReservationRequirementRuleFailureOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE_FAILURE_OPTION:
          fieldBuilder.buildEnumField(
            'WarehouseReleaseReservationRequirementRuleFailureOption',
            WhsReleaseRuleFailureOption,
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
         * Static representation of the {@link transitWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSIT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'TransitWarehouseId',
          'Edm.String',
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
         * Static representation of the {@link warehouseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_TYPE: fieldBuilder.buildEnumField(
          'WarehouseType',
          InventLocationType,
          true
        ),
        /**
         * Static representation of the {@link isFinancialNegativeRetailStoreInventoryAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINANCIAL_NEGATIVE_RETAIL_STORE_INVENTORY_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsFinancialNegativeRetailStoreInventoryAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link maximumPickingListLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PICKING_LIST_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumPickingListLineQuantity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link warehouseReleaseReservationRequirementRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE:
          fieldBuilder.buildEnumField(
            'WarehouseReleaseReservationRequirementRule',
            WhsReleaseToWarehouseRule,
            true
          ),
        /**
         * Static representation of the {@link willOrderReleasingConsolidateShipments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_ORDER_RELEASING_CONSOLIDATE_SHIPMENTS: fieldBuilder.buildEnumField(
          'WillOrderReleasingConsolidateShipments',
          NoYes,
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
        /**
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFallbackWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FALLBACK_WAREHOUSE: fieldBuilder.buildEnumField(
          'IsFallbackWarehouse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'InventProfileType_RU',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE_RU: fieldBuilder.buildEdmTypeField(
          'ActivityType_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationIdGoodsInRouteRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_GOODS_IN_ROUTE_RU: fieldBuilder.buildEdmTypeField(
          'InventLocationIdGoodsInRoute_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rboDefaultInventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBO_DEFAULT_INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'RBODefaultInventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_RU: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wmsLocationIdGoodsInRouteRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_LOCATION_ID_GOODS_IN_ROUTE_RU: fieldBuilder.buildEdmTypeField(
          'WMSLocationIdGoodsInRoute_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccountCustomRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT_CUSTOM_RU: fieldBuilder.buildEdmTypeField(
          'VendAccountCustom_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportAsFinishedPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_AS_FINISHED_POSTING_METHOD: fieldBuilder.buildEnumField(
          'ReportAsFinishedPostingMethod',
          ProdRafPostingMethodInherit,
          true
        ),
        /**
         * Static representation of the {@link underdeliveryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERDELIVERY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'UnderdeliveryWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsInTransitWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_IN_TRANSIT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'GoodsInTransitWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalWarehouseDefaultLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_DEFAULT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseDefaultLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalWarehouseManagementSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_MANAGEMENT_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseManagementSystemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWarehouseExternallyManaged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAREHOUSE_EXTERNALLY_MANAGED: fieldBuilder.buildEnumField(
          'IsWarehouseExternallyManaged',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Warehouses)
      };
    }

    return this._schema;
  }
}

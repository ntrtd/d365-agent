/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WarehousesApi } from './WarehousesApi';
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
  RouteCardProductionJournalEntries,
  RouteCardProductionJournalEntriesType
} from './RouteCardProductionJournalEntries';
import {
  ItemCoverageSettings,
  ItemCoverageSettingsType
} from './ItemCoverageSettings';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import {
  InboundShipmentOrderHeaders,
  InboundShipmentOrderHeadersType
} from './InboundShipmentOrderHeaders';
import {
  ProductSpecificOrderSettingsV3,
  ProductSpecificOrderSettingsV3Type
} from './ProductSpecificOrderSettingsV3';
import {
  OpenSalesPriceJournalLines,
  OpenSalesPriceJournalLinesType
} from './OpenSalesPriceJournalLines';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  OpenSalesPriceJournalLinesV2,
  OpenSalesPriceJournalLinesV2Type
} from './OpenSalesPriceJournalLinesV2';
import {
  GupOpenTradeAgreementJournalLines,
  GupOpenTradeAgreementJournalLinesType
} from './GupOpenTradeAgreementJournalLines';
import {
  PurchaseAgreementConfirmationLines,
  PurchaseAgreementConfirmationLinesType
} from './PurchaseAgreementConfirmationLines';
import {
  ProductSpecificOrderSettingsV2,
  ProductSpecificOrderSettingsV2Type
} from './ProductSpecificOrderSettingsV2';
import {
  PeriodChargeRuleCustomers,
  PeriodChargeRuleCustomersType
} from './PeriodChargeRuleCustomers';
import {
  ProductDefaultOrderSettings,
  ProductDefaultOrderSettingsType
} from './ProductDefaultOrderSettings';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  BundleSalesInvoiceLines,
  BundleSalesInvoiceLinesType
} from './BundleSalesInvoiceLines';
import {
  RetailServiceCategories,
  RetailServiceCategoriesType
} from './RetailServiceCategories';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  ShipmentPackingSlipJournalHeaders,
  ShipmentPackingSlipJournalHeadersType
} from './ShipmentPackingSlipJournalHeaders';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';
import {
  InventCountingReasonCodePolicies,
  InventCountingReasonCodePoliciesType
} from './InventCountingReasonCodePolicies';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import {
  ExternalWarehouseManagementSystems,
  ExternalWarehouseManagementSystemsType
} from './ExternalWarehouseManagementSystems';
import {
  SalesAgreementLines,
  SalesAgreementLinesType
} from './SalesAgreementLines';
import {
  CdsInventoryOnHandEntries,
  CdsInventoryOnHandEntriesType
} from './CdsInventoryOnHandEntries';
import {
  OpenPurchasePriceJournalLines,
  OpenPurchasePriceJournalLinesType
} from './OpenPurchasePriceJournalLines';
import {
  BundleSalesInvoiceBundleParentLines,
  BundleSalesInvoiceBundleParentLinesType
} from './BundleSalesInvoiceBundleParentLines';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  AssetMaintenanceAssetBillOfMaterialsV2,
  AssetMaintenanceAssetBillOfMaterialsV2Type
} from './AssetMaintenanceAssetBillOfMaterialsV2';
import { WarehouseAisles, WarehouseAislesType } from './WarehouseAisles';
import {
  OpenSalesLineDiscountJournalLines,
  OpenSalesLineDiscountJournalLinesType
} from './OpenSalesLineDiscountJournalLines';
import {
  ClmIntegrationPurchaseAgreementLines,
  ClmIntegrationPurchaseAgreementLinesType
} from './ClmIntegrationPurchaseAgreementLines';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import {
  AssetMaintenanceWorkOrderLineProductJournals,
  AssetMaintenanceWorkOrderLineProductJournalsType
} from './AssetMaintenanceWorkOrderLineProductJournals';
import {
  ShipmentReceiptJournalHeaders,
  ShipmentReceiptJournalHeadersType
} from './ShipmentReceiptJournalHeaders';
import {
  BundleSalesOrderConfirmationLines,
  BundleSalesOrderConfirmationLinesType
} from './BundleSalesOrderConfirmationLines';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';
import {
  OpenSalesPostageDiscountJournalLines,
  OpenSalesPostageDiscountJournalLinesType
} from './OpenSalesPostageDiscountJournalLines';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  OpenPurchaseLineDiscountJournalLines,
  OpenPurchaseLineDiscountJournalLinesType
} from './OpenPurchaseLineDiscountJournalLines';
import {
  OpenPurchasePriceJournalLinesV2,
  OpenPurchasePriceJournalLinesV2Type
} from './OpenPurchasePriceJournalLinesV2';
import { RetailStores, RetailStoresType } from './RetailStores';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';

/**
 * This class represents the entity "Warehouses" of service "d365_metadata".
 */
export class Warehouses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehousesType<T>
{
  /**
   * Technical entity name for Warehouses.
   */
  static override _entityName = 'Warehouses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Warehouses entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Are Advanced Warehouse Management Processes Enabled.
   * @nullable
   */
  declare areAdvancedWarehouseManagementProcessesEnabled?: NoYes | null;
  /**
   * Primary Address Latitude.
   */
  declare primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Labor Standards Allowed.
   * @nullable
   */
  declare areLaborStandardsAllowed?: NoYes | null;
  /**
   * Warehouse Specific Default Inventory Status Id.
   * @nullable
   */
  declare warehouseSpecificDefaultInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Are Picking Lists Shipment Specific Only.
   * @nullable
   */
  declare arePickingListsShipmentSpecificOnly?: NoYes | null;
  /**
   * Raw Material Picking Inventory Issue Status.
   * @nullable
   */
  declare rawMaterialPickingInventoryIssueStatus?: WhsRawMaterialPolicy | null;
  /**
   * Quarantine Warehouse Id.
   * @nullable
   */
  declare quarantineWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Release Reservation Policy Rule.
   * @nullable
   */
  declare loadReleaseReservationPolicyRule?: WhsLoadReleaseReservationPolicy | null;
  /**
   * Inventory Counting Reason Code Policy Name.
   * @nullable
   */
  declare inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Warehouse Location Id Include Shelf Id By Default.
   * @nullable
   */
  declare willWarehouseLocationIdIncludeShelfIdByDefault?: NoYes | null;
  /**
   * Are Picking Lists Delivery Mode Specific.
   * @nullable
   */
  declare arePickingListsDeliveryModeSpecific?: NoYes | null;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Manual Load Release Reserve Inventory.
   * @nullable
   */
  declare willManualLoadReleaseReserveInventory?: NoYes | null;
  /**
   * Warehouse Location Id Bin Id Format.
   * @nullable
   */
  declare warehouseLocationIdBinIdFormat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Are Items Coverage Planned Manually.
   * @nullable
   */
  declare areItemsCoveragePlannedManually?: NoYes | null;
  /**
   * Will Shipping Cancellation Decrement Load Quanity.
   * @nullable
   */
  declare willShippingCancellationDecrementLoadQuanity?: NoYes | null;
  /**
   * Auto Update Shipment Rule.
   * @nullable
   */
  declare autoUpdateShipmentRule?: WhsAutoUpdateShipment | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id Rack Id Format.
   * @nullable
   */
  declare warehouseLocationIdRackIdFormat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Building Compliment.
   * @nullable
   */
  declare primaryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Location Sales Tax Group Code.
   * @nullable
   */
  declare primaryAddressLocationSalesTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Refilled From Main Warehouse.
   * @nullable
   */
  declare isRefilledFromMainWarehouse?: NoYes | null;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Warehouse Location Id Include Rack Id By Default.
   * @nullable
   */
  declare willWarehouseLocationIdIncludeRackIdByDefault?: NoYes | null;
  /**
   * Retail Store Quantity Allocation Replenisment Rule Weight.
   */
  declare retailStoreQuantityAllocationReplenismentRuleWeight: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Pallet Movement During Cycle Counting Allowed.
   * @nullable
   */
  declare isPalletMovementDuringCycleCountingAllowed?: NoYes | null;
  /**
   * Warehouse Location Id Shelf Id Format.
   * @nullable
   */
  declare warehouseLocationIdShelfIdFormat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Master Planning Work Calendard Id.
   * @nullable
   */
  declare masterPlanningWorkCalendardId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Work Processing Policy Name.
   * @nullable
   */
  declare warehouseWorkProcessingPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Externally Located Warehouse Vendor Account Number.
   * @nullable
   */
  declare externallyLocatedWarehouseVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Main Refilling Warehouse Id.
   * @nullable
   */
  declare mainRefillingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Automatic Load Release Reserve Inventory.
   * @nullable
   */
  declare willAutomaticLoadReleaseReserveInventory?: NoYes | null;
  /**
   * Is Physical Negative Retail Store Inventory Allowed.
   * @nullable
   */
  declare isPhysicalNegativeRetailStoreInventoryAllowed?: NoYes | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Externally Located Warehouse Customer Account Number.
   * @nullable
   */
  declare externallyLocatedWarehouseCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address District Name.
   * @nullable
   */
  declare primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Retail Store Warehouse.
   * @nullable
   */
  declare isRetailStoreWarehouse?: NoYes | null;
  /**
   * Is Bill Of Lading Printing Before Shipment Confirmation Enabled.
   * @nullable
   */
  declare isBillOfLadingPrintingBeforeShipmentConfirmationEnabled?: NoYes | null;
  /**
   * Warehouse Name.
   * @nullable
   */
  declare warehouseName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Inventory Status Change Remove Blocking.
   * @nullable
   */
  declare willInventoryStatusChangeRemoveBlocking?: NoYes | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Container Type Id.
   * @nullable
   */
  declare defaultContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Used For Domestic Hazardous Materials Shipping Documents.
   * @nullable
   */
  declare languageUsedForDomesticHazardousMaterialsShippingDocuments?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Identification Group.
   * @nullable
   */
  declare identificationGroup?: InventCountingGroupBr | null;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Production Bo Ms Reserve Warehouse Level Only.
   * @nullable
   */
  declare willProductionBoMsReserveWarehouseLevelOnly?: NoYes | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street Number.
   * @nullable
   */
  declare primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street In Kana.
   * @nullable
   */
  declare primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Warehouse Location Id Include Bin Id By Default.
   * @nullable
   */
  declare willWarehouseLocationIdIncludeBinIdByDefault?: NoYes | null;
  /**
   * Maximum Batch Picking List Quantity.
   */
  declare maximumBatchPickingListQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Are Warehouse Location Check Digits Unique.
   * @nullable
   */
  declare areWarehouseLocationCheckDigitsUnique?: NoYes | null;
  /**
   * Is Primary Address Assigned.
   * @nullable
   */
  declare isPrimaryAddressAssigned?: NoYes | null;
  /**
   * Should Warehouse Location Id Include Aisle Id.
   * @nullable
   */
  declare shouldWarehouseLocationIdIncludeAisleId?: NoYes | null;
  /**
   * Inventory Status Change Reservation Removal Level.
   * @nullable
   */
  declare inventoryStatusChangeReservationRemovalLevel?: WhsAllowMarkingReservationRemoval | null;
  /**
   * Language Used For Export Hazardous Materials Shipping Documents.
   * @nullable
   */
  declare languageUsedForExportHazardousMaterialsShippingDocuments?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Release Reservation Requirement Rule Failure Option.
   * @nullable
   */
  declare warehouseReleaseReservationRequirementRuleFailureOption?: WhsReleaseRuleFailureOption | null;
  /**
   * Primary Address Time Zone.
   * @nullable
   */
  declare primaryAddressTimeZone?: Timezone | null;
  /**
   * Transit Warehouse Id.
   * @nullable
   */
  declare transitWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City In Kana.
   * @nullable
   */
  declare primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Type.
   * @nullable
   */
  declare warehouseType?: InventLocationType | null;
  /**
   * Is Financial Negative Retail Store Inventory Allowed.
   * @nullable
   */
  declare isFinancialNegativeRetailStoreInventoryAllowed?: NoYes | null;
  /**
   * Maximum Picking List Line Quantity.
   */
  declare maximumPickingListLineQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Warehouse Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseReleaseReservationRequirementRule?: WhsReleaseToWarehouseRule | null;
  /**
   * Will Order Releasing Consolidate Shipments.
   * @nullable
   */
  declare willOrderReleasingConsolidateShipments?: NoYes | null;
  /**
   * Primary Address Post Box.
   * @nullable
   */
  declare primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Longitude.
   */
  declare primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operational Site Id.
   * @nullable
   */
  declare operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Fallback Warehouse.
   * @nullable
   */
  declare isFallbackWarehouse?: NoYes | null;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type Ru.
   * @nullable
   */
  declare activityTypeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id Goods In Route Ru.
   * @nullable
   */
  declare inventLocationIdGoodsInRouteRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rbo Default Invent Profile Id Ru.
   * @nullable
   */
  declare rboDefaultInventProfileIdRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Sequence Group Ru.
   * @nullable
   */
  declare numberSequenceGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wms Location Id Goods In Route Ru.
   * @nullable
   */
  declare wmsLocationIdGoodsInRouteRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Account Custom Ru.
   * @nullable
   */
  declare vendAccountCustomRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report As Finished Posting Method.
   * @nullable
   */
  declare reportAsFinishedPostingMethod?: ProdRafPostingMethodInherit | null;
  /**
   * Underdelivery Warehouse Id.
   * @nullable
   */
  declare underdeliveryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods In Transit Warehouse Id.
   * @nullable
   */
  declare goodsInTransitWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Warehouse Default Location Id.
   * @nullable
   */
  declare externalWarehouseDefaultLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Warehouse Management System Id.
   * @nullable
   */
  declare externalWarehouseManagementSystemId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Warehouse Id.
   * @nullable
   */
  declare externalWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Warehouse Externally Managed.
   * @nullable
   */
  declare isWarehouseExternallyManaged?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ItemCoverageSettings} entity.
   */
  declare itemCoverageSettings: ItemCoverageSettings<T>[];
  /**
   * One-to-many navigation property to the {@link ItemCoverageSettings} entity.
   */
  declare defaultPlannedTransferOrderItemCoverageSettings: ItemCoverageSettings<T>[];
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderHeaders} entity.
   */
  declare inboundShipmentOrderHeaders: InboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV3} entity.
   */
  declare productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLines} entity.
   */
  declare openSalesPriceJournalLine: OpenSalesPriceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation: AssetMaintenanceFunctionalLocations<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLinesV2} entity.
   */
  declare openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link GupOpenTradeAgreementJournalLines} entity.
   */
  declare gupOpenTradeAgreementJournalLine: GupOpenTradeAgreementJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementConfirmationLines} entity.
   */
  declare purchaseAgreementLinesV2: PurchaseAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV2} entity.
   */
  declare productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2<T>[];
  /**
   * One-to-many navigation property to the {@link PeriodChargeRuleCustomers} entity.
   */
  declare periodChargeRuleCustomers: PeriodChargeRuleCustomers<T>[];
  /**
   * One-to-many navigation property to the {@link ProductDefaultOrderSettings} entity.
   */
  declare productDefaultOrderSettings: ProductDefaultOrderSettings<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocations: WarehouseLocations<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceLines} entity.
   */
  declare bundleSalesInvoiceLines: BundleSalesInvoiceLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailServiceCategories} entity.
   */
  declare retailServiceCategory: RetailServiceCategories<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntries: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipJournalHeaders} entity.
   */
  declare shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];
  /**
   * One-to-one navigation property to the {@link InventCountingReasonCodePolicies} entity.
   */
  declare inventCountingReasonCodePolicy?: InventCountingReasonCodePolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare externallyLocatedWarehouseVendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare mainRefillingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  declare mainRefillingAssignedWarehouses: Warehouses<T>[];
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare externallyLocatedWarehouseCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare masterPlanningWorkCalendar?: WorkCalendars<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare quarantineWarehouse?: Warehouses<T> | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  declare quarantineAssignedWarehouses: Warehouses<T>[];
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare transitWarehouse?: Warehouses<T> | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  declare transitAssignedWarehouses: Warehouses<T>[];
  /**
   * One-to-one navigation property to the {@link ExternalWarehouseManagementSystems} entity.
   */
  declare externalWarehouseManagementSystem?: ExternalWarehouseManagementSystems<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesAgreementLines} entity.
   */
  declare salesAgreementLines: SalesAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link CdsInventoryOnHandEntries} entity.
   */
  declare cdsInventoryOnHandEntries: CdsInventoryOnHandEntries<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchasePriceJournalLines} entity.
   */
  declare openPurchasePriceJournalLine: OpenPurchasePriceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesInvoiceBundleParentLines} entity.
   */
  declare bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLines<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine: PurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetBillOfMaterialsV2} entity.
   */
  declare maintenanceAssetBillOfMaterialsWarehouse: AssetMaintenanceAssetBillOfMaterialsV2<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseAisles} entity.
   */
  declare warehouseAisles: WarehouseAisles<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesLineDiscountJournalLines} entity.
   */
  declare openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreementLines} entity.
   */
  declare clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter: RetailCallCenters<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineProductJournals} entity.
   */
  declare workOrderLineProductConsumptionLinesStorageProductWarehouse: AssetMaintenanceWorkOrderLineProductJournals<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalHeaders} entity.
   */
  declare shipmentReciptJournalHeaders: ShipmentReceiptJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BundleSalesOrderConfirmationLines} entity.
   */
  declare bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPostageDiscountJournalLines} entity.
   */
  declare openSalesPostageDiscountJournalLine: OpenSalesPostageDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchaseLineDiscountJournalLines} entity.
   */
  declare openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchasePriceJournalLinesV2} entity.
   */
  declare openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];

  constructor(_entityApi: WarehousesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehousesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  areAdvancedWarehouseManagementProcessesEnabled?: NoYes | null;
  primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  areLaborStandardsAllowed?: NoYes | null;
  warehouseSpecificDefaultInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  arePickingListsShipmentSpecificOnly?: NoYes | null;
  rawMaterialPickingInventoryIssueStatus?: WhsRawMaterialPolicy | null;
  quarantineWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  loadReleaseReservationPolicyRule?: WhsLoadReleaseReservationPolicy | null;
  inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  willWarehouseLocationIdIncludeShelfIdByDefault?: NoYes | null;
  arePickingListsDeliveryModeSpecific?: NoYes | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  willManualLoadReleaseReserveInventory?: NoYes | null;
  warehouseLocationIdBinIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  areItemsCoveragePlannedManually?: NoYes | null;
  willShippingCancellationDecrementLoadQuanity?: NoYes | null;
  autoUpdateShipmentRule?: WhsAutoUpdateShipment | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationIdRackIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationSalesTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isRefilledFromMainWarehouse?: NoYes | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  willWarehouseLocationIdIncludeRackIdByDefault?: NoYes | null;
  retailStoreQuantityAllocationReplenismentRuleWeight: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  isPalletMovementDuringCycleCountingAllowed?: NoYes | null;
  warehouseLocationIdShelfIdFormat?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  masterPlanningWorkCalendardId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkProcessingPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  externallyLocatedWarehouseVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mainRefillingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  willAutomaticLoadReleaseReserveInventory?: NoYes | null;
  isPhysicalNegativeRetailStoreInventoryAllowed?: NoYes | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  externallyLocatedWarehouseCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isRetailStoreWarehouse?: NoYes | null;
  isBillOfLadingPrintingBeforeShipmentConfirmationEnabled?: NoYes | null;
  warehouseName?: DeserializedType<T, 'Edm.String'> | null;
  willInventoryStatusChangeRemoveBlocking?: NoYes | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  defaultContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  languageUsedForDomesticHazardousMaterialsShippingDocuments?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  identificationGroup?: InventCountingGroupBr | null;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  willProductionBoMsReserveWarehouseLevelOnly?: NoYes | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  willWarehouseLocationIdIncludeBinIdByDefault?: NoYes | null;
  maximumBatchPickingListQuantity: DeserializedType<T, 'Edm.Int32'>;
  areWarehouseLocationCheckDigitsUnique?: NoYes | null;
  isPrimaryAddressAssigned?: NoYes | null;
  shouldWarehouseLocationIdIncludeAisleId?: NoYes | null;
  inventoryStatusChangeReservationRemovalLevel?: WhsAllowMarkingReservationRemoval | null;
  languageUsedForExportHazardousMaterialsShippingDocuments?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseReleaseReservationRequirementRuleFailureOption?: WhsReleaseRuleFailureOption | null;
  primaryAddressTimeZone?: Timezone | null;
  transitWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  warehouseType?: InventLocationType | null;
  isFinancialNegativeRetailStoreInventoryAllowed?: NoYes | null;
  maximumPickingListLineQuantity: DeserializedType<T, 'Edm.Int32'>;
  warehouseReleaseReservationRequirementRule?: WhsReleaseToWarehouseRule | null;
  willOrderReleasingConsolidateShipments?: NoYes | null;
  primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  isFallbackWarehouse?: NoYes | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  activityTypeRu?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationIdGoodsInRouteRu?: DeserializedType<T, 'Edm.String'> | null;
  rboDefaultInventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  wmsLocationIdGoodsInRouteRu?: DeserializedType<T, 'Edm.String'> | null;
  vendAccountCustomRu?: DeserializedType<T, 'Edm.String'> | null;
  reportAsFinishedPostingMethod?: ProdRafPostingMethodInherit | null;
  underdeliveryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  goodsInTransitWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  externalWarehouseDefaultLocationId?: DeserializedType<T, 'Edm.String'> | null;
  externalWarehouseManagementSystemId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  externalWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isWarehouseExternallyManaged?: NoYes | null;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  itemCoverageSettings: ItemCoverageSettingsType<T>[];
  defaultPlannedTransferOrderItemCoverageSettings: ItemCoverageSettingsType<T>[];
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  inboundShipmentOrderHeaders: InboundShipmentOrderHeadersType<T>[];
  productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3Type<T>[];
  openSalesPriceJournalLine: OpenSalesPriceJournalLinesType<T>[];
  assetMaintenanceFunctionalLocation: AssetMaintenanceFunctionalLocationsType<T>[];
  openSalesPriceJournalLineV2: OpenSalesPriceJournalLinesV2Type<T>[];
  gupOpenTradeAgreementJournalLine: GupOpenTradeAgreementJournalLinesType<T>[];
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2Type<T>[];
  periodChargeRuleCustomers: PeriodChargeRuleCustomersType<T>[];
  productDefaultOrderSettings: ProductDefaultOrderSettingsType<T>[];
  warehouseLocations: WarehouseLocationsType<T>[];
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  bundleSalesInvoiceLines: BundleSalesInvoiceLinesType<T>[];
  retailServiceCategory: RetailServiceCategoriesType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeadersType<T>[];
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
  inventCountingReasonCodePolicy?: InventCountingReasonCodePoliciesType<T> | null;
  operationalSite?: OperationalSitesType<T> | null;
  externallyLocatedWarehouseVendor?: VendorsV2Type<T> | null;
  mainRefillingWarehouse?: WarehousesType<T> | null;
  mainRefillingAssignedWarehouses: WarehousesType<T>[];
  externallyLocatedWarehouseCustomer?: CustomersV3Type<T> | null;
  masterPlanningWorkCalendar?: WorkCalendarsType<T> | null;
  quarantineWarehouse?: WarehousesType<T> | null;
  quarantineAssignedWarehouses: WarehousesType<T>[];
  transitWarehouse?: WarehousesType<T> | null;
  transitAssignedWarehouses: WarehousesType<T>[];
  externalWarehouseManagementSystem?: ExternalWarehouseManagementSystemsType<T> | null;
  salesAgreementLines: SalesAgreementLinesType<T>[];
  cdsInventoryOnHandEntries: CdsInventoryOnHandEntriesType<T>[];
  openPurchasePriceJournalLine: OpenPurchasePriceJournalLinesType<T>[];
  bundleSalesInvoiceBundleParentLines: BundleSalesInvoiceBundleParentLinesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  purchaseAgreementLine: PurchaseAgreementLinesType<T>[];
  maintenanceAssetBillOfMaterialsWarehouse: AssetMaintenanceAssetBillOfMaterialsV2Type<T>[];
  warehouseAisles: WarehouseAislesType<T>[];
  openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLinesType<T>[];
  clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLinesType<T>[];
  retailCallCenter: RetailCallCentersType<T>[];
  workOrderLineProductConsumptionLinesStorageProductWarehouse: AssetMaintenanceWorkOrderLineProductJournalsType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
  bundleSalesOrderConfirmationLines: BundleSalesOrderConfirmationLinesType<T>[];
  itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2Type<T>[];
  openSalesPostageDiscountJournalLine: OpenSalesPostageDiscountJournalLinesType<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLinesType<T>[];
  openPurchasePriceJournalLineV2: OpenPurchasePriceJournalLinesV2Type<T>[];
  retailStore: RetailStoresType<T>[];
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
}

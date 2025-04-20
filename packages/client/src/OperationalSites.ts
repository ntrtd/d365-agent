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
import type { OperationalSitesApi } from './OperationalSitesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
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
  ItemSpecificBillOfMaterialsHeaders,
  ItemSpecificBillOfMaterialsHeadersType
} from './ItemSpecificBillOfMaterialsHeaders';
import {
  ItemSpecificBillOfMaterialsHeadersV3,
  ItemSpecificBillOfMaterialsHeadersV3Type
} from './ItemSpecificBillOfMaterialsHeadersV3';
import {
  ItemSpecificFormulaHeadersV3,
  ItemSpecificFormulaHeadersV3Type
} from './ItemSpecificFormulaHeadersV3';
import {
  ProductSpecificOrderSettingsV3,
  ProductSpecificOrderSettingsV3Type
} from './ProductSpecificOrderSettingsV3';
import {
  OpenSalesPriceJournalLines,
  OpenSalesPriceJournalLinesType
} from './OpenSalesPriceJournalLines';
import {
  AggregatedCostStatementEntries,
  AggregatedCostStatementEntriesType
} from './AggregatedCostStatementEntries';
import {
  InventoryCountingJournalLines,
  InventoryCountingJournalLinesType
} from './InventoryCountingJournalLines';
import {
  Kitting_KitHeaders,
  Kitting_KitHeadersType
} from './Kitting_KitHeaders';
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
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  JobCardProductionJournalEntries,
  JobCardProductionJournalEntriesType
} from './JobCardProductionJournalEntries';
import {
  InventoryTagCountingJournalLines,
  InventoryTagCountingJournalLinesType
} from './InventoryTagCountingJournalLines';
import {
  ProductionPickingListJournalEntries,
  ProductionPickingListJournalEntriesType
} from './ProductionPickingListJournalEntries';
import {
  BillOfMaterialsVersionsV3,
  BillOfMaterialsVersionsV3Type
} from './BillOfMaterialsVersionsV3';
import {
  SalesAgreementConfirmationLines,
  SalesAgreementConfirmationLinesType
} from './SalesAgreementConfirmationLines';
import { Warehouses, WarehousesType } from './Warehouses';
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
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  PurchaseAgreementLines,
  PurchaseAgreementLinesType
} from './PurchaseAgreementLines';
import {
  MonthlyCostStatementEntries,
  MonthlyCostStatementEntriesType
} from './MonthlyCostStatementEntries';
import {
  OpenSalesLineDiscountJournalLines,
  OpenSalesLineDiscountJournalLinesType
} from './OpenSalesLineDiscountJournalLines';
import {
  ClmIntegrationPurchaseAgreementLines,
  ClmIntegrationPurchaseAgreementLinesType
} from './ClmIntegrationPurchaseAgreementLines';
import {
  CostStatementEntries,
  CostStatementEntriesType
} from './CostStatementEntries';
import {
  BillOfMaterialsVersionsV2,
  BillOfMaterialsVersionsV2Type
} from './BillOfMaterialsVersionsV2';
import {
  SentProductReleaseHeaders,
  SentProductReleaseHeadersType
} from './SentProductReleaseHeaders';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';
import {
  ReceivedProductReleaseHeaders,
  ReceivedProductReleaseHeadersType
} from './ReceivedProductReleaseHeaders';
import {
  OpenSalesPostageDiscountJournalLines,
  OpenSalesPostageDiscountJournalLinesType
} from './OpenSalesPostageDiscountJournalLines';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import {
  RoutePendingRouteCostCategoryUnitCosts,
  RoutePendingRouteCostCategoryUnitCostsType
} from './RoutePendingRouteCostCategoryUnitCosts';
import {
  BillOfMaterialsVersionsV4,
  BillOfMaterialsVersionsV4Type
} from './BillOfMaterialsVersionsV4';
import {
  ItemSpecificBillOfMaterialsHeadersV2,
  ItemSpecificBillOfMaterialsHeadersV2Type
} from './ItemSpecificBillOfMaterialsHeadersV2';
import {
  OpenPurchaseLineDiscountJournalLines,
  OpenPurchaseLineDiscountJournalLinesType
} from './OpenPurchaseLineDiscountJournalLines';
import {
  InventOperationalSiteCurrentPostalAddresses,
  InventOperationalSiteCurrentPostalAddressesType
} from './InventOperationalSiteCurrentPostalAddresses';
import {
  FiscalEstablishments,
  FiscalEstablishmentsType
} from './FiscalEstablishments';
import {
  ReportAsFinishedProductionJournalEntries,
  ReportAsFinishedProductionJournalEntriesType
} from './ReportAsFinishedProductionJournalEntries';

/**
 * This class represents the entity "OperationalSites" of service "d365_metadata".
 */
export class OperationalSites<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OperationalSitesType<T>
{
  /**
   * Technical entity name for OperationalSites.
   */
  static override _entityName = 'OperationalSites';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationalSites entity.
   */
  static _keys = ['dataAreaId', 'SiteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Address Latitude.
   */
  declare primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Establishment Id.
   * @nullable
   */
  declare fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site Timezone.
   * @nullable
   */
  declare siteTimezone?: Timezone | null;
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
   * Default Inventory Status Id.
   * @nullable
   */
  declare defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Master Planned Intra Site Movements Use Transfer Journals.
   * @nullable
   */
  declare willMasterPlannedIntraSiteMovementsUseTransferJournals?: NoYes | null;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Entry Deadline Group Id.
   * @nullable
   */
  declare orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address District Name.
   * @nullable
   */
  declare primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Receiving Warehouse Override Allowed.
   * @nullable
   */
  declare isReceivingWarehouseOverrideAllowed?: NoYes | null;
  /**
   * Site Name.
   * @nullable
   */
  declare siteName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Financial Dimension Value.
   * @nullable
   */
  declare defaultFinancialDimensionValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Tax Branch Code.
   * @nullable
   */
  declare taxBranchCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Address Assigned.
   * @nullable
   */
  declare isPrimaryAddressAssigned?: NoYes | null;
  /**
   * Primary Address Time Zone.
   * @nullable
   */
  declare primaryAddressTimeZone?: Timezone | null;
  /**
   * Primary Address City In Kana.
   * @nullable
   */
  declare primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link RouteCardProductionJournalEntries} entity.
   */
  declare routeCardProductionJournalEntries: RouteCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ItemCoverageSettings} entity.
   */
  declare itemCoverageSettings: ItemCoverageSettings<T>[];
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificBillOfMaterialsHeaders} entity.
   */
  declare itemSpecificBillOfMaterialsHeaders: ItemSpecificBillOfMaterialsHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificBillOfMaterialsHeadersV3} entity.
   */
  declare itemSpecificBillOfMaterialsHeadersV3: ItemSpecificBillOfMaterialsHeadersV3<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificFormulaHeadersV3} entity.
   */
  declare itemSpecificFormulaHeadersV3: ItemSpecificFormulaHeadersV3<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSpecificOrderSettingsV3} entity.
   */
  declare productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPriceJournalLines} entity.
   */
  declare openSalesPriceJournalLine: OpenSalesPriceJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AggregatedCostStatementEntries} entity.
   */
  declare aggregatedCostStatementEntries: AggregatedCostStatementEntries<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryCountingJournalLines} entity.
   */
  declare inventoryCountingJournalLines: InventoryCountingJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link Kitting_KitHeaders} entity.
   */
  declare billOfMaterialsHeaders: Kitting_KitHeaders<T>[];
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
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link JobCardProductionJournalEntries} entity.
   */
  declare jobCardProductionJournalEntries: JobCardProductionJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalLines} entity.
   */
  declare inventoryTagCountingJournalLines: InventoryTagCountingJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionPickingListJournalEntries} entity.
   */
  declare productionPickingListJournalEntries: ProductionPickingListJournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV3} entity.
   */
  declare billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmationLines} entity.
   */
  declare salesAgreementConfirmationLines: SalesAgreementConfirmationLines<T>[];
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  declare warehouses: Warehouses<T>[];
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
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLines} entity.
   */
  declare purchaseAgreementLine: PurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link MonthlyCostStatementEntries} entity.
   */
  declare costMontlyStatementEntries: MonthlyCostStatementEntries<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesLineDiscountJournalLines} entity.
   */
  declare openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreementLines} entity.
   */
  declare clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link CostStatementEntries} entity.
   */
  declare costStatementEntries: CostStatementEntries<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV2} entity.
   */
  declare billOfMaterialsVersionsV2: BillOfMaterialsVersionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link SentProductReleaseHeaders} entity.
   */
  declare receivingSentProductReleaseHeaders: SentProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link SentProductReleaseHeaders} entity.
   */
  declare releasingSentProductReleaseHeaders: SentProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseHeaders} entity.
   */
  declare receivingReceivedProductReleaseHeaders: ReceivedProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseHeaders} entity.
   */
  declare releasingReceivedProductReleaseHeaders: ReceivedProductReleaseHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link OpenSalesPostageDiscountJournalLines} entity.
   */
  declare openSalesPostageDiscountJournalLine: OpenSalesPostageDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link RoutePendingRouteCostCategoryUnitCosts} entity.
   */
  declare pendingRouteCostCategoryUnitCosts: RoutePendingRouteCostCategoryUnitCosts<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV4} entity.
   */
  declare billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4<T>[];
  /**
   * One-to-many navigation property to the {@link ItemSpecificBillOfMaterialsHeadersV2} entity.
   */
  declare itemSpecificBillOfMaterialsHeadersV2: ItemSpecificBillOfMaterialsHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link OpenPurchaseLineDiscountJournalLines} entity.
   */
  declare openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link InventOperationalSiteCurrentPostalAddresses} entity.
   */
  declare operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddresses<T>[];
  /**
   * One-to-one navigation property to the {@link FiscalEstablishments} entity.
   */
  declare fiscalEstablishment?: FiscalEstablishments<T> | null;
  /**
   * One-to-many navigation property to the {@link ReportAsFinishedProductionJournalEntries} entity.
   */
  declare reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntries<T>[];

  constructor(_entityApi: OperationalSitesApi<T>) {
    super(_entityApi);
  }
}

export interface OperationalSitesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  fiscalEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  siteTimezone?: Timezone | null;
  primaryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationSalesTaxGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  willMasterPlannedIntraSiteMovementsUseTransferJournals?: NoYes | null;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  orderEntryDeadlineGroupId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  isReceivingWarehouseOverrideAllowed?: NoYes | null;
  siteName?: DeserializedType<T, 'Edm.String'> | null;
  defaultFinancialDimensionValue?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  taxBranchCode?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryAddressAssigned?: NoYes | null;
  primaryAddressTimeZone?: Timezone | null;
  primaryAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  routeCardProductionJournalEntries: RouteCardProductionJournalEntriesType<T>[];
  itemCoverageSettings: ItemCoverageSettingsType<T>[];
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  itemSpecificBillOfMaterialsHeaders: ItemSpecificBillOfMaterialsHeadersType<T>[];
  itemSpecificBillOfMaterialsHeadersV3: ItemSpecificBillOfMaterialsHeadersV3Type<T>[];
  itemSpecificFormulaHeadersV3: ItemSpecificFormulaHeadersV3Type<T>[];
  productSpecificOrderSettingsV3: ProductSpecificOrderSettingsV3Type<T>[];
  openSalesPriceJournalLine: OpenSalesPriceJournalLinesType<T>[];
  aggregatedCostStatementEntries: AggregatedCostStatementEntriesType<T>[];
  inventoryCountingJournalLines: InventoryCountingJournalLinesType<T>[];
  billOfMaterialsHeaders: Kitting_KitHeadersType<T>[];
  purchaseAgreementLinesV2: PurchaseAgreementConfirmationLinesType<T>[];
  productSpecificOrderSettingsV2: ProductSpecificOrderSettingsV2Type<T>[];
  periodChargeRuleCustomers: PeriodChargeRuleCustomersType<T>[];
  productDefaultOrderSettings: ProductDefaultOrderSettingsType<T>[];
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  jobCardProductionJournalEntries: JobCardProductionJournalEntriesType<T>[];
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
  productionPickingListJournalEntries: ProductionPickingListJournalEntriesType<T>[];
  billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3Type<T>[];
  salesAgreementConfirmationLines: SalesAgreementConfirmationLinesType<T>[];
  warehouses: WarehousesType<T>[];
  salesAgreementLines: SalesAgreementLinesType<T>[];
  cdsInventoryOnHandEntries: CdsInventoryOnHandEntriesType<T>[];
  openPurchasePriceJournalLine: OpenPurchasePriceJournalLinesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  purchaseAgreementLine: PurchaseAgreementLinesType<T>[];
  costMontlyStatementEntries: MonthlyCostStatementEntriesType<T>[];
  openSalesLineDiscountJournalLine: OpenSalesLineDiscountJournalLinesType<T>[];
  clmIntegrationPurchaseAgreementLines: ClmIntegrationPurchaseAgreementLinesType<T>[];
  costStatementEntries: CostStatementEntriesType<T>[];
  billOfMaterialsVersionsV2: BillOfMaterialsVersionsV2Type<T>[];
  receivingSentProductReleaseHeaders: SentProductReleaseHeadersType<T>[];
  releasingSentProductReleaseHeaders: SentProductReleaseHeadersType<T>[];
  itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2Type<T>[];
  receivingReceivedProductReleaseHeaders: ReceivedProductReleaseHeadersType<T>[];
  releasingReceivedProductReleaseHeaders: ReceivedProductReleaseHeadersType<T>[];
  openSalesPostageDiscountJournalLine: OpenSalesPostageDiscountJournalLinesType<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  pendingRouteCostCategoryUnitCosts: RoutePendingRouteCostCategoryUnitCostsType<T>[];
  billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4Type<T>[];
  itemSpecificBillOfMaterialsHeadersV2: ItemSpecificBillOfMaterialsHeadersV2Type<T>[];
  openPurchaseLineDiscountJournalLine: OpenPurchaseLineDiscountJournalLinesType<T>[];
  operationalSiteCurrentPostalAddresses: InventOperationalSiteCurrentPostalAddressesType<T>[];
  fiscalEstablishment?: FiscalEstablishmentsType<T> | null;
  reportAsFinishedProductionJournalEntries: ReportAsFinishedProductionJournalEntriesType<T>[];
}

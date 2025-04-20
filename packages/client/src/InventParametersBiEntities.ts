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
import type { InventParametersBiEntitiesApi } from './InventParametersBiEntitiesApi';
import { NoYes } from './NoYes';
import { StockTransferBlockZeroPriceShipmentSetupIn } from './StockTransferBlockZeroPriceShipmentSetupIn';
import { TransferTypeIn } from './TransferTypeIn';
import { CostMovingAverageFallbackSequence } from './CostMovingAverageFallbackSequence';
import { ProdStandardCostVariance } from './ProdStandardCostVariance';
import { WhsQualityOrderFollowWorkInventDim } from './WhsQualityOrderFollowWorkInventDim';
import { CostBreakdown } from './CostBreakdown';
import { ShipCarrierReturnTo } from './ShipCarrierReturnTo';
import { PriceTypeIn } from './PriceTypeIn';
import { InventFiscalLifoCalcPeriod } from './InventFiscalLifoCalcPeriod';
import { WmsPickRouteStatusOnUpdate } from './WmsPickRouteStatusOnUpdate';
import { InventMultiSiteDimensionLink } from './InventMultiSiteDimensionLink';

/**
 * This class represents the entity "InventParametersBiEntities" of service "d365_metadata".
 */
export class InventParametersBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventParametersBiEntitiesType<T>
{
  /**
   * Technical entity name for InventParametersBiEntities.
   */
  static override _entityName = 'InventParametersBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventParametersBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Variant Features Ready.
   * @nullable
   */
  declare productVariantFeaturesReady?: NoYes | null;
  /**
   * Post Physical Tax.
   * @nullable
   */
  declare postPhysicalTax?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Alcohol Declaraiton Er Format Retail 11 Ru.
   */
  declare alcoholDeclaraitonErFormatRetail11Ru: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Barcode Setup Id Pick.
   * @nullable
   */
  declare barcodeSetupIdPick?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Adjust Correction.
   * @nullable
   */
  declare inventAdjustCorrection?: NoYes | null;
  /**
   * Add Transact.
   * @nullable
   */
  declare addTransact?: NoYes | null;
  /**
   * Fiscal Lifowip Period.
   */
  declare fiscalLifowipPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Cw Invent Journal Name Id.
   * @nullable
   */
  declare pdsCwInventJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Lifo Journal Name Id Final.
   * @nullable
   */
  declare fiscalLifoJournalNameIdFinal?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Overhead Structure Ru.
   * @nullable
   */
  declare useOverheadStructureRu?: NoYes | null;
  /**
   * Stock Transfer Block Zero Price Shipment Setup In.
   * @nullable
   */
  declare stockTransferBlockZeroPriceShipmentSetupIn?: StockTransferBlockZeroPriceShipmentSetupIn | null;
  /**
   * Volume Unit Symbol.
   * @nullable
   */
  declare volumeUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Type In.
   * @nullable
   */
  declare transferTypeIn?: TransferTypeIn | null;
  /**
   * Alcohol Declaraiton Er Format Wholesale 6 Ru.
   */
  declare alcoholDeclaraitonErFormatWholesale6Ru: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Custom Statistic Currency Code Ru.
   * @nullable
   */
  declare customStatisticCurrencyCodeRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Transfer Financial Posting Ru.
   * @nullable
   */
  declare enableTransferFinancialPostingRu?: NoYes | null;
  /**
   * Skip Invent Onhand Consistency Check Clean Up.
   * @nullable
   */
  declare skipInventOnhandConsistencyCheckCleanUp?: NoYes | null;
  /**
   * Length Unit Symbol.
   * @nullable
   */
  declare lengthUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Empty Attribute Values.
   * @nullable
   */
  declare allowEmptyAttributeValues?: NoYes | null;
  /**
   * Alcohol Unit Id Ru.
   * @nullable
   */
  declare alcoholUnitIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Site Default Invent Site Id.
   * @nullable
   */
  declare multiSiteDefaultInventSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ownership Change Journal Name Id.
   * @nullable
   */
  declare ownershipChangeJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Alcohol Declaraiton Er Format Wholesale 7 Ru.
   */
  declare alcoholDeclaraitonErFormatWholesale7Ru: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Use Adj Rounding Accounts.
   * @nullable
   */
  declare useAdjRoundingAccounts?: NoYes | null;
  /**
   * Use Quality Management.
   * @nullable
   */
  declare useQualityManagement?: NoYes | null;
  /**
   * Alcohol Declaraiton Er Format Retail 12 Ru.
   */
  declare alcoholDeclaraitonErFormatRetail12Ru: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Product Variant Specific Order Settings.
   * @nullable
   */
  declare productVariantSpecificOrderSettings?: NoYes | null;
  /**
   * Cost Moving Average Fallback Sequence.
   * @nullable
   */
  declare costMovingAverageFallbackSequence?: CostMovingAverageFallbackSequence | null;
  /**
   * Invent Transfer Over Delivery.
   * @nullable
   */
  declare inventTransferOverDelivery?: NoYes | null;
  /**
   * Validate Return Ru.
   * @nullable
   */
  declare validateReturnRu?: NoYes | null;
  /**
   * Invent Profile Use Related Ru.
   * @nullable
   */
  declare inventProfileUseRelatedRu?: NoYes | null;
  /**
   * Bom Journal Name Id.
   * @nullable
   */
  declare bomJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod Standard Cost Variance.
   * @nullable
   */
  declare prodStandardCostVariance?: ProdStandardCostVariance | null;
  /**
   * Tag Counting Journal Name Id.
   * @nullable
   */
  declare tagCountingJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Price History.
   * @nullable
   */
  declare lastPriceHistory?: NoYes | null;
  /**
   * Close Bundle Size.
   */
  declare closeBundleSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Must Check Invent Update Blocked Item.
   * @nullable
   */
  declare mustCheckInventUpdateBlockedItem?: NoYes | null;
  /**
   * Test Hourly Rate.
   */
  declare testHourlyRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group Lv.
   * @nullable
   */
  declare salesTaxGroupLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Transfer Auto Reservation.
   * @nullable
   */
  declare inventTransferAutoReservation?: NoYes | null;
  /**
   * Close Batch Helpers.
   */
  declare closeBatchHelpers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Packing Material Enabled.
   * @nullable
   */
  declare packingMaterialEnabled?: NoYes | null;
  /**
   * Fallback Invent Location Id.
   * @nullable
   */
  declare fallbackInventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Use Boxing Logic.
   * @nullable
   */
  declare mcrUseBoxingLogic?: NoYes | null;
  /**
   * Fiscal Lifo Deviation Percent.
   */
  declare fiscalLifoDeviationPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Do Print Transportation Document.
   * @nullable
   */
  declare doPrintTransportationDocument?: NoYes | null;
  /**
   * Close Batch Group Id.
   * @nullable
   */
  declare closeBatchGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quality Order Work Inventory Dimension Policy.
   * @nullable
   */
  declare qualityOrderWorkInventoryDimensionPolicy?: WhsQualityOrderFollowWorkInventDim | null;
  /**
   * Enable Ledger Acct Sites.
   * @nullable
   */
  declare enableLedgerAcctSites?: NoYes | null;
  /**
   * Cost Breakdown.
   * @nullable
   */
  declare costBreakdown?: CostBreakdown | null;
  /**
   * Storno Adj Posting.
   * @nullable
   */
  declare stornoAdjPosting?: NoYes | null;
  /**
   * Default Unit Id.
   * @nullable
   */
  declare defaultUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Override Fefo.
   * @nullable
   */
  declare pdsOverrideFefo?: NoYes | null;
  /**
   * Movement Journal Name Id.
   * @nullable
   */
  declare movementJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storno Physical Posting Ru.
   * @nullable
   */
  declare stornoPhysicalPostingRu?: NoYes | null;
  /**
   * Cost Price Pcs Max Value.
   */
  declare costPricePcsMaxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transfer Journal Name Id.
   * @nullable
   */
  declare transferJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Carrier Return To.
   * @nullable
   */
  declare shipCarrierReturnTo?: ShipCarrierReturnTo | null;
  /**
   * Price Type In.
   * @nullable
   */
  declare priceTypeIn?: PriceTypeIn | null;
  /**
   * Invent Value Bundle Size.
   */
  declare inventValueBundleSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mass Unit Symbol.
   * @nullable
   */
  declare massUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multi Site Default Invent Location Id.
   * @nullable
   */
  declare multiSiteDefaultInventLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Intercompany Onhand Skip Closed Qty.
   * @nullable
   */
  declare intercompanyOnhandSkipClosedQty?: NoYes | null;
  /**
   * Fiscal Lifo Calc Period.
   * @nullable
   */
  declare fiscalLifoCalcPeriod?: InventFiscalLifoCalcPeriod | null;
  /**
   * Fiscal Lifo Journal Name Id Internal.
   * @nullable
   */
  declare fiscalLifoJournalNameIdInternal?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Auto End Order Pick.
   * @nullable
   */
  declare autoEndOrderPick?: NoYes | null;
  /**
   * Invent Item Price Activation Bundle Size.
   */
  declare inventItemPriceActivationBundleSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invent Transfer Under Delivery.
   * @nullable
   */
  declare inventTransferUnderDelivery?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mandatory Item Tax Group.
   * @nullable
   */
  declare mandatoryItemTaxGroup?: NoYes | null;
  /**
   * Invent Bailee Journal Name Id Ru.
   * @nullable
   */
  declare inventBaileeJournalNameIdRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invent Sum Date Financial Dimension Focus Ru.
   */
  declare inventSumDateFinancialDimensionFocusRu: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Loss Profit Journal Name Id.
   * @nullable
   */
  declare lossProfitJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lock Counting.
   * @nullable
   */
  declare lockCounting?: NoYes | null;
  /**
   * Transfer Order Pick Route Status On Update.
   * @nullable
   */
  declare transferOrderPickRouteStatusOnUpdate?: WmsPickRouteStatusOnUpdate | null;
  /**
   * Reserve On Ordered.
   * @nullable
   */
  declare reserveOnOrdered?: NoYes | null;
  /**
   * Count Journal Name Id.
   * @nullable
   */
  declare countJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alcohol Consider Strength Ru.
   * @nullable
   */
  declare alcoholConsiderStrengthRu?: NoYes | null;
  /**
   * Analysis Dimension Attribute Ru.
   */
  declare analysisDimensionAttributeRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Batch Merge Journal Name Id.
   * @nullable
   */
  declare batchMergeJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alcohol Unit Id Daily Ru.
   * @nullable
   */
  declare alcoholUnitIdDailyRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alcohol Declaraiton Er Format Wholesale 5 Ru.
   */
  declare alcoholDeclaraitonErFormatWholesale5Ru: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Multi Site Dimension Link.
   * @nullable
   */
  declare multiSiteDimensionLink?: InventMultiSiteDimensionLink | null;
  /**
   * Site Dimension Attribute.
   */
  declare siteDimensionAttribute: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Credit Storno Transfer Journal Ru.
   * @nullable
   */
  declare creditStornoTransferJournalRu?: NoYes | null;

  constructor(_entityApi: InventParametersBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventParametersBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  productVariantFeaturesReady?: NoYes | null;
  postPhysicalTax?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  alcoholDeclaraitonErFormatRetail11Ru: DeserializedType<T, 'Edm.Int64'>;
  barcodeSetupIdPick?: DeserializedType<T, 'Edm.String'> | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventAdjustCorrection?: NoYes | null;
  addTransact?: NoYes | null;
  fiscalLifowipPeriod: DeserializedType<T, 'Edm.Int32'>;
  pdsCwInventJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalLifoJournalNameIdFinal?: DeserializedType<T, 'Edm.String'> | null;
  useOverheadStructureRu?: NoYes | null;
  stockTransferBlockZeroPriceShipmentSetupIn?: StockTransferBlockZeroPriceShipmentSetupIn | null;
  volumeUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  transferTypeIn?: TransferTypeIn | null;
  alcoholDeclaraitonErFormatWholesale6Ru: DeserializedType<T, 'Edm.Int64'>;
  customStatisticCurrencyCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  enableTransferFinancialPostingRu?: NoYes | null;
  skipInventOnhandConsistencyCheckCleanUp?: NoYes | null;
  lengthUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  allowEmptyAttributeValues?: NoYes | null;
  alcoholUnitIdRu?: DeserializedType<T, 'Edm.String'> | null;
  multiSiteDefaultInventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  ownershipChangeJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  alcoholDeclaraitonErFormatWholesale7Ru: DeserializedType<T, 'Edm.Int64'>;
  useAdjRoundingAccounts?: NoYes | null;
  useQualityManagement?: NoYes | null;
  alcoholDeclaraitonErFormatRetail12Ru: DeserializedType<T, 'Edm.Int64'>;
  productVariantSpecificOrderSettings?: NoYes | null;
  costMovingAverageFallbackSequence?: CostMovingAverageFallbackSequence | null;
  inventTransferOverDelivery?: NoYes | null;
  validateReturnRu?: NoYes | null;
  inventProfileUseRelatedRu?: NoYes | null;
  bomJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  prodStandardCostVariance?: ProdStandardCostVariance | null;
  tagCountingJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  lastPriceHistory?: NoYes | null;
  closeBundleSize: DeserializedType<T, 'Edm.Int32'>;
  mustCheckInventUpdateBlockedItem?: NoYes | null;
  testHourlyRate: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupLv?: DeserializedType<T, 'Edm.String'> | null;
  inventTransferAutoReservation?: NoYes | null;
  closeBatchHelpers: DeserializedType<T, 'Edm.Int32'>;
  packingMaterialEnabled?: NoYes | null;
  fallbackInventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  mcrUseBoxingLogic?: NoYes | null;
  fiscalLifoDeviationPercent: DeserializedType<T, 'Edm.Decimal'>;
  doPrintTransportationDocument?: NoYes | null;
  closeBatchGroupId?: DeserializedType<T, 'Edm.String'> | null;
  qualityOrderWorkInventoryDimensionPolicy?: WhsQualityOrderFollowWorkInventDim | null;
  enableLedgerAcctSites?: NoYes | null;
  costBreakdown?: CostBreakdown | null;
  stornoAdjPosting?: NoYes | null;
  defaultUnitId?: DeserializedType<T, 'Edm.String'> | null;
  pdsOverrideFefo?: NoYes | null;
  movementJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  stornoPhysicalPostingRu?: NoYes | null;
  costPricePcsMaxValue: DeserializedType<T, 'Edm.Decimal'>;
  transferJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  shipCarrierReturnTo?: ShipCarrierReturnTo | null;
  priceTypeIn?: PriceTypeIn | null;
  inventValueBundleSize: DeserializedType<T, 'Edm.Int32'>;
  massUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  multiSiteDefaultInventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  intercompanyOnhandSkipClosedQty?: NoYes | null;
  fiscalLifoCalcPeriod?: InventFiscalLifoCalcPeriod | null;
  fiscalLifoJournalNameIdInternal?: DeserializedType<T, 'Edm.String'> | null;
  autoEndOrderPick?: NoYes | null;
  inventItemPriceActivationBundleSize: DeserializedType<T, 'Edm.Int32'>;
  inventTransferUnderDelivery?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  mandatoryItemTaxGroup?: NoYes | null;
  inventBaileeJournalNameIdRu?: DeserializedType<T, 'Edm.String'> | null;
  inventSumDateFinancialDimensionFocusRu: DeserializedType<T, 'Edm.Int64'>;
  lossProfitJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  lockCounting?: NoYes | null;
  transferOrderPickRouteStatusOnUpdate?: WmsPickRouteStatusOnUpdate | null;
  reserveOnOrdered?: NoYes | null;
  countJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  alcoholConsiderStrengthRu?: NoYes | null;
  analysisDimensionAttributeRu: DeserializedType<T, 'Edm.Int64'>;
  batchMergeJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  alcoholUnitIdDailyRu?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  alcoholDeclaraitonErFormatWholesale5Ru: DeserializedType<T, 'Edm.Int64'>;
  multiSiteDimensionLink?: InventMultiSiteDimensionLink | null;
  siteDimensionAttribute: DeserializedType<T, 'Edm.Int64'>;
  creditStornoTransferJournalRu?: NoYes | null;
}

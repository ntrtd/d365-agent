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
import type { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { NoYes } from './NoYes';
import { AssetStatus } from './AssetStatus';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  AcquisitionMethods,
  AcquisitionMethodsType
} from './AcquisitionMethods';
import { AssetSortings, AssetSortingsType } from './AssetSortings';
import {
  AssetConsumptionUnits,
  AssetConsumptionUnitsType
} from './AssetConsumptionUnits';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';
import {
  DepreciationProfiles,
  DepreciationProfilesType
} from './DepreciationProfiles';
import {
  ConsumptionFactors,
  ConsumptionFactorsType
} from './ConsumptionFactors';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  AssetProvisionTypes,
  AssetProvisionTypesType
} from './AssetProvisionTypes';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  FixedAssetBookSpecialDepreciationAllowances,
  FixedAssetBookSpecialDepreciationAllowancesType
} from './FixedAssetBookSpecialDepreciationAllowances';

/**
 * This class represents the entity "FixedAssetBooksV2" of service "d365_metadata".
 */
export class FixedAssetBooksV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FixedAssetBooksV2Type<T>
{
  /**
   * Technical entity name for FixedAssetBooksV2.
   */
  static override _entityName = 'FixedAssetBooksV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetBooksV2 entity.
   */
  static _keys = ['dataAreaId', 'FixedAssetNumber', 'BookId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Number.
   */
  declare fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Life Years.
   */
  declare serviceLifeYears: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Net Book Value Higher Than Acquisition Costs.
   * @nullable
   */
  declare allowNetBookValueHigherThanAcquisitionCosts?: NoYes | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Group Id.
   * @nullable
   */
  declare revaluationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Depreciation Run Date.
   */
  declare specialDepreciationRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expected Scrap Value Reporting Currency.
   */
  declare expectedScrapValueReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Posting Profile Id.
   * @nullable
   */
  declare postingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Low Value Pool Transfer Id.
   * @nullable
   */
  declare lowValuePoolTransferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Group Id W.
   * @nullable
   */
  declare depreciationGroupIdW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Migrated Asset.
   * @nullable
   */
  declare isMigratedAsset?: NoYes | null;
  /**
   * Calculate Depreciation.
   * @nullable
   */
  declare calculateDepreciation?: NoYes | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: AssetStatus | null;
  /**
   * Derogatory Tax Model.
   * @nullable
   */
  declare derogatoryTaxModel?: NoYes | null;
  /**
   * Summarize By Major Type.
   * @nullable
   */
  declare summarizeByMajorType?: NoYes | null;
  /**
   * Acquisition Price.
   */
  declare acquisitionPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Periods.
   */
  declare depreciationPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Special Depreciation Allocation Start Convention.
   * @nullable
   */
  declare specialDepreciationAllocationStartConvention?: AssetSpecialDepAllocationConventionJp | null;
  /**
   * Derogatory Calculation.
   * @nullable
   */
  declare derogatoryCalculation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Unit Depreciation Reporting Currency.
   */
  declare consumptionUnitDepreciationReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Acquisition Method Id.
   * @nullable
   */
  declare acquisitionMethodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposal Date.
   */
  declare disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expected Scrap Value.
   */
  declare expectedScrapValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Value.
   */
  declare salesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Placed In Service.
   */
  declare placedInService: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Unit Depreciation.
   */
  declare consumptionUnitDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Life.
   */
  declare serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sort Field 2 Id.
   * @nullable
   */
  declare sortField2Id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Positive Depreciation.
   * @nullable
   */
  declare isPositiveDepreciation?: NoYes | null;
  /**
   * Revised Acquisition Cost Start Date.
   */
  declare revisedAcquisitionCostStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Create Depreciation Adjustments With Basis Adjustments.
   * @nullable
   */
  declare createDepreciationAdjustmentsWithBasisAdjustments?: NoYes | null;
  /**
   * Special Depreciation Allocation Unit.
   * @nullable
   */
  declare specialDepreciationAllocationUnit?: AssetAccrualFiscal | null;
  /**
   * Reducing Balance Straight Line Factor.
   */
  declare reducingBalanceStraightLineFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Invoice.
   * @nullable
   */
  declare vendorInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Asset Group Depreciation.
   * @nullable
   */
  declare isAssetGroupDepreciation?: NoYes | null;
  /**
   * Extraordinary Depreciation Last Run Date.
   */
  declare extraordinaryDepreciationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Purchase Order.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Provision Type.
   * @nullable
   */
  declare provisionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Depreciation Allocation Last Run Date.
   */
  declare specialDepreciationAllocationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Depreciation Periods Remaining.
   */
  declare depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reducing Balance Check Maximum Percent.
   * @nullable
   */
  declare reducingBalanceCheckMaximumPercent?: NoYes | null;
  /**
   * Acquisition Method Description.
   * @nullable
   */
  declare acquisitionMethodDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sort Field 3 Id.
   * @nullable
   */
  declare sortField3Id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revised Acquisition Cost.
   */
  declare revisedAcquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Run Date.
   */
  declare depreciationRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shortened Useful Life.
   * @nullable
   */
  declare shortenedUsefulLife?: NoYes | null;
  /**
   * Consumption Unit Id.
   * @nullable
   */
  declare consumptionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Depreciation Profile Id.
   * @nullable
   */
  declare alternativeDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sort Field 1 Id.
   * @nullable
   */
  declare sortField1Id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Negative Net Book Value.
   * @nullable
   */
  declare allowNegativeNetBookValue?: NoYes | null;
  /**
   * Reducing Balance Percentage After Validation.
   */
  declare reducingBalancePercentageAfterValidation: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Accelerated Depreciation Last Run Date.
   */
  declare acceleratedDepreciationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Depreciation Profile Id.
   * @nullable
   */
  declare depreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowable Limit For Accumulated Depreciation.
   * @nullable
   */
  declare allowableLimitForAccumulatedDepreciation?: AssetLimitForAccumulatedDepTypeJp | null;
  /**
   * Depreciation Last Run Date.
   */
  declare depreciationLastRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Replacement Date.
   */
  declare replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Invoice.
   * @nullable
   */
  declare customerInvoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extraordinary Depreciation Profile Id.
   * @nullable
   */
  declare extraordinaryDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Equally Divided Start Date.
   */
  declare equallyDividedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Allow Depreciation When Placed In Service And Disposal Are In The Same Fiscal Year.
   * @nullable
   */
  declare allowDepreciationWhenPlacedInServiceAndDisposalAreInTheSameFiscalYear?: NoYes | null;
  /**
   * Reduction Entry Allocation Start Date.
   */
  declare reductionEntryAllocationStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Accelerated Depreciation Profile Id.
   * @nullable
   */
  declare acceleratedDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Allow Depreciation Adj Same Date.
   * @nullable
   */
  declare isAllowDepreciationAdjSameDate?: NoYes | null;
  /**
   * Special Depreciation Allocation Periods.
   */
  declare specialDepreciationAllocationPeriods: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Acquisition Price Reporting Currency.
   */
  declare acquisitionPriceReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fair Value.
   */
  declare fairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Estimated.
   */
  declare consumptionEstimated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Asset Group Id.
   * @nullable
   */
  declare fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Convention.
   * @nullable
   */
  declare depreciationConvention?: AssetDepreciationConvention | null;
  /**
   * Service Life Months.
   */
  declare serviceLifeMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reduction Entry Allocation Last Run Date.
   */
  declare reductionEntryAllocationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Low Value Pool Transfer Date.
   */
  declare lowValuePoolTransferDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Factor Id.
   * @nullable
   */
  declare consumptionFactorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Lease Lease Book Type.
   * @nullable
   */
  declare assetLeaseLeaseBookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Lease Lease Id.
   * @nullable
   */
  declare assetLeaseLeaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLine?: VendInvoiceJournalLines<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare assetBookV2Vendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AcquisitionMethods} entity.
   */
  declare assetBookV2AcquisitionMethod?: AcquisitionMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSortings} entity.
   */
  declare assetBookV2SortField2?: AssetSortings<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetConsumptionUnits} entity.
   */
  declare assetBookV2ConsumptionUnit?: AssetConsumptionUnits<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetBookV2Group?: FixedAssetGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetBookV2AcceleratedDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetBookV2DepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link ConsumptionFactors} entity.
   */
  declare assetBookV2ConsumptionFactor?: ConsumptionFactors<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSortings} entity.
   */
  declare assetBookV2SortField1?: AssetSortings<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSortings} entity.
   */
  declare assetBookV2SortField3?: AssetSortings<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetBookV2ExtraordinaryDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetProvisionTypes} entity.
   */
  declare assetProvisionType?: AssetProvisionTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetBookV2AssetBookId?: ValueModelSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare assetBookV2Customer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetBookV2AlternativeDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetProvisionTypes} entity.
   */
  declare assetBookV2ProvisionType?: AssetProvisionTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetBookSpecialDepreciationAllowances} entity.
   */
  declare fixedAssetBookSpecialDepreciationAllowance: FixedAssetBookSpecialDepreciationAllowances<T>[];

  constructor(_entityApi: FixedAssetBooksV2Api<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetBooksV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  serviceLifeYears: DeserializedType<T, 'Edm.Int32'>;
  allowNetBookValueHigherThanAcquisitionCosts?: NoYes | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  revaluationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expectedScrapValueReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  postingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  lowValuePoolTransferId?: DeserializedType<T, 'Edm.String'> | null;
  depreciationGroupIdW?: DeserializedType<T, 'Edm.String'> | null;
  isMigratedAsset?: NoYes | null;
  calculateDepreciation?: NoYes | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  status?: AssetStatus | null;
  derogatoryTaxModel?: NoYes | null;
  summarizeByMajorType?: NoYes | null;
  acquisitionPrice: DeserializedType<T, 'Edm.Decimal'>;
  depreciationPeriods: DeserializedType<T, 'Edm.Int32'>;
  specialDepreciationAllocationStartConvention?: AssetSpecialDepAllocationConventionJp | null;
  derogatoryCalculation?: DeserializedType<T, 'Edm.String'> | null;
  consumptionUnitDepreciationReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  acquisitionMethodId?: DeserializedType<T, 'Edm.String'> | null;
  disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expectedScrapValue: DeserializedType<T, 'Edm.Decimal'>;
  salesValue: DeserializedType<T, 'Edm.Decimal'>;
  placedInService: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionUnitDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  sortField2Id?: DeserializedType<T, 'Edm.String'> | null;
  isPositiveDepreciation?: NoYes | null;
  revisedAcquisitionCostStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createDepreciationAdjustmentsWithBasisAdjustments?: NoYes | null;
  specialDepreciationAllocationUnit?: AssetAccrualFiscal | null;
  reducingBalanceStraightLineFactor: DeserializedType<T, 'Edm.Decimal'>;
  vendorInvoice?: DeserializedType<T, 'Edm.String'> | null;
  isAssetGroupDepreciation?: NoYes | null;
  extraordinaryDepreciationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  provisionType?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationAllocationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  depreciationPeriodsRemaining: DeserializedType<T, 'Edm.Decimal'>;
  reducingBalanceCheckMaximumPercent?: NoYes | null;
  acquisitionMethodDescription?: DeserializedType<T, 'Edm.String'> | null;
  sortField3Id?: DeserializedType<T, 'Edm.String'> | null;
  revisedAcquisitionCost: DeserializedType<T, 'Edm.Decimal'>;
  depreciationRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shortenedUsefulLife?: NoYes | null;
  consumptionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  sortField1Id?: DeserializedType<T, 'Edm.String'> | null;
  allowNegativeNetBookValue?: NoYes | null;
  reducingBalancePercentageAfterValidation: DeserializedType<T, 'Edm.Decimal'>;
  acceleratedDepreciationLastRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  depreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  allowableLimitForAccumulatedDepreciation?: AssetLimitForAccumulatedDepTypeJp | null;
  depreciationLastRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerInvoice?: DeserializedType<T, 'Edm.String'> | null;
  extraordinaryDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  equallyDividedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allowDepreciationWhenPlacedInServiceAndDisposalAreInTheSameFiscalYear?: NoYes | null;
  reductionEntryAllocationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  acceleratedDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isAllowDepreciationAdjSameDate?: NoYes | null;
  specialDepreciationAllocationPeriods: DeserializedType<T, 'Edm.Int32'>;
  acquisitionPriceReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  fairValue: DeserializedType<T, 'Edm.Decimal'>;
  consumptionEstimated: DeserializedType<T, 'Edm.Decimal'>;
  fixedAssetGroupId?: DeserializedType<T, 'Edm.String'> | null;
  depreciationConvention?: AssetDepreciationConvention | null;
  serviceLifeMonths: DeserializedType<T, 'Edm.Int32'>;
  reductionEntryAllocationLastRunDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  lowValuePoolTransferDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionFactorId?: DeserializedType<T, 'Edm.String'> | null;
  assetLeaseLeaseBookType?: DeserializedType<T, 'Edm.String'> | null;
  assetLeaseLeaseId?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceJournalLine?: VendInvoiceJournalLinesType<T> | null;
  assetBookV2Vendor?: VendorsV2Type<T> | null;
  assetBookV2AcquisitionMethod?: AcquisitionMethodsType<T> | null;
  assetBookV2SortField2?: AssetSortingsType<T> | null;
  assetBookV2ConsumptionUnit?: AssetConsumptionUnitsType<T> | null;
  assetBookV2Group?: FixedAssetGroupsType<T> | null;
  assetBookV2AcceleratedDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetBookV2DepreciationProfile?: DepreciationProfilesType<T> | null;
  assetBookV2ConsumptionFactor?: ConsumptionFactorsType<T> | null;
  assetBookV2SortField1?: AssetSortingsType<T> | null;
  assetBookV2SortField3?: AssetSortingsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  assetBookV2ExtraordinaryDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetProvisionType?: AssetProvisionTypesType<T> | null;
  assetBookV2AssetBookId?: ValueModelSetupsType<T> | null;
  assetBookV2Customer?: CustomersV3Type<T> | null;
  assetBookV2AlternativeDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetBookV2ProvisionType?: AssetProvisionTypesType<T> | null;
  fixedAssetBookSpecialDepreciationAllowance: FixedAssetBookSpecialDepreciationAllowancesType<T>[];
}

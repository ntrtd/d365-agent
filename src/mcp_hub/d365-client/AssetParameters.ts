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
import type { AssetParametersApi } from './AssetParametersApi';
import { NoYes } from './NoYes';
import { AssetSaleBasisIn } from './AssetSaleBasisIn';
import { AssetDepreciationCatchUpIntervalJp } from './AssetDepreciationCatchUpIntervalJp';
import { AssetAssemblingReservation } from './AssetAssemblingReservation';
import { AssetAccountingStandardJp } from './AssetAccountingStandardJp';
import { AssetAcceleratedDepCalcMethodJp } from './AssetAcceleratedDepCalcMethodJp';
import {
  AssetParametersProposalJournalNames,
  AssetParametersProposalJournalNamesType
} from './AssetParametersProposalJournalNames';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';
import {
  FixedAssetPostingProfiles,
  FixedAssetPostingProfilesType
} from './FixedAssetPostingProfiles';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "AssetParameters" of service "d365_metadata".
 */
export class AssetParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetParametersType<T>
{
  /**
   * Technical entity name for AssetParameters.
   */
  static override _entityName = 'AssetParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Auto Number Assets.
   * @nullable
   */
  declare autoNumberAssets?: NoYes | null;
  /**
   * Inventory Journal Id.
   * @nullable
   */
  declare inventoryJournalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduct Cash Discount.
   * @nullable
   */
  declare deductCashDiscount?: NoYes | null;
  /**
   * Max Books In Acquisition Proposal Journal.
   */
  declare maxBooksInAcquisitionProposalJournal: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Use Special Depreciation Balance.
   * @nullable
   */
  declare useSpecialDepreciationBalance?: NoYes | null;
  /**
   * Asset Sale Basis.
   * @nullable
   */
  declare assetSaleBasis?: AssetSaleBasisIn | null;
  /**
   * Accelerated Depreciation Rate Threshold.
   */
  declare acceleratedDepreciationRateThreshold: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Write Up Adjustment.
   * @nullable
   */
  declare writeUpAdjustment?: NoYes | null;
  /**
   * Posting Profile Id.
   * @nullable
   */
  declare postingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Provision For Reserve.
   * @nullable
   */
  declare provisionForReserve?: NoYes | null;
  /**
   * Bar Code Equals Fixed Asset Number.
   * @nullable
   */
  declare barCodeEqualsFixedAssetNumber?: NoYes | null;
  /**
   * Asset Group Depreciation Threshold.
   */
  declare assetGroupDepreciationThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculate Prorated Depreciation.
   * @nullable
   */
  declare calculateProratedDepreciation?: NoYes | null;
  /**
   * Max Acquisition Value To Avail Full Depreciation.
   */
  declare maxAcquisitionValueToAvailFullDepreciation: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Income Tax Act Depreciation.
   * @nullable
   */
  declare isIncomeTaxActDepreciation?: NoYes | null;
  /**
   * Restrict Asset Acquisition Posting To User Group Id.
   * @nullable
   */
  declare restrictAssetAcquisitionPostingToUserGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Create Depreciation Adjustments With Disposal.
   * @nullable
   */
  declare createDepreciationAdjustmentsWithDisposal?: NoYes | null;
  /**
   * Acquisition Adjustment.
   * @nullable
   */
  declare acquisitionAdjustment?: NoYes | null;
  /**
   * Extra Ordinary Depreciation.
   * @nullable
   */
  declare extraOrdinaryDepreciation?: NoYes | null;
  /**
   * Revaluation.
   * @nullable
   */
  declare revaluation?: NoYes | null;
  /**
   * Default Value Model Id.
   * @nullable
   */
  declare defaultValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition.
   * @nullable
   */
  declare acquisition?: NoYes | null;
  /**
   * Depreciation Threshold Percentage.
   */
  declare depreciationThresholdPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Depreciation Policy Enabled.
   * @nullable
   */
  declare isDepreciationPolicyEnabled?: NoYes | null;
  /**
   * Min Working Days For Non Seasonal Industries.
   */
  declare minWorkingDaysForNonSeasonalIndustries: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Are Depreciation Methods Enabled.
   * @nullable
   */
  declare areDepreciationMethodsEnabled?: NoYes | null;
  /**
   * Capitalization Threshold.
   */
  declare capitalizationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disposal Sale.
   * @nullable
   */
  declare disposalSale?: NoYes | null;
  /**
   * Icms Credit Installments.
   */
  declare icmsCreditInstallments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transfer From Reserve.
   * @nullable
   */
  declare transferFromReserve?: NoYes | null;
  /**
   * Derogatory Decrease.
   * @nullable
   */
  declare derogatoryDecrease?: NoYes | null;
  /**
   * Depreciation Catch Up Interval.
   * @nullable
   */
  declare depreciationCatchUpInterval?: AssetDepreciationCatchUpIntervalJp | null;
  /**
   * Inventory Assemble And Disassemble.
   * @nullable
   */
  declare inventoryAssembleAndDisassemble?: NoYes | null;
  /**
   * Allow The Depreciation Method To Be Manually Changed.
   * @nullable
   */
  declare allowTheDepreciationMethodToBeManuallyChanged?: NoYes | null;
  /**
   * Minimum Depreciation Amount.
   */
  declare minimumDepreciationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Depreciation Amount Reporting Currency.
   */
  declare minimumDepreciationAmountReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Allow Location Transfer.
   * @nullable
   */
  declare allowLocationTransfer?: NoYes | null;
  /**
   * Check For Asset Creation During Line Entry.
   * @nullable
   */
  declare checkForAssetCreationDuringLineEntry?: NoYes | null;
  /**
   * Require Reasons For Asset Changes.
   * @nullable
   */
  declare requireReasonsForAssetChanges?: NoYes | null;
  /**
   * Disposal Scrap.
   * @nullable
   */
  declare disposalScrap?: NoYes | null;
  /**
   * Is Companies Act Depreciation.
   * @nullable
   */
  declare isCompaniesActDepreciation?: NoYes | null;
  /**
   * Assembling Reservation Type.
   * @nullable
   */
  declare assemblingReservationType?: AssetAssemblingReservation | null;
  /**
   * Accounting Standard.
   * @nullable
   */
  declare accountingStandard?: AssetAccountingStandardJp | null;
  /**
   * Depreciation Adjustment.
   * @nullable
   */
  declare depreciationAdjustment?: NoYes | null;
  /**
   * Impairment Warning Period.
   */
  declare impairmentWarningPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Maximum Percentage For Reducing Balance.
   * @nullable
   */
  declare checkMaximumPercentageForReducingBalance?: NoYes | null;
  /**
   * Write Down Adjustment.
   * @nullable
   */
  declare writeDownAdjustment?: NoYes | null;
  /**
   * Use Catch Up Method.
   * @nullable
   */
  declare useCatchUpMethod?: NoYes | null;
  /**
   * Accelerated Depreciation Calculation Method.
   * @nullable
   */
  declare acceleratedDepreciationCalculationMethod?: AssetAcceleratedDepCalcMethodJp | null;
  /**
   * Max Books In Depreciation Proposal Journal.
   */
  declare maxBooksInDepreciationProposalJournal: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Allow Multiple Acquisitions.
   * @nullable
   */
  declare allowMultipleAcquisitions?: NoYes | null;
  /**
   * Max Books In Sum Depreciation Proposal Journal.
   */
  declare maxBooksInSumDepreciationProposalJournal: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Account For Untransferred Reserves Display Value.
   * @nullable
   */
  declare accountForUntransferredReservesDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accelerated Depreciation Rate Factor.
   */
  declare acceleratedDepreciationRateFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Create Asset During Receipt Or Invoice Posting.
   * @nullable
   */
  declare createAssetDuringReceiptOrInvoicePosting?: NoYes | null;
  /**
   * Consider Capitalization Threshold.
   * @nullable
   */
  declare considerCapitalizationThreshold?: NoYes | null;
  /**
   * Min Working Days For Seasonal Industries.
   */
  declare minWorkingDaysForSeasonalIndustries: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Acquisition From Purchasing.
   * @nullable
   */
  declare allowAcquisitionFromPurchasing?: NoYes | null;
  /**
   * Depreciation.
   * @nullable
   */
  declare depreciation?: NoYes | null;
  /**
   * Derogatory Increase.
   * @nullable
   */
  declare derogatoryIncrease?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AssetParametersProposalJournalNames} entity.
   */
  declare assetParameterProposalJournalNameParameters: AssetParametersProposalJournalNames<T>[];
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetParmeterDefaultValueModel?: ValueModelSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetPostingProfiles} entity.
   */
  declare fixedAssetPostingProfile?: FixedAssetPostingProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: AssetParametersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  autoNumberAssets?: NoYes | null;
  inventoryJournalId?: DeserializedType<T, 'Edm.String'> | null;
  deductCashDiscount?: NoYes | null;
  maxBooksInAcquisitionProposalJournal: DeserializedType<T, 'Edm.Int32'>;
  useSpecialDepreciationBalance?: NoYes | null;
  assetSaleBasis?: AssetSaleBasisIn | null;
  acceleratedDepreciationRateThreshold: DeserializedType<T, 'Edm.Decimal'>;
  writeUpAdjustment?: NoYes | null;
  postingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  provisionForReserve?: NoYes | null;
  barCodeEqualsFixedAssetNumber?: NoYes | null;
  assetGroupDepreciationThreshold: DeserializedType<T, 'Edm.Int32'>;
  calculateProratedDepreciation?: NoYes | null;
  maxAcquisitionValueToAvailFullDepreciation: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  isIncomeTaxActDepreciation?: NoYes | null;
  restrictAssetAcquisitionPostingToUserGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  createDepreciationAdjustmentsWithDisposal?: NoYes | null;
  acquisitionAdjustment?: NoYes | null;
  extraOrdinaryDepreciation?: NoYes | null;
  revaluation?: NoYes | null;
  defaultValueModelId?: DeserializedType<T, 'Edm.String'> | null;
  acquisition?: NoYes | null;
  depreciationThresholdPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isDepreciationPolicyEnabled?: NoYes | null;
  minWorkingDaysForNonSeasonalIndustries: DeserializedType<T, 'Edm.Int32'>;
  areDepreciationMethodsEnabled?: NoYes | null;
  capitalizationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  disposalSale?: NoYes | null;
  icmsCreditInstallments: DeserializedType<T, 'Edm.Int32'>;
  transferFromReserve?: NoYes | null;
  derogatoryDecrease?: NoYes | null;
  depreciationCatchUpInterval?: AssetDepreciationCatchUpIntervalJp | null;
  inventoryAssembleAndDisassemble?: NoYes | null;
  allowTheDepreciationMethodToBeManuallyChanged?: NoYes | null;
  minimumDepreciationAmount: DeserializedType<T, 'Edm.Decimal'>;
  minimumDepreciationAmountReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  allowLocationTransfer?: NoYes | null;
  checkForAssetCreationDuringLineEntry?: NoYes | null;
  requireReasonsForAssetChanges?: NoYes | null;
  disposalScrap?: NoYes | null;
  isCompaniesActDepreciation?: NoYes | null;
  assemblingReservationType?: AssetAssemblingReservation | null;
  accountingStandard?: AssetAccountingStandardJp | null;
  depreciationAdjustment?: NoYes | null;
  impairmentWarningPeriod: DeserializedType<T, 'Edm.Int32'>;
  checkMaximumPercentageForReducingBalance?: NoYes | null;
  writeDownAdjustment?: NoYes | null;
  useCatchUpMethod?: NoYes | null;
  acceleratedDepreciationCalculationMethod?: AssetAcceleratedDepCalcMethodJp | null;
  maxBooksInDepreciationProposalJournal: DeserializedType<T, 'Edm.Int32'>;
  allowMultipleAcquisitions?: NoYes | null;
  maxBooksInSumDepreciationProposalJournal: DeserializedType<T, 'Edm.Int32'>;
  accountForUntransferredReservesDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  acceleratedDepreciationRateFactor: DeserializedType<T, 'Edm.Decimal'>;
  createAssetDuringReceiptOrInvoicePosting?: NoYes | null;
  considerCapitalizationThreshold?: NoYes | null;
  minWorkingDaysForSeasonalIndustries: DeserializedType<T, 'Edm.Int32'>;
  allowAcquisitionFromPurchasing?: NoYes | null;
  depreciation?: NoYes | null;
  derogatoryIncrease?: NoYes | null;
  assetParameterProposalJournalNameParameters: AssetParametersProposalJournalNamesType<T>[];
  assetParmeterDefaultValueModel?: ValueModelSetupsType<T> | null;
  fixedAssetPostingProfile?: FixedAssetPostingProfilesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}

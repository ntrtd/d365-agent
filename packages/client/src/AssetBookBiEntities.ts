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
import type { AssetBookBiEntitiesApi } from './AssetBookBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
import { AssetStatus } from './AssetStatus';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
import { PlAssetCostAccountingType } from './PlAssetCostAccountingType';

/**
 * This class represents the entity "AssetBookBiEntities" of service "d365_metadata".
 */
export class AssetBookBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetBookBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetBookBiEntities.
   */
  static override _entityName = 'AssetBookBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetBookBiEntities entity.
   */
  static _keys = ['dataAreaId', 'AssetId', 'BookId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Id.
   */
  declare assetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Amount Unit.
   */
  declare depreciationAmountUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lvp Transfer Date Au.
   */
  declare lvpTransferDateAu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage Pl.
   */
  declare percentagePl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Group Depreciation In.
   * @nullable
   */
  declare assetGroupDepreciationIn?: NoYes | null;
  /**
   * Service Life.
   */
  declare serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sorting Id.
   * @nullable
   */
  declare sortingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Categorization Date Cz.
   */
  declare categorizationDateCz: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Negative Net Book Value.
   * @nullable
   */
  declare negativeNetBookValue?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Due From Psn.
   */
  declare dueFromPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Special Dep Allocation Unit Jp.
   * @nullable
   */
  declare specialDepAllocationUnitJp?: AssetAccrualFiscal | null;
  /**
   * Depreciation Group Id W.
   * @nullable
   */
  declare depreciationGroupIdW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Derogatory Book Fr.
   * @nullable
   */
  declare isDerogatoryBookFr?: NoYes | null;
  /**
   * Last Reserve Allocation Date Jp.
   */
  declare lastReserveAllocationDateJp: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Consumption Unit Id.
   * @nullable
   */
  declare consumptionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depr Prev Periods Non Cost Pl.
   */
  declare deprPrevPeriodsNonCostPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Alt Profile.
   * @nullable
   */
  declare depreciationAltProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Profile.
   * @nullable
   */
  declare depreciationProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Derogatory Model Fr.
   * @nullable
   */
  declare assetDerogatoryModelFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Date.
   */
  declare replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Revaluation Group Id.
   * @nullable
   */
  declare revaluationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Depr Prev Prior Cost Pl.
   */
  declare deprPrevPriorCostPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sorting Id 2.
   * @nullable
   */
  declare sortingId2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Invoice Id.
   * @nullable
   */
  declare custInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Ext Profile.
   * @nullable
   */
  declare depreciationExtProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Start Date Jp.
   */
  declare allocationStartDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Due To Psn.
   */
  declare dueToPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Depreciation Start Date.
   */
  declare depreciationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Depreciation Date.
   */
  declare lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Time.
   */
  declare lifeTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Max Percent Rb.
   */
  declare maxPercentRb: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exceeding Net Book Value.
   * @nullable
   */
  declare exceedingNetBookValue?: NoYes | null;
  /**
   * Depr Prev Periods Pl.
   */
  declare deprPrevPeriodsPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Revised Acquisition Cost Jp.
   */
  declare assetRevisedAcquisitionCostJp: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Lease Lease Book Type.
   * @nullable
   */
  declare assetLeaseLeaseBookType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Convention.
   * @nullable
   */
  declare depreciationConvention?: AssetDepreciationConvention | null;
  /**
   * Equally Divided Start Date Jp.
   */
  declare equallyDividedStartDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Time Rest.
   */
  declare lifeTimeRest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Acquisition Method.
   * @nullable
   */
  declare acquisitionMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lvp Transfer Id Au.
   * @nullable
   */
  declare lvpTransferIdAu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rbsl Factor.
   */
  declare rbslFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Acquisition Price.
   */
  declare acquisitionPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Acquisition Price Reporting Currency.
   */
  declare acquisitionPriceReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Positive Depreciation.
   * @nullable
   */
  declare isPositiveDepreciation?: NoYes | null;
  /**
   * Consumption Factor Id.
   * @nullable
   */
  declare consumptionFactorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Allow Depreciation Adj Same Date.
   * @nullable
   */
  declare isAllowDepreciationAdjSameDate?: NoYes | null;
  /**
   * Special Dep Allocation Periods Jp.
   */
  declare specialDepAllocationPeriodsJp: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Special Dep Start Date Jp.
   */
  declare specialDepStartDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scrap Value Reporting Currency.
   */
  declare scrapValueReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Purchase Date Pl.
   */
  declare assetPurchaseDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reserve Type Id.
   * @nullable
   */
  declare reserveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is True Up Depreciation.
   * @nullable
   */
  declare isTrueUpDepreciation?: NoYes | null;
  /**
   * Special Dep Last Allocation Date Jp.
   */
  declare specialDepLastAllocationDateJp: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage Alt Pl.
   */
  declare percentageAltPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Invoice Id.
   * @nullable
   */
  declare vendInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Summarize By Major Type Jp.
   * @nullable
   */
  declare summarizeByMajorTypeJp?: NoYes | null;
  /**
   * Service Life Months Fr.
   */
  declare serviceLifeMonthsFr: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Asset Group.
   * @nullable
   */
  declare assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: AssetStatus | null;
  /**
   * Service Life Years Fr.
   */
  declare serviceLifeYearsFr: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Percentage Ext Pl.
   */
  declare percentageExtPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Depreciation Date Accelerated Jp.
   */
  declare lastDepreciationDateAcceleratedJp: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Check Max Percent Rb.
   * @nullable
   */
  declare checkMaxPercentRb?: NoYes | null;
  /**
   * Sale Value.
   */
  declare saleValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowable Limit For Accumulated Dep Type Jp.
   * @nullable
   */
  declare allowableLimitForAccumulatedDepTypeJp?: AssetLimitForAccumulatedDepTypeJp | null;
  /**
   * Is Migrated Asset.
   * @nullable
   */
  declare isMigratedAsset?: NoYes | null;
  /**
   * Depr Prev Prior Non Cost Pl.
   */
  declare deprPrevPriorNonCostPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation.
   * @nullable
   */
  declare depreciation?: NoYes | null;
  /**
   * Asset Lease Lease Id.
   * @nullable
   */
  declare assetLeaseLeaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposal Date.
   */
  declare disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Shortening Useful Life Jp.
   * @nullable
   */
  declare isShorteningUsefulLifeJp?: NoYes | null;
  /**
   * Special Dep Allocation Convention Jp.
   * @nullable
   */
  declare specialDepAllocationConventionJp?: AssetSpecialDepAllocationConventionJp | null;
  /**
   * Scrap Value.
   */
  declare scrapValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Depreciation Date Extra Ord.
   */
  declare lastDepreciationDateExtraOrd: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Sorting Id 3.
   * @nullable
   */
  declare sortingId3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Acquisition Date In.
   */
  declare origAcquisitionDateIn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Asset Revised Acquisition Cost Start Date Jp.
   */
  declare assetRevisedAcquisitionCostStartDateJp: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Asset Cost Accounting Type Pl.
   * @nullable
   */
  declare assetCostAccountingTypePl?: PlAssetCostAccountingType | null;
  /**
   * Asset Fair Value.
   */
  declare assetFairValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Amount Unit Reporting Currency.
   */
  declare depreciationAmountUnitReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Used From Date.
   */
  declare usedFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Qty Estimated.
   */
  declare consumptionQtyEstimated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Disposal Same Year.
   * @nullable
   */
  declare isDisposalSameYear?: NoYes | null;
  /**
   * Depreciation Accelerated Profile Jp.
   * @nullable
   */
  declare depreciationAcceleratedProfileJp?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: AssetBookBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetBookBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetId: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  depreciationAmountUnit: DeserializedType<T, 'Edm.Decimal'>;
  lvpTransferDateAu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  percentagePl: DeserializedType<T, 'Edm.Decimal'>;
  assetGroupDepreciationIn?: NoYes | null;
  serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  sortingId?: DeserializedType<T, 'Edm.String'> | null;
  categorizationDateCz: DeserializedType<T, 'Edm.DateTimeOffset'>;
  negativeNetBookValue?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  dueFromPsn: DeserializedType<T, 'Edm.Int64'>;
  specialDepAllocationUnitJp?: AssetAccrualFiscal | null;
  depreciationGroupIdW?: DeserializedType<T, 'Edm.String'> | null;
  isDerogatoryBookFr?: NoYes | null;
  lastReserveAllocationDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  deprPrevPeriodsNonCostPl: DeserializedType<T, 'Edm.Decimal'>;
  depreciationAltProfile?: DeserializedType<T, 'Edm.String'> | null;
  depreciationProfile?: DeserializedType<T, 'Edm.String'> | null;
  assetDerogatoryModelFr?: DeserializedType<T, 'Edm.String'> | null;
  replacementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  revaluationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deprPrevPriorCostPl: DeserializedType<T, 'Edm.Decimal'>;
  sortingId2?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  depreciationExtProfile?: DeserializedType<T, 'Edm.String'> | null;
  allocationStartDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueToPsn: DeserializedType<T, 'Edm.Int64'>;
  depreciationStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastDepreciationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeTime: DeserializedType<T, 'Edm.Int32'>;
  maxPercentRb: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  exceedingNetBookValue?: NoYes | null;
  deprPrevPeriodsPl: DeserializedType<T, 'Edm.Decimal'>;
  assetRevisedAcquisitionCostJp: DeserializedType<T, 'Edm.Decimal'>;
  assetLeaseLeaseBookType?: DeserializedType<T, 'Edm.String'> | null;
  depreciationConvention?: AssetDepreciationConvention | null;
  equallyDividedStartDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeTimeRest: DeserializedType<T, 'Edm.Decimal'>;
  acquisitionMethod?: DeserializedType<T, 'Edm.String'> | null;
  lvpTransferIdAu?: DeserializedType<T, 'Edm.String'> | null;
  rbslFactor: DeserializedType<T, 'Edm.Decimal'>;
  acquisitionPrice: DeserializedType<T, 'Edm.Decimal'>;
  acquisitionPriceReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  isPositiveDepreciation?: NoYes | null;
  consumptionFactorId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  isAllowDepreciationAdjSameDate?: NoYes | null;
  specialDepAllocationPeriodsJp: DeserializedType<T, 'Edm.Int32'>;
  specialDepStartDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scrapValueReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  assetPurchaseDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reserveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  isTrueUpDepreciation?: NoYes | null;
  specialDepLastAllocationDateJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  percentageAltPl: DeserializedType<T, 'Edm.Decimal'>;
  vendInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  summarizeByMajorTypeJp?: NoYes | null;
  serviceLifeMonthsFr: DeserializedType<T, 'Edm.Int32'>;
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  status?: AssetStatus | null;
  serviceLifeYearsFr: DeserializedType<T, 'Edm.Int32'>;
  percentageExtPl: DeserializedType<T, 'Edm.Decimal'>;
  lastDepreciationDateAcceleratedJp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  checkMaxPercentRb?: NoYes | null;
  saleValue: DeserializedType<T, 'Edm.Decimal'>;
  allowableLimitForAccumulatedDepTypeJp?: AssetLimitForAccumulatedDepTypeJp | null;
  isMigratedAsset?: NoYes | null;
  deprPrevPriorNonCostPl: DeserializedType<T, 'Edm.Decimal'>;
  depreciation?: NoYes | null;
  assetLeaseLeaseId?: DeserializedType<T, 'Edm.String'> | null;
  disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isShorteningUsefulLifeJp?: NoYes | null;
  specialDepAllocationConventionJp?: AssetSpecialDepAllocationConventionJp | null;
  scrapValue: DeserializedType<T, 'Edm.Decimal'>;
  lastDepreciationDateExtraOrd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sortingId3?: DeserializedType<T, 'Edm.String'> | null;
  origAcquisitionDateIn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assetRevisedAcquisitionCostStartDateJp: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  assetCostAccountingTypePl?: PlAssetCostAccountingType | null;
  assetFairValue: DeserializedType<T, 'Edm.Decimal'>;
  depreciationAmountUnitReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  usedFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionQtyEstimated: DeserializedType<T, 'Edm.Decimal'>;
  isDisposalSameYear?: NoYes | null;
  depreciationAcceleratedProfileJp?: DeserializedType<T, 'Edm.String'> | null;
}

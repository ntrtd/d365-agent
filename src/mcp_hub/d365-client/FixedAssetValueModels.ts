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
import type { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { NoYes } from './NoYes';
import { AssetStatus } from './AssetStatus';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
import {
  DepreciationProfiles,
  DepreciationProfilesType
} from './DepreciationProfiles';
import {
  AssetProvisionTypes,
  AssetProvisionTypesType
} from './AssetProvisionTypes';
import { AssetSortings, AssetSortingsType } from './AssetSortings';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';
import {
  AcquisitionMethods,
  AcquisitionMethodsType
} from './AcquisitionMethods';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  AssetConsumptionUnits,
  AssetConsumptionUnitsType
} from './AssetConsumptionUnits';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';
import { Vendors, VendorsType } from './Vendors';
import {
  ConsumptionFactors,
  ConsumptionFactorsType
} from './ConsumptionFactors';

/**
 * This class represents the entity "FixedAssetValueModels" of service "d365_metadata".
 */
export class FixedAssetValueModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetValueModelsType<T>
{
  /**
   * Technical entity name for FixedAssetValueModels.
   */
  static override _entityName = 'FixedAssetValueModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetValueModels entity.
   */
  static _keys = ['dataAreaId', 'FixedAssetNumber', 'ValueModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Number.
   */
  declare fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model Id.
   */
  declare valueModelId: DeserializedType<T, 'Edm.String'>;
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
   * Special Depreciation Allocation Periods.
   */
  declare specialDepreciationAllocationPeriods: DeserializedType<
    T,
    'Edm.Int32'
  >;
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
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetAlternativeDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetProvisionTypes} entity.
   */
  declare assetProvisionType?: AssetProvisionTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetProvisionTypes} entity.
   */
  declare assetValueModelProvisionType?: AssetProvisionTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSortings} entity.
   */
  declare assetValueModelSortField1?: AssetSortings<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetValueModelValueModelId?: ValueModelSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSortings} entity.
   */
  declare assetValueModelSortField3?: AssetSortings<T> | null;
  /**
   * One-to-one navigation property to the {@link AcquisitionMethods} entity.
   */
  declare assetValueModelAcquisitionMethod?: AcquisitionMethods<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare assetValueModelCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetConsumptionUnits} entity.
   */
  declare assetValueModelConsumptionUnit?: AssetConsumptionUnits<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetValueModelAssetGroup?: FixedAssetGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetExtraordinaryDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetAcceleratedDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSortings} entity.
   */
  declare assetValueModelSortField2?: AssetSortings<T> | null;
  /**
   * One-to-one navigation property to the {@link Vendors} entity.
   */
  declare assetValueModelVendor?: Vendors<T> | null;
  /**
   * One-to-one navigation property to the {@link ConsumptionFactors} entity.
   */
  declare assetValueModelConsumptionFactor?: ConsumptionFactors<T> | null;

  constructor(_entityApi: FixedAssetValueModelsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetValueModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  valueModelId: DeserializedType<T, 'Edm.String'>;
  serviceLifeYears: DeserializedType<T, 'Edm.Int32'>;
  allowNetBookValueHigherThanAcquisitionCosts?: NoYes | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  revaluationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationRunDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  lowValuePoolTransferId?: DeserializedType<T, 'Edm.String'> | null;
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
  acquisitionMethodId?: DeserializedType<T, 'Edm.String'> | null;
  disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expectedScrapValue: DeserializedType<T, 'Edm.Decimal'>;
  salesValue: DeserializedType<T, 'Edm.Decimal'>;
  placedInService: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionUnitDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  sortField2Id?: DeserializedType<T, 'Edm.String'> | null;
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
  specialDepreciationAllocationPeriods: DeserializedType<T, 'Edm.Int32'>;
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
  assetAlternativeDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetProvisionType?: AssetProvisionTypesType<T> | null;
  assetValueModelProvisionType?: AssetProvisionTypesType<T> | null;
  assetValueModelSortField1?: AssetSortingsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  assetValueModelValueModelId?: ValueModelSetupsType<T> | null;
  assetValueModelSortField3?: AssetSortingsType<T> | null;
  assetValueModelAcquisitionMethod?: AcquisitionMethodsType<T> | null;
  assetValueModelCustomer?: CustomersV3Type<T> | null;
  assetValueModelConsumptionUnit?: AssetConsumptionUnitsType<T> | null;
  assetValueModelAssetGroup?: FixedAssetGroupsType<T> | null;
  assetExtraordinaryDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetAcceleratedDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetValueModelSortField2?: AssetSortingsType<T> | null;
  assetValueModelVendor?: VendorsType<T> | null;
  assetValueModelConsumptionFactor?: ConsumptionFactorsType<T> | null;
}

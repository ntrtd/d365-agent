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
import type { DepreciationProfilesApi } from './DepreciationProfilesApi';
import { AssetDepreciationCalculationBase } from './AssetDepreciationCalculationBase';
import { AssetDepreciationYear } from './AssetDepreciationYear';
import { AssetAccrual } from './AssetAccrual';
import { AssetDepreciationInterval } from './AssetDepreciationInterval';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';
import { NoYes } from './NoYes';
import { AssetSpecialDepAccountingMethodJp } from './AssetSpecialDepAccountingMethodJp';
import {
  DepreciationProfileManualSchedules,
  DepreciationProfileManualSchedulesType
} from './DepreciationProfileManualSchedules';
import {
  FixedAssetGroupValueModelSetups,
  FixedAssetGroupValueModelSetupsType
} from './FixedAssetGroupValueModelSetups';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "DepreciationProfiles" of service "d365_metadata".
 */
export class DepreciationProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DepreciationProfilesType<T>
{
  /**
   * Technical entity name for DepreciationProfiles.
   */
  static override _entityName = 'DepreciationProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationProfiles entity.
   */
  static _keys = ['dataAreaId', 'DepreciationProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Profile Id.
   */
  declare depreciationProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Low Value Pool Min Depreciation Amount.
   */
  declare lowValuePoolMinDepreciationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Low Value Pool Percent First Year.
   */
  declare lowValuePoolPercentFirstYear: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculation Basis.
   * @nullable
   */
  declare calculationBasis?: AssetDepreciationCalculationBase | null;
  /**
   * Depreciation Year.
   * @nullable
   */
  declare depreciationYear?: AssetDepreciationYear | null;
  /**
   * Period Frequency.
   * @nullable
   */
  declare periodFrequency?: AssetAccrual | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetDepreciationInterval | null;
  /**
   * Low Value Pool Low Cost Value.
   */
  declare lowValuePoolLowCostValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Method.
   * @nullable
   */
  declare method?: AssetDepreciationMethod | null;
  /**
   * Full Year Depreciation On Additional Acquisitions.
   * @nullable
   */
  declare fullYearDepreciationOnAdditionalAcquisitions?: NoYes | null;
  /**
   * Depreciation Rate Schedule Description.
   * @nullable
   */
  declare depreciationRateScheduleDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Special Depreciation Apply Number Of Periods.
   */
  declare specialDepreciationApplyNumberOfPeriods: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Equally Split Depreciation Amount 95 Percent Of Acquisition Cost.
   * @nullable
   */
  declare equallySplitDepreciationAmount95PercentOfAcquisitionCost?: NoYes | null;
  /**
   * Special Depreciation Accounting Method.
   * @nullable
   */
  declare specialDepreciationAccountingMethod?: AssetSpecialDepAccountingMethodJp | null;
  /**
   * Full Depreciation.
   * @nullable
   */
  declare fullDepreciation?: NoYes | null;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Special Depreciation Base Ratio.
   */
  declare specialDepreciationBaseRatio: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Shift Depreciation.
   * @nullable
   */
  declare isShiftDepreciation?: NoYes | null;
  /**
   * Depreciation Rate Schedule Name.
   * @nullable
   */
  declare depreciationRateScheduleName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Special Depreciation Rate.
   */
  declare specialDepreciationRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Low Value Pool Percentage.
   */
  declare lowValuePoolPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Years To Equally Divide Depreciation Amounts.
   */
  declare numberOfYearsToEquallyDivideDepreciationAmounts: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * One-to-many navigation property to the {@link DepreciationProfileManualSchedules} entity.
   */
  declare depreciationProfileIdManualSchedule: DepreciationProfileManualSchedules<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupValueModelSetups} entity.
   */
  declare assetGroupValueModelSetupExtraordinaryDepreciationProfile: FixedAssetGroupValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupValueModelSetups} entity.
   */
  declare assetGroupValueModelSetupDepreciationProfile: FixedAssetGroupValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupValueModelSetups} entity.
   */
  declare assetGroupValueModelSetupAlternativeDepreciationProfile: FixedAssetGroupValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupValueModelSetups} entity.
   */
  declare assetGroupValueModelSetupAcceleratedDepreciationProfile: FixedAssetGroupValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2AcceleratedDepreciationProfileAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2DepreciationProfileAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2ExtraordinaryDepreciationProfileAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2AlternativeDepreciationProfileAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetValueModelSetupExtraordinaryDepreciationProfile: ValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetValueModelSetupDepreciationProfile: ValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetValueModelSetupAlternativeDepreciationProfile: ValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetValueModelSetupAcceleratedDepreciationProfile: ValueModelSetups<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare assetValueModelAlternativeDepreciationProfile: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare assetValueModelExtraordinaryDepreciationProfile: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare assetValueModelDepreciationProfile: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare assetValueModelAcceleratedDepreciationProfile: FixedAssetValueModels<T>[];

  constructor(_entityApi: DepreciationProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  depreciationProfileId: DeserializedType<T, 'Edm.String'>;
  lowValuePoolMinDepreciationAmount: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lowValuePoolPercentFirstYear: DeserializedType<T, 'Edm.Decimal'>;
  calculationBasis?: AssetDepreciationCalculationBase | null;
  depreciationYear?: AssetDepreciationYear | null;
  periodFrequency?: AssetAccrual | null;
  interval?: AssetDepreciationInterval | null;
  lowValuePoolLowCostValue: DeserializedType<T, 'Edm.Decimal'>;
  method?: AssetDepreciationMethod | null;
  fullYearDepreciationOnAdditionalAcquisitions?: NoYes | null;
  depreciationRateScheduleDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  specialDepreciationApplyNumberOfPeriods: DeserializedType<T, 'Edm.Int32'>;
  equallySplitDepreciationAmount95PercentOfAcquisitionCost?: NoYes | null;
  specialDepreciationAccountingMethod?: AssetSpecialDepAccountingMethodJp | null;
  fullDepreciation?: NoYes | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  specialDepreciationBaseRatio: DeserializedType<T, 'Edm.Decimal'>;
  isShiftDepreciation?: NoYes | null;
  depreciationRateScheduleName?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationRate: DeserializedType<T, 'Edm.Decimal'>;
  lowValuePoolPercentage: DeserializedType<T, 'Edm.Decimal'>;
  numberOfYearsToEquallyDivideDepreciationAmounts: DeserializedType<
    T,
    'Edm.Int32'
  >;
  depreciationProfileIdManualSchedule: DepreciationProfileManualSchedulesType<T>[];
  assetGroupValueModelSetupExtraordinaryDepreciationProfile: FixedAssetGroupValueModelSetupsType<T>[];
  assetGroupValueModelSetupDepreciationProfile: FixedAssetGroupValueModelSetupsType<T>[];
  assetGroupValueModelSetupAlternativeDepreciationProfile: FixedAssetGroupValueModelSetupsType<T>[];
  assetGroupValueModelSetupAcceleratedDepreciationProfile: FixedAssetGroupValueModelSetupsType<T>[];
  assetBookV2AcceleratedDepreciationProfileAsset: FixedAssetBooksV2Type<T>[];
  assetBookV2DepreciationProfileAsset: FixedAssetBooksV2Type<T>[];
  assetBookV2ExtraordinaryDepreciationProfileAsset: FixedAssetBooksV2Type<T>[];
  assetBookV2AlternativeDepreciationProfileAsset: FixedAssetBooksV2Type<T>[];
  assetValueModelSetupExtraordinaryDepreciationProfile: ValueModelSetupsType<T>[];
  assetValueModelSetupDepreciationProfile: ValueModelSetupsType<T>[];
  assetValueModelSetupAlternativeDepreciationProfile: ValueModelSetupsType<T>[];
  assetValueModelSetupAcceleratedDepreciationProfile: ValueModelSetupsType<T>[];
  assetValueModelAlternativeDepreciationProfile: FixedAssetValueModelsType<T>[];
  assetValueModelExtraordinaryDepreciationProfile: FixedAssetValueModelsType<T>[];
  assetValueModelDepreciationProfile: FixedAssetValueModelsType<T>[];
  assetValueModelAcceleratedDepreciationProfile: FixedAssetValueModelsType<T>[];
}

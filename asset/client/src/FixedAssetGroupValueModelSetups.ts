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
import type { FixedAssetGroupValueModelSetupsApi } from './FixedAssetGroupValueModelSetupsApi';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
import { NoYes } from './NoYes';
import {
  DepreciationProfiles,
  DepreciationProfilesType
} from './DepreciationProfiles';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';

/**
 * This class represents the entity "FixedAssetGroupValueModelSetups" of service "d365_metadata".
 */
export class FixedAssetGroupValueModelSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetGroupValueModelSetupsType<T>
{
  /**
   * Technical entity name for FixedAssetGroupValueModelSetups.
   */
  static override _entityName = 'FixedAssetGroupValueModelSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetGroupValueModelSetups entity.
   */
  static _keys = ['dataAreaId', 'FixedAssetGroupId', 'ValueModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Group Id.
   */
  declare fixedAssetGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model Id.
   */
  declare valueModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Group Id.
   * @nullable
   */
  declare depreciationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Life Years.
   */
  declare serviceLifeYears: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Depreciation Convention.
   * @nullable
   */
  declare depreciationConvention?: AssetDepreciationConvention | null;
  /**
   * Depreciation Profile Id.
   * @nullable
   */
  declare depreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Depreciation Allocation Unit.
   * @nullable
   */
  declare specialDepreciationAllocationUnit?: AssetAccrualFiscal | null;
  /**
   * Alternative Depreciation Profile Id.
   * @nullable
   */
  declare alternativeDepreciationProfileId?: DeserializedType<
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
   * Allowable Limit For Accumulated Depreciation.
   * @nullable
   */
  declare allowableLimitForAccumulatedDepreciation?: AssetLimitForAccumulatedDepTypeJp | null;
  /**
   * Special Depreciation Allocation Start Convention.
   * @nullable
   */
  declare specialDepreciationAllocationStartConvention?: AssetSpecialDepAllocationConventionJp | null;
  /**
   * Is Asset Group Depreciation.
   * @nullable
   */
  declare isAssetGroupDepreciation?: NoYes | null;
  /**
   * Extraordinary Depreciation Profile Id.
   * @nullable
   */
  declare extraordinaryDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Life Months.
   */
  declare serviceLifeMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Depreciation Periods.
   */
  declare depreciationPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Accelerated Depreciation Profile Id.
   * @nullable
   */
  declare acceleratedDepreciationProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Calculate Depreciation.
   * @nullable
   */
  declare calculateDepreciation?: NoYes | null;
  /**
   * Service Life.
   */
  declare serviceLife: DeserializedType<T, 'Edm.Decimal'>;
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
  declare assetAlternativeDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetAcceleratedDepreciationProfile?: DepreciationProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetGroupValueModelSetupValueModel?: ValueModelSetups<T> | null;

  constructor(_entityApi: FixedAssetGroupValueModelSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetGroupValueModelSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetGroupId: DeserializedType<T, 'Edm.String'>;
  valueModelId: DeserializedType<T, 'Edm.String'>;
  depreciationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  serviceLifeYears: DeserializedType<T, 'Edm.Int32'>;
  depreciationConvention?: AssetDepreciationConvention | null;
  depreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationAllocationUnit?: AssetAccrualFiscal | null;
  alternativeDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  specialDepreciationAllocationPeriods: DeserializedType<T, 'Edm.Int32'>;
  allowableLimitForAccumulatedDepreciation?: AssetLimitForAccumulatedDepTypeJp | null;
  specialDepreciationAllocationStartConvention?: AssetSpecialDepAllocationConventionJp | null;
  isAssetGroupDepreciation?: NoYes | null;
  extraordinaryDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  serviceLifeMonths: DeserializedType<T, 'Edm.Int32'>;
  depreciationPeriods: DeserializedType<T, 'Edm.Int32'>;
  acceleratedDepreciationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  calculateDepreciation?: NoYes | null;
  serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  assetExtraordinaryDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetAlternativeDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetAcceleratedDepreciationProfile?: DepreciationProfilesType<T> | null;
  assetGroupValueModelSetupValueModel?: ValueModelSetupsType<T> | null;
}

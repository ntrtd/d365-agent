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
import type { AssetSpecialDepreciationAllowancesApi } from './AssetSpecialDepreciationAllowancesApi';
import {
  FixedAssetGroupBookSpecialDepreciationAllowances,
  FixedAssetGroupBookSpecialDepreciationAllowancesType
} from './FixedAssetGroupBookSpecialDepreciationAllowances';
import {
  FixedAssetBookSpecialDepreciationAllowances,
  FixedAssetBookSpecialDepreciationAllowancesType
} from './FixedAssetBookSpecialDepreciationAllowances';

/**
 * This class represents the entity "AssetSpecialDepreciationAllowances" of service "d365_metadata".
 */
export class AssetSpecialDepreciationAllowances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetSpecialDepreciationAllowancesType<T>
{
  /**
   * Technical entity name for AssetSpecialDepreciationAllowances.
   */
  static override _entityName = 'AssetSpecialDepreciationAllowances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetSpecialDepreciationAllowances entity.
   */
  static _keys = ['dataAreaId', 'SpecialDepreciationAllowanceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Special Depreciation Allowance Id.
   */
  declare specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetGroupBookSpecialDepreciationAllowances} entity.
   */
  declare fixedAssetGroupBookSpecialDepreciationAllowance: FixedAssetGroupBookSpecialDepreciationAllowances<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBookSpecialDepreciationAllowances} entity.
   */
  declare fixedAssetBookSpecialDepreciationAllowance: FixedAssetBookSpecialDepreciationAllowances<T>[];

  constructor(_entityApi: AssetSpecialDepreciationAllowancesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetSpecialDepreciationAllowancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetGroupBookSpecialDepreciationAllowance: FixedAssetGroupBookSpecialDepreciationAllowancesType<T>[];
  fixedAssetBookSpecialDepreciationAllowance: FixedAssetBookSpecialDepreciationAllowancesType<T>[];
}

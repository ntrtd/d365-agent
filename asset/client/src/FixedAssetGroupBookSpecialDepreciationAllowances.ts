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
import type { FixedAssetGroupBookSpecialDepreciationAllowancesApi } from './FixedAssetGroupBookSpecialDepreciationAllowancesApi';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';
import {
  AssetSpecialDepreciationAllowances,
  AssetSpecialDepreciationAllowancesType
} from './AssetSpecialDepreciationAllowances';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';

/**
 * This class represents the entity "FixedAssetGroupBookSpecialDepreciationAllowances" of service "d365_metadata".
 */
export class FixedAssetGroupBookSpecialDepreciationAllowances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetGroupBookSpecialDepreciationAllowancesType<T>
{
  /**
   * Technical entity name for FixedAssetGroupBookSpecialDepreciationAllowances.
   */
  static override _entityName =
    'FixedAssetGroupBookSpecialDepreciationAllowances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetGroupBookSpecialDepreciationAllowances entity.
   */
  static _keys = [
    'dataAreaId',
    'GroupId',
    'BookId',
    'SpecialDepreciationAllowanceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Special Depreciation Allowance Id.
   */
  declare specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare assetGroupSetupBonusAssetGroup?: FixedAssetGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetSpecialDepreciationAllowances} entity.
   */
  declare assetSpecialDepreciationAllowance?: AssetSpecialDepreciationAllowances<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetGroupSetupBonusValueModel?: ValueModelSetups<T> | null;

  constructor(
    _entityApi: FixedAssetGroupBookSpecialDepreciationAllowancesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface FixedAssetGroupBookSpecialDepreciationAllowancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  assetGroupSetupBonusAssetGroup?: FixedAssetGroupsType<T> | null;
  assetSpecialDepreciationAllowance?: AssetSpecialDepreciationAllowancesType<T> | null;
  assetGroupSetupBonusValueModel?: ValueModelSetupsType<T> | null;
}

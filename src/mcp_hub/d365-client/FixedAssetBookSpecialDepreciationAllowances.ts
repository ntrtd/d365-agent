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
import type { FixedAssetBookSpecialDepreciationAllowancesApi } from './FixedAssetBookSpecialDepreciationAllowancesApi';
import {
  AssetSpecialDepreciationAllowances,
  AssetSpecialDepreciationAllowancesType
} from './AssetSpecialDepreciationAllowances';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import { FixedAssets, FixedAssetsType } from './FixedAssets';

/**
 * This class represents the entity "FixedAssetBookSpecialDepreciationAllowances" of service "d365_metadata".
 */
export class FixedAssetBookSpecialDepreciationAllowances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedAssetBookSpecialDepreciationAllowancesType<T>
{
  /**
   * Technical entity name for FixedAssetBookSpecialDepreciationAllowances.
   */
  static override _entityName = 'FixedAssetBookSpecialDepreciationAllowances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedAssetBookSpecialDepreciationAllowances entity.
   */
  static _keys = [
    'dataAreaId',
    'FixedAssetId',
    'BookId',
    'SpecialDepreciationAllowanceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Id.
   */
  declare fixedAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
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
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AssetSpecialDepreciationAllowances} entity.
   */
  declare assetSpecialDepreciationAllowance?: AssetSpecialDepreciationAllowances<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare fixedAssetBookV2?: FixedAssetBooksV2<T> | null;
  /**
   * One-to-one navigation property to the {@link FixedAssets} entity.
   */
  declare fixedAsset?: FixedAssets<T> | null;

  constructor(_entityApi: FixedAssetBookSpecialDepreciationAllowancesApi<T>) {
    super(_entityApi);
  }
}

export interface FixedAssetBookSpecialDepreciationAllowancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetId: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  assetSpecialDepreciationAllowance?: AssetSpecialDepreciationAllowancesType<T> | null;
  fixedAssetBookV2?: FixedAssetBooksV2Type<T> | null;
  fixedAsset?: FixedAssetsType<T> | null;
}

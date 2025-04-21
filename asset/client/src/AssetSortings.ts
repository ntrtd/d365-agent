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
import type { AssetSortingsApi } from './AssetSortingsApi';
import { AssetSortValue } from './AssetSortValue';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "AssetSortings" of service "d365_metadata".
 */
export class AssetSortings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetSortingsType<T>
{
  /**
   * Technical entity name for AssetSortings.
   */
  static override _entityName = 'AssetSortings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetSortings entity.
   */
  static _keys = ['dataAreaId', 'Sorting', 'Identification'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sorting.
   * @nullable
   */
  declare sorting?: AssetSortValue | null;
  /**
   * Identification.
   */
  declare identification: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2SortField2Asset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2SortField1Asset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2SortField3Asset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare sortField1ValueModel: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare sortField3ValueModel: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare sortField2ValueModel: FixedAssetValueModels<T>[];

  constructor(_entityApi: AssetSortingsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetSortingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sorting?: AssetSortValue | null;
  identification: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetBookV2SortField2Asset: FixedAssetBooksV2Type<T>[];
  assetBookV2SortField1Asset: FixedAssetBooksV2Type<T>[];
  assetBookV2SortField3Asset: FixedAssetBooksV2Type<T>[];
  sortField1ValueModel: FixedAssetValueModelsType<T>[];
  sortField3ValueModel: FixedAssetValueModelsType<T>[];
  sortField2ValueModel: FixedAssetValueModelsType<T>[];
}

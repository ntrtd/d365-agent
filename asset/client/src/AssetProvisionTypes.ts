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
import type { AssetProvisionTypesApi } from './AssetProvisionTypesApi';
import { FixedAssetBooksV2, FixedAssetBooksV2Type } from './FixedAssetBooksV2';
import {
  FixedAssetValueModels,
  FixedAssetValueModelsType
} from './FixedAssetValueModels';

/**
 * This class represents the entity "AssetProvisionTypes" of service "d365_metadata".
 */
export class AssetProvisionTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetProvisionTypesType<T>
{
  /**
   * Technical entity name for AssetProvisionTypes.
   */
  static override _entityName = 'AssetProvisionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetProvisionTypes entity.
   */
  static _keys = ['dataAreaId', 'TypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Id.
   */
  declare typeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Length Of Ownership.
   */
  declare lengthOfOwnership: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare fixedAssetBookV2: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetBooksV2} entity.
   */
  declare assetBookV2ProvisionTypeAsset: FixedAssetBooksV2<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare fixedAssetValueModel: FixedAssetValueModels<T>[];
  /**
   * One-to-many navigation property to the {@link FixedAssetValueModels} entity.
   */
  declare provisionTypeValueModel: FixedAssetValueModels<T>[];

  constructor(_entityApi: AssetProvisionTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetProvisionTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeId: DeserializedType<T, 'Edm.String'>;
  lengthOfOwnership: DeserializedType<T, 'Edm.Int32'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetBookV2: FixedAssetBooksV2Type<T>[];
  assetBookV2ProvisionTypeAsset: FixedAssetBooksV2Type<T>[];
  fixedAssetValueModel: FixedAssetValueModelsType<T>[];
  provisionTypeValueModel: FixedAssetValueModelsType<T>[];
}

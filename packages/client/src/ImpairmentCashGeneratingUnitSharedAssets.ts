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
import type { ImpairmentCashGeneratingUnitSharedAssetsApi } from './ImpairmentCashGeneratingUnitSharedAssetsApi';
import { AssetImpairmentSharedAssetAllocBasisJp } from './AssetImpairmentSharedAssetAllocBasisJp';
import { AssetImpairmentSharedAssetTypeJp } from './AssetImpairmentSharedAssetTypeJp';

/**
 * This class represents the entity "ImpairmentCashGeneratingUnitSharedAssets" of service "d365_metadata".
 */
export class ImpairmentCashGeneratingUnitSharedAssets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImpairmentCashGeneratingUnitSharedAssetsType<T>
{
  /**
   * Technical entity name for ImpairmentCashGeneratingUnitSharedAssets.
   */
  static override _entityName = 'ImpairmentCashGeneratingUnitSharedAssets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImpairmentCashGeneratingUnitSharedAssets entity.
   */
  static _keys = ['dataAreaId', 'CGUGroupName', 'AssetNumber', 'Book'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cgu Group Name.
   */
  declare cguGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Number.
   */
  declare assetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Book.
   */
  declare book: DeserializedType<T, 'Edm.String'>;
  /**
   * Net Selling Price.
   */
  declare netSellingPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocation Priority.
   */
  declare allocationPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proration Method Override.
   * @nullable
   */
  declare prorationMethodOverride?: AssetImpairmentSharedAssetAllocBasisJp | null;
  /**
   * Shared Asset Type.
   * @nullable
   */
  declare sharedAssetType?: AssetImpairmentSharedAssetTypeJp | null;

  constructor(_entityApi: ImpairmentCashGeneratingUnitSharedAssetsApi<T>) {
    super(_entityApi);
  }
}

export interface ImpairmentCashGeneratingUnitSharedAssetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cguGroupName: DeserializedType<T, 'Edm.String'>;
  assetNumber: DeserializedType<T, 'Edm.String'>;
  book: DeserializedType<T, 'Edm.String'>;
  netSellingPrice: DeserializedType<T, 'Edm.Decimal'>;
  allocationPriority: DeserializedType<T, 'Edm.Int32'>;
  prorationMethodOverride?: AssetImpairmentSharedAssetAllocBasisJp | null;
  sharedAssetType?: AssetImpairmentSharedAssetTypeJp | null;
}

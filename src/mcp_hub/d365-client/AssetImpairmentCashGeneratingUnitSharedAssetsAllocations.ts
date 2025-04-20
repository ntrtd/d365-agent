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
import type { AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi } from './AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi';
import {
  ImpairmentCashGeneratingUnitGroups,
  ImpairmentCashGeneratingUnitGroupsType
} from './ImpairmentCashGeneratingUnitGroups';

/**
 * This class represents the entity "AssetImpairmentCashGeneratingUnitSharedAssetsAllocations" of service "d365_metadata".
 */
export class AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsType<T>
{
  /**
   * Technical entity name for AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.
   */
  static override _entityName =
    'AssetImpairmentCashGeneratingUnitSharedAssetsAllocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetImpairmentCashGeneratingUnitSharedAssetsAllocations entity.
   */
  static _keys = [
    'dataAreaId',
    'CGUGroupName',
    'SharedAssetId',
    'SharedAssetBookId',
    'CashGeneratingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cgu Group Name.
   */
  declare cguGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared Asset Id.
   */
  declare sharedAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared Asset Book Id.
   */
  declare sharedAssetBookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Generating Unit Number.
   */
  declare cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Proportion.
   */
  declare proportion: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ImpairmentCashGeneratingUnitGroups} entity.
   */
  declare impairmentCashGeneratingUnitGroup?: ImpairmentCashGeneratingUnitGroups<T> | null;

  constructor(
    _entityApi: AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cguGroupName: DeserializedType<T, 'Edm.String'>;
  sharedAssetId: DeserializedType<T, 'Edm.String'>;
  sharedAssetBookId: DeserializedType<T, 'Edm.String'>;
  cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>;
  proportion: DeserializedType<T, 'Edm.Decimal'>;
  impairmentCashGeneratingUnitGroup?: ImpairmentCashGeneratingUnitGroupsType<T> | null;
}

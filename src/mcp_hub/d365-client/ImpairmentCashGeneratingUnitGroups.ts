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
import type { ImpairmentCashGeneratingUnitGroupsApi } from './ImpairmentCashGeneratingUnitGroupsApi';
import { AssetImpairmentCguGroupStatusJp } from './AssetImpairmentCguGroupStatusJp';
import { AssetImpairmentSharedAssetsMethodJp } from './AssetImpairmentSharedAssetsMethodJp';
import { AssetImpairmentSharedAssetAllocBasisJp } from './AssetImpairmentSharedAssetAllocBasisJp';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { AssetImpairmentSharedAssetPriorityJp } from './AssetImpairmentSharedAssetPriorityJp';
import {
  ImpairmentCashGeneratingUnits,
  ImpairmentCashGeneratingUnitsType
} from './ImpairmentCashGeneratingUnits';
import {
  AssetImpairmentCashGeneratingUnitSharedAssetsAllocations,
  AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsType
} from './AssetImpairmentCashGeneratingUnitSharedAssetsAllocations';

/**
 * This class represents the entity "ImpairmentCashGeneratingUnitGroups" of service "d365_metadata".
 */
export class ImpairmentCashGeneratingUnitGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImpairmentCashGeneratingUnitGroupsType<T>
{
  /**
   * Technical entity name for ImpairmentCashGeneratingUnitGroups.
   */
  static override _entityName = 'ImpairmentCashGeneratingUnitGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImpairmentCashGeneratingUnitGroups entity.
   */
  static _keys = ['dataAreaId', 'CGUGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cgu Group.
   */
  declare cguGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: AssetImpairmentCguGroupStatusJp | null;
  /**
   * Impairment Method.
   * @nullable
   */
  declare impairmentMethod?: AssetImpairmentSharedAssetsMethodJp | null;
  /**
   * Proration Method.
   * @nullable
   */
  declare prorationMethod?: AssetImpairmentSharedAssetAllocBasisJp | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Shared Asset Has Higher Priority.
   * @nullable
   */
  declare sharedAssetHasHigherPriority?: AssetImpairmentSharedAssetPriorityJp | null;
  /**
   * One-to-many navigation property to the {@link ImpairmentCashGeneratingUnits} entity.
   */
  declare cguGroups: ImpairmentCashGeneratingUnits<T>[];
  /**
   * One-to-many navigation property to the {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations} entity.
   */
  declare assetImpairmentCashGeneratingUnitSharedAssetsAllocation: AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>[];

  constructor(_entityApi: ImpairmentCashGeneratingUnitGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ImpairmentCashGeneratingUnitGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cguGroup: DeserializedType<T, 'Edm.String'>;
  status?: AssetImpairmentCguGroupStatusJp | null;
  impairmentMethod?: AssetImpairmentSharedAssetsMethodJp | null;
  prorationMethod?: AssetImpairmentSharedAssetAllocBasisJp | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  sharedAssetHasHigherPriority?: AssetImpairmentSharedAssetPriorityJp | null;
  cguGroups: ImpairmentCashGeneratingUnitsType<T>[];
  assetImpairmentCashGeneratingUnitSharedAssetsAllocation: AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsType<T>[];
}

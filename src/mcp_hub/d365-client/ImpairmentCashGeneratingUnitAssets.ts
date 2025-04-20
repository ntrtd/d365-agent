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
import type { ImpairmentCashGeneratingUnitAssetsApi } from './ImpairmentCashGeneratingUnitAssetsApi';
import { AssetImpairmentAllocationMethodJp } from './AssetImpairmentAllocationMethodJp';

/**
 * This class represents the entity "ImpairmentCashGeneratingUnitAssets" of service "d365_metadata".
 */
export class ImpairmentCashGeneratingUnitAssets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ImpairmentCashGeneratingUnitAssetsType<T>
{
  /**
   * Technical entity name for ImpairmentCashGeneratingUnitAssets.
   */
  static override _entityName = 'ImpairmentCashGeneratingUnitAssets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ImpairmentCashGeneratingUnitAssets entity.
   */
  static _keys = [
    'dataAreaId',
    'CashGeneratingUnitNumber',
    'AssetNumber',
    'Book'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Generating Unit Number.
   */
  declare cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Number.
   */
  declare assetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Book.
   */
  declare book: DeserializedType<T, 'Edm.String'>;
  /**
   * Impairment Holding Asset Id.
   * @nullable
   */
  declare impairmentHoldingAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Impairment Holding Book Id.
   * @nullable
   */
  declare impairmentHoldingBookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Impairment Allocation Method.
   * @nullable
   */
  declare impairmentAllocationMethod?: AssetImpairmentAllocationMethodJp | null;
  /**
   * Allocation Priority.
   */
  declare allocationPriority: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ImpairmentCashGeneratingUnitAssetsApi<T>) {
    super(_entityApi);
  }
}

export interface ImpairmentCashGeneratingUnitAssetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>;
  assetNumber: DeserializedType<T, 'Edm.String'>;
  book: DeserializedType<T, 'Edm.String'>;
  impairmentHoldingAssetId?: DeserializedType<T, 'Edm.String'> | null;
  impairmentHoldingBookId?: DeserializedType<T, 'Edm.String'> | null;
  impairmentAllocationMethod?: AssetImpairmentAllocationMethodJp | null;
  allocationPriority: DeserializedType<T, 'Edm.Int32'>;
}

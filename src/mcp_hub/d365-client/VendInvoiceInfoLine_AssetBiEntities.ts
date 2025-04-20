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
import type { VendInvoiceInfoLine_AssetBiEntitiesApi } from './VendInvoiceInfoLine_AssetBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetTransTypePurch } from './AssetTransTypePurch';

/**
 * This class represents the entity "VendInvoiceInfoLine_AssetBiEntities" of service "d365_metadata".
 */
export class VendInvoiceInfoLine_AssetBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceInfoLine_AssetBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoiceInfoLine_AssetBiEntities.
   */
  static override _entityName = 'VendInvoiceInfoLine_AssetBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceInfoLine_AssetBiEntities entity.
   */
  static _keys = ['dataAreaId', 'VendInvoiceInfoLineRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Invoice Info Line Rec Id.
   */
  declare vendInvoiceInfoLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Asset Book Id.
   * @nullable
   */
  declare assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Acquired.
   * @nullable
   */
  declare assetAcquired?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Group.
   * @nullable
   */
  declare assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Fixed Asset.
   * @nullable
   */
  declare createFixedAsset?: NoYes | null;
  /**
   * Asset Trans Type Purch.
   * @nullable
   */
  declare assetTransTypePurch?: AssetTransTypePurch | null;

  constructor(_entityApi: VendInvoiceInfoLine_AssetBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceInfoLine_AssetBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendInvoiceInfoLineRecId: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  assetBookId?: DeserializedType<T, 'Edm.String'> | null;
  assetAcquired?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  createFixedAsset?: NoYes | null;
  assetTransTypePurch?: AssetTransTypePurch | null;
}

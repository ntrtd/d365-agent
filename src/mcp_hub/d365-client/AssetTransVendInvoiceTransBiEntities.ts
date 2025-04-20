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
import type { AssetTransVendInvoiceTransBiEntitiesApi } from './AssetTransVendInvoiceTransBiEntitiesApi';

/**
 * This class represents the entity "AssetTransVendInvoiceTransBiEntities" of service "d365_metadata".
 */
export class AssetTransVendInvoiceTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetTransVendInvoiceTransBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetTransVendInvoiceTransBiEntities.
   */
  static override _entityName = 'AssetTransVendInvoiceTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetTransVendInvoiceTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'VendInvoiceInfoLine',
    'AssetTransVoucher',
    'AssetTransDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Invoice Info Line.
   */
  declare vendInvoiceInfoLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Trans Voucher.
   */
  declare assetTransVoucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Trans Date.
   */
  declare assetTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Invoice Trans.
   */
  declare vendInvoiceTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Book.
   */
  declare assetBook: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Trans.
   */
  declare assetTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Credit Note Purch Line.
   */
  declare creditNotePurchLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Trans Voucher.
   * @nullable
   */
  declare vendTransVoucher?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetTransVendInvoiceTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetTransVendInvoiceTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendInvoiceInfoLine: DeserializedType<T, 'Edm.Int64'>;
  assetTransVoucher: DeserializedType<T, 'Edm.String'>;
  assetTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendInvoiceTrans: DeserializedType<T, 'Edm.Int64'>;
  assetBook: DeserializedType<T, 'Edm.Int64'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  assetTrans: DeserializedType<T, 'Edm.Int64'>;
  creditNotePurchLine: DeserializedType<T, 'Edm.Int64'>;
  vendTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { CustPackingSlipVersionBiEntitiesApi } from './CustPackingSlipVersionBiEntitiesApi';

/**
 * This class represents the entity "CustPackingSlipVersionBiEntities" of service "d365_metadata".
 */
export class CustPackingSlipVersionBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustPackingSlipVersionBiEntitiesType<T>
{
  /**
   * Technical entity name for CustPackingSlipVersionBiEntities.
   */
  static override _entityName = 'CustPackingSlipVersionBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustPackingSlipVersionBiEntities entity.
   */
  static _keys = ['CustPackingSlipJour', 'VersionDateTime'];
  /**
   * Cust Packing Slip Jour.
   */
  declare custPackingSlipJour: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Version Date Time.
   */
  declare versionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Volume.
   */
  declare volume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parm Id.
   * @nullable
   */
  declare parmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Internal Packing Slip Id.
   * @nullable
   */
  declare internalPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustPackingSlipVersionBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustPackingSlipVersionBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  custPackingSlipJour: DeserializedType<T, 'Edm.Int64'>;
  versionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  volume: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  parmId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  internalPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
}

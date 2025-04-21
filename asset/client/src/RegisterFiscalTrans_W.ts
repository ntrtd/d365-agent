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
import type { RegisterFiscalTrans_WApi } from './RegisterFiscalTrans_WApi';
import { NoYes } from './NoYes';
import { CashRegisterFiscalTransStatusW } from './CashRegisterFiscalTransStatusW';
import {
  RegisterFiscalTransCode_W,
  RegisterFiscalTransCode_WType
} from './RegisterFiscalTransCode_W';

/**
 * This class represents the entity "RegisterFiscalTrans_W" of service "d365_metadata".
 */
export class RegisterFiscalTrans_W<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RegisterFiscalTrans_WType<T>
{
  /**
   * Technical entity name for RegisterFiscalTrans_W.
   */
  static override _entityName = 'RegisterFiscalTrans_W';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegisterFiscalTrans_W entity.
   */
  static _keys = ['dataAreaId', 'Voucher', 'TransDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Offline.
   * @nullable
   */
  declare isOffline?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: CashRegisterFiscalTransStatusW | null;
  /**
   * Trans Id.
   */
  declare transId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Trans Date Time.
   */
  declare transDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link RegisterFiscalTransCode_W} entity.
   */
  declare registerFiscalTransCodeW: RegisterFiscalTransCode_W<T>[];

  constructor(_entityApi: RegisterFiscalTrans_WApi<T>) {
    super(_entityApi);
  }
}

export interface RegisterFiscalTrans_WType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isOffline?: NoYes | null;
  status?: CashRegisterFiscalTransStatusW | null;
  transId: DeserializedType<T, 'Edm.Int32'>;
  transDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registerFiscalTransCodeW: RegisterFiscalTransCode_WType<T>[];
}

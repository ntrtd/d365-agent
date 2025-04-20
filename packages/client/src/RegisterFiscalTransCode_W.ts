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
import type { RegisterFiscalTransCode_WApi } from './RegisterFiscalTransCode_WApi';
import {
  RegisterFiscalTrans_W,
  RegisterFiscalTrans_WType
} from './RegisterFiscalTrans_W';

/**
 * This class represents the entity "RegisterFiscalTransCode_W" of service "d365_metadata".
 */
export class RegisterFiscalTransCode_W<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RegisterFiscalTransCode_WType<T>
{
  /**
   * Technical entity name for RegisterFiscalTransCode_W.
   */
  static override _entityName = 'RegisterFiscalTransCode_W';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegisterFiscalTransCode_W entity.
   */
  static _keys = ['dataAreaId', 'Voucher', 'Label', 'Name', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Label.
   */
  declare label: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link RegisterFiscalTrans_W} entity.
   */
  declare registerFiscalTransW?: RegisterFiscalTrans_W<T> | null;

  constructor(_entityApi: RegisterFiscalTransCode_WApi<T>) {
    super(_entityApi);
  }
}

export interface RegisterFiscalTransCode_WType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  label: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  registerFiscalTransW?: RegisterFiscalTrans_WType<T> | null;
}

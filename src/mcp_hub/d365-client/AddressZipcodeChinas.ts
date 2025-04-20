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
import type { AddressZipcodeChinasApi } from './AddressZipcodeChinasApi';

/**
 * This class represents the entity "AddressZipcodeChinas" of service "d365_metadata".
 */
export class AddressZipcodeChinas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressZipcodeChinasType<T>
{
  /**
   * Technical entity name for AddressZipcodeChinas.
   */
  static override _entityName = 'AddressZipcodeChinas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressZipcodeChinas entity.
   */
  static _keys = ['yzbm'];
  /**
   * Yzbm.
   */
  declare yzbm: DeserializedType<T, 'Edm.String'>;
  /**
   * Jd 4.
   * @nullable
   */
  declare jd4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jd 3.
   * @nullable
   */
  declare jd3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jd 2.
   * @nullable
   */
  declare jd2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jd 1.
   * @nullable
   */
  declare jd1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Xzqh.
   * @nullable
   */
  declare xzqh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Xzqu.
   * @nullable
   */
  declare xzqu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jd 5.
   * @nullable
   */
  declare jd5?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AddressZipcodeChinasApi<T>) {
    super(_entityApi);
  }
}

export interface AddressZipcodeChinasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  yzbm: DeserializedType<T, 'Edm.String'>;
  jd4?: DeserializedType<T, 'Edm.String'> | null;
  jd3?: DeserializedType<T, 'Edm.String'> | null;
  jd2?: DeserializedType<T, 'Edm.String'> | null;
  jd1?: DeserializedType<T, 'Edm.String'> | null;
  xzqh?: DeserializedType<T, 'Edm.String'> | null;
  xzqu?: DeserializedType<T, 'Edm.String'> | null;
  jd5?: DeserializedType<T, 'Edm.String'> | null;
}

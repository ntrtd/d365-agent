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
import type { SysAadClientsApi } from './SysAadClientsApi';

/**
 * This class represents the entity "SysAADClients" of service "d365_metadata".
 */
export class SysAadClients<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SysAadClientsType<T>
{
  /**
   * Technical entity name for SysAadClients.
   */
  static override _entityName = 'SysAADClients';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SysAadClients entity.
   */
  static _keys = ['AADClientId'];
  /**
   * Aad Client Id.
   */
  declare aadClientId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SysAadClientsApi<T>) {
    super(_entityApi);
  }
}

export interface SysAadClientsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  aadClientId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
}

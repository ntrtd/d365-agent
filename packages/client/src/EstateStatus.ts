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
import type { EstateStatusApi } from './EstateStatusApi';

/**
 * This class represents the entity "EstateStatus" of service "d365_metadata".
 */
export class EstateStatus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EstateStatusType<T>
{
  /**
   * Technical entity name for EstateStatus.
   */
  static override _entityName = 'EstateStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EstateStatus entity.
   */
  static _keys = ['dataAreaId', 'EstStatId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Est Stat Id.
   */
  declare estStatId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EstateStatusApi<T>) {
    super(_entityApi);
  }
}

export interface EstateStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  estStatId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}

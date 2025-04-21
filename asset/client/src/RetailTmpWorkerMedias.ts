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
import type { RetailTmpWorkerMediasApi } from './RetailTmpWorkerMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpWorkerMedias" of service "d365_metadata".
 */
export class RetailTmpWorkerMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpWorkerMediasType<T>
{
  /**
   * Technical entity name for RetailTmpWorkerMedias.
   */
  static override _entityName = 'RetailTmpWorkerMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpWorkerMedias entity.
   */
  static _keys = ['Worker', 'FileName'];
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.String'>;
  /**
   * File Name.
   */
  declare fileName: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Association Status.
   * @nullable
   */
  declare associationStatus?: RetailMediaAssociationStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTmpWorkerMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpWorkerMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  worker: DeserializedType<T, 'Edm.String'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  associationStatus?: RetailMediaAssociationStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}

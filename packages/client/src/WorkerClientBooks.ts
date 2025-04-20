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
import type { WorkerClientBooksApi } from './WorkerClientBooksApi';

/**
 * This class represents the entity "WorkerClientBooks" of service "d365_metadata".
 */
export class WorkerClientBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerClientBooksType<T>
{
  /**
   * Technical entity name for WorkerClientBooks.
   */
  static override _entityName = 'WorkerClientBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerClientBooks entity.
   */
  static _keys = ['dataAreaId', 'ClientBookId', 'ClientBookWorker'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Book Id.
   */
  declare clientBookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Book Worker.
   */
  declare clientBookWorker: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: WorkerClientBooksApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerClientBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  clientBookId: DeserializedType<T, 'Edm.String'>;
  clientBookWorker: DeserializedType<T, 'Edm.Int64'>;
}

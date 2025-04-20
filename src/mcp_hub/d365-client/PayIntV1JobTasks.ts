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
import type { PayIntV1JobTasksApi } from './PayIntV1JobTasksApi';

/**
 * This class represents the entity "PayIntV1JobTasks" of service "d365_metadata".
 */
export class PayIntV1JobTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1JobTasksType<T>
{
  /**
   * Technical entity name for PayIntV1JobTasks.
   */
  static override _entityName = 'PayIntV1JobTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1JobTasks entity.
   */
  static _keys = ['JobTaskId'];
  /**
   * Job Task Id.
   */
  declare jobTaskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1JobTasksApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTaskId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
}

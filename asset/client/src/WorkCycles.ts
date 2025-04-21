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
import type { WorkCyclesApi } from './WorkCyclesApi';

/**
 * This class represents the entity "WorkCycles" of service "d365_metadata".
 */
export class WorkCycles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkCyclesType<T>
{
  /**
   * Technical entity name for WorkCycles.
   */
  static override _entityName = 'WorkCycles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCycles entity.
   */
  static _keys = ['WorkCycleId'];
  /**
   * Work Cycle Id.
   */
  declare workCycleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Days Per Period.
   */
  declare daysPerPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkCyclesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCyclesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workCycleId: DeserializedType<T, 'Edm.String'>;
  daysPerPeriod: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

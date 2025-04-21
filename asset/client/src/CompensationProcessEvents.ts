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
import type { CompensationProcessEventsApi } from './CompensationProcessEventsApi';
import { HrmCompProcessType } from './HrmCompProcessType';
import {
  CompensationEvents,
  CompensationEventsType
} from './CompensationEvents';

/**
 * This class represents the entity "CompensationProcessEvents" of service "d365_metadata".
 */
export class CompensationProcessEvents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CompensationProcessEventsType<T>
{
  /**
   * Technical entity name for CompensationProcessEvents.
   */
  static override _entityName = 'CompensationProcessEvents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationProcessEvents entity.
   */
  static _keys = ['dataAreaId', 'Process'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Process.
   */
  declare process: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cycle Start.
   */
  declare cycleStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: HrmCompProcessType | null;
  /**
   * Transaction Active Date.
   */
  declare transactionActiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Review Deadline.
   */
  declare reviewDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Point In Time Date.
   */
  declare pointInTimeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cycle End.
   */
  declare cycleEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fixed Pay Pro Rated Hire Date.
   */
  declare fixedPayProRatedHireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link CompensationEvents} entity.
   */
  declare compensationEvent: CompensationEvents<T>[];

  constructor(_entityApi: CompensationProcessEventsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationProcessEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  process: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  cycleStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processType?: HrmCompProcessType | null;
  transactionActiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reviewDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pointInTimeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cycleEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedPayProRatedHireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationEvent: CompensationEventsType<T>[];
}

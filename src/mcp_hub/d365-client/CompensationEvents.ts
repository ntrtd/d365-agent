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
import type { CompensationEventsApi } from './CompensationEventsApi';
import { NoYes } from './NoYes';
import { HrmCompEventErrorStatus } from './HrmCompEventErrorStatus';
import {
  CompensationProcessEvents,
  CompensationProcessEventsType
} from './CompensationProcessEvents';

/**
 * This class represents the entity "CompensationEvents" of service "d365_metadata".
 */
export class CompensationEvents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompensationEventsType<T>
{
  /**
   * Technical entity name for CompensationEvents.
   */
  static override _entityName = 'CompensationEvents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationEvents entity.
   */
  static _keys = ['dataAreaId', 'EventId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Event Id.
   */
  declare eventId: DeserializedType<T, 'Edm.String'>;
  /**
   * Locked.
   * @nullable
   */
  declare locked?: NoYes | null;
  /**
   * Process Id.
   * @nullable
   */
  declare processId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Date.
   */
  declare loadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Error Status.
   * @nullable
   */
  declare errorStatus?: HrmCompEventErrorStatus | null;
  /**
   * One-to-one navigation property to the {@link CompensationProcessEvents} entity.
   */
  declare compensationProcessEvent?: CompensationProcessEvents<T> | null;

  constructor(_entityApi: CompensationEventsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  eventId: DeserializedType<T, 'Edm.String'>;
  locked?: NoYes | null;
  processId?: DeserializedType<T, 'Edm.String'> | null;
  loadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  errorStatus?: HrmCompEventErrorStatus | null;
  compensationProcessEvent?: CompensationProcessEventsType<T> | null;
}

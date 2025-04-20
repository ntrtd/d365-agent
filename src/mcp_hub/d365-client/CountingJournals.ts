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
import type { CountingJournalsApi } from './CountingJournalsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CountingJournals" of service "d365_metadata".
 */
export class CountingJournals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CountingJournalsType<T>
{
  /**
   * Technical entity name for CountingJournals.
   */
  static override _entityName = 'CountingJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CountingJournals entity.
   */
  static _keys = ['dataAreaId', 'CountingStartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counting Start Date.
   */
  declare countingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resolution Number.
   * @nullable
   */
  declare resolutionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolution Date.
   */
  declare resolutionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Official Session.
   * @nullable
   */
  declare officialSession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Batch Number.
   * @nullable
   */
  declare journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Counting End Date.
   */
  declare countingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CountingJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface CountingJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  countingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resolutionNumber?: DeserializedType<T, 'Edm.String'> | null;
  resolutionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  officialSession?: DeserializedType<T, 'Edm.String'> | null;
  journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  closed?: NoYes | null;
  countingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { PerfPeriodsApi } from './PerfPeriodsApi';
import { Discussions, DiscussionsType } from './Discussions';

/**
 * This class represents the entity "PerfPeriods" of service "d365_metadata".
 */
export class PerfPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PerfPeriodsType<T>
{
  /**
   * Technical entity name for PerfPeriods.
   */
  static override _entityName = 'PerfPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PerfPeriods entity.
   */
  static _keys = ['PerfPeriodId'];
  /**
   * Perf Period Id.
   */
  declare perfPeriodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link Discussions} entity.
   */
  declare discussion: Discussions<T>[];

  constructor(_entityApi: PerfPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface PerfPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  perfPeriodId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discussion: DiscussionsType<T>[];
}

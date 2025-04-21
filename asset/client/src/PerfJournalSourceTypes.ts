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
import type { PerfJournalSourceTypesApi } from './PerfJournalSourceTypesApi';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
import { NoYes } from './NoYes';
import {
  PerformanceJournals,
  PerformanceJournalsType
} from './PerformanceJournals';

/**
 * This class represents the entity "PerfJournalSourceTypes" of service "d365_metadata".
 */
export class PerfJournalSourceTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PerfJournalSourceTypesType<T>
{
  /**
   * Technical entity name for PerfJournalSourceTypes.
   */
  static override _entityName = 'PerfJournalSourceTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PerfJournalSourceTypes entity.
   */
  static _keys = ['SourceType'];
  /**
   * Source Type.
   * @nullable
   */
  declare sourceType?: HcmPerfJournalSourceType | null;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: HcmPerfManagerEmployee | null;
  /**
   * Share.
   * @nullable
   */
  declare share?: NoYes | null;
  /**
   * Enabled.
   * @nullable
   */
  declare enabled?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link PerformanceJournals} entity.
   */
  declare performanceJournal: PerformanceJournals<T>[];

  constructor(_entityApi: PerfJournalSourceTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PerfJournalSourceTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceType?: HcmPerfJournalSourceType | null;
  owner?: HcmPerfManagerEmployee | null;
  share?: NoYes | null;
  enabled?: NoYes | null;
  performanceJournal: PerformanceJournalsType<T>[];
}

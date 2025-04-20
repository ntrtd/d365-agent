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
import type { SimulationJournalGroupLinesApi } from './SimulationJournalGroupLinesApi';

/**
 * This class represents the entity "SimulationJournalGroupLines" of service "d365_metadata".
 */
export class SimulationJournalGroupLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SimulationJournalGroupLinesType<T>
{
  /**
   * Technical entity name for SimulationJournalGroupLines.
   */
  static override _entityName = 'SimulationJournalGroupLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SimulationJournalGroupLines entity.
   */
  static _keys = ['dataAreaId', 'SimulationJournalGroupId', 'JournalName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Simulation Journal Group Id.
   */
  declare simulationJournalGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   */
  declare journalName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SimulationJournalGroupLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SimulationJournalGroupLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  simulationJournalGroupId: DeserializedType<T, 'Edm.String'>;
  journalName: DeserializedType<T, 'Edm.String'>;
}

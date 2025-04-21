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
import type { SimulationJournalGroupTablesApi } from './SimulationJournalGroupTablesApi';

/**
 * This class represents the entity "SimulationJournalGroupTables" of service "d365_metadata".
 */
export class SimulationJournalGroupTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SimulationJournalGroupTablesType<T>
{
  /**
   * Technical entity name for SimulationJournalGroupTables.
   */
  static override _entityName = 'SimulationJournalGroupTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SimulationJournalGroupTables entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SimulationJournalGroupTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SimulationJournalGroupTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { ContainerActivityTablesApi } from './ContainerActivityTablesApi';

/**
 * This class represents the entity "ContainerActivityTables" of service "d365_metadata".
 */
export class ContainerActivityTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ContainerActivityTablesType<T>
{
  /**
   * Technical entity name for ContainerActivityTables.
   */
  static override _entityName = 'ContainerActivityTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ContainerActivityTables entity.
   */
  static _keys = ['dataAreaId', 'ShipId', 'ShipContainerId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Container Id.
   */
  declare shipContainerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Activity Id.
   * @nullable
   */
  declare shipActivityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Vessel Id.
   * @nullable
   */
  declare shipVesselId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esimated Date.
   */
  declare esimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Mode Id.
   * @nullable
   */
  declare dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Temperature.
   */
  declare shipTemperature: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Leg Id.
   * @nullable
   */
  declare shipLegId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Service Provider.
   * @nullable
   */
  declare shipServiceProvider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Actual End Date.
   */
  declare actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ContainerActivityTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ContainerActivityTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  shipContainerId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  shipActivityId?: DeserializedType<T, 'Edm.String'> | null;
  shipVesselId?: DeserializedType<T, 'Edm.String'> | null;
  esimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  shipTemperature: DeserializedType<T, 'Edm.Decimal'>;
  shipLegId?: DeserializedType<T, 'Edm.String'> | null;
  shipServiceProvider?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  actualEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}

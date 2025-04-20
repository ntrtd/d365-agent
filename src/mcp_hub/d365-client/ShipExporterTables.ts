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
import type { ShipExporterTablesApi } from './ShipExporterTablesApi';

/**
 * This class represents the entity "ShipExporterTables" of service "d365_metadata".
 */
export class ShipExporterTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShipExporterTablesType<T>
{
  /**
   * Technical entity name for ShipExporterTables.
   */
  static override _entityName = 'ShipExporterTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipExporterTables entity.
   */
  static _keys = ['dataAreaId', 'ExporterId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Exporter Id.
   */
  declare exporterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Exporter Name.
   * @nullable
   */
  declare exporterName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShipExporterTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipExporterTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  exporterId: DeserializedType<T, 'Edm.String'>;
  exporterName?: DeserializedType<T, 'Edm.String'> | null;
}

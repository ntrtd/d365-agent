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
import type { DmfTestHeaderTablesApi } from './DmfTestHeaderTablesApi';
import { DmfTestLineTables, DmfTestLineTablesType } from './DmfTestLineTables';

/**
 * This class represents the entity "DMFTestHeaderTables" of service "d365_metadata".
 */
export class DmfTestHeaderTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DmfTestHeaderTablesType<T>
{
  /**
   * Technical entity name for DmfTestHeaderTables.
   */
  static override _entityName = 'DMFTestHeaderTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DmfTestHeaderTables entity.
   */
  static _keys = ['dataAreaId', 'HeaderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Id.
   */
  declare headerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DmfTestLineTables} entity.
   */
  declare dmfTestLineTable: DmfTestLineTables<T>[];

  constructor(_entityApi: DmfTestHeaderTablesApi<T>) {
    super(_entityApi);
  }
}

export interface DmfTestHeaderTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dmfTestLineTable: DmfTestLineTablesType<T>[];
}

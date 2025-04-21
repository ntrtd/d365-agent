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
import type { DmfTestLineTablesApi } from './DmfTestLineTablesApi';
import {
  DmfTestHeaderTables,
  DmfTestHeaderTablesType
} from './DmfTestHeaderTables';

/**
 * This class represents the entity "DMFTestLineTables" of service "d365_metadata".
 */
export class DmfTestLineTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DmfTestLineTablesType<T>
{
  /**
   * Technical entity name for DmfTestLineTables.
   */
  static override _entityName = 'DMFTestLineTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DmfTestLineTables entity.
   */
  static _keys = ['dataAreaId', 'HeaderId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Id.
   */
  declare headerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DmfTestHeaderTables} entity.
   */
  declare dmfTestHeaderTable?: DmfTestHeaderTables<T> | null;

  constructor(_entityApi: DmfTestLineTablesApi<T>) {
    super(_entityApi);
  }
}

export interface DmfTestLineTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  headerId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  dmfTestHeaderTable?: DmfTestHeaderTablesType<T> | null;
}

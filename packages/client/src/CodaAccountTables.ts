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
import type { CodaAccountTablesApi } from './CodaAccountTablesApi';

/**
 * This class represents the entity "CodaAccountTables" of service "d365_metadata".
 */
export class CodaAccountTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CodaAccountTablesType<T>
{
  /**
   * Technical entity name for CodaAccountTables.
   */
  static override _entityName = 'CodaAccountTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaAccountTables entity.
   */
  static _keys = ['dataAreaId', 'AccountID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Id.
   */
  declare accountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coda Version.
   */
  declare codaVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Coda Journal Name.
   * @nullable
   */
  declare codaJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coda Protocol.
   */
  declare codaProtocol: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: CodaAccountTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CodaAccountTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountId: DeserializedType<T, 'Edm.String'>;
  codaVersion: DeserializedType<T, 'Edm.Int32'>;
  codaJournalName?: DeserializedType<T, 'Edm.String'> | null;
  codaProtocol: DeserializedType<T, 'Edm.Int32'>;
}

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
import type { DocumentEnabledTablesApi } from './DocumentEnabledTablesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DocumentEnabledTables" of service "d365_metadata".
 */
export class DocumentEnabledTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentEnabledTablesType<T>
{
  /**
   * Technical entity name for DocumentEnabledTables.
   */
  static override _entityName = 'DocumentEnabledTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentEnabledTables entity.
   */
  static _keys = ['dataAreaId', 'TableName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Allow Edit Always.
   * @nullable
   */
  declare allowEditAlways?: NoYes | null;

  constructor(_entityApi: DocumentEnabledTablesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentEnabledTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  allowEditAlways?: NoYes | null;
}

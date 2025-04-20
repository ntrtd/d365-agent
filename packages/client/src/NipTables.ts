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
import type { NipTablesApi } from './NipTablesApi';

/**
 * This class represents the entity "NIPTables" of service "d365_metadata".
 */
export class NipTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NipTablesType<T>
{
  /**
   * Technical entity name for NipTables.
   */
  static override _entityName = 'NIPTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NipTables entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Nip Number.
   * @nullable
   */
  declare nipNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Addressing.
   * @nullable
   */
  declare addressing?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Name.
   * @nullable
   */
  declare accountName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NipTablesApi<T>) {
    super(_entityApi);
  }
}

export interface NipTablesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  nipNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressing?: DeserializedType<T, 'Edm.String'> | null;
  accountName?: DeserializedType<T, 'Edm.String'> | null;
}

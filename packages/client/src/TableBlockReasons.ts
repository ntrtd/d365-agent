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
import type { TableBlockReasonsApi } from './TableBlockReasonsApi';
import { CredManReason } from './CredManReason';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TableBlockReasons" of service "d365_metadata".
 */
export class TableBlockReasons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TableBlockReasonsType<T>
{
  /**
   * Technical entity name for TableBlockReasons.
   */
  static override _entityName = 'TableBlockReasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TableBlockReasons entity.
   */
  static _keys = ['CredManId', 'Company', 'Reason'];
  /**
   * Cred Man Id.
   */
  declare credManId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: CredManReason | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;

  constructor(_entityApi: TableBlockReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface TableBlockReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  credManId: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  reason?: CredManReason | null;
  active?: NoYes | null;
}

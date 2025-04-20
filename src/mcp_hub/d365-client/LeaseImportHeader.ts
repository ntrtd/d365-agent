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
import type { LeaseImportHeaderApi } from './LeaseImportHeaderApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaseImportHeaderCollection" of service "d365_metadata".
 */
export class LeaseImportHeader<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaseImportHeaderType<T>
{
  /**
   * Technical entity name for LeaseImportHeader.
   */
  static override _entityName = 'LeaseImportHeaderCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseImportHeader entity.
   */
  static _keys = ['ProcessId'];
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Import Id.
   * @nullable
   */
  declare importId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity Import.
   * @nullable
   */
  declare entityImport?: NoYes | null;

  constructor(_entityApi: LeaseImportHeaderApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseImportHeaderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processId: DeserializedType<T, 'Edm.Guid'>;
  importId?: DeserializedType<T, 'Edm.String'> | null;
  entityImport?: NoYes | null;
}

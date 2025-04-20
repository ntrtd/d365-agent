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
import type { ExcludeSpecificSourceDocumentLinesApi } from './ExcludeSpecificSourceDocumentLinesApi';

/**
 * This class represents the entity "ExcludeSpecificSourceDocumentLines" of service "d365_metadata".
 */
export class ExcludeSpecificSourceDocumentLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExcludeSpecificSourceDocumentLinesType<T>
{
  /**
   * Technical entity name for ExcludeSpecificSourceDocumentLines.
   */
  static override _entityName = 'ExcludeSpecificSourceDocumentLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExcludeSpecificSourceDocumentLines entity.
   */
  static _keys = ['dataAreaId', 'InventTransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans Id.
   */
  declare inventTransId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ExcludeSpecificSourceDocumentLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ExcludeSpecificSourceDocumentLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventTransId: DeserializedType<T, 'Edm.String'>;
}

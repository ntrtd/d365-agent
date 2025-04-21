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
import type { SourceDocumentHeaderBiEntitiesApi } from './SourceDocumentHeaderBiEntitiesApi';
import { SourceDocumentAccountingStatus } from './SourceDocumentAccountingStatus';

/**
 * This class represents the entity "SourceDocumentHeaderBiEntities" of service "d365_metadata".
 */
export class SourceDocumentHeaderBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceDocumentHeaderBiEntitiesType<T>
{
  /**
   * Technical entity name for SourceDocumentHeaderBiEntities.
   */
  static override _entityName = 'SourceDocumentHeaderBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceDocumentHeaderBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type Enum Value.
   */
  declare typeEnumValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Type Enum Name.
   * @nullable
   */
  declare typeEnumName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Accounting Status.
   * @nullable
   */
  declare accountingStatus?: SourceDocumentAccountingStatus | null;
  /**
   * Source Relation Type.
   */
  declare sourceRelationType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SourceDocumentHeaderBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceDocumentHeaderBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  typeEnumValue: DeserializedType<T, 'Edm.Int32'>;
  typeEnumName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  accountingStatus?: SourceDocumentAccountingStatus | null;
  sourceRelationType: DeserializedType<T, 'Edm.Int32'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}

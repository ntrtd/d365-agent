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
import type { DocuExportAttachmentsTablesApi } from './DocuExportAttachmentsTablesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DocuExportAttachmentsTables" of service "d365_metadata".
 */
export class DocuExportAttachmentsTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocuExportAttachmentsTablesType<T>
{
  /**
   * Technical entity name for DocuExportAttachmentsTables.
   */
  static override _entityName = 'DocuExportAttachmentsTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocuExportAttachmentsTables entity.
   */
  static _keys = ['dataAreaId', 'SourceTableName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Table Name.
   */
  declare sourceTableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;
  /**
   * Date Field Name.
   * @nullable
   */
  declare dateFieldName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DocuExportAttachmentsTablesApi<T>) {
    super(_entityApi);
  }
}

export interface DocuExportAttachmentsTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceTableName: DeserializedType<T, 'Edm.String'>;
  isEnabled?: NoYes | null;
  dateFieldName?: DeserializedType<T, 'Edm.String'> | null;
}

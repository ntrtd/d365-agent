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
import type { EssLeaveRequestAttachmentsApi } from './EssLeaveRequestAttachmentsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { DocuStorageProviderType } from './DocuStorageProviderType';

/**
 * This class represents the entity "EssLeaveRequestAttachments" of service "d365_metadata".
 */
export class EssLeaveRequestAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveRequestAttachmentsType<T>
{
  /**
   * Technical entity name for EssLeaveRequestAttachments.
   */
  static override _entityName = 'EssLeaveRequestAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveRequestAttachments entity.
   */
  static _keys = ['dataAreaId', 'DocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Path.
   * @nullable
   */
  declare filePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Provider Id.
   * @nullable
   */
  declare storageProviderId?: DocuStorageProviderType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Contents.
   * @nullable
   */
  declare fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EssLeaveRequestAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveRequestAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  filePath?: DeserializedType<T, 'Edm.String'> | null;
  storageProviderId?: DocuStorageProviderType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
}

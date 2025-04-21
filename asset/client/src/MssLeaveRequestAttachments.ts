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
import type { MssLeaveRequestAttachmentsApi } from './MssLeaveRequestAttachmentsApi';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { DocuRestriction } from './DocuRestriction';
import { DocuStorageProviderType } from './DocuStorageProviderType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MssLeaveRequestAttachments" of service "d365_metadata".
 */
export class MssLeaveRequestAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MssLeaveRequestAttachmentsType<T>
{
  /**
   * Technical entity name for MssLeaveRequestAttachments.
   */
  static override _entityName = 'MssLeaveRequestAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MssLeaveRequestAttachments entity.
   */
  static _keys = ['DocumentId'];
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * File Contents.
   * @nullable
   */
  declare fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: LeaveRequestApprovalStatus | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Storage Provider Id.
   * @nullable
   */
  declare storageProviderId?: DocuStorageProviderType | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Personnel Number.
   * @nullable
   */
  declare workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * File Path.
   * @nullable
   */
  declare filePath?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MssLeaveRequestAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MssLeaveRequestAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  status?: LeaveRequestApprovalStatus | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  storageProviderId?: DocuStorageProviderType | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  filePath?: DeserializedType<T, 'Edm.String'> | null;
}

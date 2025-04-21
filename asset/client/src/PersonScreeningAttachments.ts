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
import type { PersonScreeningAttachmentsApi } from './PersonScreeningAttachmentsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';

/**
 * This class represents the entity "PersonScreeningAttachments" of service "d365_metadata".
 */
export class PersonScreeningAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonScreeningAttachmentsType<T>
{
  /**
   * Technical entity name for PersonScreeningAttachments.
   */
  static override _entityName = 'PersonScreeningAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonScreeningAttachments entity.
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
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Screening Type Id.
   * @nullable
   */
  declare screeningTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required By.
   */
  declare requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
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

  constructor(_entityApi: PersonScreeningAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonScreeningAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  screeningTypeId?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  requiredBy: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
}

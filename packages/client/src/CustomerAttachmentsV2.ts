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
import type { CustomerAttachmentsV2Api } from './CustomerAttachmentsV2Api';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "CustomerAttachmentsV2" of service "d365_metadata".
 */
export class CustomerAttachmentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerAttachmentsV2Type<T>
{
  /**
   * Technical entity name for CustomerAttachmentsV2.
   */
  static override _entityName = 'CustomerAttachmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerAttachmentsV2 entity.
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
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customerAttachmentsV2Entity?: CustomersV3<T> | null;

  constructor(_entityApi: CustomerAttachmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface CustomerAttachmentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  customerAttachmentsV2Entity?: CustomersV3Type<T> | null;
}

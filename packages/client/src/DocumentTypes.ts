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
import type { DocumentTypesApi } from './DocumentTypesApi';
import { NoYes } from './NoYes';
import { DocuStructureType } from './DocuStructureType';
import { DocuFilePlace } from './DocuFilePlace';
import { DocuTypeGroup } from './DocuTypeGroup';
import { DocuRemoveOption } from './DocuRemoveOption';
import {
  MaintenanceWorkOrderLineDocumentAttachments,
  MaintenanceWorkOrderLineDocumentAttachmentsType
} from './MaintenanceWorkOrderLineDocumentAttachments';
import {
  MaintenanceRequestDocumentAttachments,
  MaintenanceRequestDocumentAttachmentsType
} from './MaintenanceRequestDocumentAttachments';

/**
 * This class represents the entity "DocumentTypes" of service "d365_metadata".
 */
export class DocumentTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentTypesType<T>
{
  /**
   * Technical entity name for DocumentTypes.
   */
  static override _entityName = 'DocumentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentTypes entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * File Removal Confirmation.
   * @nullable
   */
  declare fileRemovalConfirmation?: NoYes | null;
  /**
   * Docu Structure Type.
   * @nullable
   */
  declare docuStructureType?: DocuStructureType | null;
  /**
   * File Place.
   * @nullable
   */
  declare filePlace?: DocuFilePlace | null;
  /**
   * Type Group.
   * @nullable
   */
  declare typeGroup?: DocuTypeGroup | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Class Name.
   * @nullable
   */
  declare actionClassName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Host.
   * @nullable
   */
  declare host?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remove Option.
   * @nullable
   */
  declare removeOption?: DocuRemoveOption | null;
  /**
   * Parameters.
   * @nullable
   */
  declare parameters?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Folder Path.
   * @nullable
   */
  declare folderPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link MaintenanceWorkOrderLineDocumentAttachments} entity.
   */
  declare productDocumentAttachments: MaintenanceWorkOrderLineDocumentAttachments<T>[];
  /**
   * One-to-many navigation property to the {@link MaintenanceRequestDocumentAttachments} entity.
   */
  declare releasedProductDocumentAttachments: MaintenanceRequestDocumentAttachments<T>[];

  constructor(_entityApi: DocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  fileRemovalConfirmation?: NoYes | null;
  docuStructureType?: DocuStructureType | null;
  filePlace?: DocuFilePlace | null;
  typeGroup?: DocuTypeGroup | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  actionClassName?: DeserializedType<T, 'Edm.String'> | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  host?: DeserializedType<T, 'Edm.String'> | null;
  removeOption?: DocuRemoveOption | null;
  parameters?: DeserializedType<T, 'Edm.Binary'> | null;
  folderPath?: DeserializedType<T, 'Edm.String'> | null;
  productDocumentAttachments: MaintenanceWorkOrderLineDocumentAttachmentsType<T>[];
  releasedProductDocumentAttachments: MaintenanceRequestDocumentAttachmentsType<T>[];
}

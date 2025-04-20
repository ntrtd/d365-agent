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
import type { DocumentParametersApi } from './DocumentParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DocumentParameters" of service "d365_metadata".
 */
export class DocumentParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentParametersType<T>
{
  /**
   * Technical entity name for DocumentParameters.
   */
  static override _entityName = 'DocumentParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentParameters entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default File Docu Type Rec Id.
   */
  declare defaultFileDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Note Docu Type Rec Id.
   */
  declare defaultNoteDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Note Docu Type Type Id.
   * @nullable
   */
  declare defaultNoteDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Table.
   * @nullable
   */
  declare activeTable?: NoYes | null;
  /**
   * Max File Size In File System.
   */
  declare maxFileSizeInFileSystem: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default File Docu Type Type Id.
   * @nullable
   */
  declare defaultFileDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Url Docu Type Rec Id.
   */
  declare defaultUrlDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Image Docu Type Rec Id.
   */
  declare defaultImageDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Image Docu Type Type Id.
   * @nullable
   */
  declare defaultImageDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Url Docu Type Type Id.
   * @nullable
   */
  declare defaultUrlDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Apps Server Url.
   * @nullable
   */
  declare webAppsServerUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submit To Workflow.
   * @nullable
   */
  declare submitToWorkflow?: NoYes | null;
  /**
   * Default Share Point Server.
   * @nullable
   */
  declare defaultSharePointServer?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DocumentParametersApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  defaultFileDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  defaultNoteDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  defaultNoteDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  activeTable?: NoYes | null;
  maxFileSizeInFileSystem: DeserializedType<T, 'Edm.Int32'>;
  defaultFileDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultUrlDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  defaultImageDocuTypeRecId: DeserializedType<T, 'Edm.Int64'>;
  defaultImageDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultUrlDocuTypeTypeId?: DeserializedType<T, 'Edm.String'> | null;
  webAppsServerUrl?: DeserializedType<T, 'Edm.String'> | null;
  submitToWorkflow?: NoYes | null;
  defaultSharePointServer?: DeserializedType<T, 'Edm.String'> | null;
}

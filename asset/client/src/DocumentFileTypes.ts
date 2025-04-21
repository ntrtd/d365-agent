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
import type { DocumentFileTypesApi } from './DocumentFileTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DocumentFileTypes" of service "d365_metadata".
 */
export class DocumentFileTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentFileTypesType<T>
{
  /**
   * Technical entity name for DocumentFileTypes.
   */
  static override _entityName = 'DocumentFileTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentFileTypes entity.
   */
  static _keys = ['dataAreaId', 'FileType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * File Type.
   */
  declare fileType: DeserializedType<T, 'Edm.String'>;
  /**
   * File Type Description.
   * @nullable
   */
  declare fileTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Natively Web Renderable.
   * @nullable
   */
  declare nativelyWebRenderable?: NoYes | null;

  constructor(_entityApi: DocumentFileTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentFileTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fileType: DeserializedType<T, 'Edm.String'>;
  fileTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  nativelyWebRenderable?: NoYes | null;
}

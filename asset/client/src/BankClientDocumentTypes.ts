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
import type { BankClientDocumentTypesApi } from './BankClientDocumentTypesApi';
import { BankClientDocumentTypeCategoryRu } from './BankClientDocumentTypeCategoryRu';

/**
 * This class represents the entity "BankClientDocumentTypes" of service "d365_metadata".
 */
export class BankClientDocumentTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankClientDocumentTypesType<T>
{
  /**
   * Technical entity name for BankClientDocumentTypes.
   */
  static override _entityName = 'BankClientDocumentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankClientDocumentTypes entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Type.
   * @nullable
   */
  declare documentType?: BankClientDocumentTypeCategoryRu | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankClientDocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BankClientDocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  documentType?: BankClientDocumentTypeCategoryRu | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

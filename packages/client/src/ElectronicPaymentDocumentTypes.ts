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
import type { ElectronicPaymentDocumentTypesApi } from './ElectronicPaymentDocumentTypesApi';

/**
 * This class represents the entity "ElectronicPaymentDocumentTypes" of service "d365_metadata".
 */
export class ElectronicPaymentDocumentTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentDocumentTypesType<T>
{
  /**
   * Technical entity name for ElectronicPaymentDocumentTypes.
   */
  static override _entityName = 'ElectronicPaymentDocumentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentDocumentTypes entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId', 'DocumentType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Type.
   */
  declare documentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentDocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentDocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  documentType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

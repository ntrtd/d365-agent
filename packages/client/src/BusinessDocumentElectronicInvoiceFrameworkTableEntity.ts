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
import type { BusinessDocumentElectronicInvoiceFrameworkTableEntityApi } from './BusinessDocumentElectronicInvoiceFrameworkTableEntityApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BusinessDocumentElectronicInvoiceFrameworkTableEntity" of service "d365_metadata".
 */
export class BusinessDocumentElectronicInvoiceFrameworkTableEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessDocumentElectronicInvoiceFrameworkTableEntityType<T>
{
  /**
   * Technical entity name for BusinessDocumentElectronicInvoiceFrameworkTableEntity.
   */
  static override _entityName =
    'BusinessDocumentElectronicInvoiceFrameworkTableEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessDocumentElectronicInvoiceFrameworkTableEntity entity.
   */
  static _keys = ['dataAreaId', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Manager Service Code Validation Enabled.
   * @nullable
   */
  declare projectManagerServiceCodeValidationEnabled?: NoYes | null;
  /**
   * Project Manager Siret Validation Enabled.
   * @nullable
   */
  declare projectManagerSiretValidationEnabled?: NoYes | null;
  /**
   * Invoice Account Service Code Validation Enabled.
   * @nullable
   */
  declare invoiceAccountServiceCodeValidationEnabled?: NoYes | null;
  /**
   * Invoice Account Siret Validation Enabled.
   * @nullable
   */
  declare invoiceAccountSiretValidationEnabled?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: BusinessDocumentElectronicInvoiceFrameworkTableEntityApi<T>
  ) {
    super(_entityApi);
  }
}

export interface BusinessDocumentElectronicInvoiceFrameworkTableEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  projectManagerServiceCodeValidationEnabled?: NoYes | null;
  projectManagerSiretValidationEnabled?: NoYes | null;
  invoiceAccountServiceCodeValidationEnabled?: NoYes | null;
  invoiceAccountSiretValidationEnabled?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

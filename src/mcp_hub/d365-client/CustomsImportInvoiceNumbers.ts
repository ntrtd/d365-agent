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
import type { CustomsImportInvoiceNumbersApi } from './CustomsImportInvoiceNumbersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomsImportInvoiceNumbers" of service "d365_metadata".
 */
export class CustomsImportInvoiceNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomsImportInvoiceNumbersType<T>
{
  /**
   * Technical entity name for CustomsImportInvoiceNumbers.
   */
  static override _entityName = 'CustomsImportInvoiceNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomsImportInvoiceNumbers entity.
   */
  static _keys = ['dataAreaId', 'ImporterInvoiceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Importer Invoice Number.
   */
  declare importerInvoiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomsImportInvoiceNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsImportInvoiceNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  importerInvoiceNumber: DeserializedType<T, 'Edm.String'>;
  closed?: NoYes | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

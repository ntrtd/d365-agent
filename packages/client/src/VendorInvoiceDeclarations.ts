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
import type { VendorInvoiceDeclarationsApi } from './VendorInvoiceDeclarationsApi';
import { InvoiceRecordTypeIs } from './InvoiceRecordTypeIs';

/**
 * This class represents the entity "VendorInvoiceDeclarations" of service "d365_metadata".
 */
export class VendorInvoiceDeclarations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorInvoiceDeclarationsType<T>
{
  /**
   * Technical entity name for VendorInvoiceDeclarations.
   */
  static override _entityName = 'VendorInvoiceDeclarations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceDeclarations entity.
   */
  static _keys = ['dataAreaId', 'InvoiceDeclarationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Declaration Id.
   */
  declare invoiceDeclarationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Type.
   * @nullable
   */
  declare recordType?: InvoiceRecordTypeIs | null;
  /**
   * Reporting Code.
   * @nullable
   */
  declare reportingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendorInvoiceDeclarationsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceDeclarationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceDeclarationId: DeserializedType<T, 'Edm.String'>;
  recordType?: InvoiceRecordTypeIs | null;
  reportingCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

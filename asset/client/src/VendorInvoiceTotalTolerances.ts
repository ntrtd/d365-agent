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
import type { VendorInvoiceTotalTolerancesApi } from './VendorInvoiceTotalTolerancesApi';

/**
 * This class represents the entity "VendorInvoiceTotalTolerances" of service "d365_metadata".
 */
export class VendorInvoiceTotalTolerances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorInvoiceTotalTolerancesType<T>
{
  /**
   * Technical entity name for VendorInvoiceTotalTolerances.
   */
  static override _entityName = 'VendorInvoiceTotalTolerances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorInvoiceTotalTolerances entity.
   */
  static _keys = ['dataAreaId', 'VendorAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account.
   */
  declare vendorAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Totals Percentage.
   */
  declare invoiceTotalsPercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: VendorInvoiceTotalTolerancesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInvoiceTotalTolerancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccount: DeserializedType<T, 'Edm.String'>;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceTotalsPercentage: DeserializedType<T, 'Edm.Decimal'>;
}

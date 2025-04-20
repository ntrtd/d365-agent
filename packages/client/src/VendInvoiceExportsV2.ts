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
import type { VendInvoiceExportsV2Api } from './VendInvoiceExportsV2Api';
import { ProjVendInvoiceStatus } from './ProjVendInvoiceStatus';
import { NoYes } from './NoYes';
import {
  ProjVendInvoiceLinesExportEntity,
  ProjVendInvoiceLinesExportEntityType
} from './ProjVendInvoiceLinesExportEntity';

/**
 * This class represents the entity "VendInvoiceExportsV2" of service "d365_metadata".
 */
export class VendInvoiceExportsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceExportsV2Type<T>
{
  /**
   * Technical entity name for VendInvoiceExportsV2.
   */
  static override _entityName = 'VendInvoiceExportsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceExportsV2 entity.
   */
  static _keys = ['dataAreaId', 'InvoiceAccount', 'VendorInvoiceNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Account.
   */
  declare invoiceAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Invoice Num.
   */
  declare vendorInvoiceNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Vend Invoice Status.
   * @nullable
   */
  declare projVendInvoiceStatus?: ProjVendInvoiceStatus | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table Ref Id.
   * @nullable
   */
  declare tableRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subcontract Invoice.
   * @nullable
   */
  declare subcontractInvoice?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ProjVendInvoiceLinesExportEntity} entity.
   */
  declare projVendInvoiceLineExportV2?: ProjVendInvoiceLinesExportEntity<T> | null;

  constructor(_entityApi: VendInvoiceExportsV2Api<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceExportsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  invoiceAccount: DeserializedType<T, 'Edm.String'>;
  vendorInvoiceNum: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  projVendInvoiceStatus?: ProjVendInvoiceStatus | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  tableRefId?: DeserializedType<T, 'Edm.String'> | null;
  subcontractInvoice?: NoYes | null;
  projVendInvoiceLineExportV2?: ProjVendInvoiceLinesExportEntityType<T> | null;
}

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
import type { ProjVendInvoicesExportApi } from './ProjVendInvoicesExportApi';
import { NoYes } from './NoYes';
import {
  ProjVendInvoiceLinesExportEntity,
  ProjVendInvoiceLinesExportEntityType
} from './ProjVendInvoiceLinesExportEntity';

/**
 * This class represents the entity "ProjVendInvoicesExport" of service "d365_metadata".
 */
export class ProjVendInvoicesExport<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjVendInvoicesExportType<T>
{
  /**
   * Technical entity name for ProjVendInvoicesExport.
   */
  static override _entityName = 'ProjVendInvoicesExport';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjVendInvoicesExport entity.
   */
  static _keys = ['dataAreaId', 'TableRefId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Ref Id.
   */
  declare tableRefId: DeserializedType<T, 'Edm.String'>;
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
   * Vendor Invoice Num.
   * @nullable
   */
  declare vendorInvoiceNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
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
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subcontract Invoice.
   * @nullable
   */
  declare subcontractInvoice?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ProjVendInvoiceLinesExportEntity} entity.
   */
  declare projVendInvoiceLineExport?: ProjVendInvoiceLinesExportEntity<T> | null;

  constructor(_entityApi: ProjVendInvoicesExportApi<T>) {
    super(_entityApi);
  }
}

export interface ProjVendInvoicesExportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tableRefId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorInvoiceNum?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  subcontractInvoice?: NoYes | null;
  projVendInvoiceLineExport?: ProjVendInvoiceLinesExportEntityType<T> | null;
}

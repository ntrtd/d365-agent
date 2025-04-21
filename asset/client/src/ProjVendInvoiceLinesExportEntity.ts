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
import type { ProjVendInvoiceLinesExportEntityApi } from './ProjVendInvoiceLinesExportEntityApi';
import { ProjCategoryType } from './ProjCategoryType';
import { ProjBillingType } from './ProjBillingType';
import {
  VendInvoiceExportsV2,
  VendInvoiceExportsV2Type
} from './VendInvoiceExportsV2';
import {
  ProjVendInvoicesExport,
  ProjVendInvoicesExportType
} from './ProjVendInvoicesExport';

/**
 * This class represents the entity "ProjVendInvoiceLinesExportEntity" of service "d365_metadata".
 */
export class ProjVendInvoiceLinesExportEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjVendInvoiceLinesExportEntityType<T>
{
  /**
   * Technical entity name for ProjVendInvoiceLinesExportEntity.
   */
  static override _entityName = 'ProjVendInvoiceLinesExportEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjVendInvoiceLinesExportEntity entity.
   */
  static _keys = ['ProjTransId', 'ProjDataAreaId'];
  /**
   * Proj Trans Id.
   */
  declare projTransId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Data Area Id.
   */
  declare projDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Invoice Num.
   * @nullable
   */
  declare vendorInvoiceNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Subcontract Line Number.
   * @nullable
   */
  declare projSubcontractLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Role Id.
   * @nullable
   */
  declare roleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * D Area Id.
   * @nullable
   */
  declare dAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Unit.
   * @nullable
   */
  declare purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Item Trans Exists.
   */
  declare projItemTransExists: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty Receive Now.
   */
  declare qtyReceiveNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Task Number.
   * @nullable
   */
  declare projTaskNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Type.
   * @nullable
   */
  declare categoryType?: ProjCategoryType | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Price.
   */
  declare purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Billing Type.
   * @nullable
   */
  declare billingType?: ProjBillingType | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendInvoiceExportsV2} entity.
   */
  declare projVendInvoiceExportV2?: VendInvoiceExportsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjVendInvoicesExport} entity.
   */
  declare projVendInvoiceExport?: ProjVendInvoicesExport<T> | null;

  constructor(_entityApi: ProjVendInvoiceLinesExportEntityApi<T>) {
    super(_entityApi);
  }
}

export interface ProjVendInvoiceLinesExportEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  projTransId: DeserializedType<T, 'Edm.String'>;
  projDataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorInvoiceNum?: DeserializedType<T, 'Edm.String'> | null;
  projSubcontractLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  roleId?: DeserializedType<T, 'Edm.String'> | null;
  dAreaId?: DeserializedType<T, 'Edm.String'> | null;
  purchUnit?: DeserializedType<T, 'Edm.String'> | null;
  projItemTransExists: DeserializedType<T, 'Edm.Int32'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  qtyReceiveNow: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTaskNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  categoryType?: ProjCategoryType | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  purchPrice: DeserializedType<T, 'Edm.Decimal'>;
  billingType?: ProjBillingType | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  projVendInvoiceExportV2?: VendInvoiceExportsV2Type<T> | null;
  projVendInvoiceExport?: ProjVendInvoicesExportType<T> | null;
}

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
import type { VendInvoiceApprovalAttachedLinesApi } from './VendInvoiceApprovalAttachedLinesApi';

/**
 * This class represents the entity "VendInvoiceApprovalAttachedLines" of service "d365_metadata".
 */
export class VendInvoiceApprovalAttachedLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceApprovalAttachedLinesType<T>
{
  /**
   * Technical entity name for VendInvoiceApprovalAttachedLines.
   */
  static override _entityName = 'VendInvoiceApprovalAttachedLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceApprovalAttachedLines entity.
   */
  static _keys = ['dataAreaId', 'LegalEntity', 'HeaderReference', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Reference.
   */
  declare headerReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Net Amount.
   */
  declare lineNetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendInvoiceApprovalAttachedLinesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceApprovalAttachedLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineNetAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
}

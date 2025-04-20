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
import type { VendInvoiceApprovalHeadersApi } from './VendInvoiceApprovalHeadersApi';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';

/**
 * This class represents the entity "VendInvoiceApprovalHeaders" of service "d365_metadata".
 */
export class VendInvoiceApprovalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceApprovalHeadersType<T>
{
  /**
   * Technical entity name for VendInvoiceApprovalHeaders.
   */
  static override _entityName = 'VendInvoiceApprovalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceApprovalHeaders entity.
   */
  static _keys = ['WorkItemRecId', 'LegalEntity', 'HeaderReference'];
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Reference.
   */
  declare headerReference: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Vendor Account.
   * @nullable
   */
  declare invoiceVendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Vendor Name.
   * @nullable
   */
  declare invoiceVendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Due Date.
   */
  declare invoiceDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item Type.
   * @nullable
   */
  declare workItemType?: WorkflowWorkItemType | null;
  /**
   * Workflow Element Id.
   */
  declare workflowElementId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: VendInvoiceApprovalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceApprovalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  headerReference: DeserializedType<T, 'Edm.String'>;
  invoiceVendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorName?: DeserializedType<T, 'Edm.String'> | null;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  workItemType?: WorkflowWorkItemType | null;
  workflowElementId: DeserializedType<T, 'Edm.Guid'>;
}

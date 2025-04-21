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
import type { LtmCustDefaultDocumentClassesApi } from './LtmCustDefaultDocumentClassesApi';

/**
 * This class represents the entity "LTMCustDefaultDocumentClasses" of service "d365_metadata".
 */
export class LtmCustDefaultDocumentClasses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmCustDefaultDocumentClassesType<T>
{
  /**
   * Technical entity name for LtmCustDefaultDocumentClasses.
   */
  static override _entityName = 'LTMCustDefaultDocumentClasses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmCustDefaultDocumentClasses entity.
   */
  static _keys = ['AccountTypeGroupId'];
  /**
   * Account Type Group Id.
   */
  declare accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Invoiceid.
   * @nullable
   */
  declare projectInvoiceid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text Invoice Vc Id.
   * @nullable
   */
  declare freeTextInvoiceVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ftz Paking Slip Vc Id.
   * @nullable
   */
  declare ftzPakingSlipVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Credit Note Id.
   * @nullable
   */
  declare projectCreditNoteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Free Text Credit Note Vc Id.
   * @nullable
   */
  declare freeTextCreditNoteVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Packing Slipid.
   * @nullable
   */
  declare projectPackingSlipid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Return Delivery Note Id.
   * @nullable
   */
  declare projectReturnDeliveryNoteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Credit Note Vc Id.
   * @nullable
   */
  declare salesCreditNoteVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Vc Id.
   * @nullable
   */
  declare packingSlipVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Invoice Vc Id.
   * @nullable
   */
  declare salesInvoiceVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refound Remission Vc Id.
   * @nullable
   */
  declare refoundRemissionVcId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmCustDefaultDocumentClassesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmCustDefaultDocumentClassesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  projectInvoiceid?: DeserializedType<T, 'Edm.String'> | null;
  freeTextInvoiceVcId?: DeserializedType<T, 'Edm.String'> | null;
  ftzPakingSlipVcId?: DeserializedType<T, 'Edm.String'> | null;
  projectCreditNoteId?: DeserializedType<T, 'Edm.String'> | null;
  freeTextCreditNoteVcId?: DeserializedType<T, 'Edm.String'> | null;
  projectPackingSlipid?: DeserializedType<T, 'Edm.String'> | null;
  projectReturnDeliveryNoteId?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditNoteVcId?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipVcId?: DeserializedType<T, 'Edm.String'> | null;
  salesInvoiceVcId?: DeserializedType<T, 'Edm.String'> | null;
  refoundRemissionVcId?: DeserializedType<T, 'Edm.String'> | null;
}

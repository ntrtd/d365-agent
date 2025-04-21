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
import type { VendDefaultDocumentClassV2Api } from './VendDefaultDocumentClassV2Api';

/**
 * This class represents the entity "VendDefaultDocumentClassV2" of service "d365_metadata".
 */
export class VendDefaultDocumentClassV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendDefaultDocumentClassV2Type<T>
{
  /**
   * Technical entity name for VendDefaultDocumentClassV2.
   */
  static override _entityName = 'VendDefaultDocumentClassV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendDefaultDocumentClassV2 entity.
   */
  static _keys = ['dataAreaId', 'AccountTypeGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type Group Id.
   */
  declare accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Journal Line Vc Id.
   * @nullable
   */
  declare creditJournalLineVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Vc Id.
   * @nullable
   */
  declare packingSlipVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Refound Remission Vc Id.
   * @nullable
   */
  declare refoundRemissionVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Payment Document Class Id.
   * @nullable
   */
  declare defaultPaymentDocumentClassId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purch Credit Note Vc Id.
   * @nullable
   */
  declare purchCreditNoteVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Invoice Vc Id.
   * @nullable
   */
  declare purchInvoiceVcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Journal Line Vc Id.
   * @nullable
   */
  declare debitJournalLineVcId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendDefaultDocumentClassV2Api<T>) {
    super(_entityApi);
  }
}

export interface VendDefaultDocumentClassV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  creditJournalLineVcId?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipVcId?: DeserializedType<T, 'Edm.String'> | null;
  refoundRemissionVcId?: DeserializedType<T, 'Edm.String'> | null;
  defaultPaymentDocumentClassId?: DeserializedType<T, 'Edm.String'> | null;
  purchCreditNoteVcId?: DeserializedType<T, 'Edm.String'> | null;
  purchInvoiceVcId?: DeserializedType<T, 'Edm.String'> | null;
  debitJournalLineVcId?: DeserializedType<T, 'Edm.String'> | null;
}

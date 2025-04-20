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
import type { CustomerPaymentJournalHeadersApi } from './CustomerPaymentJournalHeadersApi';
import { NoYes } from './NoYes';
import {
  CustomerPaymentJournalLines,
  CustomerPaymentJournalLinesType
} from './CustomerPaymentJournalLines';
import {
  PaymentJournalLineSettledInvoices,
  PaymentJournalLineSettledInvoicesType
} from './PaymentJournalLineSettledInvoices';

/**
 * This class represents the entity "CustomerPaymentJournalHeaders" of service "d365_metadata".
 */
export class CustomerPaymentJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentJournalHeadersType<T>
{
  /**
   * Technical entity name for CustomerPaymentJournalHeaders.
   */
  static override _entityName = 'CustomerPaymentJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentJournalHeaders entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link CustomerPaymentJournalLines} entity.
   */
  declare customerPaymentJournalLineHeaderEntity: CustomerPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentJournalLineSettledInvoices} entity.
   */
  declare customerPaymentJournalHeaderRole: PaymentJournalLineSettledInvoices<T>[];

  constructor(_entityApi: CustomerPaymentJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPosted?: NoYes | null;
  customerPaymentJournalLineHeaderEntity: CustomerPaymentJournalLinesType<T>[];
  customerPaymentJournalHeaderRole: PaymentJournalLineSettledInvoicesType<T>[];
}

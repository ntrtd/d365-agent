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
import type { DirectDebitMandatesApi } from './DirectDebitMandatesApi';
import { CustMandateStatus } from './CustMandateStatus';
import { CustMandateScheme } from './CustMandateScheme';
import { NoYes } from './NoYes';
import { CustMandatePaymentType } from './CustMandatePaymentType';

/**
 * This class represents the entity "DirectDebitMandates" of service "d365_metadata".
 */
export class DirectDebitMandates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DirectDebitMandatesType<T>
{
  /**
   * Technical entity name for DirectDebitMandates.
   */
  static override _entityName = 'DirectDebitMandates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DirectDebitMandates entity.
   */
  static _keys = ['dataAreaId', 'MandateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mandate Id.
   */
  declare mandateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Address.
   * @nullable
   */
  declare customerAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Days For Recurring Prenotification.
   */
  declare daysForRecurringPrenotification: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: CustMandateStatus | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cancellation Date.
   */
  declare cancellationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Days For First Prenotification.
   */
  declare daysForFirstPrenotification: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Bank Account.
   * @nullable
   */
  declare customerBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Date.
   */
  declare signatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mandate Scheme.
   * @nullable
   */
  declare mandateScheme?: CustMandateScheme | null;
  /**
   * Days For First Bank Submission.
   */
  declare daysForFirstBankSubmission: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Usage Count.
   */
  declare usageCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is First.
   * @nullable
   */
  declare isFirst?: NoYes | null;
  /**
   * Expected Number Of Payments.
   */
  declare expectedNumberOfPayments: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mandate Payment Type.
   * @nullable
   */
  declare mandatePaymentType?: CustMandatePaymentType | null;
  /**
   * Creditor Bank Account.
   * @nullable
   */
  declare creditorBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Location.
   * @nullable
   */
  declare signatureLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Days For Recurring Bank Submission.
   */
  declare daysForRecurringBankSubmission: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: DirectDebitMandatesApi<T>) {
    super(_entityApi);
  }
}

export interface DirectDebitMandatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mandateId: DeserializedType<T, 'Edm.String'>;
  customerAddress?: DeserializedType<T, 'Edm.String'> | null;
  daysForRecurringPrenotification: DeserializedType<T, 'Edm.Int32'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  status?: CustMandateStatus | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cancellationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  daysForFirstPrenotification: DeserializedType<T, 'Edm.Int32'>;
  customerBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  signatureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mandateScheme?: CustMandateScheme | null;
  daysForFirstBankSubmission: DeserializedType<T, 'Edm.Int32'>;
  usageCount: DeserializedType<T, 'Edm.Int32'>;
  isFirst?: NoYes | null;
  expectedNumberOfPayments: DeserializedType<T, 'Edm.Int32'>;
  mandatePaymentType?: CustMandatePaymentType | null;
  creditorBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  signatureLocation?: DeserializedType<T, 'Edm.String'> | null;
  daysForRecurringBankSubmission: DeserializedType<T, 'Edm.Int32'>;
}

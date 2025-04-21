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
import type { ReportExtraFieldsBEsApi } from './ReportExtraFieldsBEsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ReportExtraFieldsBEs" of service "d365_metadata".
 */
export class ReportExtraFieldsBEs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReportExtraFieldsBEsType<T>
{
  /**
   * Technical entity name for ReportExtraFieldsBEs.
   */
  static override _entityName = 'ReportExtraFieldsBEs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReportExtraFieldsBEs entity.
   */
  static _keys = ['dataAreaId', 'TaxPeriod', 'ValidFrom', 'ValidTo'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Period.
   */
  declare taxPeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Disbursement.
   * @nullable
   */
  declare vatDisbursement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nihil Annual Listing.
   * @nullable
   */
  declare nihilAnnualListing?: NoYes | null;
  /**
   * Payment Form Order.
   * @nullable
   */
  declare paymentFormOrder?: NoYes | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requests Repayments.
   * @nullable
   */
  declare requestsRepayments?: NoYes | null;

  constructor(_entityApi: ReportExtraFieldsBEsApi<T>) {
    super(_entityApi);
  }
}

export interface ReportExtraFieldsBEsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPeriod: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  vatDisbursement?: DeserializedType<T, 'Edm.String'> | null;
  nihilAnnualListing?: NoYes | null;
  paymentFormOrder?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestsRepayments?: NoYes | null;
}

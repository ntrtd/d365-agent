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
import type { PublishedRequestForQuotationReplyLineSummariesApi } from './PublishedRequestForQuotationReplyLineSummariesApi';
import { PurchRfqReplyStatusPsn } from './PurchRfqReplyStatusPsn';
import { NoYes } from './NoYes';
import { PurchRfqStatus } from './PurchRfqStatus';

/**
 * This class represents the entity "PublishedRequestForQuotationReplyLineSummaries" of service "d365_metadata".
 */
export class PublishedRequestForQuotationReplyLineSummaries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PublishedRequestForQuotationReplyLineSummariesType<T>
{
  /**
   * Technical entity name for PublishedRequestForQuotationReplyLineSummaries.
   */
  static override _entityName =
    'PublishedRequestForQuotationReplyLineSummaries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PublishedRequestForQuotationReplyLineSummaries entity.
   */
  static _keys = ['dataAreaId', 'RFQNumber', 'RFQCaseNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Case Number.
   */
  declare rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Vendor Score.
   */
  declare totalVendorScore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Reply Status.
   * @nullable
   */
  declare vendorReplyStatus?: PurchRfqReplyStatusPsn | null;
  /**
   * Total Vendor Score Comment.
   * @nullable
   */
  declare totalVendorScoreComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bid Awarded.
   * @nullable
   */
  declare isBidAwarded?: NoYes | null;
  /**
   * Highest Rfq Status.
   * @nullable
   */
  declare highestRfqStatus?: PurchRfqStatus | null;
  /**
   * Lowest Rfq Status.
   * @nullable
   */
  declare lowestRfqStatus?: PurchRfqStatus | null;
  /**
   * Rfq Case Requesting Worker Name.
   * @nullable
   */
  declare rfqCaseRequestingWorkerName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(
    _entityApi: PublishedRequestForQuotationReplyLineSummariesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface PublishedRequestForQuotationReplyLineSummariesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalVendorScore: DeserializedType<T, 'Edm.Int32'>;
  vendorReplyStatus?: PurchRfqReplyStatusPsn | null;
  totalVendorScoreComment?: DeserializedType<T, 'Edm.String'> | null;
  isBidAwarded?: NoYes | null;
  highestRfqStatus?: PurchRfqStatus | null;
  lowestRfqStatus?: PurchRfqStatus | null;
  rfqCaseRequestingWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
}

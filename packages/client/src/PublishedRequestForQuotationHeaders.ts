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
import type { PublishedRequestForQuotationHeadersApi } from './PublishedRequestForQuotationHeadersApi';
import { NoYes } from './NoYes';
import { PurchRfqBidType } from './PurchRfqBidType';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "PublishedRequestForQuotationHeaders" of service "d365_metadata".
 */
export class PublishedRequestForQuotationHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PublishedRequestForQuotationHeadersType<T>
{
  /**
   * Technical entity name for PublishedRequestForQuotationHeaders.
   */
  static override _entityName = 'PublishedRequestForQuotationHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PublishedRequestForQuotationHeaders entity.
   */
  static _keys = ['dataAreaId', 'RFQCaseNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Case Number.
   */
  declare rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Cancellation Reason Description.
   * @nullable
   */
  declare rfqCancellationReasonDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rfq Cancellation Date Time.
   */
  declare rfqCancellationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Are Alternate Products Allowed.
   * @nullable
   */
  declare areAlternateProductsAllowed?: NoYes | null;
  /**
   * Rfq Expiration Date Time.
   */
  declare rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Delivery Date.
   */
  declare rfqDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rfq Solicitation Type Name.
   * @nullable
   */
  declare rfqSolicitationTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Bid Type.
   * @nullable
   */
  declare rfqBidType?: PurchRfqBidType | null;
  /**
   * Are Only Invited Vendor Bids Allowed.
   * @nullable
   */
  declare areOnlyInvitedVendorBidsAllowed?: NoYes | null;
  /**
   * Rfq Case Title.
   * @nullable
   */
  declare rfqCaseTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requesting Department Name.
   * @nullable
   */
  declare requestingDepartmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Name.
   * @nullable
   */
  declare requesterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: PublishedRequestForQuotationHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PublishedRequestForQuotationHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  rfqCancellationReasonDescription?: DeserializedType<T, 'Edm.String'> | null;
  rfqCancellationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  areAlternateProductsAllowed?: NoYes | null;
  rfqExpirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  rfqDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rfqSolicitationTypeName?: DeserializedType<T, 'Edm.String'> | null;
  rfqBidType?: PurchRfqBidType | null;
  areOnlyInvitedVendorBidsAllowed?: NoYes | null;
  rfqCaseTitle?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  requestingDepartmentName?: DeserializedType<T, 'Edm.String'> | null;
  requesterName?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}

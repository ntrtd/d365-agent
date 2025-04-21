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
import type { PublishedRequestForQuotationDeliveryPaymentTermsApi } from './PublishedRequestForQuotationDeliveryPaymentTermsApi';

/**
 * This class represents the entity "PublishedRequestForQuotationDeliveryPaymentTerms" of service "d365_metadata".
 */
export class PublishedRequestForQuotationDeliveryPaymentTerms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PublishedRequestForQuotationDeliveryPaymentTermsType<T>
{
  /**
   * Technical entity name for PublishedRequestForQuotationDeliveryPaymentTerms.
   */
  static override _entityName =
    'PublishedRequestForQuotationDeliveryPaymentTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PublishedRequestForQuotationDeliveryPaymentTerms entity.
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
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rfq Case Title.
   * @nullable
   */
  declare rfqCaseTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Id.
   * @nullable
   */
  declare deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Id.
   * @nullable
   */
  declare deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: PublishedRequestForQuotationDeliveryPaymentTermsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface PublishedRequestForQuotationDeliveryPaymentTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rfqCaseTitle?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeId?: DeserializedType<T, 'Edm.String'> | null;
}

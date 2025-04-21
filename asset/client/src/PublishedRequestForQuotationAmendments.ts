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
import type { PublishedRequestForQuotationAmendmentsApi } from './PublishedRequestForQuotationAmendmentsApi';

/**
 * This class represents the entity "PublishedRequestForQuotationAmendments" of service "d365_metadata".
 */
export class PublishedRequestForQuotationAmendments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PublishedRequestForQuotationAmendmentsType<T>
{
  /**
   * Technical entity name for PublishedRequestForQuotationAmendments.
   */
  static override _entityName = 'PublishedRequestForQuotationAmendments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PublishedRequestForQuotationAmendments entity.
   */
  static _keys = ['dataAreaId', 'RFQCaseNumber', 'AmendmentNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Case Number.
   */
  declare rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Amendment Number.
   */
  declare amendmentNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amendment Description.
   * @nullable
   */
  declare amendmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amendment Requester Name.
   * @nullable
   */
  declare amendmentRequesterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amendment Name.
   * @nullable
   */
  declare amendmentName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PublishedRequestForQuotationAmendmentsApi<T>) {
    super(_entityApi);
  }
}

export interface PublishedRequestForQuotationAmendmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  amendmentNumber: DeserializedType<T, 'Edm.Int32'>;
  amendmentDescription?: DeserializedType<T, 'Edm.String'> | null;
  amendmentRequesterName?: DeserializedType<T, 'Edm.String'> | null;
  amendmentName?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { RequestForQuotationReplyScoringCriteriaApi } from './RequestForQuotationReplyScoringCriteriaApi';

/**
 * This class represents the entity "RequestForQuotationReplyScoringCriteria" of service "d365_metadata".
 */
export class RequestForQuotationReplyScoringCriteria<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestForQuotationReplyScoringCriteriaType<T>
{
  /**
   * Technical entity name for RequestForQuotationReplyScoringCriteria.
   */
  static override _entityName = 'RequestForQuotationReplyScoringCriteria';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestForQuotationReplyScoringCriteria entity.
   */
  static _keys = ['dataAreaId', 'RFQNumber', 'CriterionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Criterion Id.
   */
  declare criterionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Criterion Name.
   * @nullable
   */
  declare criterionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Scoring Status Comment.
   * @nullable
   */
  declare vendorScoringStatusComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Criterion Score.
   */
  declare criterionScore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Rfq Reply Status Code.
   * @nullable
   */
  declare vendorRfqReplyStatusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RequestForQuotationReplyScoringCriteriaApi<T>) {
    super(_entityApi);
  }
}

export interface RequestForQuotationReplyScoringCriteriaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  criterionId: DeserializedType<T, 'Edm.String'>;
  criterionName?: DeserializedType<T, 'Edm.String'> | null;
  vendorScoringStatusComment?: DeserializedType<T, 'Edm.String'> | null;
  criterionScore: DeserializedType<T, 'Edm.Int32'>;
  vendorRfqReplyStatusCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}

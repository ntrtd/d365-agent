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
import type { LtmDocumentClassificationCollectPaymDocsApi } from './LtmDocumentClassificationCollectPaymDocsApi';
import { NoYes } from './NoYes';
import { LtmcpdPaymentMediaType } from './LtmcpdPaymentMediaType';

/**
 * This class represents the entity "LTMDocumentClassificationCollectPaymDocs" of service "d365_metadata".
 */
export class LtmDocumentClassificationCollectPaymDocs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationCollectPaymDocsType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationCollectPaymDocs.
   */
  static override _entityName = 'LTMDocumentClassificationCollectPaymDocs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationCollectPaymDocs entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cpd Action Emission.
   * @nullable
   */
  declare cpdActionEmission?: NoYes | null;
  /**
   * Cpd Action Re Entry.
   * @nullable
   */
  declare cpdActionReEntry?: NoYes | null;
  /**
   * Cpd Default Currency.
   * @nullable
   */
  declare cpdDefaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cpd Date Deferred.
   * @nullable
   */
  declare cpdDateDeferred?: NoYes | null;
  /**
   * Cpd Currency Change Enabled.
   * @nullable
   */
  declare cpdCurrencyChangeEnabled?: NoYes | null;
  /**
   * Cpd Action Cancel.
   * @nullable
   */
  declare cpdActionCancel?: NoYes | null;
  /**
   * Cpd Payment Media Type.
   * @nullable
   */
  declare cpdPaymentMediaType?: LtmcpdPaymentMediaType | null;
  /**
   * Cpd Vend Posting Profile.
   * @nullable
   */
  declare cpdVendPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cpd Action Entry.
   * @nullable
   */
  declare cpdActionEntry?: NoYes | null;
  /**
   * Cpd Cust Posting Profile.
   * @nullable
   */
  declare cpdCustPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cpd Action Exit.
   * @nullable
   */
  declare cpdActionExit?: NoYes | null;
  /**
   * Cpd Action Accrual.
   * @nullable
   */
  declare cpdActionAccrual?: NoYes | null;

  constructor(_entityApi: LtmDocumentClassificationCollectPaymDocsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationCollectPaymDocsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  cpdActionEmission?: NoYes | null;
  cpdActionReEntry?: NoYes | null;
  cpdDefaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
  cpdDateDeferred?: NoYes | null;
  cpdCurrencyChangeEnabled?: NoYes | null;
  cpdActionCancel?: NoYes | null;
  cpdPaymentMediaType?: LtmcpdPaymentMediaType | null;
  cpdVendPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  cpdActionEntry?: NoYes | null;
  cpdCustPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  cpdActionExit?: NoYes | null;
  cpdActionAccrual?: NoYes | null;
}

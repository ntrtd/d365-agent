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
import type { BillingClassificationsApi } from './BillingClassificationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BillingClassifications" of service "d365_metadata".
 */
export class BillingClassifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillingClassificationsType<T>
{
  /**
   * Technical entity name for BillingClassifications.
   */
  static override _entityName = 'BillingClassifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillingClassifications entity.
   */
  static _keys = ['dataAreaId', 'BillingClassification'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Classification.
   */
  declare billingClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Note Number.
   * @nullable
   */
  declare creditNoteNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Interest Code From Posting Profile.
   * @nullable
   */
  declare useInterestCodeFromPostingProfile?: NoYes | null;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Letter Sequence.
   * @nullable
   */
  declare collectionLetterSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Collection Letter Sequence From Posting Profile.
   * @nullable
   */
  declare useCollectionLetterSequenceFromPostingProfile?: NoYes | null;
  /**
   * Interest Code.
   * @nullable
   */
  declare interestCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restrict Settlement Of Credit Notes.
   * @nullable
   */
  declare restrictSettlementOfCreditNotes?: NoYes | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BillingClassificationsApi<T>) {
    super(_entityApi);
  }
}

export interface BillingClassificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingClassification: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  creditNoteNumber?: DeserializedType<T, 'Edm.String'> | null;
  useInterestCodeFromPostingProfile?: NoYes | null;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  collectionLetterSequence?: DeserializedType<T, 'Edm.String'> | null;
  useCollectionLetterSequenceFromPostingProfile?: NoYes | null;
  interestCode?: DeserializedType<T, 'Edm.String'> | null;
  restrictSettlementOfCreditNotes?: NoYes | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
}

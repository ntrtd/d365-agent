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
import type { LtmDocumentClassificationJournalNamesApi } from './LtmDocumentClassificationJournalNamesApi';

/**
 * This class represents the entity "LTMDocumentClassificationJournalNames" of service "d365_metadata".
 */
export class LtmDocumentClassificationJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationJournalNamesType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationJournalNames.
   */
  static override _entityName = 'LTMDocumentClassificationJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationJournalNames entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationId', 'JournalName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   */
  declare journalName: DeserializedType<T, 'Edm.String'>;
  /**
   * Target Reason Code.
   * @nullable
   */
  declare targetReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initial Reason Code.
   * @nullable
   */
  declare initialReasonCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmDocumentClassificationJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  journalName: DeserializedType<T, 'Edm.String'>;
  targetReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  initialReasonCode?: DeserializedType<T, 'Edm.String'> | null;
}

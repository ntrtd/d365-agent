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
import type { JournalTransferRulesApi } from './JournalTransferRulesApi';
import { SubledgerJournalTransferMode } from './SubledgerJournalTransferMode';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "JournalTransferRules" of service "d365_metadata".
 */
export class JournalTransferRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JournalTransferRulesType<T>
{
  /**
   * Technical entity name for JournalTransferRules.
   */
  static override _entityName = 'JournalTransferRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalTransferRules entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'SourceDocumentType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Document Type.
   */
  declare sourceDocumentType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transfer Mode.
   * @nullable
   */
  declare transferMode?: SubledgerJournalTransferMode | null;
  /**
   * Notification Group.
   * @nullable
   */
  declare notificationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Summarize Accounting Entries.
   * @nullable
   */
  declare summarizeAccountingEntries?: NoYes | null;

  constructor(_entityApi: JournalTransferRulesApi<T>) {
    super(_entityApi);
  }
}

export interface JournalTransferRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  sourceDocumentType: DeserializedType<T, 'Edm.Int32'>;
  transferMode?: SubledgerJournalTransferMode | null;
  notificationGroup?: DeserializedType<T, 'Edm.String'> | null;
  summarizeAccountingEntries?: NoYes | null;
}

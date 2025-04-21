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
import type { DiscussionTemplatePerformanceJournalsApi } from './DiscussionTemplatePerformanceJournalsApi';
import { NoYes } from './NoYes';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
import {
  DiscussionTemplates,
  DiscussionTemplatesType
} from './DiscussionTemplates';

/**
 * This class represents the entity "DiscussionTemplatePerformanceJournals" of service "d365_metadata".
 */
export class DiscussionTemplatePerformanceJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscussionTemplatePerformanceJournalsType<T>
{
  /**
   * Technical entity name for DiscussionTemplatePerformanceJournals.
   */
  static override _entityName = 'DiscussionTemplatePerformanceJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionTemplatePerformanceJournals entity.
   */
  static _keys = ['DiscussionTemplateId', 'PerfJournalTemplateId'];
  /**
   * Discussion Template Id.
   */
  declare discussionTemplateId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Perf Journal Template Id.
   */
  declare perfJournalTemplateId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discussion Template Title.
   * @nullable
   */
  declare discussionTemplateTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Development Task.
   * @nullable
   */
  declare isDevelopmentTask?: NoYes | null;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: HcmPerfManagerEmployee | null;
  /**
   * Share.
   * @nullable
   */
  declare share?: NoYes | null;
  /**
   * Source Type Id.
   * @nullable
   */
  declare sourceTypeId?: HcmPerfJournalSourceType | null;
  /**
   * Keywords.
   * @nullable
   */
  declare keywords?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DiscussionTemplates} entity.
   */
  declare discussionTemplate?: DiscussionTemplates<T> | null;

  constructor(_entityApi: DiscussionTemplatePerformanceJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionTemplatePerformanceJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussionTemplateId: DeserializedType<T, 'Edm.Int32'>;
  perfJournalTemplateId: DeserializedType<T, 'Edm.Int32'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  discussionTemplateTitle?: DeserializedType<T, 'Edm.String'> | null;
  isDevelopmentTask?: NoYes | null;
  owner?: HcmPerfManagerEmployee | null;
  share?: NoYes | null;
  sourceTypeId?: HcmPerfJournalSourceType | null;
  keywords?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  discussionTemplate?: DiscussionTemplatesType<T> | null;
}

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
import type { GoalTemplatePerformanceJournalsApi } from './GoalTemplatePerformanceJournalsApi';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';
import { HcmPerfManagerEmployee } from './HcmPerfManagerEmployee';
import { NoYes } from './NoYes';
import { GoalTemplates, GoalTemplatesType } from './GoalTemplates';

/**
 * This class represents the entity "GoalTemplatePerformanceJournals" of service "d365_metadata".
 */
export class GoalTemplatePerformanceJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GoalTemplatePerformanceJournalsType<T>
{
  /**
   * Technical entity name for GoalTemplatePerformanceJournals.
   */
  static override _entityName = 'GoalTemplatePerformanceJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GoalTemplatePerformanceJournals entity.
   */
  static _keys = ['GoalTemplateId', 'PerfJournalTemplateId'];
  /**
   * Goal Template Id.
   */
  declare goalTemplateId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Perf Journal Template Id.
   */
  declare perfJournalTemplateId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Type Id.
   * @nullable
   */
  declare sourceTypeId?: HcmPerfJournalSourceType | null;
  /**
   * Owner.
   * @nullable
   */
  declare owner?: HcmPerfManagerEmployee | null;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goal Template Title.
   * @nullable
   */
  declare goalTemplateTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Development Task.
   * @nullable
   */
  declare isDevelopmentTask?: NoYes | null;
  /**
   * Share.
   * @nullable
   */
  declare share?: NoYes | null;
  /**
   * Keywords.
   * @nullable
   */
  declare keywords?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link GoalTemplates} entity.
   */
  declare goalTemplate?: GoalTemplates<T> | null;

  constructor(_entityApi: GoalTemplatePerformanceJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface GoalTemplatePerformanceJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  goalTemplateId: DeserializedType<T, 'Edm.Int32'>;
  perfJournalTemplateId: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sourceTypeId?: HcmPerfJournalSourceType | null;
  owner?: HcmPerfManagerEmployee | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  goalTemplateTitle?: DeserializedType<T, 'Edm.String'> | null;
  isDevelopmentTask?: NoYes | null;
  share?: NoYes | null;
  keywords?: DeserializedType<T, 'Edm.String'> | null;
  goalTemplate?: GoalTemplatesType<T> | null;
}

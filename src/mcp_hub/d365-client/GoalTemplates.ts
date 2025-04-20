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
import type { GoalTemplatesApi } from './GoalTemplatesApi';
import { HcmGoalLevel } from './HcmGoalLevel';
import { HrmGoalStatus } from './HrmGoalStatus';
import { NoYes } from './NoYes';
import {
  GoalTemplatePerformanceJournals,
  GoalTemplatePerformanceJournalsType
} from './GoalTemplatePerformanceJournals';
import { GoalHeadings, GoalHeadingsType } from './GoalHeadings';
import {
  GoalTemplateMeasurements,
  GoalTemplateMeasurementsType
} from './GoalTemplateMeasurements';

/**
 * This class represents the entity "GoalTemplates" of service "d365_metadata".
 */
export class GoalTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GoalTemplatesType<T>
{
  /**
   * Technical entity name for GoalTemplates.
   */
  static override _entityName = 'GoalTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GoalTemplates entity.
   */
  static _keys = ['TemplateId'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level.
   * @nullable
   */
  declare level?: HcmGoalLevel | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmGoalStatus | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Goal Heading Id.
   * @nullable
   */
  declare goalHeadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overview.
   * @nullable
   */
  declare overview?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link GoalTemplatePerformanceJournals} entity.
   */
  declare goalTemplatePerfJournals: GoalTemplatePerformanceJournals<T>[];
  /**
   * One-to-one navigation property to the {@link GoalHeadings} entity.
   */
  declare goalHeading?: GoalHeadings<T> | null;
  /**
   * One-to-many navigation property to the {@link GoalTemplateMeasurements} entity.
   */
  declare measurements: GoalTemplateMeasurements<T>[];

  constructor(_entityApi: GoalTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface GoalTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.Int32'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  level?: HcmGoalLevel | null;
  status?: HrmGoalStatus | null;
  isActive?: NoYes | null;
  goalHeadingId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  overview?: DeserializedType<T, 'Edm.String'> | null;
  goalTemplatePerfJournals: GoalTemplatePerformanceJournalsType<T>[];
  goalHeading?: GoalHeadingsType<T> | null;
  measurements: GoalTemplateMeasurementsType<T>[];
}

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
import type { DiscussionTemplatesApi } from './DiscussionTemplatesApi';
import { NoYes } from './NoYes';
import {
  DiscussionTemplatePerformanceJournals,
  DiscussionTemplatePerformanceJournalsType
} from './DiscussionTemplatePerformanceJournals';
import { RatingModels, RatingModelsType } from './RatingModels';
import { DiscussionTypes, DiscussionTypesType } from './DiscussionTypes';
import {
  DiscussionTemplateMeasurements,
  DiscussionTemplateMeasurementsType
} from './DiscussionTemplateMeasurements';

/**
 * This class represents the entity "DiscussionTemplates" of service "d365_metadata".
 */
export class DiscussionTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscussionTemplatesType<T>
{
  /**
   * Technical entity name for DiscussionTemplates.
   */
  static override _entityName = 'DiscussionTemplates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionTemplates entity.
   */
  static _keys = ['TemplateId'];
  /**
   * Template Id.
   */
  declare templateId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Review Type Id.
   * @nullable
   */
  declare reviewTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Rating Model Id.
   * @nullable
   */
  declare ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overview.
   * @nullable
   */
  declare overview?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DiscussionTemplatePerformanceJournals} entity.
   */
  declare discussionTemplatePerfJournals: DiscussionTemplatePerformanceJournals<T>[];
  /**
   * One-to-one navigation property to the {@link RatingModels} entity.
   */
  declare ratingModel?: RatingModels<T> | null;
  /**
   * One-to-one navigation property to the {@link DiscussionTypes} entity.
   */
  declare discussionType?: DiscussionTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link DiscussionTemplateMeasurements} entity.
   */
  declare measurements: DiscussionTemplateMeasurements<T>[];

  constructor(_entityApi: DiscussionTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  templateId: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  reviewTypeId?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  ratingModelId?: DeserializedType<T, 'Edm.String'> | null;
  overview?: DeserializedType<T, 'Edm.String'> | null;
  discussionTemplatePerfJournals: DiscussionTemplatePerformanceJournalsType<T>[];
  ratingModel?: RatingModelsType<T> | null;
  discussionType?: DiscussionTypesType<T> | null;
  measurements: DiscussionTemplateMeasurementsType<T>[];
}

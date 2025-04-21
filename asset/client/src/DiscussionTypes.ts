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
import type { DiscussionTypesApi } from './DiscussionTypesApi';
import { NoYes } from './NoYes';
import { HcmDiscussionStartingStatus } from './HcmDiscussionStartingStatus';
import { Discussions, DiscussionsType } from './Discussions';
import {
  DiscussionTemplates,
  DiscussionTemplatesType
} from './DiscussionTemplates';

/**
 * This class represents the entity "DiscussionTypes" of service "d365_metadata".
 */
export class DiscussionTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscussionTypesType<T>
{
  /**
   * Technical entity name for DiscussionTypes.
   */
  static override _entityName = 'DiscussionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscussionTypes entity.
   */
  static _keys = ['DiscussionTypeId'];
  /**
   * Discussion Type Id.
   */
  declare discussionTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Manager Sign Off.
   * @nullable
   */
  declare enableManagerSignOff?: NoYes | null;
  /**
   * Enable Employee Sign Off.
   * @nullable
   */
  declare enableEmployeeSignOff?: NoYes | null;
  /**
   * Workflow Enabled.
   * @nullable
   */
  declare workflowEnabled?: NoYes | null;
  /**
   * Edit Final Review.
   * @nullable
   */
  declare editFinalReview?: NoYes | null;
  /**
   * New Review Status.
   * @nullable
   */
  declare newReviewStatus?: HcmDiscussionStartingStatus | null;
  /**
   * One-to-many navigation property to the {@link Discussions} entity.
   */
  declare discussions: Discussions<T>[];
  /**
   * One-to-many navigation property to the {@link DiscussionTemplates} entity.
   */
  declare discussionTemplates: DiscussionTemplates<T>[];

  constructor(_entityApi: DiscussionTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscussionTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  discussionTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  enableManagerSignOff?: NoYes | null;
  enableEmployeeSignOff?: NoYes | null;
  workflowEnabled?: NoYes | null;
  editFinalReview?: NoYes | null;
  newReviewStatus?: HcmDiscussionStartingStatus | null;
  discussions: DiscussionsType<T>[];
  discussionTemplates: DiscussionTemplatesType<T>[];
}

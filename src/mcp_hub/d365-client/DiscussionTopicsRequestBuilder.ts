/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DiscussionTopics } from './DiscussionTopics';

/**
 * Request builder class for operations supported on the {@link DiscussionTopics} entity.
 */
export class DiscussionTopicsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionTopics<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionTopics` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionTopics` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionTopics<T>, T> {
    return new GetAllRequestBuilder<DiscussionTopics<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscussionTopics` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionTopics`.
   */
  create(
    entity: DiscussionTopics<T>
  ): CreateRequestBuilder<DiscussionTopics<T>, T> {
    return new CreateRequestBuilder<DiscussionTopics<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionTopics` entity based on its keys.
   * @param discussionId Key property. See {@link DiscussionTopics.discussionId}.
   * @param personnelNumber Key property. See {@link DiscussionTopics.personnelNumber}.
   * @param topicNumber Key property. See {@link DiscussionTopics.topicNumber}.
   * @returns A request builder for creating requests to retrieve one `DiscussionTopics` entity based on its keys.
   */
  getByKey(
    discussionId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    topicNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscussionTopics<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionTopics<T>, T>(this.entityApi, {
      DiscussionId: discussionId,
      PersonnelNumber: personnelNumber,
      TopicNumber: topicNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionTopics`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionTopics`.
   */
  update(
    entity: DiscussionTopics<T>
  ): UpdateRequestBuilder<DiscussionTopics<T>, T> {
    return new UpdateRequestBuilder<DiscussionTopics<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionTopics`.
   * @param discussionId Key property. See {@link DiscussionTopics.discussionId}.
   * @param personnelNumber Key property. See {@link DiscussionTopics.personnelNumber}.
   * @param topicNumber Key property. See {@link DiscussionTopics.topicNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTopics`.
   */
  delete(
    discussionId: string,
    personnelNumber: string,
    topicNumber: string
  ): DeleteRequestBuilder<DiscussionTopics<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionTopics`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTopics` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionTopics<T>
  ): DeleteRequestBuilder<DiscussionTopics<T>, T>;
  delete(
    discussionIdOrEntity: any,
    personnelNumber?: string,
    topicNumber?: string
  ): DeleteRequestBuilder<DiscussionTopics<T>, T> {
    return new DeleteRequestBuilder<DiscussionTopics<T>, T>(
      this.entityApi,
      discussionIdOrEntity instanceof DiscussionTopics
        ? discussionIdOrEntity
        : {
            DiscussionId: discussionIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            TopicNumber: topicNumber!
          }
    );
  }
}

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
import { DiscussionTemplates } from './DiscussionTemplates';

/**
 * Request builder class for operations supported on the {@link DiscussionTemplates} entity.
 */
export class DiscussionTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionTemplates<T>, T> {
    return new GetAllRequestBuilder<DiscussionTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscussionTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionTemplates`.
   */
  create(
    entity: DiscussionTemplates<T>
  ): CreateRequestBuilder<DiscussionTemplates<T>, T> {
    return new CreateRequestBuilder<DiscussionTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionTemplates` entity based on its keys.
   * @param templateId Key property. See {@link DiscussionTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `DiscussionTemplates` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DiscussionTemplates<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionTemplates<T>, T>(
      this.entityApi,
      { TemplateId: templateId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionTemplates`.
   */
  update(
    entity: DiscussionTemplates<T>
  ): UpdateRequestBuilder<DiscussionTemplates<T>, T> {
    return new UpdateRequestBuilder<DiscussionTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionTemplates`.
   * @param templateId Key property. See {@link DiscussionTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTemplates`.
   */
  delete(templateId: number): DeleteRequestBuilder<DiscussionTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionTemplates<T>
  ): DeleteRequestBuilder<DiscussionTemplates<T>, T>;
  delete(
    templateIdOrEntity: any
  ): DeleteRequestBuilder<DiscussionTemplates<T>, T> {
    return new DeleteRequestBuilder<DiscussionTemplates<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DiscussionTemplates
        ? templateIdOrEntity
        : { TemplateId: templateIdOrEntity! }
    );
  }
}

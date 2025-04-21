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
import { GoalTemplates } from './GoalTemplates';

/**
 * Request builder class for operations supported on the {@link GoalTemplates} entity.
 */
export class GoalTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoalTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `GoalTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `GoalTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<GoalTemplates<T>, T> {
    return new GetAllRequestBuilder<GoalTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GoalTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalTemplates`.
   */
  create(entity: GoalTemplates<T>): CreateRequestBuilder<GoalTemplates<T>, T> {
    return new CreateRequestBuilder<GoalTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GoalTemplates` entity based on its keys.
   * @param templateId Key property. See {@link GoalTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `GoalTemplates` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GoalTemplates<T>, T> {
    return new GetByKeyRequestBuilder<GoalTemplates<T>, T>(this.entityApi, {
      TemplateId: templateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GoalTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalTemplates`.
   */
  update(entity: GoalTemplates<T>): UpdateRequestBuilder<GoalTemplates<T>, T> {
    return new UpdateRequestBuilder<GoalTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalTemplates`.
   * @param templateId Key property. See {@link GoalTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `GoalTemplates`.
   */
  delete(templateId: number): DeleteRequestBuilder<GoalTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoalTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalTemplates` by taking the entity as a parameter.
   */
  delete(entity: GoalTemplates<T>): DeleteRequestBuilder<GoalTemplates<T>, T>;
  delete(templateIdOrEntity: any): DeleteRequestBuilder<GoalTemplates<T>, T> {
    return new DeleteRequestBuilder<GoalTemplates<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof GoalTemplates
        ? templateIdOrEntity
        : { TemplateId: templateIdOrEntity! }
    );
  }
}

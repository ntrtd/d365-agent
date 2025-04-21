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
import { WorkflowExternalElements } from './WorkflowExternalElements';

/**
 * Request builder class for operations supported on the {@link WorkflowExternalElements} entity.
 */
export class WorkflowExternalElementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkflowExternalElements<T>, T> {
  /**
   * Returns a request builder for querying all `WorkflowExternalElements` entities.
   * @returns A request builder for creating requests to retrieve all `WorkflowExternalElements` entities.
   */
  getAll(): GetAllRequestBuilder<WorkflowExternalElements<T>, T> {
    return new GetAllRequestBuilder<WorkflowExternalElements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkflowExternalElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkflowExternalElements`.
   */
  create(
    entity: WorkflowExternalElements<T>
  ): CreateRequestBuilder<WorkflowExternalElements<T>, T> {
    return new CreateRequestBuilder<WorkflowExternalElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkflowExternalElements` entity based on its keys.
   * @param correlationId Key property. See {@link WorkflowExternalElements.correlationId}.
   * @param elementId Key property. See {@link WorkflowExternalElements.elementId}.
   * @returns A request builder for creating requests to retrieve one `WorkflowExternalElements` entity based on its keys.
   */
  getByKey(
    correlationId: DeserializedType<T, 'Edm.Guid'>,
    elementId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<WorkflowExternalElements<T>, T> {
    return new GetByKeyRequestBuilder<WorkflowExternalElements<T>, T>(
      this.entityApi,
      {
        CorrelationId: correlationId,
        ElementId: elementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkflowExternalElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkflowExternalElements`.
   */
  update(
    entity: WorkflowExternalElements<T>
  ): UpdateRequestBuilder<WorkflowExternalElements<T>, T> {
    return new UpdateRequestBuilder<WorkflowExternalElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkflowExternalElements`.
   * @param correlationId Key property. See {@link WorkflowExternalElements.correlationId}.
   * @param elementId Key property. See {@link WorkflowExternalElements.elementId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowExternalElements`.
   */
  delete(
    correlationId: string,
    elementId: string
  ): DeleteRequestBuilder<WorkflowExternalElements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkflowExternalElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowExternalElements` by taking the entity as a parameter.
   */
  delete(
    entity: WorkflowExternalElements<T>
  ): DeleteRequestBuilder<WorkflowExternalElements<T>, T>;
  delete(
    correlationIdOrEntity: any,
    elementId?: string
  ): DeleteRequestBuilder<WorkflowExternalElements<T>, T> {
    return new DeleteRequestBuilder<WorkflowExternalElements<T>, T>(
      this.entityApi,
      correlationIdOrEntity instanceof WorkflowExternalElements
        ? correlationIdOrEntity
        : {
            CorrelationId: correlationIdOrEntity!,
            ElementId: elementId!
          }
    );
  }
}

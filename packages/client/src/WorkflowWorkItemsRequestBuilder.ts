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
import { WorkflowWorkItems } from './WorkflowWorkItems';

/**
 * Request builder class for operations supported on the {@link WorkflowWorkItems} entity.
 */
export class WorkflowWorkItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkflowWorkItems<T>, T> {
  /**
   * Returns a request builder for querying all `WorkflowWorkItems` entities.
   * @returns A request builder for creating requests to retrieve all `WorkflowWorkItems` entities.
   */
  getAll(): GetAllRequestBuilder<WorkflowWorkItems<T>, T> {
    return new GetAllRequestBuilder<WorkflowWorkItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkflowWorkItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkflowWorkItems`.
   */
  create(
    entity: WorkflowWorkItems<T>
  ): CreateRequestBuilder<WorkflowWorkItems<T>, T> {
    return new CreateRequestBuilder<WorkflowWorkItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkflowWorkItems` entity based on its keys.
   * @param id Key property. See {@link WorkflowWorkItems.id}.
   * @returns A request builder for creating requests to retrieve one `WorkflowWorkItems` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<WorkflowWorkItems<T>, T> {
    return new GetByKeyRequestBuilder<WorkflowWorkItems<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkflowWorkItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkflowWorkItems`.
   */
  update(
    entity: WorkflowWorkItems<T>
  ): UpdateRequestBuilder<WorkflowWorkItems<T>, T> {
    return new UpdateRequestBuilder<WorkflowWorkItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkflowWorkItems`.
   * @param id Key property. See {@link WorkflowWorkItems.id}.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowWorkItems`.
   */
  delete(id: string): DeleteRequestBuilder<WorkflowWorkItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkflowWorkItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowWorkItems` by taking the entity as a parameter.
   */
  delete(
    entity: WorkflowWorkItems<T>
  ): DeleteRequestBuilder<WorkflowWorkItems<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<WorkflowWorkItems<T>, T> {
    return new DeleteRequestBuilder<WorkflowWorkItems<T>, T>(
      this.entityApi,
      idOrEntity instanceof WorkflowWorkItems ? idOrEntity : { Id: idOrEntity! }
    );
  }
}

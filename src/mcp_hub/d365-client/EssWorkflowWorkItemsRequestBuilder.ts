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
import { EssWorkflowWorkItems } from './EssWorkflowWorkItems';

/**
 * Request builder class for operations supported on the {@link EssWorkflowWorkItems} entity.
 */
export class EssWorkflowWorkItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssWorkflowWorkItems<T>, T> {
  /**
   * Returns a request builder for querying all `EssWorkflowWorkItems` entities.
   * @returns A request builder for creating requests to retrieve all `EssWorkflowWorkItems` entities.
   */
  getAll(): GetAllRequestBuilder<EssWorkflowWorkItems<T>, T> {
    return new GetAllRequestBuilder<EssWorkflowWorkItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssWorkflowWorkItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssWorkflowWorkItems`.
   */
  create(
    entity: EssWorkflowWorkItems<T>
  ): CreateRequestBuilder<EssWorkflowWorkItems<T>, T> {
    return new CreateRequestBuilder<EssWorkflowWorkItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssWorkflowWorkItems` entity based on its keys.
   * @param id Key property. See {@link EssWorkflowWorkItems.id}.
   * @returns A request builder for creating requests to retrieve one `EssWorkflowWorkItems` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<EssWorkflowWorkItems<T>, T> {
    return new GetByKeyRequestBuilder<EssWorkflowWorkItems<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssWorkflowWorkItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssWorkflowWorkItems`.
   */
  update(
    entity: EssWorkflowWorkItems<T>
  ): UpdateRequestBuilder<EssWorkflowWorkItems<T>, T> {
    return new UpdateRequestBuilder<EssWorkflowWorkItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssWorkflowWorkItems`.
   * @param id Key property. See {@link EssWorkflowWorkItems.id}.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkflowWorkItems`.
   */
  delete(id: string): DeleteRequestBuilder<EssWorkflowWorkItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssWorkflowWorkItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkflowWorkItems` by taking the entity as a parameter.
   */
  delete(
    entity: EssWorkflowWorkItems<T>
  ): DeleteRequestBuilder<EssWorkflowWorkItems<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<EssWorkflowWorkItems<T>, T> {
    return new DeleteRequestBuilder<EssWorkflowWorkItems<T>, T>(
      this.entityApi,
      idOrEntity instanceof EssWorkflowWorkItems
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}

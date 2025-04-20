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
import { VirtualEntityLists } from './VirtualEntityLists';

/**
 * Request builder class for operations supported on the {@link VirtualEntityLists} entity.
 */
export class VirtualEntityListsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VirtualEntityLists<T>, T> {
  /**
   * Returns a request builder for querying all `VirtualEntityLists` entities.
   * @returns A request builder for creating requests to retrieve all `VirtualEntityLists` entities.
   */
  getAll(): GetAllRequestBuilder<VirtualEntityLists<T>, T> {
    return new GetAllRequestBuilder<VirtualEntityLists<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VirtualEntityLists` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VirtualEntityLists`.
   */
  create(
    entity: VirtualEntityLists<T>
  ): CreateRequestBuilder<VirtualEntityLists<T>, T> {
    return new CreateRequestBuilder<VirtualEntityLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VirtualEntityLists` entity based on its keys.
   * @param physicalName Key property. See {@link VirtualEntityLists.physicalName}.
   * @returns A request builder for creating requests to retrieve one `VirtualEntityLists` entity based on its keys.
   */
  getByKey(
    physicalName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VirtualEntityLists<T>, T> {
    return new GetByKeyRequestBuilder<VirtualEntityLists<T>, T>(
      this.entityApi,
      { PhysicalName: physicalName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VirtualEntityLists`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VirtualEntityLists`.
   */
  update(
    entity: VirtualEntityLists<T>
  ): UpdateRequestBuilder<VirtualEntityLists<T>, T> {
    return new UpdateRequestBuilder<VirtualEntityLists<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VirtualEntityLists`.
   * @param physicalName Key property. See {@link VirtualEntityLists.physicalName}.
   * @returns A request builder for creating requests that delete an entity of type `VirtualEntityLists`.
   */
  delete(physicalName: string): DeleteRequestBuilder<VirtualEntityLists<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VirtualEntityLists`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VirtualEntityLists` by taking the entity as a parameter.
   */
  delete(
    entity: VirtualEntityLists<T>
  ): DeleteRequestBuilder<VirtualEntityLists<T>, T>;
  delete(
    physicalNameOrEntity: any
  ): DeleteRequestBuilder<VirtualEntityLists<T>, T> {
    return new DeleteRequestBuilder<VirtualEntityLists<T>, T>(
      this.entityApi,
      physicalNameOrEntity instanceof VirtualEntityLists
        ? physicalNameOrEntity
        : { PhysicalName: physicalNameOrEntity! }
    );
  }
}

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
import { EcoResCategoryHierarchyBiEntities } from './EcoResCategoryHierarchyBiEntities';

/**
 * Request builder class for operations supported on the {@link EcoResCategoryHierarchyBiEntities} entity.
 */
export class EcoResCategoryHierarchyBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EcoResCategoryHierarchyBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EcoResCategoryHierarchyBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T> {
    return new GetAllRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EcoResCategoryHierarchyBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EcoResCategoryHierarchyBiEntities`.
   */
  create(
    entity: EcoResCategoryHierarchyBiEntities<T>
  ): CreateRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T> {
    return new CreateRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EcoResCategoryHierarchyBiEntities` entity based on its keys.
   * @param name Key property. See {@link EcoResCategoryHierarchyBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `EcoResCategoryHierarchyBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EcoResCategoryHierarchyBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EcoResCategoryHierarchyBiEntities`.
   */
  update(
    entity: EcoResCategoryHierarchyBiEntities<T>
  ): UpdateRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T> {
    return new UpdateRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EcoResCategoryHierarchyBiEntities`.
   * @param name Key property. See {@link EcoResCategoryHierarchyBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `EcoResCategoryHierarchyBiEntities`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EcoResCategoryHierarchyBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EcoResCategoryHierarchyBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EcoResCategoryHierarchyBiEntities<T>
  ): DeleteRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T> {
    return new DeleteRequestBuilder<EcoResCategoryHierarchyBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof EcoResCategoryHierarchyBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}

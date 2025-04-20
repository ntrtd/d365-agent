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
import { DirDunsNumberBiEntities } from './DirDunsNumberBiEntities';

/**
 * Request builder class for operations supported on the {@link DirDunsNumberBiEntities} entity.
 */
export class DirDunsNumberBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DirDunsNumberBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DirDunsNumberBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DirDunsNumberBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DirDunsNumberBiEntities<T>, T> {
    return new GetAllRequestBuilder<DirDunsNumberBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DirDunsNumberBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DirDunsNumberBiEntities`.
   */
  create(
    entity: DirDunsNumberBiEntities<T>
  ): CreateRequestBuilder<DirDunsNumberBiEntities<T>, T> {
    return new CreateRequestBuilder<DirDunsNumberBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DirDunsNumberBiEntities` entity based on its keys.
   * @param dunsNumber Key property. See {@link DirDunsNumberBiEntities.dunsNumber}.
   * @returns A request builder for creating requests to retrieve one `DirDunsNumberBiEntities` entity based on its keys.
   */
  getByKey(
    dunsNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DirDunsNumberBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<DirDunsNumberBiEntities<T>, T>(
      this.entityApi,
      { DunsNumber: dunsNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DirDunsNumberBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DirDunsNumberBiEntities`.
   */
  update(
    entity: DirDunsNumberBiEntities<T>
  ): UpdateRequestBuilder<DirDunsNumberBiEntities<T>, T> {
    return new UpdateRequestBuilder<DirDunsNumberBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DirDunsNumberBiEntities`.
   * @param dunsNumber Key property. See {@link DirDunsNumberBiEntities.dunsNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DirDunsNumberBiEntities`.
   */
  delete(
    dunsNumber: string
  ): DeleteRequestBuilder<DirDunsNumberBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DirDunsNumberBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DirDunsNumberBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DirDunsNumberBiEntities<T>
  ): DeleteRequestBuilder<DirDunsNumberBiEntities<T>, T>;
  delete(
    dunsNumberOrEntity: any
  ): DeleteRequestBuilder<DirDunsNumberBiEntities<T>, T> {
    return new DeleteRequestBuilder<DirDunsNumberBiEntities<T>, T>(
      this.entityApi,
      dunsNumberOrEntity instanceof DirDunsNumberBiEntities
        ? dunsNumberOrEntity
        : { DunsNumber: dunsNumberOrEntity! }
    );
  }
}

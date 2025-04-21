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
import { CompensationStructures } from './CompensationStructures';

/**
 * Request builder class for operations supported on the {@link CompensationStructures} entity.
 */
export class CompensationStructuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationStructures<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationStructures` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationStructures` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationStructures<T>, T> {
    return new GetAllRequestBuilder<CompensationStructures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationStructures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationStructures`.
   */
  create(
    entity: CompensationStructures<T>
  ): CreateRequestBuilder<CompensationStructures<T>, T> {
    return new CreateRequestBuilder<CompensationStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationStructures` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationStructures.dataAreaId}.
   * @param grid Key property. See {@link CompensationStructures.grid}.
   * @param levelId Key property. See {@link CompensationStructures.levelId}.
   * @param referencePoint Key property. See {@link CompensationStructures.referencePoint}.
   * @returns A request builder for creating requests to retrieve one `CompensationStructures` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grid: DeserializedType<T, 'Edm.String'>,
    levelId: DeserializedType<T, 'Edm.String'>,
    referencePoint: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationStructures<T>, T> {
    return new GetByKeyRequestBuilder<CompensationStructures<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Grid: grid,
        LevelId: levelId,
        ReferencePoint: referencePoint
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationStructures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationStructures`.
   */
  update(
    entity: CompensationStructures<T>
  ): UpdateRequestBuilder<CompensationStructures<T>, T> {
    return new UpdateRequestBuilder<CompensationStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationStructures`.
   * @param dataAreaId Key property. See {@link CompensationStructures.dataAreaId}.
   * @param grid Key property. See {@link CompensationStructures.grid}.
   * @param levelId Key property. See {@link CompensationStructures.levelId}.
   * @param referencePoint Key property. See {@link CompensationStructures.referencePoint}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationStructures`.
   */
  delete(
    dataAreaId: string,
    grid: string,
    levelId: string,
    referencePoint: string
  ): DeleteRequestBuilder<CompensationStructures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationStructures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationStructures` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationStructures<T>
  ): DeleteRequestBuilder<CompensationStructures<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grid?: string,
    levelId?: string,
    referencePoint?: string
  ): DeleteRequestBuilder<CompensationStructures<T>, T> {
    return new DeleteRequestBuilder<CompensationStructures<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationStructures
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Grid: grid!,
            LevelId: levelId!,
            ReferencePoint: referencePoint!
          }
    );
  }
}

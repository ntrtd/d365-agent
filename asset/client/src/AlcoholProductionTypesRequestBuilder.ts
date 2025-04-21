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
import { AlcoholProductionTypes } from './AlcoholProductionTypes';

/**
 * Request builder class for operations supported on the {@link AlcoholProductionTypes} entity.
 */
export class AlcoholProductionTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AlcoholProductionTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AlcoholProductionTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AlcoholProductionTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AlcoholProductionTypes<T>, T> {
    return new GetAllRequestBuilder<AlcoholProductionTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AlcoholProductionTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlcoholProductionTypes`.
   */
  create(
    entity: AlcoholProductionTypes<T>
  ): CreateRequestBuilder<AlcoholProductionTypes<T>, T> {
    return new CreateRequestBuilder<AlcoholProductionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AlcoholProductionTypes` entity based on its keys.
   * @param typeId Key property. See {@link AlcoholProductionTypes.typeId}.
   * @returns A request builder for creating requests to retrieve one `AlcoholProductionTypes` entity based on its keys.
   */
  getByKey(
    typeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AlcoholProductionTypes<T>, T> {
    return new GetByKeyRequestBuilder<AlcoholProductionTypes<T>, T>(
      this.entityApi,
      { TypeId: typeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AlcoholProductionTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlcoholProductionTypes`.
   */
  update(
    entity: AlcoholProductionTypes<T>
  ): UpdateRequestBuilder<AlcoholProductionTypes<T>, T> {
    return new UpdateRequestBuilder<AlcoholProductionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AlcoholProductionTypes`.
   * @param typeId Key property. See {@link AlcoholProductionTypes.typeId}.
   * @returns A request builder for creating requests that delete an entity of type `AlcoholProductionTypes`.
   */
  delete(typeId: string): DeleteRequestBuilder<AlcoholProductionTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AlcoholProductionTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlcoholProductionTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AlcoholProductionTypes<T>
  ): DeleteRequestBuilder<AlcoholProductionTypes<T>, T>;
  delete(
    typeIdOrEntity: any
  ): DeleteRequestBuilder<AlcoholProductionTypes<T>, T> {
    return new DeleteRequestBuilder<AlcoholProductionTypes<T>, T>(
      this.entityApi,
      typeIdOrEntity instanceof AlcoholProductionTypes
        ? typeIdOrEntity
        : { TypeId: typeIdOrEntity! }
    );
  }
}

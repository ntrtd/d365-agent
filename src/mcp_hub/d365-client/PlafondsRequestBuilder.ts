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
import { Plafonds } from './Plafonds';

/**
 * Request builder class for operations supported on the {@link Plafonds} entity.
 */
export class PlafondsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Plafonds<T>, T> {
  /**
   * Returns a request builder for querying all `Plafonds` entities.
   * @returns A request builder for creating requests to retrieve all `Plafonds` entities.
   */
  getAll(): GetAllRequestBuilder<Plafonds<T>, T> {
    return new GetAllRequestBuilder<Plafonds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Plafonds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Plafonds`.
   */
  create(entity: Plafonds<T>): CreateRequestBuilder<Plafonds<T>, T> {
    return new CreateRequestBuilder<Plafonds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Plafonds` entity based on its keys.
   * @param dataAreaId Key property. See {@link Plafonds.dataAreaId}.
   * @param plafondId Key property. See {@link Plafonds.plafondId}.
   * @returns A request builder for creating requests to retrieve one `Plafonds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    plafondId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Plafonds<T>, T> {
    return new GetByKeyRequestBuilder<Plafonds<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PlafondId: plafondId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Plafonds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Plafonds`.
   */
  update(entity: Plafonds<T>): UpdateRequestBuilder<Plafonds<T>, T> {
    return new UpdateRequestBuilder<Plafonds<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Plafonds`.
   * @param dataAreaId Key property. See {@link Plafonds.dataAreaId}.
   * @param plafondId Key property. See {@link Plafonds.plafondId}.
   * @returns A request builder for creating requests that delete an entity of type `Plafonds`.
   */
  delete(
    dataAreaId: string,
    plafondId: string
  ): DeleteRequestBuilder<Plafonds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Plafonds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Plafonds` by taking the entity as a parameter.
   */
  delete(entity: Plafonds<T>): DeleteRequestBuilder<Plafonds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    plafondId?: string
  ): DeleteRequestBuilder<Plafonds<T>, T> {
    return new DeleteRequestBuilder<Plafonds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Plafonds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlafondId: plafondId!
          }
    );
  }
}

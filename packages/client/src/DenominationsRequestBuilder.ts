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
import { Denominations } from './Denominations';

/**
 * Request builder class for operations supported on the {@link Denominations} entity.
 */
export class DenominationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Denominations<T>, T> {
  /**
   * Returns a request builder for querying all `Denominations` entities.
   * @returns A request builder for creating requests to retrieve all `Denominations` entities.
   */
  getAll(): GetAllRequestBuilder<Denominations<T>, T> {
    return new GetAllRequestBuilder<Denominations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Denominations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Denominations`.
   */
  create(entity: Denominations<T>): CreateRequestBuilder<Denominations<T>, T> {
    return new CreateRequestBuilder<Denominations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Denominations` entity based on its keys.
   * @param dataAreaId Key property. See {@link Denominations.dataAreaId}.
   * @param name Key property. See {@link Denominations.name}.
   * @returns A request builder for creating requests to retrieve one `Denominations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Denominations<T>, T> {
    return new GetByKeyRequestBuilder<Denominations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Denominations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Denominations`.
   */
  update(entity: Denominations<T>): UpdateRequestBuilder<Denominations<T>, T> {
    return new UpdateRequestBuilder<Denominations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Denominations`.
   * @param dataAreaId Key property. See {@link Denominations.dataAreaId}.
   * @param name Key property. See {@link Denominations.name}.
   * @returns A request builder for creating requests that delete an entity of type `Denominations`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<Denominations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Denominations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Denominations` by taking the entity as a parameter.
   */
  delete(entity: Denominations<T>): DeleteRequestBuilder<Denominations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<Denominations<T>, T> {
    return new DeleteRequestBuilder<Denominations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Denominations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}

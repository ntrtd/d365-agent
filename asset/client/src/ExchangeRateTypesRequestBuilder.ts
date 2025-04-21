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
import { ExchangeRateTypes } from './ExchangeRateTypes';

/**
 * Request builder class for operations supported on the {@link ExchangeRateTypes} entity.
 */
export class ExchangeRateTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRateTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRateTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRateTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRateTypes<T>, T> {
    return new GetAllRequestBuilder<ExchangeRateTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExchangeRateTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRateTypes`.
   */
  create(
    entity: ExchangeRateTypes<T>
  ): CreateRequestBuilder<ExchangeRateTypes<T>, T> {
    return new CreateRequestBuilder<ExchangeRateTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRateTypes` entity based on its keys.
   * @param name Key property. See {@link ExchangeRateTypes.name}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRateTypes` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExchangeRateTypes<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRateTypes<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRateTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRateTypes`.
   */
  update(
    entity: ExchangeRateTypes<T>
  ): UpdateRequestBuilder<ExchangeRateTypes<T>, T> {
    return new UpdateRequestBuilder<ExchangeRateTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateTypes`.
   * @param name Key property. See {@link ExchangeRateTypes.name}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateTypes`.
   */
  delete(name: string): DeleteRequestBuilder<ExchangeRateTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRateTypes<T>
  ): DeleteRequestBuilder<ExchangeRateTypes<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<ExchangeRateTypes<T>, T> {
    return new DeleteRequestBuilder<ExchangeRateTypes<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ExchangeRateTypes
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}

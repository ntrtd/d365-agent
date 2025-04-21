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
import { BlwiCurrencies } from './BlwiCurrencies';

/**
 * Request builder class for operations supported on the {@link BlwiCurrencies} entity.
 */
export class BlwiCurrenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BlwiCurrencies<T>, T> {
  /**
   * Returns a request builder for querying all `BlwiCurrencies` entities.
   * @returns A request builder for creating requests to retrieve all `BlwiCurrencies` entities.
   */
  getAll(): GetAllRequestBuilder<BlwiCurrencies<T>, T> {
    return new GetAllRequestBuilder<BlwiCurrencies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BlwiCurrencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BlwiCurrencies`.
   */
  create(
    entity: BlwiCurrencies<T>
  ): CreateRequestBuilder<BlwiCurrencies<T>, T> {
    return new CreateRequestBuilder<BlwiCurrencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BlwiCurrencies` entity based on its keys.
   * @param dataAreaId Key property. See {@link BlwiCurrencies.dataAreaId}.
   * @param currency Key property. See {@link BlwiCurrencies.currency}.
   * @returns A request builder for creating requests to retrieve one `BlwiCurrencies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BlwiCurrencies<T>, T> {
    return new GetByKeyRequestBuilder<BlwiCurrencies<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Currency: currency
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BlwiCurrencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BlwiCurrencies`.
   */
  update(
    entity: BlwiCurrencies<T>
  ): UpdateRequestBuilder<BlwiCurrencies<T>, T> {
    return new UpdateRequestBuilder<BlwiCurrencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BlwiCurrencies`.
   * @param dataAreaId Key property. See {@link BlwiCurrencies.dataAreaId}.
   * @param currency Key property. See {@link BlwiCurrencies.currency}.
   * @returns A request builder for creating requests that delete an entity of type `BlwiCurrencies`.
   */
  delete(
    dataAreaId: string,
    currency: string
  ): DeleteRequestBuilder<BlwiCurrencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BlwiCurrencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BlwiCurrencies` by taking the entity as a parameter.
   */
  delete(entity: BlwiCurrencies<T>): DeleteRequestBuilder<BlwiCurrencies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    currency?: string
  ): DeleteRequestBuilder<BlwiCurrencies<T>, T> {
    return new DeleteRequestBuilder<BlwiCurrencies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BlwiCurrencies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Currency: currency!
          }
    );
  }
}

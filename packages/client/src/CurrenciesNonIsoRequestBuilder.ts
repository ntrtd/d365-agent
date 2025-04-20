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
import { CurrenciesNonIso } from './CurrenciesNonIso';

/**
 * Request builder class for operations supported on the {@link CurrenciesNonIso} entity.
 */
export class CurrenciesNonIsoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrenciesNonIso<T>, T> {
  /**
   * Returns a request builder for querying all `CurrenciesNonIso` entities.
   * @returns A request builder for creating requests to retrieve all `CurrenciesNonIso` entities.
   */
  getAll(): GetAllRequestBuilder<CurrenciesNonIso<T>, T> {
    return new GetAllRequestBuilder<CurrenciesNonIso<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrenciesNonIso` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrenciesNonIso`.
   */
  create(
    entity: CurrenciesNonIso<T>
  ): CreateRequestBuilder<CurrenciesNonIso<T>, T> {
    return new CreateRequestBuilder<CurrenciesNonIso<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrenciesNonIso` entity based on its keys.
   * @param currencyCode Key property. See {@link CurrenciesNonIso.currencyCode}.
   * @returns A request builder for creating requests to retrieve one `CurrenciesNonIso` entity based on its keys.
   */
  getByKey(
    currencyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CurrenciesNonIso<T>, T> {
    return new GetByKeyRequestBuilder<CurrenciesNonIso<T>, T>(this.entityApi, {
      CurrencyCode: currencyCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CurrenciesNonIso`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrenciesNonIso`.
   */
  update(
    entity: CurrenciesNonIso<T>
  ): UpdateRequestBuilder<CurrenciesNonIso<T>, T> {
    return new UpdateRequestBuilder<CurrenciesNonIso<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrenciesNonIso`.
   * @param currencyCode Key property. See {@link CurrenciesNonIso.currencyCode}.
   * @returns A request builder for creating requests that delete an entity of type `CurrenciesNonIso`.
   */
  delete(currencyCode: string): DeleteRequestBuilder<CurrenciesNonIso<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrenciesNonIso`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrenciesNonIso` by taking the entity as a parameter.
   */
  delete(
    entity: CurrenciesNonIso<T>
  ): DeleteRequestBuilder<CurrenciesNonIso<T>, T>;
  delete(
    currencyCodeOrEntity: any
  ): DeleteRequestBuilder<CurrenciesNonIso<T>, T> {
    return new DeleteRequestBuilder<CurrenciesNonIso<T>, T>(
      this.entityApi,
      currencyCodeOrEntity instanceof CurrenciesNonIso
        ? currencyCodeOrEntity
        : { CurrencyCode: currencyCodeOrEntity! }
    );
  }
}

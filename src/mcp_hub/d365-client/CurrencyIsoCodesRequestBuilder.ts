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
import { CurrencyIsoCodes } from './CurrencyIsoCodes';

/**
 * Request builder class for operations supported on the {@link CurrencyIsoCodes} entity.
 */
export class CurrencyIsoCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyIsoCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyIsoCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyIsoCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyIsoCodes<T>, T> {
    return new GetAllRequestBuilder<CurrencyIsoCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyIsoCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyIsoCodes`.
   */
  create(
    entity: CurrencyIsoCodes<T>
  ): CreateRequestBuilder<CurrencyIsoCodes<T>, T> {
    return new CreateRequestBuilder<CurrencyIsoCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyIsoCodes` entity based on its keys.
   * @param isoCurrencyCode Key property. See {@link CurrencyIsoCodes.isoCurrencyCode}.
   * @returns A request builder for creating requests to retrieve one `CurrencyIsoCodes` entity based on its keys.
   */
  getByKey(
    isoCurrencyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CurrencyIsoCodes<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyIsoCodes<T>, T>(this.entityApi, {
      ISOCurrencyCode: isoCurrencyCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyIsoCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyIsoCodes`.
   */
  update(
    entity: CurrencyIsoCodes<T>
  ): UpdateRequestBuilder<CurrencyIsoCodes<T>, T> {
    return new UpdateRequestBuilder<CurrencyIsoCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyIsoCodes`.
   * @param isoCurrencyCode Key property. See {@link CurrencyIsoCodes.isoCurrencyCode}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyIsoCodes`.
   */
  delete(isoCurrencyCode: string): DeleteRequestBuilder<CurrencyIsoCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyIsoCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyIsoCodes` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyIsoCodes<T>
  ): DeleteRequestBuilder<CurrencyIsoCodes<T>, T>;
  delete(
    isoCurrencyCodeOrEntity: any
  ): DeleteRequestBuilder<CurrencyIsoCodes<T>, T> {
    return new DeleteRequestBuilder<CurrencyIsoCodes<T>, T>(
      this.entityApi,
      isoCurrencyCodeOrEntity instanceof CurrencyIsoCodes
        ? isoCurrencyCodeOrEntity
        : { ISOCurrencyCode: isoCurrencyCodeOrEntity! }
    );
  }
}

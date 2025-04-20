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
import { RetailChannelCurrencies } from './RetailChannelCurrencies';

/**
 * Request builder class for operations supported on the {@link RetailChannelCurrencies} entity.
 */
export class RetailChannelCurrenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelCurrencies<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelCurrencies` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelCurrencies` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelCurrencies<T>, T> {
    return new GetAllRequestBuilder<RetailChannelCurrencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelCurrencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelCurrencies`.
   */
  create(
    entity: RetailChannelCurrencies<T>
  ): CreateRequestBuilder<RetailChannelCurrencies<T>, T> {
    return new CreateRequestBuilder<RetailChannelCurrencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelCurrencies` entity based on its keys.
   * @param currencyCode Key property. See {@link RetailChannelCurrencies.currencyCode}.
   * @param omOperatingUnitNumber Key property. See {@link RetailChannelCurrencies.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelCurrencies` entity based on its keys.
   */
  getByKey(
    currencyCode: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelCurrencies<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelCurrencies<T>, T>(
      this.entityApi,
      {
        CurrencyCode: currencyCode,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelCurrencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelCurrencies`.
   */
  update(
    entity: RetailChannelCurrencies<T>
  ): UpdateRequestBuilder<RetailChannelCurrencies<T>, T> {
    return new UpdateRequestBuilder<RetailChannelCurrencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelCurrencies`.
   * @param currencyCode Key property. See {@link RetailChannelCurrencies.currencyCode}.
   * @param omOperatingUnitNumber Key property. See {@link RetailChannelCurrencies.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelCurrencies`.
   */
  delete(
    currencyCode: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailChannelCurrencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelCurrencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelCurrencies` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelCurrencies<T>
  ): DeleteRequestBuilder<RetailChannelCurrencies<T>, T>;
  delete(
    currencyCodeOrEntity: any,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailChannelCurrencies<T>, T> {
    return new DeleteRequestBuilder<RetailChannelCurrencies<T>, T>(
      this.entityApi,
      currencyCodeOrEntity instanceof RetailChannelCurrencies
        ? currencyCodeOrEntity
        : {
            CurrencyCode: currencyCodeOrEntity!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}

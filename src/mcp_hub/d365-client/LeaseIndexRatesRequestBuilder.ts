/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { LeaseIndexRates } from './LeaseIndexRates';

/**
 * Request builder class for operations supported on the {@link LeaseIndexRates} entity.
 */
export class LeaseIndexRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseIndexRates<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseIndexRates` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseIndexRates` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseIndexRates<T>, T> {
    return new GetAllRequestBuilder<LeaseIndexRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseIndexRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseIndexRates`.
   */
  create(
    entity: LeaseIndexRates<T>
  ): CreateRequestBuilder<LeaseIndexRates<T>, T> {
    return new CreateRequestBuilder<LeaseIndexRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseIndexRates` entity based on its keys.
   * @param indexRateTypeName Key property. See {@link LeaseIndexRates.indexRateTypeName}.
   * @param startDate Key property. See {@link LeaseIndexRates.startDate}.
   * @returns A request builder for creating requests to retrieve one `LeaseIndexRates` entity based on its keys.
   */
  getByKey(
    indexRateTypeName: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaseIndexRates<T>, T> {
    return new GetByKeyRequestBuilder<LeaseIndexRates<T>, T>(this.entityApi, {
      IndexRateTypeName: indexRateTypeName,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseIndexRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseIndexRates`.
   */
  update(
    entity: LeaseIndexRates<T>
  ): UpdateRequestBuilder<LeaseIndexRates<T>, T> {
    return new UpdateRequestBuilder<LeaseIndexRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseIndexRates`.
   * @param indexRateTypeName Key property. See {@link LeaseIndexRates.indexRateTypeName}.
   * @param startDate Key property. See {@link LeaseIndexRates.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseIndexRates`.
   */
  delete(
    indexRateTypeName: string,
    startDate: Moment
  ): DeleteRequestBuilder<LeaseIndexRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseIndexRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseIndexRates` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseIndexRates<T>
  ): DeleteRequestBuilder<LeaseIndexRates<T>, T>;
  delete(
    indexRateTypeNameOrEntity: any,
    startDate?: Moment
  ): DeleteRequestBuilder<LeaseIndexRates<T>, T> {
    return new DeleteRequestBuilder<LeaseIndexRates<T>, T>(
      this.entityApi,
      indexRateTypeNameOrEntity instanceof LeaseIndexRates
        ? indexRateTypeNameOrEntity
        : {
            IndexRateTypeName: indexRateTypeNameOrEntity!,
            StartDate: startDate!
          }
    );
  }
}

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
import { DiscountRates } from './DiscountRates';

/**
 * Request builder class for operations supported on the {@link DiscountRates} entity.
 */
export class DiscountRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountRates<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountRates` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountRates` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountRates<T>, T> {
    return new GetAllRequestBuilder<DiscountRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountRates`.
   */
  create(entity: DiscountRates<T>): CreateRequestBuilder<DiscountRates<T>, T> {
    return new CreateRequestBuilder<DiscountRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountRates.dataAreaId}.
   * @param startDate Key property. See {@link DiscountRates.startDate}.
   * @returns A request builder for creating requests to retrieve one `DiscountRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<DiscountRates<T>, T> {
    return new GetByKeyRequestBuilder<DiscountRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountRates`.
   */
  update(entity: DiscountRates<T>): UpdateRequestBuilder<DiscountRates<T>, T> {
    return new UpdateRequestBuilder<DiscountRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountRates`.
   * @param dataAreaId Key property. See {@link DiscountRates.dataAreaId}.
   * @param startDate Key property. See {@link DiscountRates.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountRates`.
   */
  delete(
    dataAreaId: string,
    startDate: Moment
  ): DeleteRequestBuilder<DiscountRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountRates` by taking the entity as a parameter.
   */
  delete(entity: DiscountRates<T>): DeleteRequestBuilder<DiscountRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    startDate?: Moment
  ): DeleteRequestBuilder<DiscountRates<T>, T> {
    return new DeleteRequestBuilder<DiscountRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StartDate: startDate!
          }
    );
  }
}

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
import { RefinancingRate } from './RefinancingRate';

/**
 * Request builder class for operations supported on the {@link RefinancingRate} entity.
 */
export class RefinancingRateRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RefinancingRate<T>, T> {
  /**
   * Returns a request builder for querying all `RefinancingRate` entities.
   * @returns A request builder for creating requests to retrieve all `RefinancingRate` entities.
   */
  getAll(): GetAllRequestBuilder<RefinancingRate<T>, T> {
    return new GetAllRequestBuilder<RefinancingRate<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RefinancingRate` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RefinancingRate`.
   */
  create(
    entity: RefinancingRate<T>
  ): CreateRequestBuilder<RefinancingRate<T>, T> {
    return new CreateRequestBuilder<RefinancingRate<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RefinancingRate` entity based on its keys.
   * @param dataAreaId Key property. See {@link RefinancingRate.dataAreaId}.
   * @param fromDate Key property. See {@link RefinancingRate.fromDate}.
   * @returns A request builder for creating requests to retrieve one `RefinancingRate` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RefinancingRate<T>, T> {
    return new GetByKeyRequestBuilder<RefinancingRate<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FromDate: fromDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RefinancingRate`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RefinancingRate`.
   */
  update(
    entity: RefinancingRate<T>
  ): UpdateRequestBuilder<RefinancingRate<T>, T> {
    return new UpdateRequestBuilder<RefinancingRate<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RefinancingRate`.
   * @param dataAreaId Key property. See {@link RefinancingRate.dataAreaId}.
   * @param fromDate Key property. See {@link RefinancingRate.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `RefinancingRate`.
   */
  delete(
    dataAreaId: string,
    fromDate: Moment
  ): DeleteRequestBuilder<RefinancingRate<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RefinancingRate`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RefinancingRate` by taking the entity as a parameter.
   */
  delete(
    entity: RefinancingRate<T>
  ): DeleteRequestBuilder<RefinancingRate<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromDate?: Moment
  ): DeleteRequestBuilder<RefinancingRate<T>, T> {
    return new DeleteRequestBuilder<RefinancingRate<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RefinancingRate
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromDate: fromDate!
          }
    );
  }
}

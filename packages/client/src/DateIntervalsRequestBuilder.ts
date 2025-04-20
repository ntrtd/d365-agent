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
import { DateIntervals } from './DateIntervals';

/**
 * Request builder class for operations supported on the {@link DateIntervals} entity.
 */
export class DateIntervalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DateIntervals<T>, T> {
  /**
   * Returns a request builder for querying all `DateIntervals` entities.
   * @returns A request builder for creating requests to retrieve all `DateIntervals` entities.
   */
  getAll(): GetAllRequestBuilder<DateIntervals<T>, T> {
    return new GetAllRequestBuilder<DateIntervals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DateIntervals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DateIntervals`.
   */
  create(entity: DateIntervals<T>): CreateRequestBuilder<DateIntervals<T>, T> {
    return new CreateRequestBuilder<DateIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DateIntervals` entity based on its keys.
   * @param dataAreaId Key property. See {@link DateIntervals.dataAreaId}.
   * @param dateIntervalCode Key property. See {@link DateIntervals.dateIntervalCode}.
   * @returns A request builder for creating requests to retrieve one `DateIntervals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dateIntervalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DateIntervals<T>, T> {
    return new GetByKeyRequestBuilder<DateIntervals<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DateIntervalCode: dateIntervalCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DateIntervals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DateIntervals`.
   */
  update(entity: DateIntervals<T>): UpdateRequestBuilder<DateIntervals<T>, T> {
    return new UpdateRequestBuilder<DateIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DateIntervals`.
   * @param dataAreaId Key property. See {@link DateIntervals.dataAreaId}.
   * @param dateIntervalCode Key property. See {@link DateIntervals.dateIntervalCode}.
   * @returns A request builder for creating requests that delete an entity of type `DateIntervals`.
   */
  delete(
    dataAreaId: string,
    dateIntervalCode: string
  ): DeleteRequestBuilder<DateIntervals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DateIntervals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DateIntervals` by taking the entity as a parameter.
   */
  delete(entity: DateIntervals<T>): DeleteRequestBuilder<DateIntervals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dateIntervalCode?: string
  ): DeleteRequestBuilder<DateIntervals<T>, T> {
    return new DeleteRequestBuilder<DateIntervals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DateIntervals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DateIntervalCode: dateIntervalCode!
          }
    );
  }
}

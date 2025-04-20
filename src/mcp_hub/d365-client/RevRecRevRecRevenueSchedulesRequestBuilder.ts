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
import { RevRecRevRecRevenueSchedules } from './RevRecRevRecRevenueSchedules';

/**
 * Request builder class for operations supported on the {@link RevRecRevRecRevenueSchedules} entity.
 */
export class RevRecRevRecRevenueSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RevRecRevRecRevenueSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `RevRecRevRecRevenueSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `RevRecRevRecRevenueSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<RevRecRevRecRevenueSchedules<T>, T> {
    return new GetAllRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RevRecRevRecRevenueSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RevRecRevRecRevenueSchedules`.
   */
  create(
    entity: RevRecRevRecRevenueSchedules<T>
  ): CreateRequestBuilder<RevRecRevRecRevenueSchedules<T>, T> {
    return new CreateRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RevRecRevRecRevenueSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link RevRecRevRecRevenueSchedules.dataAreaId}.
   * @param revenueScheduleId Key property. See {@link RevRecRevRecRevenueSchedules.revenueScheduleId}.
   * @returns A request builder for creating requests to retrieve one `RevRecRevRecRevenueSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    revenueScheduleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RevRecRevRecRevenueSchedules<T>, T> {
    return new GetByKeyRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RevenueScheduleID: revenueScheduleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RevRecRevRecRevenueSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RevRecRevRecRevenueSchedules`.
   */
  update(
    entity: RevRecRevRecRevenueSchedules<T>
  ): UpdateRequestBuilder<RevRecRevRecRevenueSchedules<T>, T> {
    return new UpdateRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RevRecRevRecRevenueSchedules`.
   * @param dataAreaId Key property. See {@link RevRecRevRecRevenueSchedules.dataAreaId}.
   * @param revenueScheduleId Key property. See {@link RevRecRevRecRevenueSchedules.revenueScheduleId}.
   * @returns A request builder for creating requests that delete an entity of type `RevRecRevRecRevenueSchedules`.
   */
  delete(
    dataAreaId: string,
    revenueScheduleId: string
  ): DeleteRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RevRecRevRecRevenueSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RevRecRevRecRevenueSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: RevRecRevRecRevenueSchedules<T>
  ): DeleteRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    revenueScheduleId?: string
  ): DeleteRequestBuilder<RevRecRevRecRevenueSchedules<T>, T> {
    return new DeleteRequestBuilder<RevRecRevRecRevenueSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RevRecRevRecRevenueSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RevenueScheduleID: revenueScheduleId!
          }
    );
  }
}

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
import { RetailWorkShiftSetups2 } from './RetailWorkShiftSetups2';

/**
 * Request builder class for operations supported on the {@link RetailWorkShiftSetups2} entity.
 */
export class RetailWorkShiftSetups2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailWorkShiftSetups2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailWorkShiftSetups2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailWorkShiftSetups2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailWorkShiftSetups2<T>, T> {
    return new GetAllRequestBuilder<RetailWorkShiftSetups2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailWorkShiftSetups2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailWorkShiftSetups2`.
   */
  create(
    entity: RetailWorkShiftSetups2<T>
  ): CreateRequestBuilder<RetailWorkShiftSetups2<T>, T> {
    return new CreateRequestBuilder<RetailWorkShiftSetups2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailWorkShiftSetups2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailWorkShiftSetups2.dataAreaId}.
   * @param workShiftId Key property. See {@link RetailWorkShiftSetups2.workShiftId}.
   * @param storeNumber Key property. See {@link RetailWorkShiftSetups2.storeNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailWorkShiftSetups2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workShiftId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailWorkShiftSetups2<T>, T> {
    return new GetByKeyRequestBuilder<RetailWorkShiftSetups2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkShiftId: workShiftId,
        StoreNumber: storeNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailWorkShiftSetups2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailWorkShiftSetups2`.
   */
  update(
    entity: RetailWorkShiftSetups2<T>
  ): UpdateRequestBuilder<RetailWorkShiftSetups2<T>, T> {
    return new UpdateRequestBuilder<RetailWorkShiftSetups2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailWorkShiftSetups2`.
   * @param dataAreaId Key property. See {@link RetailWorkShiftSetups2.dataAreaId}.
   * @param workShiftId Key property. See {@link RetailWorkShiftSetups2.workShiftId}.
   * @param storeNumber Key property. See {@link RetailWorkShiftSetups2.storeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailWorkShiftSetups2`.
   */
  delete(
    dataAreaId: string,
    workShiftId: string,
    storeNumber: string
  ): DeleteRequestBuilder<RetailWorkShiftSetups2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailWorkShiftSetups2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailWorkShiftSetups2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailWorkShiftSetups2<T>
  ): DeleteRequestBuilder<RetailWorkShiftSetups2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workShiftId?: string,
    storeNumber?: string
  ): DeleteRequestBuilder<RetailWorkShiftSetups2<T>, T> {
    return new DeleteRequestBuilder<RetailWorkShiftSetups2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailWorkShiftSetups2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkShiftId: workShiftId!,
            StoreNumber: storeNumber!
          }
    );
  }
}

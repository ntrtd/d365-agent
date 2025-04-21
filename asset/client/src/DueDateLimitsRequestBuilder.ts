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
import { DueDateLimits } from './DueDateLimits';

/**
 * Request builder class for operations supported on the {@link DueDateLimits} entity.
 */
export class DueDateLimitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DueDateLimits<T>, T> {
  /**
   * Returns a request builder for querying all `DueDateLimits` entities.
   * @returns A request builder for creating requests to retrieve all `DueDateLimits` entities.
   */
  getAll(): GetAllRequestBuilder<DueDateLimits<T>, T> {
    return new GetAllRequestBuilder<DueDateLimits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DueDateLimits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DueDateLimits`.
   */
  create(entity: DueDateLimits<T>): CreateRequestBuilder<DueDateLimits<T>, T> {
    return new CreateRequestBuilder<DueDateLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DueDateLimits` entity based on its keys.
   * @param dataAreaId Key property. See {@link DueDateLimits.dataAreaId}.
   * @param dueDateLimit Key property. See {@link DueDateLimits.dueDateLimit}.
   * @param startDate Key property. See {@link DueDateLimits.startDate}.
   * @returns A request builder for creating requests to retrieve one `DueDateLimits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dueDateLimit: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<DueDateLimits<T>, T> {
    return new GetByKeyRequestBuilder<DueDateLimits<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DueDateLimit: dueDateLimit,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DueDateLimits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DueDateLimits`.
   */
  update(entity: DueDateLimits<T>): UpdateRequestBuilder<DueDateLimits<T>, T> {
    return new UpdateRequestBuilder<DueDateLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DueDateLimits`.
   * @param dataAreaId Key property. See {@link DueDateLimits.dataAreaId}.
   * @param dueDateLimit Key property. See {@link DueDateLimits.dueDateLimit}.
   * @param startDate Key property. See {@link DueDateLimits.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `DueDateLimits`.
   */
  delete(
    dataAreaId: string,
    dueDateLimit: string,
    startDate: Moment
  ): DeleteRequestBuilder<DueDateLimits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DueDateLimits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DueDateLimits` by taking the entity as a parameter.
   */
  delete(entity: DueDateLimits<T>): DeleteRequestBuilder<DueDateLimits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dueDateLimit?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<DueDateLimits<T>, T> {
    return new DeleteRequestBuilder<DueDateLimits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DueDateLimits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DueDateLimit: dueDateLimit!,
            StartDate: startDate!
          }
    );
  }
}

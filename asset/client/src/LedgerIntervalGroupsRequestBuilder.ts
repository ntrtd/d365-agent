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
import { LedgerIntervalGroups } from './LedgerIntervalGroups';

/**
 * Request builder class for operations supported on the {@link LedgerIntervalGroups} entity.
 */
export class LedgerIntervalGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerIntervalGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerIntervalGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerIntervalGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerIntervalGroups<T>, T> {
    return new GetAllRequestBuilder<LedgerIntervalGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerIntervalGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerIntervalGroups`.
   */
  create(
    entity: LedgerIntervalGroups<T>
  ): CreateRequestBuilder<LedgerIntervalGroups<T>, T> {
    return new CreateRequestBuilder<LedgerIntervalGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerIntervalGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerIntervalGroups.dataAreaId}.
   * @param intervalGroup Key property. See {@link LedgerIntervalGroups.intervalGroup}.
   * @returns A request builder for creating requests to retrieve one `LedgerIntervalGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    intervalGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerIntervalGroups<T>, T> {
    return new GetByKeyRequestBuilder<LedgerIntervalGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        IntervalGroup: intervalGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerIntervalGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerIntervalGroups`.
   */
  update(
    entity: LedgerIntervalGroups<T>
  ): UpdateRequestBuilder<LedgerIntervalGroups<T>, T> {
    return new UpdateRequestBuilder<LedgerIntervalGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerIntervalGroups`.
   * @param dataAreaId Key property. See {@link LedgerIntervalGroups.dataAreaId}.
   * @param intervalGroup Key property. See {@link LedgerIntervalGroups.intervalGroup}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerIntervalGroups`.
   */
  delete(
    dataAreaId: string,
    intervalGroup: string
  ): DeleteRequestBuilder<LedgerIntervalGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerIntervalGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerIntervalGroups` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerIntervalGroups<T>
  ): DeleteRequestBuilder<LedgerIntervalGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    intervalGroup?: string
  ): DeleteRequestBuilder<LedgerIntervalGroups<T>, T> {
    return new DeleteRequestBuilder<LedgerIntervalGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerIntervalGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IntervalGroup: intervalGroup!
          }
    );
  }
}

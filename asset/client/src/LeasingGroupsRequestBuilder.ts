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
import { LeasingGroups } from './LeasingGroups';

/**
 * Request builder class for operations supported on the {@link LeasingGroups} entity.
 */
export class LeasingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LeasingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LeasingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LeasingGroups<T>, T> {
    return new GetAllRequestBuilder<LeasingGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeasingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasingGroups`.
   */
  create(entity: LeasingGroups<T>): CreateRequestBuilder<LeasingGroups<T>, T> {
    return new CreateRequestBuilder<LeasingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasingGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasingGroups.dataAreaId}.
   * @param leaseGroup Key property. See {@link LeasingGroups.leaseGroup}.
   * @returns A request builder for creating requests to retrieve one `LeasingGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeasingGroups<T>, T> {
    return new GetByKeyRequestBuilder<LeasingGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LeaseGroup: leaseGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeasingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasingGroups`.
   */
  update(entity: LeasingGroups<T>): UpdateRequestBuilder<LeasingGroups<T>, T> {
    return new UpdateRequestBuilder<LeasingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasingGroups`.
   * @param dataAreaId Key property. See {@link LeasingGroups.dataAreaId}.
   * @param leaseGroup Key property. See {@link LeasingGroups.leaseGroup}.
   * @returns A request builder for creating requests that delete an entity of type `LeasingGroups`.
   */
  delete(
    dataAreaId: string,
    leaseGroup: string
  ): DeleteRequestBuilder<LeasingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasingGroups` by taking the entity as a parameter.
   */
  delete(entity: LeasingGroups<T>): DeleteRequestBuilder<LeasingGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseGroup?: string
  ): DeleteRequestBuilder<LeasingGroups<T>, T> {
    return new DeleteRequestBuilder<LeasingGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasingGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseGroup: leaseGroup!
          }
    );
  }
}

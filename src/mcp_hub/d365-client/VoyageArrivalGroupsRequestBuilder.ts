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
import { VoyageArrivalGroups } from './VoyageArrivalGroups';

/**
 * Request builder class for operations supported on the {@link VoyageArrivalGroups} entity.
 */
export class VoyageArrivalGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoyageArrivalGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VoyageArrivalGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VoyageArrivalGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VoyageArrivalGroups<T>, T> {
    return new GetAllRequestBuilder<VoyageArrivalGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VoyageArrivalGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoyageArrivalGroups`.
   */
  create(
    entity: VoyageArrivalGroups<T>
  ): CreateRequestBuilder<VoyageArrivalGroups<T>, T> {
    return new CreateRequestBuilder<VoyageArrivalGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoyageArrivalGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoyageArrivalGroups.dataAreaId}.
   * @param groupId Key property. See {@link VoyageArrivalGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VoyageArrivalGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoyageArrivalGroups<T>, T> {
    return new GetByKeyRequestBuilder<VoyageArrivalGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoyageArrivalGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoyageArrivalGroups`.
   */
  update(
    entity: VoyageArrivalGroups<T>
  ): UpdateRequestBuilder<VoyageArrivalGroups<T>, T> {
    return new UpdateRequestBuilder<VoyageArrivalGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoyageArrivalGroups`.
   * @param dataAreaId Key property. See {@link VoyageArrivalGroups.dataAreaId}.
   * @param groupId Key property. See {@link VoyageArrivalGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VoyageArrivalGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VoyageArrivalGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoyageArrivalGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoyageArrivalGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VoyageArrivalGroups<T>
  ): DeleteRequestBuilder<VoyageArrivalGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VoyageArrivalGroups<T>, T> {
    return new DeleteRequestBuilder<VoyageArrivalGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoyageArrivalGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

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
import { TransferOrderLandedCostGroups } from './TransferOrderLandedCostGroups';

/**
 * Request builder class for operations supported on the {@link TransferOrderLandedCostGroups} entity.
 */
export class TransferOrderLandedCostGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferOrderLandedCostGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TransferOrderLandedCostGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TransferOrderLandedCostGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TransferOrderLandedCostGroups<T>, T> {
    return new GetAllRequestBuilder<TransferOrderLandedCostGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransferOrderLandedCostGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferOrderLandedCostGroups`.
   */
  create(
    entity: TransferOrderLandedCostGroups<T>
  ): CreateRequestBuilder<TransferOrderLandedCostGroups<T>, T> {
    return new CreateRequestBuilder<TransferOrderLandedCostGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferOrderLandedCostGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferOrderLandedCostGroups.dataAreaId}.
   * @param groupId Key property. See {@link TransferOrderLandedCostGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `TransferOrderLandedCostGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransferOrderLandedCostGroups<T>, T> {
    return new GetByKeyRequestBuilder<TransferOrderLandedCostGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferOrderLandedCostGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferOrderLandedCostGroups`.
   */
  update(
    entity: TransferOrderLandedCostGroups<T>
  ): UpdateRequestBuilder<TransferOrderLandedCostGroups<T>, T> {
    return new UpdateRequestBuilder<TransferOrderLandedCostGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLandedCostGroups`.
   * @param dataAreaId Key property. See {@link TransferOrderLandedCostGroups.dataAreaId}.
   * @param groupId Key property. See {@link TransferOrderLandedCostGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLandedCostGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<TransferOrderLandedCostGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferOrderLandedCostGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderLandedCostGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TransferOrderLandedCostGroups<T>
  ): DeleteRequestBuilder<TransferOrderLandedCostGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<TransferOrderLandedCostGroups<T>, T> {
    return new DeleteRequestBuilder<TransferOrderLandedCostGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferOrderLandedCostGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

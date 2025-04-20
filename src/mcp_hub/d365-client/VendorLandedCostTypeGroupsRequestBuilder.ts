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
import { VendorLandedCostTypeGroups } from './VendorLandedCostTypeGroups';

/**
 * Request builder class for operations supported on the {@link VendorLandedCostTypeGroups} entity.
 */
export class VendorLandedCostTypeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorLandedCostTypeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorLandedCostTypeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorLandedCostTypeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorLandedCostTypeGroups<T>, T> {
    return new GetAllRequestBuilder<VendorLandedCostTypeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorLandedCostTypeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorLandedCostTypeGroups`.
   */
  create(
    entity: VendorLandedCostTypeGroups<T>
  ): CreateRequestBuilder<VendorLandedCostTypeGroups<T>, T> {
    return new CreateRequestBuilder<VendorLandedCostTypeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorLandedCostTypeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorLandedCostTypeGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorLandedCostTypeGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VendorLandedCostTypeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorLandedCostTypeGroups<T>, T> {
    return new GetByKeyRequestBuilder<VendorLandedCostTypeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorLandedCostTypeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorLandedCostTypeGroups`.
   */
  update(
    entity: VendorLandedCostTypeGroups<T>
  ): UpdateRequestBuilder<VendorLandedCostTypeGroups<T>, T> {
    return new UpdateRequestBuilder<VendorLandedCostTypeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorLandedCostTypeGroups`.
   * @param dataAreaId Key property. See {@link VendorLandedCostTypeGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorLandedCostTypeGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorLandedCostTypeGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VendorLandedCostTypeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorLandedCostTypeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorLandedCostTypeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorLandedCostTypeGroups<T>
  ): DeleteRequestBuilder<VendorLandedCostTypeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VendorLandedCostTypeGroups<T>, T> {
    return new DeleteRequestBuilder<VendorLandedCostTypeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorLandedCostTypeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

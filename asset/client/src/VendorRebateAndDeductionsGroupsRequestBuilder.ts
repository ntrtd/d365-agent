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
import { VendorRebateAndDeductionsGroups } from './VendorRebateAndDeductionsGroups';

/**
 * Request builder class for operations supported on the {@link VendorRebateAndDeductionsGroups} entity.
 */
export class VendorRebateAndDeductionsGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRebateAndDeductionsGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRebateAndDeductionsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRebateAndDeductionsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRebateAndDeductionsGroups<T>, T> {
    return new GetAllRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorRebateAndDeductionsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRebateAndDeductionsGroups`.
   */
  create(
    entity: VendorRebateAndDeductionsGroups<T>
  ): CreateRequestBuilder<VendorRebateAndDeductionsGroups<T>, T> {
    return new CreateRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorRebateAndDeductionsGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRebateAndDeductionsGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorRebateAndDeductionsGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VendorRebateAndDeductionsGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRebateAndDeductionsGroups<T>, T> {
    return new GetByKeyRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRebateAndDeductionsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRebateAndDeductionsGroups`.
   */
  update(
    entity: VendorRebateAndDeductionsGroups<T>
  ): UpdateRequestBuilder<VendorRebateAndDeductionsGroups<T>, T> {
    return new UpdateRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAndDeductionsGroups`.
   * @param dataAreaId Key property. See {@link VendorRebateAndDeductionsGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorRebateAndDeductionsGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAndDeductionsGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAndDeductionsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAndDeductionsGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRebateAndDeductionsGroups<T>
  ): DeleteRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VendorRebateAndDeductionsGroups<T>, T> {
    return new DeleteRequestBuilder<VendorRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRebateAndDeductionsGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

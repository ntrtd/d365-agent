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
import { CustomerRebateAndDeductionsGroups } from './CustomerRebateAndDeductionsGroups';

/**
 * Request builder class for operations supported on the {@link CustomerRebateAndDeductionsGroups} entity.
 */
export class CustomerRebateAndDeductionsGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerRebateAndDeductionsGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerRebateAndDeductionsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerRebateAndDeductionsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T> {
    return new GetAllRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerRebateAndDeductionsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerRebateAndDeductionsGroups`.
   */
  create(
    entity: CustomerRebateAndDeductionsGroups<T>
  ): CreateRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T> {
    return new CreateRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerRebateAndDeductionsGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerRebateAndDeductionsGroups.dataAreaId}.
   * @param groupId Key property. See {@link CustomerRebateAndDeductionsGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `CustomerRebateAndDeductionsGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T> {
    return new GetByKeyRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerRebateAndDeductionsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerRebateAndDeductionsGroups`.
   */
  update(
    entity: CustomerRebateAndDeductionsGroups<T>
  ): UpdateRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T> {
    return new UpdateRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerRebateAndDeductionsGroups`.
   * @param dataAreaId Key property. See {@link CustomerRebateAndDeductionsGroups.dataAreaId}.
   * @param groupId Key property. See {@link CustomerRebateAndDeductionsGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebateAndDeductionsGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerRebateAndDeductionsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebateAndDeductionsGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerRebateAndDeductionsGroups<T>
  ): DeleteRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T> {
    return new DeleteRequestBuilder<CustomerRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerRebateAndDeductionsGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

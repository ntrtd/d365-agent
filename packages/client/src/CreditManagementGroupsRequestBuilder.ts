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
import { CreditManagementGroups } from './CreditManagementGroups';

/**
 * Request builder class for operations supported on the {@link CreditManagementGroups} entity.
 */
export class CreditManagementGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementGroups<T>, T> {
    return new GetAllRequestBuilder<CreditManagementGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementGroups`.
   */
  create(
    entity: CreditManagementGroups<T>
  ): CreateRequestBuilder<CreditManagementGroups<T>, T> {
    return new CreateRequestBuilder<CreditManagementGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementGroups.dataAreaId}.
   * @param groupId Key property. See {@link CreditManagementGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementGroups<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementGroups`.
   */
  update(
    entity: CreditManagementGroups<T>
  ): UpdateRequestBuilder<CreditManagementGroups<T>, T> {
    return new UpdateRequestBuilder<CreditManagementGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementGroups`.
   * @param dataAreaId Key property. See {@link CreditManagementGroups.dataAreaId}.
   * @param groupId Key property. See {@link CreditManagementGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<CreditManagementGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementGroups<T>
  ): DeleteRequestBuilder<CreditManagementGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<CreditManagementGroups<T>, T> {
    return new DeleteRequestBuilder<CreditManagementGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

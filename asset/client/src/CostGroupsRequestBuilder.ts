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
import { CostGroups } from './CostGroups';

/**
 * Request builder class for operations supported on the {@link CostGroups} entity.
 */
export class CostGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CostGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CostGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CostGroups<T>, T> {
    return new GetAllRequestBuilder<CostGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostGroups`.
   */
  create(entity: CostGroups<T>): CreateRequestBuilder<CostGroups<T>, T> {
    return new CreateRequestBuilder<CostGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CostGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostGroups.dataAreaId}.
   * @param groupId Key property. See {@link CostGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `CostGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostGroups<T>, T> {
    return new GetByKeyRequestBuilder<CostGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CostGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostGroups`.
   */
  update(entity: CostGroups<T>): UpdateRequestBuilder<CostGroups<T>, T> {
    return new UpdateRequestBuilder<CostGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostGroups`.
   * @param dataAreaId Key property. See {@link CostGroups.dataAreaId}.
   * @param groupId Key property. See {@link CostGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `CostGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<CostGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostGroups` by taking the entity as a parameter.
   */
  delete(entity: CostGroups<T>): DeleteRequestBuilder<CostGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<CostGroups<T>, T> {
    return new DeleteRequestBuilder<CostGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

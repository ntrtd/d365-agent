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
import { CfopGroups } from './CfopGroups';

/**
 * Request builder class for operations supported on the {@link CfopGroups} entity.
 */
export class CfopGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CfopGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CfopGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CfopGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CfopGroups<T>, T> {
    return new GetAllRequestBuilder<CfopGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CfopGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CfopGroups`.
   */
  create(entity: CfopGroups<T>): CreateRequestBuilder<CfopGroups<T>, T> {
    return new CreateRequestBuilder<CfopGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CfopGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CfopGroups.dataAreaId}.
   * @param groupId Key property. See {@link CfopGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `CfopGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CfopGroups<T>, T> {
    return new GetByKeyRequestBuilder<CfopGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CfopGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CfopGroups`.
   */
  update(entity: CfopGroups<T>): UpdateRequestBuilder<CfopGroups<T>, T> {
    return new UpdateRequestBuilder<CfopGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CfopGroups`.
   * @param dataAreaId Key property. See {@link CfopGroups.dataAreaId}.
   * @param groupId Key property. See {@link CfopGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `CfopGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<CfopGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CfopGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CfopGroups` by taking the entity as a parameter.
   */
  delete(entity: CfopGroups<T>): DeleteRequestBuilder<CfopGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<CfopGroups<T>, T> {
    return new DeleteRequestBuilder<CfopGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CfopGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}

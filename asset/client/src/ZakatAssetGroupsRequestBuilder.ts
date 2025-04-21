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
import { ZakatAssetGroups } from './ZakatAssetGroups';

/**
 * Request builder class for operations supported on the {@link ZakatAssetGroups} entity.
 */
export class ZakatAssetGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ZakatAssetGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ZakatAssetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ZakatAssetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ZakatAssetGroups<T>, T> {
    return new GetAllRequestBuilder<ZakatAssetGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ZakatAssetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ZakatAssetGroups`.
   */
  create(
    entity: ZakatAssetGroups<T>
  ): CreateRequestBuilder<ZakatAssetGroups<T>, T> {
    return new CreateRequestBuilder<ZakatAssetGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ZakatAssetGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ZakatAssetGroups.dataAreaId}.
   * @param groupName Key property. See {@link ZakatAssetGroups.groupName}.
   * @returns A request builder for creating requests to retrieve one `ZakatAssetGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ZakatAssetGroups<T>, T> {
    return new GetByKeyRequestBuilder<ZakatAssetGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupName: groupName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ZakatAssetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ZakatAssetGroups`.
   */
  update(
    entity: ZakatAssetGroups<T>
  ): UpdateRequestBuilder<ZakatAssetGroups<T>, T> {
    return new UpdateRequestBuilder<ZakatAssetGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ZakatAssetGroups`.
   * @param dataAreaId Key property. See {@link ZakatAssetGroups.dataAreaId}.
   * @param groupName Key property. See {@link ZakatAssetGroups.groupName}.
   * @returns A request builder for creating requests that delete an entity of type `ZakatAssetGroups`.
   */
  delete(
    dataAreaId: string,
    groupName: string
  ): DeleteRequestBuilder<ZakatAssetGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ZakatAssetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ZakatAssetGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ZakatAssetGroups<T>
  ): DeleteRequestBuilder<ZakatAssetGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupName?: string
  ): DeleteRequestBuilder<ZakatAssetGroups<T>, T> {
    return new DeleteRequestBuilder<ZakatAssetGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ZakatAssetGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupName: groupName!
          }
    );
  }
}

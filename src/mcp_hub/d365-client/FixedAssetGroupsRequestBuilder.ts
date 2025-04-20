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
import { FixedAssetGroups } from './FixedAssetGroups';

/**
 * Request builder class for operations supported on the {@link FixedAssetGroups} entity.
 */
export class FixedAssetGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetGroups<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetGroups<T>, T> {
    return new GetAllRequestBuilder<FixedAssetGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetGroups`.
   */
  create(
    entity: FixedAssetGroups<T>
  ): CreateRequestBuilder<FixedAssetGroups<T>, T> {
    return new CreateRequestBuilder<FixedAssetGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetGroups.dataAreaId}.
   * @param fixedAssetGroupId Key property. See {@link FixedAssetGroups.fixedAssetGroupId}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetGroups<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FixedAssetGroupId: fixedAssetGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetGroups`.
   */
  update(
    entity: FixedAssetGroups<T>
  ): UpdateRequestBuilder<FixedAssetGroups<T>, T> {
    return new UpdateRequestBuilder<FixedAssetGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetGroups`.
   * @param dataAreaId Key property. See {@link FixedAssetGroups.dataAreaId}.
   * @param fixedAssetGroupId Key property. See {@link FixedAssetGroups.fixedAssetGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetGroups`.
   */
  delete(
    dataAreaId: string,
    fixedAssetGroupId: string
  ): DeleteRequestBuilder<FixedAssetGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetGroups` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetGroups<T>
  ): DeleteRequestBuilder<FixedAssetGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetGroupId?: string
  ): DeleteRequestBuilder<FixedAssetGroups<T>, T> {
    return new DeleteRequestBuilder<FixedAssetGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetGroupId: fixedAssetGroupId!
          }
    );
  }
}

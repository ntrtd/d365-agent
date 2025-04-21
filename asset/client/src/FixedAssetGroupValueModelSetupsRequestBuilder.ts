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
import { FixedAssetGroupValueModelSetups } from './FixedAssetGroupValueModelSetups';

/**
 * Request builder class for operations supported on the {@link FixedAssetGroupValueModelSetups} entity.
 */
export class FixedAssetGroupValueModelSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetGroupValueModelSetups<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetGroupValueModelSetups` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetGroupValueModelSetups` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetGroupValueModelSetups<T>, T> {
    return new GetAllRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FixedAssetGroupValueModelSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetGroupValueModelSetups`.
   */
  create(
    entity: FixedAssetGroupValueModelSetups<T>
  ): CreateRequestBuilder<FixedAssetGroupValueModelSetups<T>, T> {
    return new CreateRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetGroupValueModelSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetGroupValueModelSetups.dataAreaId}.
   * @param fixedAssetGroupId Key property. See {@link FixedAssetGroupValueModelSetups.fixedAssetGroupId}.
   * @param valueModelId Key property. See {@link FixedAssetGroupValueModelSetups.valueModelId}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetGroupValueModelSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetGroupId: DeserializedType<T, 'Edm.String'>,
    valueModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetGroupValueModelSetups<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FixedAssetGroupId: fixedAssetGroupId,
        ValueModelId: valueModelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetGroupValueModelSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetGroupValueModelSetups`.
   */
  update(
    entity: FixedAssetGroupValueModelSetups<T>
  ): UpdateRequestBuilder<FixedAssetGroupValueModelSetups<T>, T> {
    return new UpdateRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetGroupValueModelSetups`.
   * @param dataAreaId Key property. See {@link FixedAssetGroupValueModelSetups.dataAreaId}.
   * @param fixedAssetGroupId Key property. See {@link FixedAssetGroupValueModelSetups.fixedAssetGroupId}.
   * @param valueModelId Key property. See {@link FixedAssetGroupValueModelSetups.valueModelId}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetGroupValueModelSetups`.
   */
  delete(
    dataAreaId: string,
    fixedAssetGroupId: string,
    valueModelId: string
  ): DeleteRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetGroupValueModelSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetGroupValueModelSetups` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetGroupValueModelSetups<T>
  ): DeleteRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetGroupId?: string,
    valueModelId?: string
  ): DeleteRequestBuilder<FixedAssetGroupValueModelSetups<T>, T> {
    return new DeleteRequestBuilder<FixedAssetGroupValueModelSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetGroupValueModelSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetGroupId: fixedAssetGroupId!,
            ValueModelId: valueModelId!
          }
    );
  }
}

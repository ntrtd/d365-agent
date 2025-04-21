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
import { AssetProvisionTypes } from './AssetProvisionTypes';

/**
 * Request builder class for operations supported on the {@link AssetProvisionTypes} entity.
 */
export class AssetProvisionTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetProvisionTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetProvisionTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetProvisionTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetProvisionTypes<T>, T> {
    return new GetAllRequestBuilder<AssetProvisionTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetProvisionTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetProvisionTypes`.
   */
  create(
    entity: AssetProvisionTypes<T>
  ): CreateRequestBuilder<AssetProvisionTypes<T>, T> {
    return new CreateRequestBuilder<AssetProvisionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetProvisionTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetProvisionTypes.dataAreaId}.
   * @param typeId Key property. See {@link AssetProvisionTypes.typeId}.
   * @returns A request builder for creating requests to retrieve one `AssetProvisionTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetProvisionTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetProvisionTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TypeId: typeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetProvisionTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetProvisionTypes`.
   */
  update(
    entity: AssetProvisionTypes<T>
  ): UpdateRequestBuilder<AssetProvisionTypes<T>, T> {
    return new UpdateRequestBuilder<AssetProvisionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetProvisionTypes`.
   * @param dataAreaId Key property. See {@link AssetProvisionTypes.dataAreaId}.
   * @param typeId Key property. See {@link AssetProvisionTypes.typeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetProvisionTypes`.
   */
  delete(
    dataAreaId: string,
    typeId: string
  ): DeleteRequestBuilder<AssetProvisionTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetProvisionTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetProvisionTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetProvisionTypes<T>
  ): DeleteRequestBuilder<AssetProvisionTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeId?: string
  ): DeleteRequestBuilder<AssetProvisionTypes<T>, T> {
    return new DeleteRequestBuilder<AssetProvisionTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetProvisionTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeId: typeId!
          }
    );
  }
}

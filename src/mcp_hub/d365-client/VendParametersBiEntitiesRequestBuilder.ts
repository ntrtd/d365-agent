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
import { VendParametersBiEntities } from './VendParametersBiEntities';

/**
 * Request builder class for operations supported on the {@link VendParametersBiEntities} entity.
 */
export class VendParametersBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendParametersBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendParametersBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendParametersBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendParametersBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendParametersBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendParametersBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendParametersBiEntities`.
   */
  create(
    entity: VendParametersBiEntities<T>
  ): CreateRequestBuilder<VendParametersBiEntities<T>, T> {
    return new CreateRequestBuilder<VendParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendParametersBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendParametersBiEntities.dataAreaId}.
   * @param key Key property. See {@link VendParametersBiEntities.key}.
   * @returns A request builder for creating requests to retrieve one `VendParametersBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<VendParametersBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendParametersBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendParametersBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendParametersBiEntities`.
   */
  update(
    entity: VendParametersBiEntities<T>
  ): UpdateRequestBuilder<VendParametersBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendParametersBiEntities`.
   * @param dataAreaId Key property. See {@link VendParametersBiEntities.dataAreaId}.
   * @param key Key property. See {@link VendParametersBiEntities.key}.
   * @returns A request builder for creating requests that delete an entity of type `VendParametersBiEntities`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<VendParametersBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendParametersBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendParametersBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendParametersBiEntities<T>
  ): DeleteRequestBuilder<VendParametersBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<VendParametersBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendParametersBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendParametersBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}

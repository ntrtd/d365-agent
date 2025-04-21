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
import { CustParametersBiEntities } from './CustParametersBiEntities';

/**
 * Request builder class for operations supported on the {@link CustParametersBiEntities} entity.
 */
export class CustParametersBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustParametersBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustParametersBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustParametersBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustParametersBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustParametersBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustParametersBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustParametersBiEntities`.
   */
  create(
    entity: CustParametersBiEntities<T>
  ): CreateRequestBuilder<CustParametersBiEntities<T>, T> {
    return new CreateRequestBuilder<CustParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustParametersBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustParametersBiEntities.dataAreaId}.
   * @param key Key property. See {@link CustParametersBiEntities.key}.
   * @returns A request builder for creating requests to retrieve one `CustParametersBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CustParametersBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustParametersBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustParametersBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustParametersBiEntities`.
   */
  update(
    entity: CustParametersBiEntities<T>
  ): UpdateRequestBuilder<CustParametersBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustParametersBiEntities`.
   * @param dataAreaId Key property. See {@link CustParametersBiEntities.dataAreaId}.
   * @param key Key property. See {@link CustParametersBiEntities.key}.
   * @returns A request builder for creating requests that delete an entity of type `CustParametersBiEntities`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<CustParametersBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustParametersBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustParametersBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustParametersBiEntities<T>
  ): DeleteRequestBuilder<CustParametersBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<CustParametersBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustParametersBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustParametersBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}

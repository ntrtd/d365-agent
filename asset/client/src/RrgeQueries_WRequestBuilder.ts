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
import { RrgeQueries_W } from './RrgeQueries_W';

/**
 * Request builder class for operations supported on the {@link RrgeQueries_W} entity.
 */
export class RrgeQueries_WRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgeQueries_W<T>, T> {
  /**
   * Returns a request builder for querying all `RrgeQueries_W` entities.
   * @returns A request builder for creating requests to retrieve all `RrgeQueries_W` entities.
   */
  getAll(): GetAllRequestBuilder<RrgeQueries_W<T>, T> {
    return new GetAllRequestBuilder<RrgeQueries_W<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RrgeQueries_W` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgeQueries_W`.
   */
  create(entity: RrgeQueries_W<T>): CreateRequestBuilder<RrgeQueries_W<T>, T> {
    return new CreateRequestBuilder<RrgeQueries_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgeQueries_W` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgeQueries_W.dataAreaId}.
   * @param queryId Key property. See {@link RrgeQueries_W.queryId}.
   * @returns A request builder for creating requests to retrieve one `RrgeQueries_W` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    queryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RrgeQueries_W<T>, T> {
    return new GetByKeyRequestBuilder<RrgeQueries_W<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      QueryId: queryId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RrgeQueries_W`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgeQueries_W`.
   */
  update(entity: RrgeQueries_W<T>): UpdateRequestBuilder<RrgeQueries_W<T>, T> {
    return new UpdateRequestBuilder<RrgeQueries_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgeQueries_W`.
   * @param dataAreaId Key property. See {@link RrgeQueries_W.dataAreaId}.
   * @param queryId Key property. See {@link RrgeQueries_W.queryId}.
   * @returns A request builder for creating requests that delete an entity of type `RrgeQueries_W`.
   */
  delete(
    dataAreaId: string,
    queryId: string
  ): DeleteRequestBuilder<RrgeQueries_W<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgeQueries_W`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgeQueries_W` by taking the entity as a parameter.
   */
  delete(entity: RrgeQueries_W<T>): DeleteRequestBuilder<RrgeQueries_W<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    queryId?: string
  ): DeleteRequestBuilder<RrgeQueries_W<T>, T> {
    return new DeleteRequestBuilder<RrgeQueries_W<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgeQueries_W
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QueryId: queryId!
          }
    );
  }
}

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
import { SalesOrderLineTotalsBiEntities } from './SalesOrderLineTotalsBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesOrderLineTotalsBiEntities} entity.
 */
export class SalesOrderLineTotalsBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderLineTotalsBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderLineTotalsBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderLineTotalsBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderLineTotalsBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderLineTotalsBiEntities`.
   */
  create(
    entity: SalesOrderLineTotalsBiEntities<T>
  ): CreateRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderLineTotalsBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderLineTotalsBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link SalesOrderLineTotalsBiEntities.inventTransId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderLineTotalsBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransId: inventTransId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderLineTotalsBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderLineTotalsBiEntities`.
   */
  update(
    entity: SalesOrderLineTotalsBiEntities<T>
  ): UpdateRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineTotalsBiEntities`.
   * @param dataAreaId Key property. See {@link SalesOrderLineTotalsBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link SalesOrderLineTotalsBiEntities.inventTransId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineTotalsBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransId: string
  ): DeleteRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineTotalsBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineTotalsBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderLineTotalsBiEntities<T>
  ): DeleteRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransId?: string
  ): DeleteRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesOrderLineTotalsBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderLineTotalsBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransId: inventTransId!
          }
    );
  }
}

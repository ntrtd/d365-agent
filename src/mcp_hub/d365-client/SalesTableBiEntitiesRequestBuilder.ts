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
import { SalesTableBiEntities } from './SalesTableBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesTableBiEntities} entity.
 */
export class SalesTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesTableBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTableBiEntities`.
   */
  create(
    entity: SalesTableBiEntities<T>
  ): CreateRequestBuilder<SalesTableBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTableBiEntities.dataAreaId}.
   * @param salesId Key property. See {@link SalesTableBiEntities.salesId}.
   * @returns A request builder for creating requests to retrieve one `SalesTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesId: salesId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTableBiEntities`.
   */
  update(
    entity: SalesTableBiEntities<T>
  ): UpdateRequestBuilder<SalesTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTableBiEntities`.
   * @param dataAreaId Key property. See {@link SalesTableBiEntities.dataAreaId}.
   * @param salesId Key property. See {@link SalesTableBiEntities.salesId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    salesId: string
  ): DeleteRequestBuilder<SalesTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTableBiEntities<T>
  ): DeleteRequestBuilder<SalesTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string
  ): DeleteRequestBuilder<SalesTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!
          }
    );
  }
}

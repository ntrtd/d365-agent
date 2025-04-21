/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { InventTransCdsEntities } from './InventTransCdsEntities';

/**
 * Request builder class for operations supported on the {@link InventTransCdsEntities} entity.
 */
export class InventTransCdsEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransCdsEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransCdsEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransCdsEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransCdsEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransCdsEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransCdsEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransCdsEntities`.
   */
  create(
    entity: InventTransCdsEntities<T>
  ): CreateRequestBuilder<InventTransCdsEntities<T>, T> {
    return new CreateRequestBuilder<InventTransCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransCdsEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransCdsEntities.dataAreaId}.
   * @param inventTransOrigin Key property. See {@link InventTransCdsEntities.inventTransOrigin}.
   * @param inventDimId Key property. See {@link InventTransCdsEntities.inventDimId}.
   * @param recordId Key property. See {@link InventTransCdsEntities.recordId}.
   * @returns A request builder for creating requests to retrieve one `InventTransCdsEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransOrigin: DeserializedType<T, 'Edm.Int64'>,
    inventDimId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventTransCdsEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransCdsEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransOrigin: inventTransOrigin,
        inventDimId: inventDimId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransCdsEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransCdsEntities`.
   */
  update(
    entity: InventTransCdsEntities<T>
  ): UpdateRequestBuilder<InventTransCdsEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransCdsEntities`.
   * @param dataAreaId Key property. See {@link InventTransCdsEntities.dataAreaId}.
   * @param inventTransOrigin Key property. See {@link InventTransCdsEntities.inventTransOrigin}.
   * @param inventDimId Key property. See {@link InventTransCdsEntities.inventDimId}.
   * @param recordId Key property. See {@link InventTransCdsEntities.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransCdsEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransOrigin: BigNumber,
    inventDimId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<InventTransCdsEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransCdsEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransCdsEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransCdsEntities<T>
  ): DeleteRequestBuilder<InventTransCdsEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransOrigin?: BigNumber,
    inventDimId?: string,
    recordId?: BigNumber
  ): DeleteRequestBuilder<InventTransCdsEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransCdsEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransCdsEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransOrigin: inventTransOrigin!,
            inventDimId: inventDimId!,
            RecordId: recordId!
          }
    );
  }
}

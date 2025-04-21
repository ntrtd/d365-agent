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
import { SmaServiceOrderTableBiEntities } from './SmaServiceOrderTableBiEntities';

/**
 * Request builder class for operations supported on the {@link SmaServiceOrderTableBiEntities} entity.
 */
export class SmaServiceOrderTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmaServiceOrderTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SmaServiceOrderTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SmaServiceOrderTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SmaServiceOrderTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SmaServiceOrderTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmaServiceOrderTableBiEntities`.
   */
  create(
    entity: SmaServiceOrderTableBiEntities<T>
  ): CreateRequestBuilder<SmaServiceOrderTableBiEntities<T>, T> {
    return new CreateRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SmaServiceOrderTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmaServiceOrderTableBiEntities.dataAreaId}.
   * @param serviceOrderId Key property. See {@link SmaServiceOrderTableBiEntities.serviceOrderId}.
   * @returns A request builder for creating requests to retrieve one `SmaServiceOrderTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SmaServiceOrderTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceOrderId: serviceOrderId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SmaServiceOrderTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmaServiceOrderTableBiEntities`.
   */
  update(
    entity: SmaServiceOrderTableBiEntities<T>
  ): UpdateRequestBuilder<SmaServiceOrderTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SmaServiceOrderTableBiEntities`.
   * @param dataAreaId Key property. See {@link SmaServiceOrderTableBiEntities.dataAreaId}.
   * @param serviceOrderId Key property. See {@link SmaServiceOrderTableBiEntities.serviceOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceOrderTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    serviceOrderId: string
  ): DeleteRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmaServiceOrderTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceOrderTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SmaServiceOrderTableBiEntities<T>
  ): DeleteRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceOrderId?: string
  ): DeleteRequestBuilder<SmaServiceOrderTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<SmaServiceOrderTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmaServiceOrderTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceOrderId: serviceOrderId!
          }
    );
  }
}

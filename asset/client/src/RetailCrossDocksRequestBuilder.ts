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
import { RetailCrossDocks } from './RetailCrossDocks';

/**
 * Request builder class for operations supported on the {@link RetailCrossDocks} entity.
 */
export class RetailCrossDocksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCrossDocks<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCrossDocks` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCrossDocks` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCrossDocks<T>, T> {
    return new GetAllRequestBuilder<RetailCrossDocks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCrossDocks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCrossDocks`.
   */
  create(
    entity: RetailCrossDocks<T>
  ): CreateRequestBuilder<RetailCrossDocks<T>, T> {
    return new CreateRequestBuilder<RetailCrossDocks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCrossDocks` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailCrossDocks.dataAreaId}.
   * @param crossDockId Key property. See {@link RetailCrossDocks.crossDockId}.
   * @returns A request builder for creating requests to retrieve one `RetailCrossDocks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    crossDockId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCrossDocks<T>, T> {
    return new GetByKeyRequestBuilder<RetailCrossDocks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CrossDockId: crossDockId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCrossDocks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCrossDocks`.
   */
  update(
    entity: RetailCrossDocks<T>
  ): UpdateRequestBuilder<RetailCrossDocks<T>, T> {
    return new UpdateRequestBuilder<RetailCrossDocks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCrossDocks`.
   * @param dataAreaId Key property. See {@link RetailCrossDocks.dataAreaId}.
   * @param crossDockId Key property. See {@link RetailCrossDocks.crossDockId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCrossDocks`.
   */
  delete(
    dataAreaId: string,
    crossDockId: string
  ): DeleteRequestBuilder<RetailCrossDocks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCrossDocks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCrossDocks` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCrossDocks<T>
  ): DeleteRequestBuilder<RetailCrossDocks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    crossDockId?: string
  ): DeleteRequestBuilder<RetailCrossDocks<T>, T> {
    return new DeleteRequestBuilder<RetailCrossDocks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailCrossDocks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CrossDockId: crossDockId!
          }
    );
  }
}

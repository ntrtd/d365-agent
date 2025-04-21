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
import { Houses } from './Houses';

/**
 * Request builder class for operations supported on the {@link Houses} entity.
 */
export class HousesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Houses<T>, T> {
  /**
   * Returns a request builder for querying all `Houses` entities.
   * @returns A request builder for creating requests to retrieve all `Houses` entities.
   */
  getAll(): GetAllRequestBuilder<Houses<T>, T> {
    return new GetAllRequestBuilder<Houses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Houses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Houses`.
   */
  create(entity: Houses<T>): CreateRequestBuilder<Houses<T>, T> {
    return new CreateRequestBuilder<Houses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Houses` entity based on its keys.
   * @param dataAreaId Key property. See {@link Houses.dataAreaId}.
   * @param houseId Key property. See {@link Houses.houseId}.
   * @returns A request builder for creating requests to retrieve one `Houses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    houseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Houses<T>, T> {
    return new GetByKeyRequestBuilder<Houses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      HouseId: houseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Houses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Houses`.
   */
  update(entity: Houses<T>): UpdateRequestBuilder<Houses<T>, T> {
    return new UpdateRequestBuilder<Houses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Houses`.
   * @param dataAreaId Key property. See {@link Houses.dataAreaId}.
   * @param houseId Key property. See {@link Houses.houseId}.
   * @returns A request builder for creating requests that delete an entity of type `Houses`.
   */
  delete(
    dataAreaId: string,
    houseId: string
  ): DeleteRequestBuilder<Houses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Houses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Houses` by taking the entity as a parameter.
   */
  delete(entity: Houses<T>): DeleteRequestBuilder<Houses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    houseId?: string
  ): DeleteRequestBuilder<Houses<T>, T> {
    return new DeleteRequestBuilder<Houses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Houses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HouseId: houseId!
          }
    );
  }
}

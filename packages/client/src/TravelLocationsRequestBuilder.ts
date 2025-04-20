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
import { TravelLocations } from './TravelLocations';

/**
 * Request builder class for operations supported on the {@link TravelLocations} entity.
 */
export class TravelLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TravelLocations<T>, T> {
  /**
   * Returns a request builder for querying all `TravelLocations` entities.
   * @returns A request builder for creating requests to retrieve all `TravelLocations` entities.
   */
  getAll(): GetAllRequestBuilder<TravelLocations<T>, T> {
    return new GetAllRequestBuilder<TravelLocations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TravelLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TravelLocations`.
   */
  create(
    entity: TravelLocations<T>
  ): CreateRequestBuilder<TravelLocations<T>, T> {
    return new CreateRequestBuilder<TravelLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TravelLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TravelLocations.dataAreaId}.
   * @param destination Key property. See {@link TravelLocations.destination}.
   * @returns A request builder for creating requests to retrieve one `TravelLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    destination: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TravelLocations<T>, T> {
    return new GetByKeyRequestBuilder<TravelLocations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Destination: destination
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TravelLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TravelLocations`.
   */
  update(
    entity: TravelLocations<T>
  ): UpdateRequestBuilder<TravelLocations<T>, T> {
    return new UpdateRequestBuilder<TravelLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TravelLocations`.
   * @param dataAreaId Key property. See {@link TravelLocations.dataAreaId}.
   * @param destination Key property. See {@link TravelLocations.destination}.
   * @returns A request builder for creating requests that delete an entity of type `TravelLocations`.
   */
  delete(
    dataAreaId: string,
    destination: string
  ): DeleteRequestBuilder<TravelLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TravelLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TravelLocations` by taking the entity as a parameter.
   */
  delete(
    entity: TravelLocations<T>
  ): DeleteRequestBuilder<TravelLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    destination?: string
  ): DeleteRequestBuilder<TravelLocations<T>, T> {
    return new DeleteRequestBuilder<TravelLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TravelLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Destination: destination!
          }
    );
  }
}

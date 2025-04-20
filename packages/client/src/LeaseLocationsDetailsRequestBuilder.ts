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
import { LeaseLocationsDetails } from './LeaseLocationsDetails';

/**
 * Request builder class for operations supported on the {@link LeaseLocationsDetails} entity.
 */
export class LeaseLocationsDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseLocationsDetails<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseLocationsDetails` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseLocationsDetails` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseLocationsDetails<T>, T> {
    return new GetAllRequestBuilder<LeaseLocationsDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseLocationsDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseLocationsDetails`.
   */
  create(
    entity: LeaseLocationsDetails<T>
  ): CreateRequestBuilder<LeaseLocationsDetails<T>, T> {
    return new CreateRequestBuilder<LeaseLocationsDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseLocationsDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseLocationsDetails.dataAreaId}.
   * @param locationNumber Key property. See {@link LeaseLocationsDetails.locationNumber}.
   * @returns A request builder for creating requests to retrieve one `LeaseLocationsDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    locationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseLocationsDetails<T>, T> {
    return new GetByKeyRequestBuilder<LeaseLocationsDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LocationNumber: locationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseLocationsDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseLocationsDetails`.
   */
  update(
    entity: LeaseLocationsDetails<T>
  ): UpdateRequestBuilder<LeaseLocationsDetails<T>, T> {
    return new UpdateRequestBuilder<LeaseLocationsDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseLocationsDetails`.
   * @param dataAreaId Key property. See {@link LeaseLocationsDetails.dataAreaId}.
   * @param locationNumber Key property. See {@link LeaseLocationsDetails.locationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseLocationsDetails`.
   */
  delete(
    dataAreaId: string,
    locationNumber: string
  ): DeleteRequestBuilder<LeaseLocationsDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseLocationsDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseLocationsDetails` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseLocationsDetails<T>
  ): DeleteRequestBuilder<LeaseLocationsDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    locationNumber?: string
  ): DeleteRequestBuilder<LeaseLocationsDetails<T>, T> {
    return new DeleteRequestBuilder<LeaseLocationsDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseLocationsDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LocationNumber: locationNumber!
          }
    );
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CdsPostalAddressHistory } from './CdsPostalAddressHistory';

/**
 * Request builder class for operations supported on the {@link CdsPostalAddressHistory} entity.
 */
export class CdsPostalAddressHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPostalAddressHistory<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPostalAddressHistory` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPostalAddressHistory` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPostalAddressHistory<T>, T> {
    return new GetAllRequestBuilder<CdsPostalAddressHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPostalAddressHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPostalAddressHistory`.
   */
  create(
    entity: CdsPostalAddressHistory<T>
  ): CreateRequestBuilder<CdsPostalAddressHistory<T>, T> {
    return new CreateRequestBuilder<CdsPostalAddressHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPostalAddressHistory` entity based on its keys.
   * @param locationId Key property. See {@link CdsPostalAddressHistory.locationId}.
   * @param validFrom Key property. See {@link CdsPostalAddressHistory.validFrom}.
   * @returns A request builder for creating requests to retrieve one `CdsPostalAddressHistory` entity based on its keys.
   */
  getByKey(
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CdsPostalAddressHistory<T>, T> {
    return new GetByKeyRequestBuilder<CdsPostalAddressHistory<T>, T>(
      this.entityApi,
      {
        LocationId: locationId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPostalAddressHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPostalAddressHistory`.
   */
  update(
    entity: CdsPostalAddressHistory<T>
  ): UpdateRequestBuilder<CdsPostalAddressHistory<T>, T> {
    return new UpdateRequestBuilder<CdsPostalAddressHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPostalAddressHistory`.
   * @param locationId Key property. See {@link CdsPostalAddressHistory.locationId}.
   * @param validFrom Key property. See {@link CdsPostalAddressHistory.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPostalAddressHistory`.
   */
  delete(
    locationId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<CdsPostalAddressHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPostalAddressHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPostalAddressHistory` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPostalAddressHistory<T>
  ): DeleteRequestBuilder<CdsPostalAddressHistory<T>, T>;
  delete(
    locationIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<CdsPostalAddressHistory<T>, T> {
    return new DeleteRequestBuilder<CdsPostalAddressHistory<T>, T>(
      this.entityApi,
      locationIdOrEntity instanceof CdsPostalAddressHistory
        ? locationIdOrEntity
        : {
            LocationId: locationIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}

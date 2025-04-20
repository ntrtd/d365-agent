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
import { CdsPostalAddressHistoryV2 } from './CdsPostalAddressHistoryV2';

/**
 * Request builder class for operations supported on the {@link CdsPostalAddressHistoryV2} entity.
 */
export class CdsPostalAddressHistoryV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPostalAddressHistoryV2<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPostalAddressHistoryV2` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPostalAddressHistoryV2` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPostalAddressHistoryV2<T>, T> {
    return new GetAllRequestBuilder<CdsPostalAddressHistoryV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPostalAddressHistoryV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPostalAddressHistoryV2`.
   */
  create(
    entity: CdsPostalAddressHistoryV2<T>
  ): CreateRequestBuilder<CdsPostalAddressHistoryV2<T>, T> {
    return new CreateRequestBuilder<CdsPostalAddressHistoryV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPostalAddressHistoryV2` entity based on its keys.
   * @param locationId Key property. See {@link CdsPostalAddressHistoryV2.locationId}.
   * @param validFrom Key property. See {@link CdsPostalAddressHistoryV2.validFrom}.
   * @returns A request builder for creating requests to retrieve one `CdsPostalAddressHistoryV2` entity based on its keys.
   */
  getByKey(
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CdsPostalAddressHistoryV2<T>, T> {
    return new GetByKeyRequestBuilder<CdsPostalAddressHistoryV2<T>, T>(
      this.entityApi,
      {
        LocationId: locationId,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPostalAddressHistoryV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPostalAddressHistoryV2`.
   */
  update(
    entity: CdsPostalAddressHistoryV2<T>
  ): UpdateRequestBuilder<CdsPostalAddressHistoryV2<T>, T> {
    return new UpdateRequestBuilder<CdsPostalAddressHistoryV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPostalAddressHistoryV2`.
   * @param locationId Key property. See {@link CdsPostalAddressHistoryV2.locationId}.
   * @param validFrom Key property. See {@link CdsPostalAddressHistoryV2.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPostalAddressHistoryV2`.
   */
  delete(
    locationId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<CdsPostalAddressHistoryV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPostalAddressHistoryV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPostalAddressHistoryV2` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPostalAddressHistoryV2<T>
  ): DeleteRequestBuilder<CdsPostalAddressHistoryV2<T>, T>;
  delete(
    locationIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<CdsPostalAddressHistoryV2<T>, T> {
    return new DeleteRequestBuilder<CdsPostalAddressHistoryV2<T>, T>(
      this.entityApi,
      locationIdOrEntity instanceof CdsPostalAddressHistoryV2
        ? locationIdOrEntity
        : {
            LocationId: locationIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}

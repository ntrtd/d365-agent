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
import { TaxRegions } from './TaxRegions';

/**
 * Request builder class for operations supported on the {@link TaxRegions} entity.
 */
export class TaxRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxRegions<T>, T> {
  /**
   * Returns a request builder for querying all `TaxRegions` entities.
   * @returns A request builder for creating requests to retrieve all `TaxRegions` entities.
   */
  getAll(): GetAllRequestBuilder<TaxRegions<T>, T> {
    return new GetAllRequestBuilder<TaxRegions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxRegions`.
   */
  create(entity: TaxRegions<T>): CreateRequestBuilder<TaxRegions<T>, T> {
    return new CreateRequestBuilder<TaxRegions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxRegions` entity based on its keys.
   * @param locationId Key property. See {@link TaxRegions.locationId}.
   * @param validFrom Key property. See {@link TaxRegions.validFrom}.
   * @returns A request builder for creating requests to retrieve one `TaxRegions` entity based on its keys.
   */
  getByKey(
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TaxRegions<T>, T> {
    return new GetByKeyRequestBuilder<TaxRegions<T>, T>(this.entityApi, {
      LocationId: locationId,
      ValidFrom: validFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxRegions`.
   */
  update(entity: TaxRegions<T>): UpdateRequestBuilder<TaxRegions<T>, T> {
    return new UpdateRequestBuilder<TaxRegions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxRegions`.
   * @param locationId Key property. See {@link TaxRegions.locationId}.
   * @param validFrom Key property. See {@link TaxRegions.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `TaxRegions`.
   */
  delete(
    locationId: string,
    validFrom: Moment
  ): DeleteRequestBuilder<TaxRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxRegions` by taking the entity as a parameter.
   */
  delete(entity: TaxRegions<T>): DeleteRequestBuilder<TaxRegions<T>, T>;
  delete(
    locationIdOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<TaxRegions<T>, T> {
    return new DeleteRequestBuilder<TaxRegions<T>, T>(
      this.entityApi,
      locationIdOrEntity instanceof TaxRegions
        ? locationIdOrEntity
        : {
            LocationId: locationIdOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}

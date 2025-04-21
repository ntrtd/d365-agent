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
import { FleetRentals } from './FleetRentals';

/**
 * Request builder class for operations supported on the {@link FleetRentals} entity.
 */
export class FleetRentalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FleetRentals<T>, T> {
  /**
   * Returns a request builder for querying all `FleetRentals` entities.
   * @returns A request builder for creating requests to retrieve all `FleetRentals` entities.
   */
  getAll(): GetAllRequestBuilder<FleetRentals<T>, T> {
    return new GetAllRequestBuilder<FleetRentals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FleetRentals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FleetRentals`.
   */
  create(entity: FleetRentals<T>): CreateRequestBuilder<FleetRentals<T>, T> {
    return new CreateRequestBuilder<FleetRentals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FleetRentals` entity based on its keys.
   * @param rentalId Key property. See {@link FleetRentals.rentalId}.
   * @returns A request builder for creating requests to retrieve one `FleetRentals` entity based on its keys.
   */
  getByKey(
    rentalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FleetRentals<T>, T> {
    return new GetByKeyRequestBuilder<FleetRentals<T>, T>(this.entityApi, {
      RentalId: rentalId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FleetRentals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FleetRentals`.
   */
  update(entity: FleetRentals<T>): UpdateRequestBuilder<FleetRentals<T>, T> {
    return new UpdateRequestBuilder<FleetRentals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FleetRentals`.
   * @param rentalId Key property. See {@link FleetRentals.rentalId}.
   * @returns A request builder for creating requests that delete an entity of type `FleetRentals`.
   */
  delete(rentalId: string): DeleteRequestBuilder<FleetRentals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FleetRentals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FleetRentals` by taking the entity as a parameter.
   */
  delete(entity: FleetRentals<T>): DeleteRequestBuilder<FleetRentals<T>, T>;
  delete(rentalIdOrEntity: any): DeleteRequestBuilder<FleetRentals<T>, T> {
    return new DeleteRequestBuilder<FleetRentals<T>, T>(
      this.entityApi,
      rentalIdOrEntity instanceof FleetRentals
        ? rentalIdOrEntity
        : { RentalId: rentalIdOrEntity! }
    );
  }
}

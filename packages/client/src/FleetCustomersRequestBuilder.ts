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
import { FleetCustomers } from './FleetCustomers';

/**
 * Request builder class for operations supported on the {@link FleetCustomers} entity.
 */
export class FleetCustomersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FleetCustomers<T>, T> {
  /**
   * Returns a request builder for querying all `FleetCustomers` entities.
   * @returns A request builder for creating requests to retrieve all `FleetCustomers` entities.
   */
  getAll(): GetAllRequestBuilder<FleetCustomers<T>, T> {
    return new GetAllRequestBuilder<FleetCustomers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FleetCustomers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FleetCustomers`.
   */
  create(
    entity: FleetCustomers<T>
  ): CreateRequestBuilder<FleetCustomers<T>, T> {
    return new CreateRequestBuilder<FleetCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FleetCustomers` entity based on its keys.
   * @param firstName Key property. See {@link FleetCustomers.firstName}.
   * @param lastName Key property. See {@link FleetCustomers.lastName}.
   * @param driverLicense Key property. See {@link FleetCustomers.driverLicense}.
   * @returns A request builder for creating requests to retrieve one `FleetCustomers` entity based on its keys.
   */
  getByKey(
    firstName: DeserializedType<T, 'Edm.String'>,
    lastName: DeserializedType<T, 'Edm.String'>,
    driverLicense: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FleetCustomers<T>, T> {
    return new GetByKeyRequestBuilder<FleetCustomers<T>, T>(this.entityApi, {
      FirstName: firstName,
      LastName: lastName,
      DriverLicense: driverLicense
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FleetCustomers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FleetCustomers`.
   */
  update(
    entity: FleetCustomers<T>
  ): UpdateRequestBuilder<FleetCustomers<T>, T> {
    return new UpdateRequestBuilder<FleetCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FleetCustomers`.
   * @param firstName Key property. See {@link FleetCustomers.firstName}.
   * @param lastName Key property. See {@link FleetCustomers.lastName}.
   * @param driverLicense Key property. See {@link FleetCustomers.driverLicense}.
   * @returns A request builder for creating requests that delete an entity of type `FleetCustomers`.
   */
  delete(
    firstName: string,
    lastName: string,
    driverLicense: string
  ): DeleteRequestBuilder<FleetCustomers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FleetCustomers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FleetCustomers` by taking the entity as a parameter.
   */
  delete(entity: FleetCustomers<T>): DeleteRequestBuilder<FleetCustomers<T>, T>;
  delete(
    firstNameOrEntity: any,
    lastName?: string,
    driverLicense?: string
  ): DeleteRequestBuilder<FleetCustomers<T>, T> {
    return new DeleteRequestBuilder<FleetCustomers<T>, T>(
      this.entityApi,
      firstNameOrEntity instanceof FleetCustomers
        ? firstNameOrEntity
        : {
            FirstName: firstNameOrEntity!,
            LastName: lastName!,
            DriverLicense: driverLicense!
          }
    );
  }
}

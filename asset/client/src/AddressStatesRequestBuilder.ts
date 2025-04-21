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
import { AddressStates } from './AddressStates';

/**
 * Request builder class for operations supported on the {@link AddressStates} entity.
 */
export class AddressStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressStates<T>, T> {
  /**
   * Returns a request builder for querying all `AddressStates` entities.
   * @returns A request builder for creating requests to retrieve all `AddressStates` entities.
   */
  getAll(): GetAllRequestBuilder<AddressStates<T>, T> {
    return new GetAllRequestBuilder<AddressStates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressStates`.
   */
  create(entity: AddressStates<T>): CreateRequestBuilder<AddressStates<T>, T> {
    return new CreateRequestBuilder<AddressStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressStates` entity based on its keys.
   * @param countryRegionId Key property. See {@link AddressStates.countryRegionId}.
   * @param state Key property. See {@link AddressStates.state}.
   * @returns A request builder for creating requests to retrieve one `AddressStates` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressStates<T>, T> {
    return new GetByKeyRequestBuilder<AddressStates<T>, T>(this.entityApi, {
      CountryRegionId: countryRegionId,
      State: state
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressStates`.
   */
  update(entity: AddressStates<T>): UpdateRequestBuilder<AddressStates<T>, T> {
    return new UpdateRequestBuilder<AddressStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressStates`.
   * @param countryRegionId Key property. See {@link AddressStates.countryRegionId}.
   * @param state Key property. See {@link AddressStates.state}.
   * @returns A request builder for creating requests that delete an entity of type `AddressStates`.
   */
  delete(
    countryRegionId: string,
    state: string
  ): DeleteRequestBuilder<AddressStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressStates` by taking the entity as a parameter.
   */
  delete(entity: AddressStates<T>): DeleteRequestBuilder<AddressStates<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    state?: string
  ): DeleteRequestBuilder<AddressStates<T>, T> {
    return new DeleteRequestBuilder<AddressStates<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof AddressStates
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            State: state!
          }
    );
  }
}

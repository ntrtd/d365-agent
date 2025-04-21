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
import { AddressCities } from './AddressCities';

/**
 * Request builder class for operations supported on the {@link AddressCities} entity.
 */
export class AddressCitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressCities<T>, T> {
  /**
   * Returns a request builder for querying all `AddressCities` entities.
   * @returns A request builder for creating requests to retrieve all `AddressCities` entities.
   */
  getAll(): GetAllRequestBuilder<AddressCities<T>, T> {
    return new GetAllRequestBuilder<AddressCities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressCities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressCities`.
   */
  create(entity: AddressCities<T>): CreateRequestBuilder<AddressCities<T>, T> {
    return new CreateRequestBuilder<AddressCities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressCities` entity based on its keys.
   * @param cityKey Key property. See {@link AddressCities.cityKey}.
   * @returns A request builder for creating requests to retrieve one `AddressCities` entity based on its keys.
   */
  getByKey(
    cityKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressCities<T>, T> {
    return new GetByKeyRequestBuilder<AddressCities<T>, T>(this.entityApi, {
      CityKey: cityKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressCities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressCities`.
   */
  update(entity: AddressCities<T>): UpdateRequestBuilder<AddressCities<T>, T> {
    return new UpdateRequestBuilder<AddressCities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressCities`.
   * @param cityKey Key property. See {@link AddressCities.cityKey}.
   * @returns A request builder for creating requests that delete an entity of type `AddressCities`.
   */
  delete(cityKey: string): DeleteRequestBuilder<AddressCities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressCities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressCities` by taking the entity as a parameter.
   */
  delete(entity: AddressCities<T>): DeleteRequestBuilder<AddressCities<T>, T>;
  delete(cityKeyOrEntity: any): DeleteRequestBuilder<AddressCities<T>, T> {
    return new DeleteRequestBuilder<AddressCities<T>, T>(
      this.entityApi,
      cityKeyOrEntity instanceof AddressCities
        ? cityKeyOrEntity
        : { CityKey: cityKeyOrEntity! }
    );
  }
}

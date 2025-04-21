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
import { AddressFormats } from './AddressFormats';

/**
 * Request builder class for operations supported on the {@link AddressFormats} entity.
 */
export class AddressFormatsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressFormats<T>, T> {
  /**
   * Returns a request builder for querying all `AddressFormats` entities.
   * @returns A request builder for creating requests to retrieve all `AddressFormats` entities.
   */
  getAll(): GetAllRequestBuilder<AddressFormats<T>, T> {
    return new GetAllRequestBuilder<AddressFormats<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressFormats` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressFormats`.
   */
  create(
    entity: AddressFormats<T>
  ): CreateRequestBuilder<AddressFormats<T>, T> {
    return new CreateRequestBuilder<AddressFormats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressFormats` entity based on its keys.
   * @param addressFormat Key property. See {@link AddressFormats.addressFormat}.
   * @returns A request builder for creating requests to retrieve one `AddressFormats` entity based on its keys.
   */
  getByKey(
    addressFormat: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressFormats<T>, T> {
    return new GetByKeyRequestBuilder<AddressFormats<T>, T>(this.entityApi, {
      AddressFormat: addressFormat
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressFormats`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressFormats`.
   */
  update(
    entity: AddressFormats<T>
  ): UpdateRequestBuilder<AddressFormats<T>, T> {
    return new UpdateRequestBuilder<AddressFormats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressFormats`.
   * @param addressFormat Key property. See {@link AddressFormats.addressFormat}.
   * @returns A request builder for creating requests that delete an entity of type `AddressFormats`.
   */
  delete(addressFormat: string): DeleteRequestBuilder<AddressFormats<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressFormats`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressFormats` by taking the entity as a parameter.
   */
  delete(entity: AddressFormats<T>): DeleteRequestBuilder<AddressFormats<T>, T>;
  delete(
    addressFormatOrEntity: any
  ): DeleteRequestBuilder<AddressFormats<T>, T> {
    return new DeleteRequestBuilder<AddressFormats<T>, T>(
      this.entityApi,
      addressFormatOrEntity instanceof AddressFormats
        ? addressFormatOrEntity
        : { AddressFormat: addressFormatOrEntity! }
    );
  }
}

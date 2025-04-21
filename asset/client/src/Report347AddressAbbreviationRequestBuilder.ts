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
import { Report347AddressAbbreviation } from './Report347AddressAbbreviation';

/**
 * Request builder class for operations supported on the {@link Report347AddressAbbreviation} entity.
 */
export class Report347AddressAbbreviationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Report347AddressAbbreviation<T>, T> {
  /**
   * Returns a request builder for querying all `Report347AddressAbbreviation` entities.
   * @returns A request builder for creating requests to retrieve all `Report347AddressAbbreviation` entities.
   */
  getAll(): GetAllRequestBuilder<Report347AddressAbbreviation<T>, T> {
    return new GetAllRequestBuilder<Report347AddressAbbreviation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Report347AddressAbbreviation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Report347AddressAbbreviation`.
   */
  create(
    entity: Report347AddressAbbreviation<T>
  ): CreateRequestBuilder<Report347AddressAbbreviation<T>, T> {
    return new CreateRequestBuilder<Report347AddressAbbreviation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Report347AddressAbbreviation` entity based on its keys.
   * @param dataAreaId Key property. See {@link Report347AddressAbbreviation.dataAreaId}.
   * @param addressAbbreviation Key property. See {@link Report347AddressAbbreviation.addressAbbreviation}.
   * @returns A request builder for creating requests to retrieve one `Report347AddressAbbreviation` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    addressAbbreviation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Report347AddressAbbreviation<T>, T> {
    return new GetByKeyRequestBuilder<Report347AddressAbbreviation<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AddressAbbreviation: addressAbbreviation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Report347AddressAbbreviation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Report347AddressAbbreviation`.
   */
  update(
    entity: Report347AddressAbbreviation<T>
  ): UpdateRequestBuilder<Report347AddressAbbreviation<T>, T> {
    return new UpdateRequestBuilder<Report347AddressAbbreviation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Report347AddressAbbreviation`.
   * @param dataAreaId Key property. See {@link Report347AddressAbbreviation.dataAreaId}.
   * @param addressAbbreviation Key property. See {@link Report347AddressAbbreviation.addressAbbreviation}.
   * @returns A request builder for creating requests that delete an entity of type `Report347AddressAbbreviation`.
   */
  delete(
    dataAreaId: string,
    addressAbbreviation: string
  ): DeleteRequestBuilder<Report347AddressAbbreviation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Report347AddressAbbreviation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Report347AddressAbbreviation` by taking the entity as a parameter.
   */
  delete(
    entity: Report347AddressAbbreviation<T>
  ): DeleteRequestBuilder<Report347AddressAbbreviation<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    addressAbbreviation?: string
  ): DeleteRequestBuilder<Report347AddressAbbreviation<T>, T> {
    return new DeleteRequestBuilder<Report347AddressAbbreviation<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Report347AddressAbbreviation
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AddressAbbreviation: addressAbbreviation!
          }
    );
  }
}

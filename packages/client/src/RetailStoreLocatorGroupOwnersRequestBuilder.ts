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
import { RetailStoreLocatorGroupOwners } from './RetailStoreLocatorGroupOwners';

/**
 * Request builder class for operations supported on the {@link RetailStoreLocatorGroupOwners} entity.
 */
export class RetailStoreLocatorGroupOwnersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreLocatorGroupOwners<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreLocatorGroupOwners` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreLocatorGroupOwners` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreLocatorGroupOwners<T>, T> {
    return new GetAllRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreLocatorGroupOwners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreLocatorGroupOwners`.
   */
  create(
    entity: RetailStoreLocatorGroupOwners<T>
  ): CreateRequestBuilder<RetailStoreLocatorGroupOwners<T>, T> {
    return new CreateRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreLocatorGroupOwners` entity based on its keys.
   * @param storeLocatorGroupName Key property. See {@link RetailStoreLocatorGroupOwners.storeLocatorGroupName}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreLocatorGroupOwners.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreLocatorGroupOwners` entity based on its keys.
   */
  getByKey(
    storeLocatorGroupName: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreLocatorGroupOwners<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>(
      this.entityApi,
      {
        StoreLocatorGroupName: storeLocatorGroupName,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreLocatorGroupOwners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreLocatorGroupOwners`.
   */
  update(
    entity: RetailStoreLocatorGroupOwners<T>
  ): UpdateRequestBuilder<RetailStoreLocatorGroupOwners<T>, T> {
    return new UpdateRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreLocatorGroupOwners`.
   * @param storeLocatorGroupName Key property. See {@link RetailStoreLocatorGroupOwners.storeLocatorGroupName}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreLocatorGroupOwners.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreLocatorGroupOwners`.
   */
  delete(
    storeLocatorGroupName: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreLocatorGroupOwners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreLocatorGroupOwners` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreLocatorGroupOwners<T>
  ): DeleteRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>;
  delete(
    storeLocatorGroupNameOrEntity: any,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailStoreLocatorGroupOwners<T>, T> {
    return new DeleteRequestBuilder<RetailStoreLocatorGroupOwners<T>, T>(
      this.entityApi,
      storeLocatorGroupNameOrEntity instanceof RetailStoreLocatorGroupOwners
        ? storeLocatorGroupNameOrEntity
        : {
            StoreLocatorGroupName: storeLocatorGroupNameOrEntity!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}

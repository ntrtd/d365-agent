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
import { RetailStoreLocatorGroupMembers } from './RetailStoreLocatorGroupMembers';

/**
 * Request builder class for operations supported on the {@link RetailStoreLocatorGroupMembers} entity.
 */
export class RetailStoreLocatorGroupMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreLocatorGroupMembers<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreLocatorGroupMembers` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreLocatorGroupMembers` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreLocatorGroupMembers<T>, T> {
    return new GetAllRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreLocatorGroupMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreLocatorGroupMembers`.
   */
  create(
    entity: RetailStoreLocatorGroupMembers<T>
  ): CreateRequestBuilder<RetailStoreLocatorGroupMembers<T>, T> {
    return new CreateRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreLocatorGroupMembers` entity based on its keys.
   * @param storeLocatorGroupName Key property. See {@link RetailStoreLocatorGroupMembers.storeLocatorGroupName}.
   * @param inventLocationId Key property. See {@link RetailStoreLocatorGroupMembers.inventLocationId}.
   * @param inventLocationDataAreaId Key property. See {@link RetailStoreLocatorGroupMembers.inventLocationDataAreaId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreLocatorGroupMembers.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreLocatorGroupMembers` entity based on its keys.
   */
  getByKey(
    storeLocatorGroupName: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>,
    inventLocationDataAreaId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreLocatorGroupMembers<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>(
      this.entityApi,
      {
        StoreLocatorGroupName: storeLocatorGroupName,
        InventLocationId: inventLocationId,
        InventLocationDataAreaId: inventLocationDataAreaId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreLocatorGroupMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreLocatorGroupMembers`.
   */
  update(
    entity: RetailStoreLocatorGroupMembers<T>
  ): UpdateRequestBuilder<RetailStoreLocatorGroupMembers<T>, T> {
    return new UpdateRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreLocatorGroupMembers`.
   * @param storeLocatorGroupName Key property. See {@link RetailStoreLocatorGroupMembers.storeLocatorGroupName}.
   * @param inventLocationId Key property. See {@link RetailStoreLocatorGroupMembers.inventLocationId}.
   * @param inventLocationDataAreaId Key property. See {@link RetailStoreLocatorGroupMembers.inventLocationDataAreaId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreLocatorGroupMembers.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreLocatorGroupMembers`.
   */
  delete(
    storeLocatorGroupName: string,
    inventLocationId: string,
    inventLocationDataAreaId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreLocatorGroupMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreLocatorGroupMembers` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreLocatorGroupMembers<T>
  ): DeleteRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>;
  delete(
    storeLocatorGroupNameOrEntity: any,
    inventLocationId?: string,
    inventLocationDataAreaId?: string,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailStoreLocatorGroupMembers<T>, T> {
    return new DeleteRequestBuilder<RetailStoreLocatorGroupMembers<T>, T>(
      this.entityApi,
      storeLocatorGroupNameOrEntity instanceof RetailStoreLocatorGroupMembers
        ? storeLocatorGroupNameOrEntity
        : {
            StoreLocatorGroupName: storeLocatorGroupNameOrEntity!,
            InventLocationId: inventLocationId!,
            InventLocationDataAreaId: inventLocationDataAreaId!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}

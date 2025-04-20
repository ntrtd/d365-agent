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
import { StoreShelves } from './StoreShelves';

/**
 * Request builder class for operations supported on the {@link StoreShelves} entity.
 */
export class StoreShelvesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StoreShelves<T>, T> {
  /**
   * Returns a request builder for querying all `StoreShelves` entities.
   * @returns A request builder for creating requests to retrieve all `StoreShelves` entities.
   */
  getAll(): GetAllRequestBuilder<StoreShelves<T>, T> {
    return new GetAllRequestBuilder<StoreShelves<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StoreShelves` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StoreShelves`.
   */
  create(entity: StoreShelves<T>): CreateRequestBuilder<StoreShelves<T>, T> {
    return new CreateRequestBuilder<StoreShelves<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `StoreShelves` entity based on its keys.
   * @param dataAreaId Key property. See {@link StoreShelves.dataAreaId}.
   * @param storeNumber Key property. See {@link StoreShelves.storeNumber}.
   * @param sectionNumber Key property. See {@link StoreShelves.sectionNumber}.
   * @param shelfNumber Key property. See {@link StoreShelves.shelfNumber}.
   * @returns A request builder for creating requests to retrieve one `StoreShelves` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    sectionNumber: DeserializedType<T, 'Edm.String'>,
    shelfNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StoreShelves<T>, T> {
    return new GetByKeyRequestBuilder<StoreShelves<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreNumber: storeNumber,
      SectionNumber: sectionNumber,
      ShelfNumber: shelfNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StoreShelves`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StoreShelves`.
   */
  update(entity: StoreShelves<T>): UpdateRequestBuilder<StoreShelves<T>, T> {
    return new UpdateRequestBuilder<StoreShelves<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `StoreShelves`.
   * @param dataAreaId Key property. See {@link StoreShelves.dataAreaId}.
   * @param storeNumber Key property. See {@link StoreShelves.storeNumber}.
   * @param sectionNumber Key property. See {@link StoreShelves.sectionNumber}.
   * @param shelfNumber Key property. See {@link StoreShelves.shelfNumber}.
   * @returns A request builder for creating requests that delete an entity of type `StoreShelves`.
   */
  delete(
    dataAreaId: string,
    storeNumber: string,
    sectionNumber: string,
    shelfNumber: string
  ): DeleteRequestBuilder<StoreShelves<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StoreShelves`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StoreShelves` by taking the entity as a parameter.
   */
  delete(entity: StoreShelves<T>): DeleteRequestBuilder<StoreShelves<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeNumber?: string,
    sectionNumber?: string,
    shelfNumber?: string
  ): DeleteRequestBuilder<StoreShelves<T>, T> {
    return new DeleteRequestBuilder<StoreShelves<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StoreShelves
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreNumber: storeNumber!,
            SectionNumber: sectionNumber!,
            ShelfNumber: shelfNumber!
          }
    );
  }
}

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
import { RetailStoreSections2 } from './RetailStoreSections2';

/**
 * Request builder class for operations supported on the {@link RetailStoreSections2} entity.
 */
export class RetailStoreSections2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreSections2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreSections2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreSections2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreSections2<T>, T> {
    return new GetAllRequestBuilder<RetailStoreSections2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailStoreSections2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreSections2`.
   */
  create(
    entity: RetailStoreSections2<T>
  ): CreateRequestBuilder<RetailStoreSections2<T>, T> {
    return new CreateRequestBuilder<RetailStoreSections2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreSections2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreSections2.dataAreaId}.
   * @param sectionId Key property. See {@link RetailStoreSections2.sectionId}.
   * @param storeNumber Key property. See {@link RetailStoreSections2.storeNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreSections2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sectionId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreSections2<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreSections2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SectionId: sectionId,
        StoreNumber: storeNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreSections2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreSections2`.
   */
  update(
    entity: RetailStoreSections2<T>
  ): UpdateRequestBuilder<RetailStoreSections2<T>, T> {
    return new UpdateRequestBuilder<RetailStoreSections2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreSections2`.
   * @param dataAreaId Key property. See {@link RetailStoreSections2.dataAreaId}.
   * @param sectionId Key property. See {@link RetailStoreSections2.sectionId}.
   * @param storeNumber Key property. See {@link RetailStoreSections2.storeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreSections2`.
   */
  delete(
    dataAreaId: string,
    sectionId: string,
    storeNumber: string
  ): DeleteRequestBuilder<RetailStoreSections2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreSections2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreSections2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreSections2<T>
  ): DeleteRequestBuilder<RetailStoreSections2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sectionId?: string,
    storeNumber?: string
  ): DeleteRequestBuilder<RetailStoreSections2<T>, T> {
    return new DeleteRequestBuilder<RetailStoreSections2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreSections2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SectionId: sectionId!,
            StoreNumber: storeNumber!
          }
    );
  }
}

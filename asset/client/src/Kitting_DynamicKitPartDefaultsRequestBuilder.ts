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
import { Kitting_DynamicKitPartDefaults } from './Kitting_DynamicKitPartDefaults';

/**
 * Request builder class for operations supported on the {@link Kitting_DynamicKitPartDefaults} entity.
 */
export class Kitting_DynamicKitPartDefaultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_DynamicKitPartDefaults<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_DynamicKitPartDefaults` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_DynamicKitPartDefaults` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T> {
    return new GetAllRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Kitting_DynamicKitPartDefaults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_DynamicKitPartDefaults`.
   */
  create(
    entity: Kitting_DynamicKitPartDefaults<T>
  ): CreateRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T> {
    return new CreateRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_DynamicKitPartDefaults` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_DynamicKitPartDefaults.dataAreaId}.
   * @param dynamicKitId Key property. See {@link Kitting_DynamicKitPartDefaults.dynamicKitId}.
   * @param dynamicPartGroup Key property. See {@link Kitting_DynamicKitPartDefaults.dynamicPartGroup}.
   * @param itemNumber Key property. See {@link Kitting_DynamicKitPartDefaults.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `Kitting_DynamicKitPartDefaults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dynamicKitId: DeserializedType<T, 'Edm.String'>,
    dynamicPartGroup: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DynamicKitId: dynamicKitId,
        DynamicPartGroup: dynamicPartGroup,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_DynamicKitPartDefaults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_DynamicKitPartDefaults`.
   */
  update(
    entity: Kitting_DynamicKitPartDefaults<T>
  ): UpdateRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T> {
    return new UpdateRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_DynamicKitPartDefaults`.
   * @param dataAreaId Key property. See {@link Kitting_DynamicKitPartDefaults.dataAreaId}.
   * @param dynamicKitId Key property. See {@link Kitting_DynamicKitPartDefaults.dynamicKitId}.
   * @param dynamicPartGroup Key property. See {@link Kitting_DynamicKitPartDefaults.dynamicPartGroup}.
   * @param itemNumber Key property. See {@link Kitting_DynamicKitPartDefaults.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_DynamicKitPartDefaults`.
   */
  delete(
    dataAreaId: string,
    dynamicKitId: string,
    dynamicPartGroup: string,
    itemNumber: string
  ): DeleteRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_DynamicKitPartDefaults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_DynamicKitPartDefaults` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_DynamicKitPartDefaults<T>
  ): DeleteRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dynamicKitId?: string,
    dynamicPartGroup?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T> {
    return new DeleteRequestBuilder<Kitting_DynamicKitPartDefaults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_DynamicKitPartDefaults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DynamicKitId: dynamicKitId!,
            DynamicPartGroup: dynamicPartGroup!,
            ItemNumber: itemNumber!
          }
    );
  }
}

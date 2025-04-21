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
import { KittingDynPartGroupItems } from './KittingDynPartGroupItems';

/**
 * Request builder class for operations supported on the {@link KittingDynPartGroupItems} entity.
 */
export class KittingDynPartGroupItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KittingDynPartGroupItems<T>, T> {
  /**
   * Returns a request builder for querying all `KittingDynPartGroupItems` entities.
   * @returns A request builder for creating requests to retrieve all `KittingDynPartGroupItems` entities.
   */
  getAll(): GetAllRequestBuilder<KittingDynPartGroupItems<T>, T> {
    return new GetAllRequestBuilder<KittingDynPartGroupItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `KittingDynPartGroupItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KittingDynPartGroupItems`.
   */
  create(
    entity: KittingDynPartGroupItems<T>
  ): CreateRequestBuilder<KittingDynPartGroupItems<T>, T> {
    return new CreateRequestBuilder<KittingDynPartGroupItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KittingDynPartGroupItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link KittingDynPartGroupItems.dataAreaId}.
   * @param dynamicPartGroup Key property. See {@link KittingDynPartGroupItems.dynamicPartGroup}.
   * @param itemNumber Key property. See {@link KittingDynPartGroupItems.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `KittingDynPartGroupItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dynamicPartGroup: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KittingDynPartGroupItems<T>, T> {
    return new GetByKeyRequestBuilder<KittingDynPartGroupItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DynamicPartGroup: dynamicPartGroup,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KittingDynPartGroupItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KittingDynPartGroupItems`.
   */
  update(
    entity: KittingDynPartGroupItems<T>
  ): UpdateRequestBuilder<KittingDynPartGroupItems<T>, T> {
    return new UpdateRequestBuilder<KittingDynPartGroupItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KittingDynPartGroupItems`.
   * @param dataAreaId Key property. See {@link KittingDynPartGroupItems.dataAreaId}.
   * @param dynamicPartGroup Key property. See {@link KittingDynPartGroupItems.dynamicPartGroup}.
   * @param itemNumber Key property. See {@link KittingDynPartGroupItems.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `KittingDynPartGroupItems`.
   */
  delete(
    dataAreaId: string,
    dynamicPartGroup: string,
    itemNumber: string
  ): DeleteRequestBuilder<KittingDynPartGroupItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KittingDynPartGroupItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KittingDynPartGroupItems` by taking the entity as a parameter.
   */
  delete(
    entity: KittingDynPartGroupItems<T>
  ): DeleteRequestBuilder<KittingDynPartGroupItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dynamicPartGroup?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<KittingDynPartGroupItems<T>, T> {
    return new DeleteRequestBuilder<KittingDynPartGroupItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof KittingDynPartGroupItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DynamicPartGroup: dynamicPartGroup!,
            ItemNumber: itemNumber!
          }
    );
  }
}

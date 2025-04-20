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
import { EmItemsAdditionalFields } from './EmItemsAdditionalFields';

/**
 * Request builder class for operations supported on the {@link EmItemsAdditionalFields} entity.
 */
export class EmItemsAdditionalFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmItemsAdditionalFields<T>, T> {
  /**
   * Returns a request builder for querying all `EmItemsAdditionalFields` entities.
   * @returns A request builder for creating requests to retrieve all `EmItemsAdditionalFields` entities.
   */
  getAll(): GetAllRequestBuilder<EmItemsAdditionalFields<T>, T> {
    return new GetAllRequestBuilder<EmItemsAdditionalFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmItemsAdditionalFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmItemsAdditionalFields`.
   */
  create(
    entity: EmItemsAdditionalFields<T>
  ): CreateRequestBuilder<EmItemsAdditionalFields<T>, T> {
    return new CreateRequestBuilder<EmItemsAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmItemsAdditionalFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmItemsAdditionalFields.dataAreaId}.
   * @param itemId Key property. See {@link EmItemsAdditionalFields.itemId}.
   * @param itemType Key property. See {@link EmItemsAdditionalFields.itemType}.
   * @param processingId Key property. See {@link EmItemsAdditionalFields.processingId}.
   * @param additionalFieldId Key property. See {@link EmItemsAdditionalFields.additionalFieldId}.
   * @returns A request builder for creating requests to retrieve one `EmItemsAdditionalFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemType: DeserializedType<T, 'Edm.String'>,
    processingId: DeserializedType<T, 'Edm.String'>,
    additionalFieldId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmItemsAdditionalFields<T>, T> {
    return new GetByKeyRequestBuilder<EmItemsAdditionalFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        ItemType: itemType,
        ProcessingId: processingId,
        AdditionalFieldId: additionalFieldId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmItemsAdditionalFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmItemsAdditionalFields`.
   */
  update(
    entity: EmItemsAdditionalFields<T>
  ): UpdateRequestBuilder<EmItemsAdditionalFields<T>, T> {
    return new UpdateRequestBuilder<EmItemsAdditionalFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmItemsAdditionalFields`.
   * @param dataAreaId Key property. See {@link EmItemsAdditionalFields.dataAreaId}.
   * @param itemId Key property. See {@link EmItemsAdditionalFields.itemId}.
   * @param itemType Key property. See {@link EmItemsAdditionalFields.itemType}.
   * @param processingId Key property. See {@link EmItemsAdditionalFields.processingId}.
   * @param additionalFieldId Key property. See {@link EmItemsAdditionalFields.additionalFieldId}.
   * @returns A request builder for creating requests that delete an entity of type `EmItemsAdditionalFields`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    itemType: string,
    processingId: string,
    additionalFieldId: string
  ): DeleteRequestBuilder<EmItemsAdditionalFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmItemsAdditionalFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmItemsAdditionalFields` by taking the entity as a parameter.
   */
  delete(
    entity: EmItemsAdditionalFields<T>
  ): DeleteRequestBuilder<EmItemsAdditionalFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    itemType?: string,
    processingId?: string,
    additionalFieldId?: string
  ): DeleteRequestBuilder<EmItemsAdditionalFields<T>, T> {
    return new DeleteRequestBuilder<EmItemsAdditionalFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmItemsAdditionalFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ItemType: itemType!,
            ProcessingId: processingId!,
            AdditionalFieldId: additionalFieldId!
          }
    );
  }
}

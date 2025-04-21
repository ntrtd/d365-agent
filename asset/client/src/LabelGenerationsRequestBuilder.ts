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
import { LabelGenerations } from './LabelGenerations';

/**
 * Request builder class for operations supported on the {@link LabelGenerations} entity.
 */
export class LabelGenerationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LabelGenerations<T>, T> {
  /**
   * Returns a request builder for querying all `LabelGenerations` entities.
   * @returns A request builder for creating requests to retrieve all `LabelGenerations` entities.
   */
  getAll(): GetAllRequestBuilder<LabelGenerations<T>, T> {
    return new GetAllRequestBuilder<LabelGenerations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LabelGenerations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LabelGenerations`.
   */
  create(
    entity: LabelGenerations<T>
  ): CreateRequestBuilder<LabelGenerations<T>, T> {
    return new CreateRequestBuilder<LabelGenerations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LabelGenerations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LabelGenerations.dataAreaId}.
   * @param itemId Key property. See {@link LabelGenerations.itemId}.
   * @returns A request builder for creating requests to retrieve one `LabelGenerations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LabelGenerations<T>, T> {
    return new GetByKeyRequestBuilder<LabelGenerations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemId: itemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LabelGenerations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LabelGenerations`.
   */
  update(
    entity: LabelGenerations<T>
  ): UpdateRequestBuilder<LabelGenerations<T>, T> {
    return new UpdateRequestBuilder<LabelGenerations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LabelGenerations`.
   * @param dataAreaId Key property. See {@link LabelGenerations.dataAreaId}.
   * @param itemId Key property. See {@link LabelGenerations.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `LabelGenerations`.
   */
  delete(
    dataAreaId: string,
    itemId: string
  ): DeleteRequestBuilder<LabelGenerations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LabelGenerations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LabelGenerations` by taking the entity as a parameter.
   */
  delete(
    entity: LabelGenerations<T>
  ): DeleteRequestBuilder<LabelGenerations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string
  ): DeleteRequestBuilder<LabelGenerations<T>, T> {
    return new DeleteRequestBuilder<LabelGenerations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LabelGenerations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!
          }
    );
  }
}

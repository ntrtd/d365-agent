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
import { ProdComSetups } from './ProdComSetups';

/**
 * Request builder class for operations supported on the {@link ProdComSetups} entity.
 */
export class ProdComSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProdComSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ProdComSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ProdComSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ProdComSetups<T>, T> {
    return new GetAllRequestBuilder<ProdComSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProdComSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProdComSetups`.
   */
  create(entity: ProdComSetups<T>): CreateRequestBuilder<ProdComSetups<T>, T> {
    return new CreateRequestBuilder<ProdComSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProdComSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProdComSetups.dataAreaId}.
   * @param itemNumber Key property. See {@link ProdComSetups.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ProdComSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProdComSetups<T>, T> {
    return new GetByKeyRequestBuilder<ProdComSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProdComSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProdComSetups`.
   */
  update(entity: ProdComSetups<T>): UpdateRequestBuilder<ProdComSetups<T>, T> {
    return new UpdateRequestBuilder<ProdComSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProdComSetups`.
   * @param dataAreaId Key property. See {@link ProdComSetups.dataAreaId}.
   * @param itemNumber Key property. See {@link ProdComSetups.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProdComSetups`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<ProdComSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProdComSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProdComSetups` by taking the entity as a parameter.
   */
  delete(entity: ProdComSetups<T>): DeleteRequestBuilder<ProdComSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<ProdComSetups<T>, T> {
    return new DeleteRequestBuilder<ProdComSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProdComSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}

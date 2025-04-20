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
import { InventoryOnHandMobileEntries } from './InventoryOnHandMobileEntries';

/**
 * Request builder class for operations supported on the {@link InventoryOnHandMobileEntries} entity.
 */
export class InventoryOnHandMobileEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryOnHandMobileEntries<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryOnHandMobileEntries` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOnHandMobileEntries` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryOnHandMobileEntries<T>, T> {
    return new GetAllRequestBuilder<InventoryOnHandMobileEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryOnHandMobileEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOnHandMobileEntries`.
   */
  create(
    entity: InventoryOnHandMobileEntries<T>
  ): CreateRequestBuilder<InventoryOnHandMobileEntries<T>, T> {
    return new CreateRequestBuilder<InventoryOnHandMobileEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryOnHandMobileEntries` entity based on its keys.
   * @param productNumber Key property. See {@link InventoryOnHandMobileEntries.productNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryOnHandMobileEntries` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryOnHandMobileEntries<T>, T> {
    return new GetByKeyRequestBuilder<InventoryOnHandMobileEntries<T>, T>(
      this.entityApi,
      { ProductNumber: productNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOnHandMobileEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOnHandMobileEntries`.
   */
  update(
    entity: InventoryOnHandMobileEntries<T>
  ): UpdateRequestBuilder<InventoryOnHandMobileEntries<T>, T> {
    return new UpdateRequestBuilder<InventoryOnHandMobileEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandMobileEntries`.
   * @param productNumber Key property. See {@link InventoryOnHandMobileEntries.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandMobileEntries`.
   */
  delete(
    productNumber: string
  ): DeleteRequestBuilder<InventoryOnHandMobileEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandMobileEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandMobileEntries` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryOnHandMobileEntries<T>
  ): DeleteRequestBuilder<InventoryOnHandMobileEntries<T>, T>;
  delete(
    productNumberOrEntity: any
  ): DeleteRequestBuilder<InventoryOnHandMobileEntries<T>, T> {
    return new DeleteRequestBuilder<InventoryOnHandMobileEntries<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof InventoryOnHandMobileEntries
        ? productNumberOrEntity
        : { ProductNumber: productNumberOrEntity! }
    );
  }
}

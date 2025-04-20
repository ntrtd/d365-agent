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
import { ExpMobileItemTaxes } from './ExpMobileItemTaxes';

/**
 * Request builder class for operations supported on the {@link ExpMobileItemTaxes} entity.
 */
export class ExpMobileItemTaxesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileItemTaxes<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileItemTaxes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileItemTaxes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileItemTaxes<T>, T> {
    return new GetAllRequestBuilder<ExpMobileItemTaxes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpMobileItemTaxes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileItemTaxes`.
   */
  create(
    entity: ExpMobileItemTaxes<T>
  ): CreateRequestBuilder<ExpMobileItemTaxes<T>, T> {
    return new CreateRequestBuilder<ExpMobileItemTaxes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileItemTaxes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpMobileItemTaxes.dataAreaId}.
   * @param itemSalesTaxGroup Key property. See {@link ExpMobileItemTaxes.itemSalesTaxGroup}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileItemTaxes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemSalesTaxGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileItemTaxes<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileItemTaxes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemSalesTaxGroup: itemSalesTaxGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileItemTaxes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileItemTaxes`.
   */
  update(
    entity: ExpMobileItemTaxes<T>
  ): UpdateRequestBuilder<ExpMobileItemTaxes<T>, T> {
    return new UpdateRequestBuilder<ExpMobileItemTaxes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileItemTaxes`.
   * @param dataAreaId Key property. See {@link ExpMobileItemTaxes.dataAreaId}.
   * @param itemSalesTaxGroup Key property. See {@link ExpMobileItemTaxes.itemSalesTaxGroup}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileItemTaxes`.
   */
  delete(
    dataAreaId: string,
    itemSalesTaxGroup: string
  ): DeleteRequestBuilder<ExpMobileItemTaxes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileItemTaxes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileItemTaxes` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileItemTaxes<T>
  ): DeleteRequestBuilder<ExpMobileItemTaxes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemSalesTaxGroup?: string
  ): DeleteRequestBuilder<ExpMobileItemTaxes<T>, T> {
    return new DeleteRequestBuilder<ExpMobileItemTaxes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpMobileItemTaxes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemSalesTaxGroup: itemSalesTaxGroup!
          }
    );
  }
}

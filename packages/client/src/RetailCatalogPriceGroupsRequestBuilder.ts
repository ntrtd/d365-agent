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
import { RetailCatalogPriceGroups } from './RetailCatalogPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailCatalogPriceGroups} entity.
 */
export class RetailCatalogPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCatalogPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogPriceGroups`.
   */
  create(
    entity: RetailCatalogPriceGroups<T>
  ): CreateRequestBuilder<RetailCatalogPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailCatalogPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogPriceGroups` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogPriceGroups.catalogNumber}.
   * @param priceGroupLegalEntity Key property. See {@link RetailCatalogPriceGroups.priceGroupLegalEntity}.
   * @param priceGroupId Key property. See {@link RetailCatalogPriceGroups.priceGroupId}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogPriceGroups` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    priceGroupLegalEntity: DeserializedType<T, 'Edm.String'>,
    priceGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailCatalogPriceGroups<T>, T>(
      this.entityApi,
      {
        CatalogNumber: catalogNumber,
        PriceGroupLegalEntity: priceGroupLegalEntity,
        PriceGroupId: priceGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogPriceGroups`.
   */
  update(
    entity: RetailCatalogPriceGroups<T>
  ): UpdateRequestBuilder<RetailCatalogPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogPriceGroups`.
   * @param catalogNumber Key property. See {@link RetailCatalogPriceGroups.catalogNumber}.
   * @param priceGroupLegalEntity Key property. See {@link RetailCatalogPriceGroups.priceGroupLegalEntity}.
   * @param priceGroupId Key property. See {@link RetailCatalogPriceGroups.priceGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogPriceGroups`.
   */
  delete(
    catalogNumber: string,
    priceGroupLegalEntity: string,
    priceGroupId: string
  ): DeleteRequestBuilder<RetailCatalogPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogPriceGroups<T>
  ): DeleteRequestBuilder<RetailCatalogPriceGroups<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    priceGroupLegalEntity?: string,
    priceGroupId?: string
  ): DeleteRequestBuilder<RetailCatalogPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogPriceGroups<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogPriceGroups
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            PriceGroupLegalEntity: priceGroupLegalEntity!,
            PriceGroupId: priceGroupId!
          }
    );
  }
}

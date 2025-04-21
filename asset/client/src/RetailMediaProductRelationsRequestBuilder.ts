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
import { RetailMediaProductRelations } from './RetailMediaProductRelations';

/**
 * Request builder class for operations supported on the {@link RetailMediaProductRelations} entity.
 */
export class RetailMediaProductRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailMediaProductRelations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailMediaProductRelations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailMediaProductRelations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailMediaProductRelations<T>, T> {
    return new GetAllRequestBuilder<RetailMediaProductRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailMediaProductRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailMediaProductRelations`.
   */
  create(
    entity: RetailMediaProductRelations<T>
  ): CreateRequestBuilder<RetailMediaProductRelations<T>, T> {
    return new CreateRequestBuilder<RetailMediaProductRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailMediaProductRelations` entity based on its keys.
   * @param resourceId Key property. See {@link RetailMediaProductRelations.resourceId}.
   * @param productNumber Key property. See {@link RetailMediaProductRelations.productNumber}.
   * @param catalogId Key property. See {@link RetailMediaProductRelations.catalogId}.
   * @param internalOrganizationPartyNumber Key property. See {@link RetailMediaProductRelations.internalOrganizationPartyNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailMediaProductRelations` entity based on its keys.
   */
  getByKey(
    resourceId: DeserializedType<T, 'Edm.Int32'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    catalogId: DeserializedType<T, 'Edm.String'>,
    internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailMediaProductRelations<T>, T> {
    return new GetByKeyRequestBuilder<RetailMediaProductRelations<T>, T>(
      this.entityApi,
      {
        ResourceId: resourceId,
        ProductNumber: productNumber,
        CatalogId: catalogId,
        InternalOrganizationPartyNumber: internalOrganizationPartyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailMediaProductRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailMediaProductRelations`.
   */
  update(
    entity: RetailMediaProductRelations<T>
  ): UpdateRequestBuilder<RetailMediaProductRelations<T>, T> {
    return new UpdateRequestBuilder<RetailMediaProductRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailMediaProductRelations`.
   * @param resourceId Key property. See {@link RetailMediaProductRelations.resourceId}.
   * @param productNumber Key property. See {@link RetailMediaProductRelations.productNumber}.
   * @param catalogId Key property. See {@link RetailMediaProductRelations.catalogId}.
   * @param internalOrganizationPartyNumber Key property. See {@link RetailMediaProductRelations.internalOrganizationPartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailMediaProductRelations`.
   */
  delete(
    resourceId: number,
    productNumber: string,
    catalogId: string,
    internalOrganizationPartyNumber: string
  ): DeleteRequestBuilder<RetailMediaProductRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailMediaProductRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailMediaProductRelations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailMediaProductRelations<T>
  ): DeleteRequestBuilder<RetailMediaProductRelations<T>, T>;
  delete(
    resourceIdOrEntity: any,
    productNumber?: string,
    catalogId?: string,
    internalOrganizationPartyNumber?: string
  ): DeleteRequestBuilder<RetailMediaProductRelations<T>, T> {
    return new DeleteRequestBuilder<RetailMediaProductRelations<T>, T>(
      this.entityApi,
      resourceIdOrEntity instanceof RetailMediaProductRelations
        ? resourceIdOrEntity
        : {
            ResourceId: resourceIdOrEntity!,
            ProductNumber: productNumber!,
            CatalogId: catalogId!,
            InternalOrganizationPartyNumber: internalOrganizationPartyNumber!
          }
    );
  }
}

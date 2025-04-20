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
import { RetailCatalogInternalOrganizations } from './RetailCatalogInternalOrganizations';

/**
 * Request builder class for operations supported on the {@link RetailCatalogInternalOrganizations} entity.
 */
export class RetailCatalogInternalOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogInternalOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogInternalOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogInternalOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogInternalOrganizations<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogInternalOrganizations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCatalogInternalOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogInternalOrganizations`.
   */
  create(
    entity: RetailCatalogInternalOrganizations<T>
  ): CreateRequestBuilder<RetailCatalogInternalOrganizations<T>, T> {
    return new CreateRequestBuilder<RetailCatalogInternalOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogInternalOrganizations` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogInternalOrganizations.catalogNumber}.
   * @param partyNumber Key property. See {@link RetailCatalogInternalOrganizations.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogInternalOrganizations` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogInternalOrganizations<T>, T> {
    return new GetByKeyRequestBuilder<RetailCatalogInternalOrganizations<T>, T>(
      this.entityApi,
      {
        CatalogNumber: catalogNumber,
        PartyNumber: partyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogInternalOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogInternalOrganizations`.
   */
  update(
    entity: RetailCatalogInternalOrganizations<T>
  ): UpdateRequestBuilder<RetailCatalogInternalOrganizations<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogInternalOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogInternalOrganizations`.
   * @param catalogNumber Key property. See {@link RetailCatalogInternalOrganizations.catalogNumber}.
   * @param partyNumber Key property. See {@link RetailCatalogInternalOrganizations.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogInternalOrganizations`.
   */
  delete(
    catalogNumber: string,
    partyNumber: string
  ): DeleteRequestBuilder<RetailCatalogInternalOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogInternalOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogInternalOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogInternalOrganizations<T>
  ): DeleteRequestBuilder<RetailCatalogInternalOrganizations<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    partyNumber?: string
  ): DeleteRequestBuilder<RetailCatalogInternalOrganizations<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogInternalOrganizations<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogInternalOrganizations
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            PartyNumber: partyNumber!
          }
    );
  }
}

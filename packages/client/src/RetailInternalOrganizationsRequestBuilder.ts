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
import { RetailInternalOrganizations } from './RetailInternalOrganizations';

/**
 * Request builder class for operations supported on the {@link RetailInternalOrganizations} entity.
 */
export class RetailInternalOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInternalOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInternalOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInternalOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInternalOrganizations<T>, T> {
    return new GetAllRequestBuilder<RetailInternalOrganizations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInternalOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInternalOrganizations`.
   */
  create(
    entity: RetailInternalOrganizations<T>
  ): CreateRequestBuilder<RetailInternalOrganizations<T>, T> {
    return new CreateRequestBuilder<RetailInternalOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInternalOrganizations` entity based on its keys.
   * @param partyNumber Key property. See {@link RetailInternalOrganizations.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailInternalOrganizations` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInternalOrganizations<T>, T> {
    return new GetByKeyRequestBuilder<RetailInternalOrganizations<T>, T>(
      this.entityApi,
      { PartyNumber: partyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInternalOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInternalOrganizations`.
   */
  update(
    entity: RetailInternalOrganizations<T>
  ): UpdateRequestBuilder<RetailInternalOrganizations<T>, T> {
    return new UpdateRequestBuilder<RetailInternalOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizations`.
   * @param partyNumber Key property. See {@link RetailInternalOrganizations.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizations`.
   */
  delete(
    partyNumber: string
  ): DeleteRequestBuilder<RetailInternalOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInternalOrganizations<T>
  ): DeleteRequestBuilder<RetailInternalOrganizations<T>, T>;
  delete(
    partyNumberOrEntity: any
  ): DeleteRequestBuilder<RetailInternalOrganizations<T>, T> {
    return new DeleteRequestBuilder<RetailInternalOrganizations<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof RetailInternalOrganizations
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}

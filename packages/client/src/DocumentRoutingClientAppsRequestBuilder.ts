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
import { DocumentRoutingClientApps } from './DocumentRoutingClientApps';

/**
 * Request builder class for operations supported on the {@link DocumentRoutingClientApps} entity.
 */
export class DocumentRoutingClientAppsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentRoutingClientApps<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentRoutingClientApps` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentRoutingClientApps` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentRoutingClientApps<T>, T> {
    return new GetAllRequestBuilder<DocumentRoutingClientApps<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentRoutingClientApps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentRoutingClientApps`.
   */
  create(
    entity: DocumentRoutingClientApps<T>
  ): CreateRequestBuilder<DocumentRoutingClientApps<T>, T> {
    return new CreateRequestBuilder<DocumentRoutingClientApps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentRoutingClientApps` entity based on its keys.
   * @param clientApplicationId Key property. See {@link DocumentRoutingClientApps.clientApplicationId}.
   * @returns A request builder for creating requests to retrieve one `DocumentRoutingClientApps` entity based on its keys.
   */
  getByKey(
    clientApplicationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentRoutingClientApps<T>, T> {
    return new GetByKeyRequestBuilder<DocumentRoutingClientApps<T>, T>(
      this.entityApi,
      { ClientApplicationId: clientApplicationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentRoutingClientApps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentRoutingClientApps`.
   */
  update(
    entity: DocumentRoutingClientApps<T>
  ): UpdateRequestBuilder<DocumentRoutingClientApps<T>, T> {
    return new UpdateRequestBuilder<DocumentRoutingClientApps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentRoutingClientApps`.
   * @param clientApplicationId Key property. See {@link DocumentRoutingClientApps.clientApplicationId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentRoutingClientApps`.
   */
  delete(
    clientApplicationId: string
  ): DeleteRequestBuilder<DocumentRoutingClientApps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentRoutingClientApps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentRoutingClientApps` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentRoutingClientApps<T>
  ): DeleteRequestBuilder<DocumentRoutingClientApps<T>, T>;
  delete(
    clientApplicationIdOrEntity: any
  ): DeleteRequestBuilder<DocumentRoutingClientApps<T>, T> {
    return new DeleteRequestBuilder<DocumentRoutingClientApps<T>, T>(
      this.entityApi,
      clientApplicationIdOrEntity instanceof DocumentRoutingClientApps
        ? clientApplicationIdOrEntity
        : { ClientApplicationId: clientApplicationIdOrEntity! }
    );
  }
}

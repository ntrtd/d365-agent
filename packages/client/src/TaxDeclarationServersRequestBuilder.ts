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
import { TaxDeclarationServers } from './TaxDeclarationServers';

/**
 * Request builder class for operations supported on the {@link TaxDeclarationServers} entity.
 */
export class TaxDeclarationServersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxDeclarationServers<T>, T> {
  /**
   * Returns a request builder for querying all `TaxDeclarationServers` entities.
   * @returns A request builder for creating requests to retrieve all `TaxDeclarationServers` entities.
   */
  getAll(): GetAllRequestBuilder<TaxDeclarationServers<T>, T> {
    return new GetAllRequestBuilder<TaxDeclarationServers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxDeclarationServers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxDeclarationServers`.
   */
  create(
    entity: TaxDeclarationServers<T>
  ): CreateRequestBuilder<TaxDeclarationServers<T>, T> {
    return new CreateRequestBuilder<TaxDeclarationServers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxDeclarationServers` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxDeclarationServers.dataAreaId}.
   * @param internetAddress Key property. See {@link TaxDeclarationServers.internetAddress}.
   * @returns A request builder for creating requests to retrieve one `TaxDeclarationServers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internetAddress: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxDeclarationServers<T>, T> {
    return new GetByKeyRequestBuilder<TaxDeclarationServers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InternetAddress: internetAddress
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxDeclarationServers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxDeclarationServers`.
   */
  update(
    entity: TaxDeclarationServers<T>
  ): UpdateRequestBuilder<TaxDeclarationServers<T>, T> {
    return new UpdateRequestBuilder<TaxDeclarationServers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxDeclarationServers`.
   * @param dataAreaId Key property. See {@link TaxDeclarationServers.dataAreaId}.
   * @param internetAddress Key property. See {@link TaxDeclarationServers.internetAddress}.
   * @returns A request builder for creating requests that delete an entity of type `TaxDeclarationServers`.
   */
  delete(
    dataAreaId: string,
    internetAddress: string
  ): DeleteRequestBuilder<TaxDeclarationServers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxDeclarationServers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxDeclarationServers` by taking the entity as a parameter.
   */
  delete(
    entity: TaxDeclarationServers<T>
  ): DeleteRequestBuilder<TaxDeclarationServers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internetAddress?: string
  ): DeleteRequestBuilder<TaxDeclarationServers<T>, T> {
    return new DeleteRequestBuilder<TaxDeclarationServers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxDeclarationServers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternetAddress: internetAddress!
          }
    );
  }
}

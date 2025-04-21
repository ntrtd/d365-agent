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
import { IdentityCardTables } from './IdentityCardTables';

/**
 * Request builder class for operations supported on the {@link IdentityCardTables} entity.
 */
export class IdentityCardTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IdentityCardTables<T>, T> {
  /**
   * Returns a request builder for querying all `IdentityCardTables` entities.
   * @returns A request builder for creating requests to retrieve all `IdentityCardTables` entities.
   */
  getAll(): GetAllRequestBuilder<IdentityCardTables<T>, T> {
    return new GetAllRequestBuilder<IdentityCardTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IdentityCardTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IdentityCardTables`.
   */
  create(
    entity: IdentityCardTables<T>
  ): CreateRequestBuilder<IdentityCardTables<T>, T> {
    return new CreateRequestBuilder<IdentityCardTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IdentityCardTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link IdentityCardTables.dataAreaId}.
   * @param documentCode Key property. See {@link IdentityCardTables.documentCode}.
   * @returns A request builder for creating requests to retrieve one `IdentityCardTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IdentityCardTables<T>, T> {
    return new GetByKeyRequestBuilder<IdentityCardTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentCode: documentCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IdentityCardTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IdentityCardTables`.
   */
  update(
    entity: IdentityCardTables<T>
  ): UpdateRequestBuilder<IdentityCardTables<T>, T> {
    return new UpdateRequestBuilder<IdentityCardTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IdentityCardTables`.
   * @param dataAreaId Key property. See {@link IdentityCardTables.dataAreaId}.
   * @param documentCode Key property. See {@link IdentityCardTables.documentCode}.
   * @returns A request builder for creating requests that delete an entity of type `IdentityCardTables`.
   */
  delete(
    dataAreaId: string,
    documentCode: string
  ): DeleteRequestBuilder<IdentityCardTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IdentityCardTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IdentityCardTables` by taking the entity as a parameter.
   */
  delete(
    entity: IdentityCardTables<T>
  ): DeleteRequestBuilder<IdentityCardTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentCode?: string
  ): DeleteRequestBuilder<IdentityCardTables<T>, T> {
    return new DeleteRequestBuilder<IdentityCardTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IdentityCardTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentCode: documentCode!
          }
    );
  }
}

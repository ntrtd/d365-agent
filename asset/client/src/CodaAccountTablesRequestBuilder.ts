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
import { CodaAccountTables } from './CodaAccountTables';

/**
 * Request builder class for operations supported on the {@link CodaAccountTables} entity.
 */
export class CodaAccountTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaAccountTables<T>, T> {
  /**
   * Returns a request builder for querying all `CodaAccountTables` entities.
   * @returns A request builder for creating requests to retrieve all `CodaAccountTables` entities.
   */
  getAll(): GetAllRequestBuilder<CodaAccountTables<T>, T> {
    return new GetAllRequestBuilder<CodaAccountTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CodaAccountTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaAccountTables`.
   */
  create(
    entity: CodaAccountTables<T>
  ): CreateRequestBuilder<CodaAccountTables<T>, T> {
    return new CreateRequestBuilder<CodaAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaAccountTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaAccountTables.dataAreaId}.
   * @param accountId Key property. See {@link CodaAccountTables.accountId}.
   * @returns A request builder for creating requests to retrieve one `CodaAccountTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaAccountTables<T>, T> {
    return new GetByKeyRequestBuilder<CodaAccountTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountID: accountId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CodaAccountTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaAccountTables`.
   */
  update(
    entity: CodaAccountTables<T>
  ): UpdateRequestBuilder<CodaAccountTables<T>, T> {
    return new UpdateRequestBuilder<CodaAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaAccountTables`.
   * @param dataAreaId Key property. See {@link CodaAccountTables.dataAreaId}.
   * @param accountId Key property. See {@link CodaAccountTables.accountId}.
   * @returns A request builder for creating requests that delete an entity of type `CodaAccountTables`.
   */
  delete(
    dataAreaId: string,
    accountId: string
  ): DeleteRequestBuilder<CodaAccountTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaAccountTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaAccountTables` by taking the entity as a parameter.
   */
  delete(
    entity: CodaAccountTables<T>
  ): DeleteRequestBuilder<CodaAccountTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountId?: string
  ): DeleteRequestBuilder<CodaAccountTables<T>, T> {
    return new DeleteRequestBuilder<CodaAccountTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaAccountTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountID: accountId!
          }
    );
  }
}

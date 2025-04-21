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
import { LtmBankAccountTables } from './LtmBankAccountTables';

/**
 * Request builder class for operations supported on the {@link LtmBankAccountTables} entity.
 */
export class LtmBankAccountTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmBankAccountTables<T>, T> {
  /**
   * Returns a request builder for querying all `LtmBankAccountTables` entities.
   * @returns A request builder for creating requests to retrieve all `LtmBankAccountTables` entities.
   */
  getAll(): GetAllRequestBuilder<LtmBankAccountTables<T>, T> {
    return new GetAllRequestBuilder<LtmBankAccountTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmBankAccountTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmBankAccountTables`.
   */
  create(
    entity: LtmBankAccountTables<T>
  ): CreateRequestBuilder<LtmBankAccountTables<T>, T> {
    return new CreateRequestBuilder<LtmBankAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmBankAccountTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmBankAccountTables.dataAreaId}.
   * @param accountId Key property. See {@link LtmBankAccountTables.accountId}.
   * @returns A request builder for creating requests to retrieve one `LtmBankAccountTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmBankAccountTables<T>, T> {
    return new GetByKeyRequestBuilder<LtmBankAccountTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountId: accountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmBankAccountTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmBankAccountTables`.
   */
  update(
    entity: LtmBankAccountTables<T>
  ): UpdateRequestBuilder<LtmBankAccountTables<T>, T> {
    return new UpdateRequestBuilder<LtmBankAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmBankAccountTables`.
   * @param dataAreaId Key property. See {@link LtmBankAccountTables.dataAreaId}.
   * @param accountId Key property. See {@link LtmBankAccountTables.accountId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmBankAccountTables`.
   */
  delete(
    dataAreaId: string,
    accountId: string
  ): DeleteRequestBuilder<LtmBankAccountTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmBankAccountTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmBankAccountTables` by taking the entity as a parameter.
   */
  delete(
    entity: LtmBankAccountTables<T>
  ): DeleteRequestBuilder<LtmBankAccountTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountId?: string
  ): DeleteRequestBuilder<LtmBankAccountTables<T>, T> {
    return new DeleteRequestBuilder<LtmBankAccountTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmBankAccountTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountId: accountId!
          }
    );
  }
}

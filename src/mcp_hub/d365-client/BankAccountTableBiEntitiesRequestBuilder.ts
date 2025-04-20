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
import { BankAccountTableBiEntities } from './BankAccountTableBiEntities';

/**
 * Request builder class for operations supported on the {@link BankAccountTableBiEntities} entity.
 */
export class BankAccountTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccountTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<BankAccountTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankAccountTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountTableBiEntities`.
   */
  create(
    entity: BankAccountTableBiEntities<T>
  ): CreateRequestBuilder<BankAccountTableBiEntities<T>, T> {
    return new CreateRequestBuilder<BankAccountTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankAccountTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccountTableBiEntities.dataAreaId}.
   * @param accountId Key property. See {@link BankAccountTableBiEntities.accountId}.
   * @returns A request builder for creating requests to retrieve one `BankAccountTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankAccountTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BankAccountTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountID: accountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountTableBiEntities`.
   */
  update(
    entity: BankAccountTableBiEntities<T>
  ): UpdateRequestBuilder<BankAccountTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<BankAccountTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountTableBiEntities`.
   * @param dataAreaId Key property. See {@link BankAccountTableBiEntities.dataAreaId}.
   * @param accountId Key property. See {@link BankAccountTableBiEntities.accountId}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    accountId: string
  ): DeleteRequestBuilder<BankAccountTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountTableBiEntities<T>
  ): DeleteRequestBuilder<BankAccountTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountId?: string
  ): DeleteRequestBuilder<BankAccountTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<BankAccountTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccountTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountID: accountId!
          }
    );
  }
}

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
import { CashAccounts } from './CashAccounts';

/**
 * Request builder class for operations supported on the {@link CashAccounts} entity.
 */
export class CashAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `CashAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `CashAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<CashAccounts<T>, T> {
    return new GetAllRequestBuilder<CashAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashAccounts`.
   */
  create(entity: CashAccounts<T>): CreateRequestBuilder<CashAccounts<T>, T> {
    return new CreateRequestBuilder<CashAccounts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CashAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashAccounts.dataAreaId}.
   * @param cash Key property. See {@link CashAccounts.cash}.
   * @returns A request builder for creating requests to retrieve one `CashAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cash: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashAccounts<T>, T> {
    return new GetByKeyRequestBuilder<CashAccounts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Cash: cash
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashAccounts`.
   */
  update(entity: CashAccounts<T>): UpdateRequestBuilder<CashAccounts<T>, T> {
    return new UpdateRequestBuilder<CashAccounts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashAccounts`.
   * @param dataAreaId Key property. See {@link CashAccounts.dataAreaId}.
   * @param cash Key property. See {@link CashAccounts.cash}.
   * @returns A request builder for creating requests that delete an entity of type `CashAccounts`.
   */
  delete(
    dataAreaId: string,
    cash: string
  ): DeleteRequestBuilder<CashAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashAccounts` by taking the entity as a parameter.
   */
  delete(entity: CashAccounts<T>): DeleteRequestBuilder<CashAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cash?: string
  ): DeleteRequestBuilder<CashAccounts<T>, T> {
    return new DeleteRequestBuilder<CashAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Cash: cash!
          }
    );
  }
}

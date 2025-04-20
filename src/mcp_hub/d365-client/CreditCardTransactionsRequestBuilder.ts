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
import { CreditCardTransactions } from './CreditCardTransactions';

/**
 * Request builder class for operations supported on the {@link CreditCardTransactions} entity.
 */
export class CreditCardTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditCardTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `CreditCardTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `CreditCardTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<CreditCardTransactions<T>, T> {
    return new GetAllRequestBuilder<CreditCardTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditCardTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditCardTransactions`.
   */
  create(
    entity: CreditCardTransactions<T>
  ): CreateRequestBuilder<CreditCardTransactions<T>, T> {
    return new CreateRequestBuilder<CreditCardTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditCardTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditCardTransactions.dataAreaId}.
   * @param ccTransUniqueId Key property. See {@link CreditCardTransactions.ccTransUniqueId}.
   * @returns A request builder for creating requests to retrieve one `CreditCardTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ccTransUniqueId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditCardTransactions<T>, T> {
    return new GetByKeyRequestBuilder<CreditCardTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CCTransUniqueID: ccTransUniqueId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditCardTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditCardTransactions`.
   */
  update(
    entity: CreditCardTransactions<T>
  ): UpdateRequestBuilder<CreditCardTransactions<T>, T> {
    return new UpdateRequestBuilder<CreditCardTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditCardTransactions`.
   * @param dataAreaId Key property. See {@link CreditCardTransactions.dataAreaId}.
   * @param ccTransUniqueId Key property. See {@link CreditCardTransactions.ccTransUniqueId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditCardTransactions`.
   */
  delete(
    dataAreaId: string,
    ccTransUniqueId: string
  ): DeleteRequestBuilder<CreditCardTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditCardTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditCardTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: CreditCardTransactions<T>
  ): DeleteRequestBuilder<CreditCardTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ccTransUniqueId?: string
  ): DeleteRequestBuilder<CreditCardTransactions<T>, T> {
    return new DeleteRequestBuilder<CreditCardTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditCardTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CCTransUniqueID: ccTransUniqueId!
          }
    );
  }
}

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
import { RetailTransactions } from './RetailTransactions';

/**
 * Request builder class for operations supported on the {@link RetailTransactions} entity.
 */
export class RetailTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactions<T>, T> {
    return new GetAllRequestBuilder<RetailTransactions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactions`.
   */
  create(
    entity: RetailTransactions<T>
  ): CreateRequestBuilder<RetailTransactions<T>, T> {
    return new CreateRequestBuilder<RetailTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactions.dataAreaId}.
   * @param transactionNumber Key property. See {@link RetailTransactions.transactionNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactions.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactions.terminal}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactions<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionNumber: transactionNumber,
        OperatingUnitNumber: operatingUnitNumber,
        Terminal: terminal
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactions`.
   */
  update(
    entity: RetailTransactions<T>
  ): UpdateRequestBuilder<RetailTransactions<T>, T> {
    return new UpdateRequestBuilder<RetailTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactions`.
   * @param dataAreaId Key property. See {@link RetailTransactions.dataAreaId}.
   * @param transactionNumber Key property. See {@link RetailTransactions.transactionNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactions.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactions.terminal}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactions`.
   */
  delete(
    dataAreaId: string,
    transactionNumber: string,
    operatingUnitNumber: string,
    terminal: string
  ): DeleteRequestBuilder<RetailTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactions<T>
  ): DeleteRequestBuilder<RetailTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionNumber?: string,
    operatingUnitNumber?: string,
    terminal?: string
  ): DeleteRequestBuilder<RetailTransactions<T>, T> {
    return new DeleteRequestBuilder<RetailTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionNumber: transactionNumber!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!
          }
    );
  }
}

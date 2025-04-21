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
import { TransactionCashManagementTrans } from './TransactionCashManagementTrans';

/**
 * Request builder class for operations supported on the {@link TransactionCashManagementTrans} entity.
 */
export class TransactionCashManagementTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionCashManagementTrans<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionCashManagementTrans` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionCashManagementTrans` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionCashManagementTrans<T>, T> {
    return new GetAllRequestBuilder<TransactionCashManagementTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionCashManagementTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionCashManagementTrans`.
   */
  create(
    entity: TransactionCashManagementTrans<T>
  ): CreateRequestBuilder<TransactionCashManagementTrans<T>, T> {
    return new CreateRequestBuilder<TransactionCashManagementTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionCashManagementTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionCashManagementTrans.dataAreaId}.
   * @param transactionNumber Key property. See {@link TransactionCashManagementTrans.transactionNumber}.
   * @param operatingUnitNumber Key property. See {@link TransactionCashManagementTrans.operatingUnitNumber}.
   * @param terminal Key property. See {@link TransactionCashManagementTrans.terminal}.
   * @returns A request builder for creating requests to retrieve one `TransactionCashManagementTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionCashManagementTrans<T>, T> {
    return new GetByKeyRequestBuilder<TransactionCashManagementTrans<T>, T>(
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
   * Returns a request builder for updating an entity of type `TransactionCashManagementTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionCashManagementTrans`.
   */
  update(
    entity: TransactionCashManagementTrans<T>
  ): UpdateRequestBuilder<TransactionCashManagementTrans<T>, T> {
    return new UpdateRequestBuilder<TransactionCashManagementTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionCashManagementTrans`.
   * @param dataAreaId Key property. See {@link TransactionCashManagementTrans.dataAreaId}.
   * @param transactionNumber Key property. See {@link TransactionCashManagementTrans.transactionNumber}.
   * @param operatingUnitNumber Key property. See {@link TransactionCashManagementTrans.operatingUnitNumber}.
   * @param terminal Key property. See {@link TransactionCashManagementTrans.terminal}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCashManagementTrans`.
   */
  delete(
    dataAreaId: string,
    transactionNumber: string,
    operatingUnitNumber: string,
    terminal: string
  ): DeleteRequestBuilder<TransactionCashManagementTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionCashManagementTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCashManagementTrans` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionCashManagementTrans<T>
  ): DeleteRequestBuilder<TransactionCashManagementTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionNumber?: string,
    operatingUnitNumber?: string,
    terminal?: string
  ): DeleteRequestBuilder<TransactionCashManagementTrans<T>, T> {
    return new DeleteRequestBuilder<TransactionCashManagementTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionCashManagementTrans
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

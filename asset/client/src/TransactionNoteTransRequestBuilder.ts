/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { TransactionNoteTrans } from './TransactionNoteTrans';

/**
 * Request builder class for operations supported on the {@link TransactionNoteTrans} entity.
 */
export class TransactionNoteTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionNoteTrans<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionNoteTrans` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionNoteTrans` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionNoteTrans<T>, T> {
    return new GetAllRequestBuilder<TransactionNoteTrans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionNoteTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionNoteTrans`.
   */
  create(
    entity: TransactionNoteTrans<T>
  ): CreateRequestBuilder<TransactionNoteTrans<T>, T> {
    return new CreateRequestBuilder<TransactionNoteTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionNoteTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionNoteTrans.dataAreaId}.
   * @param omOperatingUnitOperatingUnitNumber Key property. See {@link TransactionNoteTrans.omOperatingUnitOperatingUnitNumber}.
   * @param store Key property. See {@link TransactionNoteTrans.store}.
   * @param terminal Key property. See {@link TransactionNoteTrans.terminal}.
   * @param transactionId Key property. See {@link TransactionNoteTrans.transactionId}.
   * @param lineNum Key property. See {@link TransactionNoteTrans.lineNum}.
   * @returns A request builder for creating requests to retrieve one `TransactionNoteTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitOperatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransactionNoteTrans<T>, T> {
    return new GetByKeyRequestBuilder<TransactionNoteTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OMOperatingUnit_OperatingUnitNumber: omOperatingUnitOperatingUnitNumber,
        Store: store,
        Terminal: terminal,
        TransactionId: transactionId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionNoteTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionNoteTrans`.
   */
  update(
    entity: TransactionNoteTrans<T>
  ): UpdateRequestBuilder<TransactionNoteTrans<T>, T> {
    return new UpdateRequestBuilder<TransactionNoteTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionNoteTrans`.
   * @param dataAreaId Key property. See {@link TransactionNoteTrans.dataAreaId}.
   * @param omOperatingUnitOperatingUnitNumber Key property. See {@link TransactionNoteTrans.omOperatingUnitOperatingUnitNumber}.
   * @param store Key property. See {@link TransactionNoteTrans.store}.
   * @param terminal Key property. See {@link TransactionNoteTrans.terminal}.
   * @param transactionId Key property. See {@link TransactionNoteTrans.transactionId}.
   * @param lineNum Key property. See {@link TransactionNoteTrans.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionNoteTrans`.
   */
  delete(
    dataAreaId: string,
    omOperatingUnitOperatingUnitNumber: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<TransactionNoteTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionNoteTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionNoteTrans` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionNoteTrans<T>
  ): DeleteRequestBuilder<TransactionNoteTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    omOperatingUnitOperatingUnitNumber?: string,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<TransactionNoteTrans<T>, T> {
    return new DeleteRequestBuilder<TransactionNoteTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionNoteTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OMOperatingUnit_OperatingUnitNumber:
              omOperatingUnitOperatingUnitNumber!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}

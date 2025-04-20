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
import { TransactionTenderDeclarationTransBIs } from './TransactionTenderDeclarationTransBIs';

/**
 * Request builder class for operations supported on the {@link TransactionTenderDeclarationTransBIs} entity.
 */
export class TransactionTenderDeclarationTransBIsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionTenderDeclarationTransBIs<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionTenderDeclarationTransBIs` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionTenderDeclarationTransBIs` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T> {
    return new GetAllRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionTenderDeclarationTransBIs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionTenderDeclarationTransBIs`.
   */
  create(
    entity: TransactionTenderDeclarationTransBIs<T>
  ): CreateRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T> {
    return new CreateRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionTenderDeclarationTransBIs` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionTenderDeclarationTransBIs.dataAreaId}.
   * @param store Key property. See {@link TransactionTenderDeclarationTransBIs.store}.
   * @param terminal Key property. See {@link TransactionTenderDeclarationTransBIs.terminal}.
   * @param transactionId Key property. See {@link TransactionTenderDeclarationTransBIs.transactionId}.
   * @param lineNum Key property. See {@link TransactionTenderDeclarationTransBIs.lineNum}.
   * @returns A request builder for creating requests to retrieve one `TransactionTenderDeclarationTransBIs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionTenderDeclarationTransBIs<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      lineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionTenderDeclarationTransBIs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionTenderDeclarationTransBIs`.
   */
  update(
    entity: TransactionTenderDeclarationTransBIs<T>
  ): UpdateRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T> {
    return new UpdateRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionTenderDeclarationTransBIs`.
   * @param dataAreaId Key property. See {@link TransactionTenderDeclarationTransBIs.dataAreaId}.
   * @param store Key property. See {@link TransactionTenderDeclarationTransBIs.store}.
   * @param terminal Key property. See {@link TransactionTenderDeclarationTransBIs.terminal}.
   * @param transactionId Key property. See {@link TransactionTenderDeclarationTransBIs.transactionId}.
   * @param lineNum Key property. See {@link TransactionTenderDeclarationTransBIs.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionTenderDeclarationTransBIs`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionTenderDeclarationTransBIs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionTenderDeclarationTransBIs` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionTenderDeclarationTransBIs<T>
  ): DeleteRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T> {
    return new DeleteRequestBuilder<TransactionTenderDeclarationTransBIs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionTenderDeclarationTransBIs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            lineNum: lineNum!
          }
    );
  }
}

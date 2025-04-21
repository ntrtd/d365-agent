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
import { RetailTransactionValidationErrorBiEntities } from './RetailTransactionValidationErrorBiEntities';
import { RetailTransactionValidationType } from './RetailTransactionValidationType';

/**
 * Request builder class for operations supported on the {@link RetailTransactionValidationErrorBiEntities} entity.
 */
export class RetailTransactionValidationErrorBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionValidationErrorBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionValidationErrorBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionValidationErrorBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionValidationErrorBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionValidationErrorBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionValidationErrorBiEntities`.
   */
  create(
    entity: RetailTransactionValidationErrorBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionValidationErrorBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionValidationErrorBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionValidationErrorBiEntities.dataAreaId}.
   * @param channel Key property. See {@link RetailTransactionValidationErrorBiEntities.channel}.
   * @param lineNum Key property. See {@link RetailTransactionValidationErrorBiEntities.lineNum}.
   * @param store Key property. See {@link RetailTransactionValidationErrorBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionValidationErrorBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionValidationErrorBiEntities.transactionId}.
   * @param validationType Key property. See {@link RetailTransactionValidationErrorBiEntities.validationType}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionValidationErrorBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    channel: DeserializedType<T, 'Edm.Int64'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    validationType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailTransactionValidationType'
    >
  ): GetByKeyRequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionValidationErrorBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Channel: channel,
      LineNum: lineNum,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      ValidationType: validationType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionValidationErrorBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionValidationErrorBiEntities`.
   */
  update(
    entity: RetailTransactionValidationErrorBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionValidationErrorBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionValidationErrorBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionValidationErrorBiEntities.dataAreaId}.
   * @param channel Key property. See {@link RetailTransactionValidationErrorBiEntities.channel}.
   * @param lineNum Key property. See {@link RetailTransactionValidationErrorBiEntities.lineNum}.
   * @param store Key property. See {@link RetailTransactionValidationErrorBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionValidationErrorBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionValidationErrorBiEntities.transactionId}.
   * @param validationType Key property. See {@link RetailTransactionValidationErrorBiEntities.validationType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionValidationErrorBiEntities`.
   */
  delete(
    dataAreaId: string,
    channel: BigNumber,
    lineNum: BigNumber,
    store: string,
    terminal: string,
    transactionId: string,
    validationType: RetailTransactionValidationType
  ): DeleteRequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionValidationErrorBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionValidationErrorBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionValidationErrorBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    channel?: BigNumber,
    lineNum?: BigNumber,
    store?: string,
    terminal?: string,
    transactionId?: string,
    validationType?: RetailTransactionValidationType
  ): DeleteRequestBuilder<RetailTransactionValidationErrorBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionValidationErrorBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionValidationErrorBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Channel: channel!,
            LineNum: lineNum!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            ValidationType: validationType!
          }
    );
  }
}

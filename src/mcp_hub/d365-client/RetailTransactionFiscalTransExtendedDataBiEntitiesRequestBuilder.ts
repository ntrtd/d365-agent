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
import { RetailTransactionFiscalTransExtendedDataBiEntities } from './RetailTransactionFiscalTransExtendedDataBiEntities';
import { RetailFiscalRegistrationExtendedDataType } from './RetailFiscalRegistrationExtendedDataType';

/**
 * Request builder class for operations supported on the {@link RetailTransactionFiscalTransExtendedDataBiEntities} entity.
 */
export class RetailTransactionFiscalTransExtendedDataBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionFiscalTransExtendedDataBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionFiscalTransExtendedDataBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionFiscalTransExtendedDataBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionFiscalTransExtendedDataBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionFiscalTransExtendedDataBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities`.
   */
  create(
    entity: RetailTransactionFiscalTransExtendedDataBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionFiscalTransExtendedDataBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionFiscalTransExtendedDataBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.transactionId}.
   * @param fiscalTransLineNum Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.fiscalTransLineNum}.
   * @param fiscalTransRecordGuid Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.fiscalTransRecordGuid}.
   * @param dataKey Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.dataKey}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionFiscalTransExtendedDataBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    fiscalTransLineNum: DeserializedType<T, 'Edm.Decimal'>,
    fiscalTransRecordGuid: DeserializedType<T, 'Edm.Guid'>,
    dataKey: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailFiscalRegistrationExtendedDataType'
    >
  ): GetByKeyRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionFiscalTransExtendedDataBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      FiscalTransLineNum: fiscalTransLineNum,
      FiscalTransRecordGuid: fiscalTransRecordGuid,
      DataKey: dataKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities`.
   */
  update(
    entity: RetailTransactionFiscalTransExtendedDataBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionFiscalTransExtendedDataBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.transactionId}.
   * @param fiscalTransLineNum Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.fiscalTransLineNum}.
   * @param fiscalTransRecordGuid Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.fiscalTransRecordGuid}.
   * @param dataKey Key property. See {@link RetailTransactionFiscalTransExtendedDataBiEntities.dataKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    fiscalTransLineNum: BigNumber,
    fiscalTransRecordGuid: string,
    dataKey: RetailFiscalRegistrationExtendedDataType
  ): DeleteRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalTransExtendedDataBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionFiscalTransExtendedDataBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    fiscalTransLineNum?: BigNumber,
    fiscalTransRecordGuid?: string,
    dataKey?: RetailFiscalRegistrationExtendedDataType
  ): DeleteRequestBuilder<
    RetailTransactionFiscalTransExtendedDataBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionFiscalTransExtendedDataBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionFiscalTransExtendedDataBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            FiscalTransLineNum: fiscalTransLineNum!,
            FiscalTransRecordGuid: fiscalTransRecordGuid!,
            DataKey: dataKey!
          }
    );
  }
}

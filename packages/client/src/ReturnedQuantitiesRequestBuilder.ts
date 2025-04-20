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
import { ReturnedQuantities } from './ReturnedQuantities';

/**
 * Request builder class for operations supported on the {@link ReturnedQuantities} entity.
 */
export class ReturnedQuantitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnedQuantities<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnedQuantities` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnedQuantities` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnedQuantities<T>, T> {
    return new GetAllRequestBuilder<ReturnedQuantities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnedQuantities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnedQuantities`.
   */
  create(
    entity: ReturnedQuantities<T>
  ): CreateRequestBuilder<ReturnedQuantities<T>, T> {
    return new CreateRequestBuilder<ReturnedQuantities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnedQuantities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnedQuantities.dataAreaId}.
   * @param operatingUnitPartyNumber Key property. See {@link ReturnedQuantities.operatingUnitPartyNumber}.
   * @param store Key property. See {@link ReturnedQuantities.store}.
   * @param terminalId Key property. See {@link ReturnedQuantities.terminalId}.
   * @param transactionId Key property. See {@link ReturnedQuantities.transactionId}.
   * @param lineNum Key property. See {@link ReturnedQuantities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `ReturnedQuantities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ReturnedQuantities<T>, T> {
    return new GetByKeyRequestBuilder<ReturnedQuantities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitPartyNumber: operatingUnitPartyNumber,
        Store: store,
        TerminalId: terminalId,
        TransactionId: transactionId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnedQuantities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnedQuantities`.
   */
  update(
    entity: ReturnedQuantities<T>
  ): UpdateRequestBuilder<ReturnedQuantities<T>, T> {
    return new UpdateRequestBuilder<ReturnedQuantities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnedQuantities`.
   * @param dataAreaId Key property. See {@link ReturnedQuantities.dataAreaId}.
   * @param operatingUnitPartyNumber Key property. See {@link ReturnedQuantities.operatingUnitPartyNumber}.
   * @param store Key property. See {@link ReturnedQuantities.store}.
   * @param terminalId Key property. See {@link ReturnedQuantities.terminalId}.
   * @param transactionId Key property. See {@link ReturnedQuantities.transactionId}.
   * @param lineNum Key property. See {@link ReturnedQuantities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnedQuantities`.
   */
  delete(
    dataAreaId: string,
    operatingUnitPartyNumber: string,
    store: string,
    terminalId: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<ReturnedQuantities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnedQuantities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnedQuantities` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnedQuantities<T>
  ): DeleteRequestBuilder<ReturnedQuantities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitPartyNumber?: string,
    store?: string,
    terminalId?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<ReturnedQuantities<T>, T> {
    return new DeleteRequestBuilder<ReturnedQuantities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnedQuantities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitPartyNumber: operatingUnitPartyNumber!,
            Store: store!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}

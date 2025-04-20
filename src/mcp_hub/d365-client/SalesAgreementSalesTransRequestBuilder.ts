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
import { SalesAgreementSalesTrans } from './SalesAgreementSalesTrans';

/**
 * Request builder class for operations supported on the {@link SalesAgreementSalesTrans} entity.
 */
export class SalesAgreementSalesTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementSalesTrans<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementSalesTrans` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementSalesTrans` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementSalesTrans<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementSalesTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesAgreementSalesTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementSalesTrans`.
   */
  create(
    entity: SalesAgreementSalesTrans<T>
  ): CreateRequestBuilder<SalesAgreementSalesTrans<T>, T> {
    return new CreateRequestBuilder<SalesAgreementSalesTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementSalesTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreementSalesTrans.dataAreaId}.
   * @param omOperatingUnitPartyNumber Key property. See {@link SalesAgreementSalesTrans.omOperatingUnitPartyNumber}.
   * @param store Key property. See {@link SalesAgreementSalesTrans.store}.
   * @param terminal Key property. See {@link SalesAgreementSalesTrans.terminal}.
   * @param transactionId Key property. See {@link SalesAgreementSalesTrans.transactionId}.
   * @param transactionLineNumber Key property. See {@link SalesAgreementSalesTrans.transactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementSalesTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    transactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAgreementSalesTrans<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementSalesTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OMOperatingUnit_PartyNumber: omOperatingUnitPartyNumber,
        Store: store,
        Terminal: terminal,
        TransactionId: transactionId,
        TransactionLineNumber: transactionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementSalesTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementSalesTrans`.
   */
  update(
    entity: SalesAgreementSalesTrans<T>
  ): UpdateRequestBuilder<SalesAgreementSalesTrans<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementSalesTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementSalesTrans`.
   * @param dataAreaId Key property. See {@link SalesAgreementSalesTrans.dataAreaId}.
   * @param omOperatingUnitPartyNumber Key property. See {@link SalesAgreementSalesTrans.omOperatingUnitPartyNumber}.
   * @param store Key property. See {@link SalesAgreementSalesTrans.store}.
   * @param terminal Key property. See {@link SalesAgreementSalesTrans.terminal}.
   * @param transactionId Key property. See {@link SalesAgreementSalesTrans.transactionId}.
   * @param transactionLineNumber Key property. See {@link SalesAgreementSalesTrans.transactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementSalesTrans`.
   */
  delete(
    dataAreaId: string,
    omOperatingUnitPartyNumber: string,
    store: string,
    terminal: string,
    transactionId: string,
    transactionLineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAgreementSalesTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementSalesTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementSalesTrans` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementSalesTrans<T>
  ): DeleteRequestBuilder<SalesAgreementSalesTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    omOperatingUnitPartyNumber?: string,
    store?: string,
    terminal?: string,
    transactionId?: string,
    transactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAgreementSalesTrans<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementSalesTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreementSalesTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OMOperatingUnit_PartyNumber: omOperatingUnitPartyNumber!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            TransactionLineNumber: transactionLineNumber!
          }
    );
  }
}

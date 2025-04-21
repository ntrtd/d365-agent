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
import { LtmLedgerJournalTrans } from './LtmLedgerJournalTrans';

/**
 * Request builder class for operations supported on the {@link LtmLedgerJournalTrans} entity.
 */
export class LtmLedgerJournalTransRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmLedgerJournalTrans<T>, T> {
  /**
   * Returns a request builder for querying all `LtmLedgerJournalTrans` entities.
   * @returns A request builder for creating requests to retrieve all `LtmLedgerJournalTrans` entities.
   */
  getAll(): GetAllRequestBuilder<LtmLedgerJournalTrans<T>, T> {
    return new GetAllRequestBuilder<LtmLedgerJournalTrans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmLedgerJournalTrans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmLedgerJournalTrans`.
   */
  create(
    entity: LtmLedgerJournalTrans<T>
  ): CreateRequestBuilder<LtmLedgerJournalTrans<T>, T> {
    return new CreateRequestBuilder<LtmLedgerJournalTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmLedgerJournalTrans` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmLedgerJournalTrans.dataAreaId}.
   * @param lineNum Key property. See {@link LtmLedgerJournalTrans.lineNum}.
   * @param voucher Key property. See {@link LtmLedgerJournalTrans.voucher}.
   * @param journalNum Key property. See {@link LtmLedgerJournalTrans.journalNum}.
   * @returns A request builder for creating requests to retrieve one `LtmLedgerJournalTrans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmLedgerJournalTrans<T>, T> {
    return new GetByKeyRequestBuilder<LtmLedgerJournalTrans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNum: lineNum,
        Voucher: voucher,
        JournalNum: journalNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmLedgerJournalTrans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmLedgerJournalTrans`.
   */
  update(
    entity: LtmLedgerJournalTrans<T>
  ): UpdateRequestBuilder<LtmLedgerJournalTrans<T>, T> {
    return new UpdateRequestBuilder<LtmLedgerJournalTrans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmLedgerJournalTrans`.
   * @param dataAreaId Key property. See {@link LtmLedgerJournalTrans.dataAreaId}.
   * @param lineNum Key property. See {@link LtmLedgerJournalTrans.lineNum}.
   * @param voucher Key property. See {@link LtmLedgerJournalTrans.voucher}.
   * @param journalNum Key property. See {@link LtmLedgerJournalTrans.journalNum}.
   * @returns A request builder for creating requests that delete an entity of type `LtmLedgerJournalTrans`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    voucher: string,
    journalNum: string
  ): DeleteRequestBuilder<LtmLedgerJournalTrans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmLedgerJournalTrans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmLedgerJournalTrans` by taking the entity as a parameter.
   */
  delete(
    entity: LtmLedgerJournalTrans<T>
  ): DeleteRequestBuilder<LtmLedgerJournalTrans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    voucher?: string,
    journalNum?: string
  ): DeleteRequestBuilder<LtmLedgerJournalTrans<T>, T> {
    return new DeleteRequestBuilder<LtmLedgerJournalTrans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmLedgerJournalTrans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            Voucher: voucher!,
            JournalNum: journalNum!
          }
    );
  }
}

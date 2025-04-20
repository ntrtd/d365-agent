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
import { SubBillUnbilledRevenueTransactionLines } from './SubBillUnbilledRevenueTransactionLines';

/**
 * Request builder class for operations supported on the {@link SubBillUnbilledRevenueTransactionLines} entity.
 */
export class SubBillUnbilledRevenueTransactionLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillUnbilledRevenueTransactionLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillUnbilledRevenueTransactionLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T> {
    return new GetAllRequestBuilder<
      SubBillUnbilledRevenueTransactionLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillUnbilledRevenueTransactionLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillUnbilledRevenueTransactionLines`.
   */
  create(
    entity: SubBillUnbilledRevenueTransactionLines<T>
  ): CreateRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T> {
    return new CreateRequestBuilder<
      SubBillUnbilledRevenueTransactionLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillUnbilledRevenueTransactionLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillUnbilledRevenueTransactionLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillUnbilledRevenueTransactionLines.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillUnbilledRevenueTransactionLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillUnbilledRevenueTransactionLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T> {
    return new GetByKeyRequestBuilder<
      SubBillUnbilledRevenueTransactionLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ScheduleNumber: scheduleNumber,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillUnbilledRevenueTransactionLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillUnbilledRevenueTransactionLines`.
   */
  update(
    entity: SubBillUnbilledRevenueTransactionLines<T>
  ): UpdateRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T> {
    return new UpdateRequestBuilder<
      SubBillUnbilledRevenueTransactionLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillUnbilledRevenueTransactionLines`.
   * @param dataAreaId Key property. See {@link SubBillUnbilledRevenueTransactionLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillUnbilledRevenueTransactionLines.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillUnbilledRevenueTransactionLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillUnbilledRevenueTransactionLines`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillUnbilledRevenueTransactionLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillUnbilledRevenueTransactionLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillUnbilledRevenueTransactionLines<T>
  ): DeleteRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillUnbilledRevenueTransactionLines<T>, T> {
    return new DeleteRequestBuilder<
      SubBillUnbilledRevenueTransactionLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillUnbilledRevenueTransactionLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            LineNum: lineNum!
          }
    );
  }
}

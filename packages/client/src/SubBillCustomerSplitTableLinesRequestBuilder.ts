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
import { SubBillCustomerSplitTableLines } from './SubBillCustomerSplitTableLines';

/**
 * Request builder class for operations supported on the {@link SubBillCustomerSplitTableLines} entity.
 */
export class SubBillCustomerSplitTableLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillCustomerSplitTableLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillCustomerSplitTableLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillCustomerSplitTableLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillCustomerSplitTableLines<T>, T> {
    return new GetAllRequestBuilder<SubBillCustomerSplitTableLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillCustomerSplitTableLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillCustomerSplitTableLines`.
   */
  create(
    entity: SubBillCustomerSplitTableLines<T>
  ): CreateRequestBuilder<SubBillCustomerSplitTableLines<T>, T> {
    return new CreateRequestBuilder<SubBillCustomerSplitTableLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillCustomerSplitTableLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillCustomerSplitTableLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillCustomerSplitTableLines.scheduleNumber}.
   * @param scheduleLineNum Key property. See {@link SubBillCustomerSplitTableLines.scheduleLineNum}.
   * @param custAccount Key property. See {@link SubBillCustomerSplitTableLines.custAccount}.
   * @returns A request builder for creating requests to retrieve one `SubBillCustomerSplitTableLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    scheduleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    custAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillCustomerSplitTableLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillCustomerSplitTableLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        ScheduleLineNum: scheduleLineNum,
        CustAccount: custAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillCustomerSplitTableLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillCustomerSplitTableLines`.
   */
  update(
    entity: SubBillCustomerSplitTableLines<T>
  ): UpdateRequestBuilder<SubBillCustomerSplitTableLines<T>, T> {
    return new UpdateRequestBuilder<SubBillCustomerSplitTableLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillCustomerSplitTableLines`.
   * @param dataAreaId Key property. See {@link SubBillCustomerSplitTableLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillCustomerSplitTableLines.scheduleNumber}.
   * @param scheduleLineNum Key property. See {@link SubBillCustomerSplitTableLines.scheduleLineNum}.
   * @param custAccount Key property. See {@link SubBillCustomerSplitTableLines.custAccount}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCustomerSplitTableLines`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    scheduleLineNum: BigNumber,
    custAccount: string
  ): DeleteRequestBuilder<SubBillCustomerSplitTableLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillCustomerSplitTableLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillCustomerSplitTableLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillCustomerSplitTableLines<T>
  ): DeleteRequestBuilder<SubBillCustomerSplitTableLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    scheduleLineNum?: BigNumber,
    custAccount?: string
  ): DeleteRequestBuilder<SubBillCustomerSplitTableLines<T>, T> {
    return new DeleteRequestBuilder<SubBillCustomerSplitTableLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillCustomerSplitTableLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            ScheduleLineNum: scheduleLineNum!,
            CustAccount: custAccount!
          }
    );
  }
}

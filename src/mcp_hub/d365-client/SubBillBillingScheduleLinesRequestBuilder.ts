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
import { SubBillBillingScheduleLines } from './SubBillBillingScheduleLines';

/**
 * Request builder class for operations supported on the {@link SubBillBillingScheduleLines} entity.
 */
export class SubBillBillingScheduleLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillBillingScheduleLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillBillingScheduleLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillBillingScheduleLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillBillingScheduleLines<T>, T> {
    return new GetAllRequestBuilder<SubBillBillingScheduleLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillBillingScheduleLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillBillingScheduleLines`.
   */
  create(
    entity: SubBillBillingScheduleLines<T>
  ): CreateRequestBuilder<SubBillBillingScheduleLines<T>, T> {
    return new CreateRequestBuilder<SubBillBillingScheduleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillBillingScheduleLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingScheduleLines.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillBillingScheduleLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillBillingScheduleLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillBillingScheduleLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillBillingScheduleLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillBillingScheduleLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillBillingScheduleLines`.
   */
  update(
    entity: SubBillBillingScheduleLines<T>
  ): UpdateRequestBuilder<SubBillBillingScheduleLines<T>, T> {
    return new UpdateRequestBuilder<SubBillBillingScheduleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleLines`.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingScheduleLines.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillBillingScheduleLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleLines`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillBillingScheduleLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillBillingScheduleLines<T>
  ): DeleteRequestBuilder<SubBillBillingScheduleLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillBillingScheduleLines<T>, T> {
    return new DeleteRequestBuilder<SubBillBillingScheduleLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillBillingScheduleLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            LineNum: lineNum!
          }
    );
  }
}

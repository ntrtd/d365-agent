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
import { SubBillScheduleLinePlaceHolds } from './SubBillScheduleLinePlaceHolds';

/**
 * Request builder class for operations supported on the {@link SubBillScheduleLinePlaceHolds} entity.
 */
export class SubBillScheduleLinePlaceHoldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillScheduleLinePlaceHolds<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillScheduleLinePlaceHolds` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillScheduleLinePlaceHolds` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T> {
    return new GetAllRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillScheduleLinePlaceHolds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillScheduleLinePlaceHolds`.
   */
  create(
    entity: SubBillScheduleLinePlaceHolds<T>
  ): CreateRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T> {
    return new CreateRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillScheduleLinePlaceHolds` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillScheduleLinePlaceHolds.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillScheduleLinePlaceHolds.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillScheduleLinePlaceHolds.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillScheduleLinePlaceHolds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T> {
    return new GetByKeyRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillScheduleLinePlaceHolds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillScheduleLinePlaceHolds`.
   */
  update(
    entity: SubBillScheduleLinePlaceHolds<T>
  ): UpdateRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T> {
    return new UpdateRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillScheduleLinePlaceHolds`.
   * @param dataAreaId Key property. See {@link SubBillScheduleLinePlaceHolds.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillScheduleLinePlaceHolds.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillScheduleLinePlaceHolds.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillScheduleLinePlaceHolds`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillScheduleLinePlaceHolds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillScheduleLinePlaceHolds` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillScheduleLinePlaceHolds<T>
  ): DeleteRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T> {
    return new DeleteRequestBuilder<SubBillScheduleLinePlaceHolds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillScheduleLinePlaceHolds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            LineNum: lineNum!
          }
    );
  }
}

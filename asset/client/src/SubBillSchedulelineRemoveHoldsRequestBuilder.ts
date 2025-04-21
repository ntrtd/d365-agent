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
import { SubBillSchedulelineRemoveHolds } from './SubBillSchedulelineRemoveHolds';

/**
 * Request builder class for operations supported on the {@link SubBillSchedulelineRemoveHolds} entity.
 */
export class SubBillSchedulelineRemoveHoldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillSchedulelineRemoveHolds<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillSchedulelineRemoveHolds` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillSchedulelineRemoveHolds` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T> {
    return new GetAllRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillSchedulelineRemoveHolds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillSchedulelineRemoveHolds`.
   */
  create(
    entity: SubBillSchedulelineRemoveHolds<T>
  ): CreateRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T> {
    return new CreateRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillSchedulelineRemoveHolds` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillSchedulelineRemoveHolds.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillSchedulelineRemoveHolds.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillSchedulelineRemoveHolds.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillSchedulelineRemoveHolds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T> {
    return new GetByKeyRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillSchedulelineRemoveHolds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillSchedulelineRemoveHolds`.
   */
  update(
    entity: SubBillSchedulelineRemoveHolds<T>
  ): UpdateRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T> {
    return new UpdateRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillSchedulelineRemoveHolds`.
   * @param dataAreaId Key property. See {@link SubBillSchedulelineRemoveHolds.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillSchedulelineRemoveHolds.scheduleNumber}.
   * @param lineNum Key property. See {@link SubBillSchedulelineRemoveHolds.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSchedulelineRemoveHolds`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillSchedulelineRemoveHolds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSchedulelineRemoveHolds` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillSchedulelineRemoveHolds<T>
  ): DeleteRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T> {
    return new DeleteRequestBuilder<SubBillSchedulelineRemoveHolds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillSchedulelineRemoveHolds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            LineNum: lineNum!
          }
    );
  }
}

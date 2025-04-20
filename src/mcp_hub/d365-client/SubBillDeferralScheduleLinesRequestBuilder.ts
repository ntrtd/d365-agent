/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { SubBillDeferralScheduleLines } from './SubBillDeferralScheduleLines';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralScheduleLines} entity.
 */
export class SubBillDeferralScheduleLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralScheduleLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralScheduleLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralScheduleLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralScheduleLines<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralScheduleLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralScheduleLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralScheduleLines`.
   */
  create(
    entity: SubBillDeferralScheduleLines<T>
  ): CreateRequestBuilder<SubBillDeferralScheduleLines<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralScheduleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralScheduleLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleLines.dataAreaId}.
   * @param deferralScheduleNumber Key property. See {@link SubBillDeferralScheduleLines.deferralScheduleNumber}.
   * @param line Key property. See {@link SubBillDeferralScheduleLines.line}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralScheduleLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deferralScheduleNumber: DeserializedType<T, 'Edm.String'>,
    line: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SubBillDeferralScheduleLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralScheduleLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DeferralScheduleNumber: deferralScheduleNumber,
        Line: line
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralScheduleLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralScheduleLines`.
   */
  update(
    entity: SubBillDeferralScheduleLines<T>
  ): UpdateRequestBuilder<SubBillDeferralScheduleLines<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralScheduleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleLines`.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleLines.dataAreaId}.
   * @param deferralScheduleNumber Key property. See {@link SubBillDeferralScheduleLines.deferralScheduleNumber}.
   * @param line Key property. See {@link SubBillDeferralScheduleLines.line}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleLines`.
   */
  delete(
    dataAreaId: string,
    deferralScheduleNumber: string,
    line: number
  ): DeleteRequestBuilder<SubBillDeferralScheduleLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralScheduleLines<T>
  ): DeleteRequestBuilder<SubBillDeferralScheduleLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deferralScheduleNumber?: string,
    line?: number
  ): DeleteRequestBuilder<SubBillDeferralScheduleLines<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralScheduleLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralScheduleLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeferralScheduleNumber: deferralScheduleNumber!,
            Line: line!
          }
    );
  }
}

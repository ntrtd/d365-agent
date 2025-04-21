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
import { SubBillDeferralScheduleTables } from './SubBillDeferralScheduleTables';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralScheduleTables} entity.
 */
export class SubBillDeferralScheduleTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralScheduleTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralScheduleTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralScheduleTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralScheduleTables<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralScheduleTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralScheduleTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralScheduleTables`.
   */
  create(
    entity: SubBillDeferralScheduleTables<T>
  ): CreateRequestBuilder<SubBillDeferralScheduleTables<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralScheduleTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralScheduleTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleTables.dataAreaId}.
   * @param deferralScheduleNumber Key property. See {@link SubBillDeferralScheduleTables.deferralScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralScheduleTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deferralScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralScheduleTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralScheduleTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DeferralScheduleNumber: deferralScheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralScheduleTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralScheduleTables`.
   */
  update(
    entity: SubBillDeferralScheduleTables<T>
  ): UpdateRequestBuilder<SubBillDeferralScheduleTables<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralScheduleTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleTables`.
   * @param dataAreaId Key property. See {@link SubBillDeferralScheduleTables.dataAreaId}.
   * @param deferralScheduleNumber Key property. See {@link SubBillDeferralScheduleTables.deferralScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleTables`.
   */
  delete(
    dataAreaId: string,
    deferralScheduleNumber: string
  ): DeleteRequestBuilder<SubBillDeferralScheduleTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralScheduleTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralScheduleTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralScheduleTables<T>
  ): DeleteRequestBuilder<SubBillDeferralScheduleTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deferralScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillDeferralScheduleTables<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralScheduleTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralScheduleTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeferralScheduleNumber: deferralScheduleNumber!
          }
    );
  }
}

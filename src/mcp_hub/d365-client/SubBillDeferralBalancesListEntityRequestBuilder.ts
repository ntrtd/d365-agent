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
import { SubBillDeferralBalancesListEntity } from './SubBillDeferralBalancesListEntity';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralBalancesListEntity} entity.
 */
export class SubBillDeferralBalancesListEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralBalancesListEntity<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralBalancesListEntity` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralBalancesListEntity` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralBalancesListEntity<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralBalancesListEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralBalancesListEntity`.
   */
  create(
    entity: SubBillDeferralBalancesListEntity<T>
  ): CreateRequestBuilder<SubBillDeferralBalancesListEntity<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralBalancesListEntity` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralBalancesListEntity.dataAreaId}.
   * @param deferralScheduleNumber Key property. See {@link SubBillDeferralBalancesListEntity.deferralScheduleNumber}.
   * @param itemNumber Key property. See {@link SubBillDeferralBalancesListEntity.itemNumber}.
   * @param billingScheduleNumber Key property. See {@link SubBillDeferralBalancesListEntity.billingScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralBalancesListEntity` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deferralScheduleNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    billingScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralBalancesListEntity<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DeferralScheduleNumber: deferralScheduleNumber,
        ItemNumber: itemNumber,
        BillingScheduleNumber: billingScheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralBalancesListEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralBalancesListEntity`.
   */
  update(
    entity: SubBillDeferralBalancesListEntity<T>
  ): UpdateRequestBuilder<SubBillDeferralBalancesListEntity<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralBalancesListEntity`.
   * @param dataAreaId Key property. See {@link SubBillDeferralBalancesListEntity.dataAreaId}.
   * @param deferralScheduleNumber Key property. See {@link SubBillDeferralBalancesListEntity.deferralScheduleNumber}.
   * @param itemNumber Key property. See {@link SubBillDeferralBalancesListEntity.itemNumber}.
   * @param billingScheduleNumber Key property. See {@link SubBillDeferralBalancesListEntity.billingScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralBalancesListEntity`.
   */
  delete(
    dataAreaId: string,
    deferralScheduleNumber: string,
    itemNumber: string,
    billingScheduleNumber: string
  ): DeleteRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralBalancesListEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralBalancesListEntity` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralBalancesListEntity<T>
  ): DeleteRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deferralScheduleNumber?: string,
    itemNumber?: string,
    billingScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillDeferralBalancesListEntity<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralBalancesListEntity<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralBalancesListEntity
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeferralScheduleNumber: deferralScheduleNumber!,
            ItemNumber: itemNumber!,
            BillingScheduleNumber: billingScheduleNumber!
          }
    );
  }
}

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
import { SubBillBillingScheduleLineRevenueSplitUpdates } from './SubBillBillingScheduleLineRevenueSplitUpdates';

/**
 * Request builder class for operations supported on the {@link SubBillBillingScheduleLineRevenueSplitUpdates} entity.
 */
export class SubBillBillingScheduleLineRevenueSplitUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillBillingScheduleLineRevenueSplitUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillBillingScheduleLineRevenueSplitUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillBillingScheduleLineRevenueSplitUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubBillBillingScheduleLineRevenueSplitUpdates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubBillBillingScheduleLineRevenueSplitUpdates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillBillingScheduleLineRevenueSplitUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates`.
   */
  create(
    entity: SubBillBillingScheduleLineRevenueSplitUpdates<T>
  ): CreateRequestBuilder<SubBillBillingScheduleLineRevenueSplitUpdates<T>, T> {
    return new CreateRequestBuilder<
      SubBillBillingScheduleLineRevenueSplitUpdates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillBillingScheduleLineRevenueSplitUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.dataAreaId}.
   * @param billingScheduleNumber Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.billingScheduleNumber}.
   * @param parentLineNum Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.parentLineNum}.
   * @param childItemId Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.childItemId}.
   * @returns A request builder for creating requests to retrieve one `SubBillBillingScheduleLineRevenueSplitUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingScheduleNumber: DeserializedType<T, 'Edm.String'>,
    parentLineNum: DeserializedType<T, 'Edm.Decimal'>,
    childItemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SubBillBillingScheduleLineRevenueSplitUpdates<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SubBillBillingScheduleLineRevenueSplitUpdates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BillingScheduleNumber: billingScheduleNumber,
      ParentLineNum: parentLineNum,
      ChildItemId: childItemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates`.
   */
  update(
    entity: SubBillBillingScheduleLineRevenueSplitUpdates<T>
  ): UpdateRequestBuilder<SubBillBillingScheduleLineRevenueSplitUpdates<T>, T> {
    return new UpdateRequestBuilder<
      SubBillBillingScheduleLineRevenueSplitUpdates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates`.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.dataAreaId}.
   * @param billingScheduleNumber Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.billingScheduleNumber}.
   * @param parentLineNum Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.parentLineNum}.
   * @param childItemId Key property. See {@link SubBillBillingScheduleLineRevenueSplitUpdates.childItemId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates`.
   */
  delete(
    dataAreaId: string,
    billingScheduleNumber: string,
    parentLineNum: BigNumber,
    childItemId: string
  ): DeleteRequestBuilder<SubBillBillingScheduleLineRevenueSplitUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleLineRevenueSplitUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillBillingScheduleLineRevenueSplitUpdates<T>
  ): DeleteRequestBuilder<SubBillBillingScheduleLineRevenueSplitUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingScheduleNumber?: string,
    parentLineNum?: BigNumber,
    childItemId?: string
  ): DeleteRequestBuilder<SubBillBillingScheduleLineRevenueSplitUpdates<T>, T> {
    return new DeleteRequestBuilder<
      SubBillBillingScheduleLineRevenueSplitUpdates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SubBillBillingScheduleLineRevenueSplitUpdates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingScheduleNumber: billingScheduleNumber!,
            ParentLineNum: parentLineNum!,
            ChildItemId: childItemId!
          }
    );
  }
}

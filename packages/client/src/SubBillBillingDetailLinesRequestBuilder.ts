/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SubBillBillingDetailLines } from './SubBillBillingDetailLines';

/**
 * Request builder class for operations supported on the {@link SubBillBillingDetailLines} entity.
 */
export class SubBillBillingDetailLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillBillingDetailLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillBillingDetailLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillBillingDetailLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillBillingDetailLines<T>, T> {
    return new GetAllRequestBuilder<SubBillBillingDetailLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillBillingDetailLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillBillingDetailLines`.
   */
  create(
    entity: SubBillBillingDetailLines<T>
  ): CreateRequestBuilder<SubBillBillingDetailLines<T>, T> {
    return new CreateRequestBuilder<SubBillBillingDetailLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillBillingDetailLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillBillingDetailLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingDetailLines.scheduleNumber}.
   * @param itemNumber Key property. See {@link SubBillBillingDetailLines.itemNumber}.
   * @param usageIdentifier Key property. See {@link SubBillBillingDetailLines.usageIdentifier}.
   * @param billingStartDate Key property. See {@link SubBillBillingDetailLines.billingStartDate}.
   * @param billingEndDate Key property. See {@link SubBillBillingDetailLines.billingEndDate}.
   * @returns A request builder for creating requests to retrieve one `SubBillBillingDetailLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    usageIdentifier: DeserializedType<T, 'Edm.String'>,
    billingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    billingEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SubBillBillingDetailLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillBillingDetailLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber,
        ItemNumber: itemNumber,
        UsageIdentifier: usageIdentifier,
        BillingStartDate: billingStartDate,
        BillingEndDate: billingEndDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillBillingDetailLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillBillingDetailLines`.
   */
  update(
    entity: SubBillBillingDetailLines<T>
  ): UpdateRequestBuilder<SubBillBillingDetailLines<T>, T> {
    return new UpdateRequestBuilder<SubBillBillingDetailLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingDetailLines`.
   * @param dataAreaId Key property. See {@link SubBillBillingDetailLines.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingDetailLines.scheduleNumber}.
   * @param itemNumber Key property. See {@link SubBillBillingDetailLines.itemNumber}.
   * @param usageIdentifier Key property. See {@link SubBillBillingDetailLines.usageIdentifier}.
   * @param billingStartDate Key property. See {@link SubBillBillingDetailLines.billingStartDate}.
   * @param billingEndDate Key property. See {@link SubBillBillingDetailLines.billingEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingDetailLines`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string,
    itemNumber: string,
    usageIdentifier: string,
    billingStartDate: Moment,
    billingEndDate: Moment
  ): DeleteRequestBuilder<SubBillBillingDetailLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingDetailLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingDetailLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillBillingDetailLines<T>
  ): DeleteRequestBuilder<SubBillBillingDetailLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string,
    itemNumber?: string,
    usageIdentifier?: string,
    billingStartDate?: Moment,
    billingEndDate?: Moment
  ): DeleteRequestBuilder<SubBillBillingDetailLines<T>, T> {
    return new DeleteRequestBuilder<SubBillBillingDetailLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillBillingDetailLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!,
            ItemNumber: itemNumber!,
            UsageIdentifier: usageIdentifier!,
            BillingStartDate: billingStartDate!,
            BillingEndDate: billingEndDate!
          }
    );
  }
}

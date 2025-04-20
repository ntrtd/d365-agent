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
import { SubBillBillingScheduleTables } from './SubBillBillingScheduleTables';

/**
 * Request builder class for operations supported on the {@link SubBillBillingScheduleTables} entity.
 */
export class SubBillBillingScheduleTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillBillingScheduleTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillBillingScheduleTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillBillingScheduleTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillBillingScheduleTables<T>, T> {
    return new GetAllRequestBuilder<SubBillBillingScheduleTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillBillingScheduleTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillBillingScheduleTables`.
   */
  create(
    entity: SubBillBillingScheduleTables<T>
  ): CreateRequestBuilder<SubBillBillingScheduleTables<T>, T> {
    return new CreateRequestBuilder<SubBillBillingScheduleTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillBillingScheduleTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleTables.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingScheduleTables.scheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillBillingScheduleTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillBillingScheduleTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillBillingScheduleTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleNumber: scheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillBillingScheduleTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillBillingScheduleTables`.
   */
  update(
    entity: SubBillBillingScheduleTables<T>
  ): UpdateRequestBuilder<SubBillBillingScheduleTables<T>, T> {
    return new UpdateRequestBuilder<SubBillBillingScheduleTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleTables`.
   * @param dataAreaId Key property. See {@link SubBillBillingScheduleTables.dataAreaId}.
   * @param scheduleNumber Key property. See {@link SubBillBillingScheduleTables.scheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleTables`.
   */
  delete(
    dataAreaId: string,
    scheduleNumber: string
  ): DeleteRequestBuilder<SubBillBillingScheduleTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillBillingScheduleTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillBillingScheduleTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillBillingScheduleTables<T>
  ): DeleteRequestBuilder<SubBillBillingScheduleTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleNumber?: string
  ): DeleteRequestBuilder<SubBillBillingScheduleTables<T>, T> {
    return new DeleteRequestBuilder<SubBillBillingScheduleTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillBillingScheduleTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleNumber: scheduleNumber!
          }
    );
  }
}

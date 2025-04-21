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
import { SubBillMassTerminationRemovalLines } from './SubBillMassTerminationRemovalLines';

/**
 * Request builder class for operations supported on the {@link SubBillMassTerminationRemovalLines} entity.
 */
export class SubBillMassTerminationRemovalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillMassTerminationRemovalLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillMassTerminationRemovalLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillMassTerminationRemovalLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillMassTerminationRemovalLines<T>, T> {
    return new GetAllRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillMassTerminationRemovalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillMassTerminationRemovalLines`.
   */
  create(
    entity: SubBillMassTerminationRemovalLines<T>
  ): CreateRequestBuilder<SubBillMassTerminationRemovalLines<T>, T> {
    return new CreateRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillMassTerminationRemovalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationRemovalLines.dataAreaId}.
   * @param billingScheduleNumber Key property. See {@link SubBillMassTerminationRemovalLines.billingScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillMassTerminationRemovalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillMassTerminationRemovalLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BillingScheduleNumber: billingScheduleNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillMassTerminationRemovalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillMassTerminationRemovalLines`.
   */
  update(
    entity: SubBillMassTerminationRemovalLines<T>
  ): UpdateRequestBuilder<SubBillMassTerminationRemovalLines<T>, T> {
    return new UpdateRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationRemovalLines`.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationRemovalLines.dataAreaId}.
   * @param billingScheduleNumber Key property. See {@link SubBillMassTerminationRemovalLines.billingScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationRemovalLines`.
   */
  delete(
    dataAreaId: string,
    billingScheduleNumber: string
  ): DeleteRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationRemovalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationRemovalLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillMassTerminationRemovalLines<T>
  ): DeleteRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillMassTerminationRemovalLines<T>, T> {
    return new DeleteRequestBuilder<SubBillMassTerminationRemovalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillMassTerminationRemovalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingScheduleNumber: billingScheduleNumber!
          }
    );
  }
}

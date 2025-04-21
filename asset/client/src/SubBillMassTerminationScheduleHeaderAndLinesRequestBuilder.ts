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
import { SubBillMassTerminationScheduleHeaderAndLines } from './SubBillMassTerminationScheduleHeaderAndLines';

/**
 * Request builder class for operations supported on the {@link SubBillMassTerminationScheduleHeaderAndLines} entity.
 */
export class SubBillMassTerminationScheduleHeaderAndLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillMassTerminationScheduleHeaderAndLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillMassTerminationScheduleHeaderAndLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillMassTerminationScheduleHeaderAndLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    SubBillMassTerminationScheduleHeaderAndLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SubBillMassTerminationScheduleHeaderAndLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillMassTerminationScheduleHeaderAndLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillMassTerminationScheduleHeaderAndLines`.
   */
  create(
    entity: SubBillMassTerminationScheduleHeaderAndLines<T>
  ): CreateRequestBuilder<SubBillMassTerminationScheduleHeaderAndLines<T>, T> {
    return new CreateRequestBuilder<
      SubBillMassTerminationScheduleHeaderAndLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SubBillMassTerminationScheduleHeaderAndLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationScheduleHeaderAndLines.dataAreaId}.
   * @param billingScheduleNumber Key property. See {@link SubBillMassTerminationScheduleHeaderAndLines.billingScheduleNumber}.
   * @returns A request builder for creating requests to retrieve one `SubBillMassTerminationScheduleHeaderAndLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billingScheduleNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SubBillMassTerminationScheduleHeaderAndLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SubBillMassTerminationScheduleHeaderAndLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BillingScheduleNumber: billingScheduleNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillMassTerminationScheduleHeaderAndLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillMassTerminationScheduleHeaderAndLines`.
   */
  update(
    entity: SubBillMassTerminationScheduleHeaderAndLines<T>
  ): UpdateRequestBuilder<SubBillMassTerminationScheduleHeaderAndLines<T>, T> {
    return new UpdateRequestBuilder<
      SubBillMassTerminationScheduleHeaderAndLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationScheduleHeaderAndLines`.
   * @param dataAreaId Key property. See {@link SubBillMassTerminationScheduleHeaderAndLines.dataAreaId}.
   * @param billingScheduleNumber Key property. See {@link SubBillMassTerminationScheduleHeaderAndLines.billingScheduleNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationScheduleHeaderAndLines`.
   */
  delete(
    dataAreaId: string,
    billingScheduleNumber: string
  ): DeleteRequestBuilder<SubBillMassTerminationScheduleHeaderAndLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillMassTerminationScheduleHeaderAndLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMassTerminationScheduleHeaderAndLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillMassTerminationScheduleHeaderAndLines<T>
  ): DeleteRequestBuilder<SubBillMassTerminationScheduleHeaderAndLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billingScheduleNumber?: string
  ): DeleteRequestBuilder<SubBillMassTerminationScheduleHeaderAndLines<T>, T> {
    return new DeleteRequestBuilder<
      SubBillMassTerminationScheduleHeaderAndLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillMassTerminationScheduleHeaderAndLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillingScheduleNumber: billingScheduleNumber!
          }
    );
  }
}

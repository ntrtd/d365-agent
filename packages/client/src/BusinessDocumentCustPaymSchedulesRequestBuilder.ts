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
import { BusinessDocumentCustPaymSchedules } from './BusinessDocumentCustPaymSchedules';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentCustPaymSchedules} entity.
 */
export class BusinessDocumentCustPaymSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentCustPaymSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentCustPaymSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentCustPaymSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentCustPaymSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentCustPaymSchedules`.
   */
  create(
    entity: BusinessDocumentCustPaymSchedules<T>
  ): CreateRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentCustPaymSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentCustPaymSchedules.dataAreaId}.
   * @param scheduleLineRecId Key property. See {@link BusinessDocumentCustPaymSchedules.scheduleLineRecId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentCustPaymSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    scheduleLineRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ScheduleLineRecId: scheduleLineRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentCustPaymSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentCustPaymSchedules`.
   */
  update(
    entity: BusinessDocumentCustPaymSchedules<T>
  ): UpdateRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentCustPaymSchedules`.
   * @param dataAreaId Key property. See {@link BusinessDocumentCustPaymSchedules.dataAreaId}.
   * @param scheduleLineRecId Key property. See {@link BusinessDocumentCustPaymSchedules.scheduleLineRecId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentCustPaymSchedules`.
   */
  delete(
    dataAreaId: string,
    scheduleLineRecId: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentCustPaymSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentCustPaymSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentCustPaymSchedules<T>
  ): DeleteRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    scheduleLineRecId?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentCustPaymSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentCustPaymSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ScheduleLineRecId: scheduleLineRecId!
          }
    );
  }
}

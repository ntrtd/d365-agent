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
import { ElectronicTimecardActivityRegistrationHeaders } from './ElectronicTimecardActivityRegistrationHeaders';

/**
 * Request builder class for operations supported on the {@link ElectronicTimecardActivityRegistrationHeaders} entity.
 */
export class ElectronicTimecardActivityRegistrationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicTimecardActivityRegistrationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicTimecardActivityRegistrationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicTimecardActivityRegistrationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    ElectronicTimecardActivityRegistrationHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ElectronicTimecardActivityRegistrationHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ElectronicTimecardActivityRegistrationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicTimecardActivityRegistrationHeaders`.
   */
  create(
    entity: ElectronicTimecardActivityRegistrationHeaders<T>
  ): CreateRequestBuilder<ElectronicTimecardActivityRegistrationHeaders<T>, T> {
    return new CreateRequestBuilder<
      ElectronicTimecardActivityRegistrationHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ElectronicTimecardActivityRegistrationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicTimecardActivityRegistrationHeaders.dataAreaId}.
   * @param timeProfileDate Key property. See {@link ElectronicTimecardActivityRegistrationHeaders.timeProfileDate}.
   * @param workerPersonnelNumber Key property. See {@link ElectronicTimecardActivityRegistrationHeaders.workerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `ElectronicTimecardActivityRegistrationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ElectronicTimecardActivityRegistrationHeaders<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ElectronicTimecardActivityRegistrationHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TimeProfileDate: timeProfileDate,
      WorkerPersonnelNumber: workerPersonnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicTimecardActivityRegistrationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicTimecardActivityRegistrationHeaders`.
   */
  update(
    entity: ElectronicTimecardActivityRegistrationHeaders<T>
  ): UpdateRequestBuilder<ElectronicTimecardActivityRegistrationHeaders<T>, T> {
    return new UpdateRequestBuilder<
      ElectronicTimecardActivityRegistrationHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicTimecardActivityRegistrationHeaders`.
   * @param dataAreaId Key property. See {@link ElectronicTimecardActivityRegistrationHeaders.dataAreaId}.
   * @param timeProfileDate Key property. See {@link ElectronicTimecardActivityRegistrationHeaders.timeProfileDate}.
   * @param workerPersonnelNumber Key property. See {@link ElectronicTimecardActivityRegistrationHeaders.workerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicTimecardActivityRegistrationHeaders`.
   */
  delete(
    dataAreaId: string,
    timeProfileDate: Moment,
    workerPersonnelNumber: string
  ): DeleteRequestBuilder<ElectronicTimecardActivityRegistrationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicTimecardActivityRegistrationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicTimecardActivityRegistrationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicTimecardActivityRegistrationHeaders<T>
  ): DeleteRequestBuilder<ElectronicTimecardActivityRegistrationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timeProfileDate?: Moment,
    workerPersonnelNumber?: string
  ): DeleteRequestBuilder<ElectronicTimecardActivityRegistrationHeaders<T>, T> {
    return new DeleteRequestBuilder<
      ElectronicTimecardActivityRegistrationHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ElectronicTimecardActivityRegistrationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimeProfileDate: timeProfileDate!,
            WorkerPersonnelNumber: workerPersonnelNumber!
          }
    );
  }
}

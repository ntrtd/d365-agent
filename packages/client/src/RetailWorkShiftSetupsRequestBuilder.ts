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
import { RetailWorkShiftSetups } from './RetailWorkShiftSetups';

/**
 * Request builder class for operations supported on the {@link RetailWorkShiftSetups} entity.
 */
export class RetailWorkShiftSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailWorkShiftSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailWorkShiftSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailWorkShiftSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailWorkShiftSetups<T>, T> {
    return new GetAllRequestBuilder<RetailWorkShiftSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailWorkShiftSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailWorkShiftSetups`.
   */
  create(
    entity: RetailWorkShiftSetups<T>
  ): CreateRequestBuilder<RetailWorkShiftSetups<T>, T> {
    return new CreateRequestBuilder<RetailWorkShiftSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailWorkShiftSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailWorkShiftSetups.dataAreaId}.
   * @param workShiftId Key property. See {@link RetailWorkShiftSetups.workShiftId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailWorkShiftSetups.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailWorkShiftSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workShiftId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailWorkShiftSetups<T>, T> {
    return new GetByKeyRequestBuilder<RetailWorkShiftSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkShiftId: workShiftId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailWorkShiftSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailWorkShiftSetups`.
   */
  update(
    entity: RetailWorkShiftSetups<T>
  ): UpdateRequestBuilder<RetailWorkShiftSetups<T>, T> {
    return new UpdateRequestBuilder<RetailWorkShiftSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailWorkShiftSetups`.
   * @param dataAreaId Key property. See {@link RetailWorkShiftSetups.dataAreaId}.
   * @param workShiftId Key property. See {@link RetailWorkShiftSetups.workShiftId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailWorkShiftSetups.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailWorkShiftSetups`.
   */
  delete(
    dataAreaId: string,
    workShiftId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailWorkShiftSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailWorkShiftSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailWorkShiftSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailWorkShiftSetups<T>
  ): DeleteRequestBuilder<RetailWorkShiftSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workShiftId?: string,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailWorkShiftSetups<T>, T> {
    return new DeleteRequestBuilder<RetailWorkShiftSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailWorkShiftSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkShiftId: workShiftId!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}

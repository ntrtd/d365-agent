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
import { HcmWorkerGroups } from './HcmWorkerGroups';

/**
 * Request builder class for operations supported on the {@link HcmWorkerGroups} entity.
 */
export class HcmWorkerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmWorkerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `HcmWorkerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `HcmWorkerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<HcmWorkerGroups<T>, T> {
    return new GetAllRequestBuilder<HcmWorkerGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HcmWorkerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmWorkerGroups`.
   */
  create(
    entity: HcmWorkerGroups<T>
  ): CreateRequestBuilder<HcmWorkerGroups<T>, T> {
    return new CreateRequestBuilder<HcmWorkerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmWorkerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link HcmWorkerGroups.dataAreaId}.
   * @param employeeGroupId Key property. See {@link HcmWorkerGroups.employeeGroupId}.
   * @returns A request builder for creating requests to retrieve one `HcmWorkerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    employeeGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HcmWorkerGroups<T>, T> {
    return new GetByKeyRequestBuilder<HcmWorkerGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      EmployeeGroupId: employeeGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `HcmWorkerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmWorkerGroups`.
   */
  update(
    entity: HcmWorkerGroups<T>
  ): UpdateRequestBuilder<HcmWorkerGroups<T>, T> {
    return new UpdateRequestBuilder<HcmWorkerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerGroups`.
   * @param dataAreaId Key property. See {@link HcmWorkerGroups.dataAreaId}.
   * @param employeeGroupId Key property. See {@link HcmWorkerGroups.employeeGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerGroups`.
   */
  delete(
    dataAreaId: string,
    employeeGroupId: string
  ): DeleteRequestBuilder<HcmWorkerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: HcmWorkerGroups<T>
  ): DeleteRequestBuilder<HcmWorkerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    employeeGroupId?: string
  ): DeleteRequestBuilder<HcmWorkerGroups<T>, T> {
    return new DeleteRequestBuilder<HcmWorkerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof HcmWorkerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EmployeeGroupId: employeeGroupId!
          }
    );
  }
}

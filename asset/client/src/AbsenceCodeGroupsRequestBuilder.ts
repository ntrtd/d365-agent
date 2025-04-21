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
import { AbsenceCodeGroups } from './AbsenceCodeGroups';

/**
 * Request builder class for operations supported on the {@link AbsenceCodeGroups} entity.
 */
export class AbsenceCodeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AbsenceCodeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AbsenceCodeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AbsenceCodeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AbsenceCodeGroups<T>, T> {
    return new GetAllRequestBuilder<AbsenceCodeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AbsenceCodeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AbsenceCodeGroups`.
   */
  create(
    entity: AbsenceCodeGroups<T>
  ): CreateRequestBuilder<AbsenceCodeGroups<T>, T> {
    return new CreateRequestBuilder<AbsenceCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AbsenceCodeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AbsenceCodeGroups.dataAreaId}.
   * @param absenceGroup Key property. See {@link AbsenceCodeGroups.absenceGroup}.
   * @returns A request builder for creating requests to retrieve one `AbsenceCodeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    absenceGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AbsenceCodeGroups<T>, T> {
    return new GetByKeyRequestBuilder<AbsenceCodeGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AbsenceGroup: absenceGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AbsenceCodeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AbsenceCodeGroups`.
   */
  update(
    entity: AbsenceCodeGroups<T>
  ): UpdateRequestBuilder<AbsenceCodeGroups<T>, T> {
    return new UpdateRequestBuilder<AbsenceCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AbsenceCodeGroups`.
   * @param dataAreaId Key property. See {@link AbsenceCodeGroups.dataAreaId}.
   * @param absenceGroup Key property. See {@link AbsenceCodeGroups.absenceGroup}.
   * @returns A request builder for creating requests that delete an entity of type `AbsenceCodeGroups`.
   */
  delete(
    dataAreaId: string,
    absenceGroup: string
  ): DeleteRequestBuilder<AbsenceCodeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AbsenceCodeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AbsenceCodeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AbsenceCodeGroups<T>
  ): DeleteRequestBuilder<AbsenceCodeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    absenceGroup?: string
  ): DeleteRequestBuilder<AbsenceCodeGroups<T>, T> {
    return new DeleteRequestBuilder<AbsenceCodeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AbsenceCodeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AbsenceGroup: absenceGroup!
          }
    );
  }
}

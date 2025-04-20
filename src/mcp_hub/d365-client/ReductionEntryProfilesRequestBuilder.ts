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
import { ReductionEntryProfiles } from './ReductionEntryProfiles';

/**
 * Request builder class for operations supported on the {@link ReductionEntryProfiles} entity.
 */
export class ReductionEntryProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReductionEntryProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `ReductionEntryProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `ReductionEntryProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<ReductionEntryProfiles<T>, T> {
    return new GetAllRequestBuilder<ReductionEntryProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReductionEntryProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReductionEntryProfiles`.
   */
  create(
    entity: ReductionEntryProfiles<T>
  ): CreateRequestBuilder<ReductionEntryProfiles<T>, T> {
    return new CreateRequestBuilder<ReductionEntryProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReductionEntryProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReductionEntryProfiles.dataAreaId}.
   * @param reductionEntryDocument Key property. See {@link ReductionEntryProfiles.reductionEntryDocument}.
   * @returns A request builder for creating requests to retrieve one `ReductionEntryProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reductionEntryDocument: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReductionEntryProfiles<T>, T> {
    return new GetByKeyRequestBuilder<ReductionEntryProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReductionEntryDocument: reductionEntryDocument
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReductionEntryProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReductionEntryProfiles`.
   */
  update(
    entity: ReductionEntryProfiles<T>
  ): UpdateRequestBuilder<ReductionEntryProfiles<T>, T> {
    return new UpdateRequestBuilder<ReductionEntryProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReductionEntryProfiles`.
   * @param dataAreaId Key property. See {@link ReductionEntryProfiles.dataAreaId}.
   * @param reductionEntryDocument Key property. See {@link ReductionEntryProfiles.reductionEntryDocument}.
   * @returns A request builder for creating requests that delete an entity of type `ReductionEntryProfiles`.
   */
  delete(
    dataAreaId: string,
    reductionEntryDocument: string
  ): DeleteRequestBuilder<ReductionEntryProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReductionEntryProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReductionEntryProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: ReductionEntryProfiles<T>
  ): DeleteRequestBuilder<ReductionEntryProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reductionEntryDocument?: string
  ): DeleteRequestBuilder<ReductionEntryProfiles<T>, T> {
    return new DeleteRequestBuilder<ReductionEntryProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReductionEntryProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReductionEntryDocument: reductionEntryDocument!
          }
    );
  }
}

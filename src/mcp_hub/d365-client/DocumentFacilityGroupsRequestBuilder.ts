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
import { DocumentFacilityGroups } from './DocumentFacilityGroups';

/**
 * Request builder class for operations supported on the {@link DocumentFacilityGroups} entity.
 */
export class DocumentFacilityGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentFacilityGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentFacilityGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentFacilityGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentFacilityGroups<T>, T> {
    return new GetAllRequestBuilder<DocumentFacilityGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentFacilityGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentFacilityGroups`.
   */
  create(
    entity: DocumentFacilityGroups<T>
  ): CreateRequestBuilder<DocumentFacilityGroups<T>, T> {
    return new CreateRequestBuilder<DocumentFacilityGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentFacilityGroups` entity based on its keys.
   * @param facilityGroup Key property. See {@link DocumentFacilityGroups.facilityGroup}.
   * @returns A request builder for creating requests to retrieve one `DocumentFacilityGroups` entity based on its keys.
   */
  getByKey(
    facilityGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentFacilityGroups<T>, T> {
    return new GetByKeyRequestBuilder<DocumentFacilityGroups<T>, T>(
      this.entityApi,
      { FacilityGroup: facilityGroup }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentFacilityGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentFacilityGroups`.
   */
  update(
    entity: DocumentFacilityGroups<T>
  ): UpdateRequestBuilder<DocumentFacilityGroups<T>, T> {
    return new UpdateRequestBuilder<DocumentFacilityGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentFacilityGroups`.
   * @param facilityGroup Key property. See {@link DocumentFacilityGroups.facilityGroup}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFacilityGroups`.
   */
  delete(
    facilityGroup: string
  ): DeleteRequestBuilder<DocumentFacilityGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentFacilityGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentFacilityGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentFacilityGroups<T>
  ): DeleteRequestBuilder<DocumentFacilityGroups<T>, T>;
  delete(
    facilityGroupOrEntity: any
  ): DeleteRequestBuilder<DocumentFacilityGroups<T>, T> {
    return new DeleteRequestBuilder<DocumentFacilityGroups<T>, T>(
      this.entityApi,
      facilityGroupOrEntity instanceof DocumentFacilityGroups
        ? facilityGroupOrEntity
        : { FacilityGroup: facilityGroupOrEntity! }
    );
  }
}

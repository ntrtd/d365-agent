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
import { RetailStoreSections } from './RetailStoreSections';

/**
 * Request builder class for operations supported on the {@link RetailStoreSections} entity.
 */
export class RetailStoreSectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreSections<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreSections` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreSections` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreSections<T>, T> {
    return new GetAllRequestBuilder<RetailStoreSections<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailStoreSections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreSections`.
   */
  create(
    entity: RetailStoreSections<T>
  ): CreateRequestBuilder<RetailStoreSections<T>, T> {
    return new CreateRequestBuilder<RetailStoreSections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreSections` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreSections.dataAreaId}.
   * @param sectionId Key property. See {@link RetailStoreSections.sectionId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreSections.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreSections` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sectionId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreSections<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreSections<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SectionId: sectionId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreSections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreSections`.
   */
  update(
    entity: RetailStoreSections<T>
  ): UpdateRequestBuilder<RetailStoreSections<T>, T> {
    return new UpdateRequestBuilder<RetailStoreSections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreSections`.
   * @param dataAreaId Key property. See {@link RetailStoreSections.dataAreaId}.
   * @param sectionId Key property. See {@link RetailStoreSections.sectionId}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreSections.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreSections`.
   */
  delete(
    dataAreaId: string,
    sectionId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<RetailStoreSections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreSections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreSections` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreSections<T>
  ): DeleteRequestBuilder<RetailStoreSections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sectionId?: string,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailStoreSections<T>, T> {
    return new DeleteRequestBuilder<RetailStoreSections<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreSections
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SectionId: sectionId!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}

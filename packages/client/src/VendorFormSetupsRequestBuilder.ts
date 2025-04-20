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
import { VendorFormSetups } from './VendorFormSetups';

/**
 * Request builder class for operations supported on the {@link VendorFormSetups} entity.
 */
export class VendorFormSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorFormSetups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorFormSetups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorFormSetups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorFormSetups<T>, T> {
    return new GetAllRequestBuilder<VendorFormSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorFormSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorFormSetups`.
   */
  create(
    entity: VendorFormSetups<T>
  ): CreateRequestBuilder<VendorFormSetups<T>, T> {
    return new CreateRequestBuilder<VendorFormSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorFormSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorFormSetups.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `VendorFormSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorFormSetups<T>, T> {
    return new GetByKeyRequestBuilder<VendorFormSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorFormSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorFormSetups`.
   */
  update(
    entity: VendorFormSetups<T>
  ): UpdateRequestBuilder<VendorFormSetups<T>, T> {
    return new UpdateRequestBuilder<VendorFormSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorFormSetups`.
   * @param dataAreaId Key property. See {@link VendorFormSetups.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorFormSetups`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<VendorFormSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorFormSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorFormSetups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorFormSetups<T>
  ): DeleteRequestBuilder<VendorFormSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<VendorFormSetups<T>, T> {
    return new DeleteRequestBuilder<VendorFormSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorFormSetups
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}

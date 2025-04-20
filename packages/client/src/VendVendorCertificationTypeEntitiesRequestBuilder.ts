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
import { VendVendorCertificationTypeEntities } from './VendVendorCertificationTypeEntities';

/**
 * Request builder class for operations supported on the {@link VendVendorCertificationTypeEntities} entity.
 */
export class VendVendorCertificationTypeEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendVendorCertificationTypeEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendVendorCertificationTypeEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendVendorCertificationTypeEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendVendorCertificationTypeEntities<T>, T> {
    return new GetAllRequestBuilder<VendVendorCertificationTypeEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendVendorCertificationTypeEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendVendorCertificationTypeEntities`.
   */
  create(
    entity: VendVendorCertificationTypeEntities<T>
  ): CreateRequestBuilder<VendVendorCertificationTypeEntities<T>, T> {
    return new CreateRequestBuilder<VendVendorCertificationTypeEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendVendorCertificationTypeEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendVendorCertificationTypeEntities.dataAreaId}.
   * @param name Key property. See {@link VendVendorCertificationTypeEntities.name}.
   * @returns A request builder for creating requests to retrieve one `VendVendorCertificationTypeEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendVendorCertificationTypeEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      VendVendorCertificationTypeEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendVendorCertificationTypeEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendVendorCertificationTypeEntities`.
   */
  update(
    entity: VendVendorCertificationTypeEntities<T>
  ): UpdateRequestBuilder<VendVendorCertificationTypeEntities<T>, T> {
    return new UpdateRequestBuilder<VendVendorCertificationTypeEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendVendorCertificationTypeEntities`.
   * @param dataAreaId Key property. See {@link VendVendorCertificationTypeEntities.dataAreaId}.
   * @param name Key property. See {@link VendVendorCertificationTypeEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `VendVendorCertificationTypeEntities`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<VendVendorCertificationTypeEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendVendorCertificationTypeEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendVendorCertificationTypeEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendVendorCertificationTypeEntities<T>
  ): DeleteRequestBuilder<VendVendorCertificationTypeEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<VendVendorCertificationTypeEntities<T>, T> {
    return new DeleteRequestBuilder<VendVendorCertificationTypeEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendVendorCertificationTypeEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}

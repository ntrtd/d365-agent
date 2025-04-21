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
import { VendorReasons } from './VendorReasons';

/**
 * Request builder class for operations supported on the {@link VendorReasons} entity.
 */
export class VendorReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorReasons<T>, T> {
  /**
   * Returns a request builder for querying all `VendorReasons` entities.
   * @returns A request builder for creating requests to retrieve all `VendorReasons` entities.
   */
  getAll(): GetAllRequestBuilder<VendorReasons<T>, T> {
    return new GetAllRequestBuilder<VendorReasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorReasons`.
   */
  create(entity: VendorReasons<T>): CreateRequestBuilder<VendorReasons<T>, T> {
    return new CreateRequestBuilder<VendorReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorReasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorReasons.dataAreaId}.
   * @param reasonCode Key property. See {@link VendorReasons.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `VendorReasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorReasons<T>, T> {
    return new GetByKeyRequestBuilder<VendorReasons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReasonCode: reasonCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorReasons`.
   */
  update(entity: VendorReasons<T>): UpdateRequestBuilder<VendorReasons<T>, T> {
    return new UpdateRequestBuilder<VendorReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorReasons`.
   * @param dataAreaId Key property. See {@link VendorReasons.dataAreaId}.
   * @param reasonCode Key property. See {@link VendorReasons.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `VendorReasons`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<VendorReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorReasons` by taking the entity as a parameter.
   */
  delete(entity: VendorReasons<T>): DeleteRequestBuilder<VendorReasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<VendorReasons<T>, T> {
    return new DeleteRequestBuilder<VendorReasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorReasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}

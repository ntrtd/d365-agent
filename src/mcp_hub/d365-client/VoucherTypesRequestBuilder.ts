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
import { VoucherTypes } from './VoucherTypes';

/**
 * Request builder class for operations supported on the {@link VoucherTypes} entity.
 */
export class VoucherTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoucherTypes<T>, T> {
  /**
   * Returns a request builder for querying all `VoucherTypes` entities.
   * @returns A request builder for creating requests to retrieve all `VoucherTypes` entities.
   */
  getAll(): GetAllRequestBuilder<VoucherTypes<T>, T> {
    return new GetAllRequestBuilder<VoucherTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VoucherTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoucherTypes`.
   */
  create(entity: VoucherTypes<T>): CreateRequestBuilder<VoucherTypes<T>, T> {
    return new CreateRequestBuilder<VoucherTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VoucherTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoucherTypes.dataAreaId}.
   * @param voucherType Key property. See {@link VoucherTypes.voucherType}.
   * @returns A request builder for creating requests to retrieve one `VoucherTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucherType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoucherTypes<T>, T> {
    return new GetByKeyRequestBuilder<VoucherTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VoucherType: voucherType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VoucherTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoucherTypes`.
   */
  update(entity: VoucherTypes<T>): UpdateRequestBuilder<VoucherTypes<T>, T> {
    return new UpdateRequestBuilder<VoucherTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VoucherTypes`.
   * @param dataAreaId Key property. See {@link VoucherTypes.dataAreaId}.
   * @param voucherType Key property. See {@link VoucherTypes.voucherType}.
   * @returns A request builder for creating requests that delete an entity of type `VoucherTypes`.
   */
  delete(
    dataAreaId: string,
    voucherType: string
  ): DeleteRequestBuilder<VoucherTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoucherTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoucherTypes` by taking the entity as a parameter.
   */
  delete(entity: VoucherTypes<T>): DeleteRequestBuilder<VoucherTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucherType?: string
  ): DeleteRequestBuilder<VoucherTypes<T>, T> {
    return new DeleteRequestBuilder<VoucherTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoucherTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VoucherType: voucherType!
          }
    );
  }
}

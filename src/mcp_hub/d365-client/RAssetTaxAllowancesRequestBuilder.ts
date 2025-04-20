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
import { RAssetTaxAllowances } from './RAssetTaxAllowances';

/**
 * Request builder class for operations supported on the {@link RAssetTaxAllowances} entity.
 */
export class RAssetTaxAllowancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetTaxAllowances<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetTaxAllowances` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetTaxAllowances` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetTaxAllowances<T>, T> {
    return new GetAllRequestBuilder<RAssetTaxAllowances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetTaxAllowances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetTaxAllowances`.
   */
  create(
    entity: RAssetTaxAllowances<T>
  ): CreateRequestBuilder<RAssetTaxAllowances<T>, T> {
    return new CreateRequestBuilder<RAssetTaxAllowances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetTaxAllowances` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetTaxAllowances.dataAreaId}.
   * @param privilege Key property. See {@link RAssetTaxAllowances.privilege}.
   * @returns A request builder for creating requests to retrieve one `RAssetTaxAllowances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    privilege: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetTaxAllowances<T>, T> {
    return new GetByKeyRequestBuilder<RAssetTaxAllowances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Privilege: privilege
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetTaxAllowances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetTaxAllowances`.
   */
  update(
    entity: RAssetTaxAllowances<T>
  ): UpdateRequestBuilder<RAssetTaxAllowances<T>, T> {
    return new UpdateRequestBuilder<RAssetTaxAllowances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetTaxAllowances`.
   * @param dataAreaId Key property. See {@link RAssetTaxAllowances.dataAreaId}.
   * @param privilege Key property. See {@link RAssetTaxAllowances.privilege}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetTaxAllowances`.
   */
  delete(
    dataAreaId: string,
    privilege: string
  ): DeleteRequestBuilder<RAssetTaxAllowances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetTaxAllowances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetTaxAllowances` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetTaxAllowances<T>
  ): DeleteRequestBuilder<RAssetTaxAllowances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    privilege?: string
  ): DeleteRequestBuilder<RAssetTaxAllowances<T>, T> {
    return new DeleteRequestBuilder<RAssetTaxAllowances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetTaxAllowances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Privilege: privilege!
          }
    );
  }
}

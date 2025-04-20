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
import { RAssetStandards } from './RAssetStandards';

/**
 * Request builder class for operations supported on the {@link RAssetStandards} entity.
 */
export class RAssetStandardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetStandards<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetStandards` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetStandards` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetStandards<T>, T> {
    return new GetAllRequestBuilder<RAssetStandards<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetStandards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetStandards`.
   */
  create(
    entity: RAssetStandards<T>
  ): CreateRequestBuilder<RAssetStandards<T>, T> {
    return new CreateRequestBuilder<RAssetStandards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetStandards` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetStandards.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetStandards.faInventoryNumber}.
   * @param valueModel Key property. See {@link RAssetStandards.valueModel}.
   * @returns A request builder for creating requests to retrieve one `RAssetStandards` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faInventoryNumber: DeserializedType<T, 'Edm.String'>,
    valueModel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetStandards<T>, T> {
    return new GetByKeyRequestBuilder<RAssetStandards<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAInventoryNumber: faInventoryNumber,
      ValueModel: valueModel
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetStandards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetStandards`.
   */
  update(
    entity: RAssetStandards<T>
  ): UpdateRequestBuilder<RAssetStandards<T>, T> {
    return new UpdateRequestBuilder<RAssetStandards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetStandards`.
   * @param dataAreaId Key property. See {@link RAssetStandards.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetStandards.faInventoryNumber}.
   * @param valueModel Key property. See {@link RAssetStandards.valueModel}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetStandards`.
   */
  delete(
    dataAreaId: string,
    faInventoryNumber: string,
    valueModel: string
  ): DeleteRequestBuilder<RAssetStandards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetStandards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetStandards` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetStandards<T>
  ): DeleteRequestBuilder<RAssetStandards<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faInventoryNumber?: string,
    valueModel?: string
  ): DeleteRequestBuilder<RAssetStandards<T>, T> {
    return new DeleteRequestBuilder<RAssetStandards<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetStandards
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAInventoryNumber: faInventoryNumber!,
            ValueModel: valueModel!
          }
    );
  }
}

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
import { BenefitsEssTileSetupBenefits } from './BenefitsEssTileSetupBenefits';

/**
 * Request builder class for operations supported on the {@link BenefitsEssTileSetupBenefits} entity.
 */
export class BenefitsEssTileSetupBenefitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsEssTileSetupBenefits<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsEssTileSetupBenefits` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsEssTileSetupBenefits` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsEssTileSetupBenefits<T>, T> {
    return new GetAllRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsEssTileSetupBenefits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsEssTileSetupBenefits`.
   */
  create(
    entity: BenefitsEssTileSetupBenefits<T>
  ): CreateRequestBuilder<BenefitsEssTileSetupBenefits<T>, T> {
    return new CreateRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsEssTileSetupBenefits` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsEssTileSetupBenefits.dataAreaId}.
   * @param tileId Key property. See {@link BenefitsEssTileSetupBenefits.tileId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsEssTileSetupBenefits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsEssTileSetupBenefits<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TileId: tileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsEssTileSetupBenefits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsEssTileSetupBenefits`.
   */
  update(
    entity: BenefitsEssTileSetupBenefits<T>
  ): UpdateRequestBuilder<BenefitsEssTileSetupBenefits<T>, T> {
    return new UpdateRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsEssTileSetupBenefits`.
   * @param dataAreaId Key property. See {@link BenefitsEssTileSetupBenefits.dataAreaId}.
   * @param tileId Key property. See {@link BenefitsEssTileSetupBenefits.tileId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEssTileSetupBenefits`.
   */
  delete(
    dataAreaId: string,
    tileId: string
  ): DeleteRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsEssTileSetupBenefits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEssTileSetupBenefits` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsEssTileSetupBenefits<T>
  ): DeleteRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tileId?: string
  ): DeleteRequestBuilder<BenefitsEssTileSetupBenefits<T>, T> {
    return new DeleteRequestBuilder<BenefitsEssTileSetupBenefits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsEssTileSetupBenefits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TileId: tileId!
          }
    );
  }
}
